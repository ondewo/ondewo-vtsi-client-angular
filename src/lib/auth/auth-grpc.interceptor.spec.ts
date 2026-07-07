/**
 * Specs for {@link AuthGrpcInterceptor}, the `@ngx-grpc` interceptor that
 * attaches the current Keycloak access token to the gRPC-web request metadata.
 *
 * Each spec constructs the interceptor directly with a stubbed `TokenProvider`,
 * a {@link FakeMetadata} stand-in for `@ngx-grpc`'s `GrpcMetadata`, and a fake
 * `next` handler that records the request it received and emits a sentinel
 * event. The suite mirrors the HTTP interceptor's matrix: present/absent/empty
 * token, async (`Promise` / `Observable`) sources, the "metadata already carries
 * an authorization entry" short-circuit (which must also skip the token
 * provider), and error propagation.
 */
import { GrpcEvent, GrpcMessage, GrpcRequest } from "@ngx-grpc/common";
import { GrpcHandler } from "@ngx-grpc/core";
import { firstValueFrom, Observable, of, throwError } from "rxjs";
import { AuthGrpcInterceptor } from "./auth-grpc.interceptor";
import { AUTHORIZATION_HEADER, BEARER_PREFIX } from "./resolve-token";
import { TokenProvider, TokenResult } from "./token-provider";

/** A JWT-shaped access token used as the happy-path credential. */
const TOKEN: string = "header.payload.signature";
/** The expected `authorization` metadata value for {@link TOKEN}. */
const BEARER: string = `${BEARER_PREFIX}${TOKEN}`;

/** A `TokenProvider` whose `getToken` returns a caller-supplied value. */
class StubTokenProvider implements TokenProvider {
  /**
   * @param value the value every `getToken()` call should return.
   */
  public constructor(private readonly value: TokenResult) {}

  /**
   * @returns the value supplied at construction time.
   */
  public getToken(): TokenResult {
    return this.value;
  }
}

/** Minimal stand-in for `@ngx-grpc`'s `GrpcMetadata` (set/has/get over a map). */
class FakeMetadata {
  private readonly map: Map<string, string> = new Map<string, string>();

  /**
   * @param initial optional initial key/value entries to seed the metadata with.
   */
  public constructor(initial?: Record<string, string>) {
    if (initial !== undefined) {
      for (const key of Object.keys(initial)) {
        this.map.set(key, initial[key]);
      }
    }
  }

  /**
   * Set (or overwrite) a metadata entry.
   *
   * @param name the entry key.
   * @param value the entry value.
   */
  public set(name: string, value: string): void {
    this.map.set(name, value);
  }

  /**
   * @param name the entry key to look up.
   * @returns whether an entry exists for `name`.
   */
  public has(name: string): boolean {
    return this.map.has(name);
  }

  /**
   * @param name the entry key to look up.
   * @returns the stored value, or `undefined` when absent.
   */
  public get(name: string): string | undefined {
    return this.map.get(name);
  }
}

/** A unique event the fake `next` handler emits so the stream can be asserted on. */
const SENTINEL: GrpcEvent<GrpcMessage> = { sentinel: true } as unknown as GrpcEvent<GrpcMessage>;

/** Outcome of {@link run}: the request's metadata, the event stream, and the captured handled request. */
interface RunResult {
  /** The metadata object attached to the intercepted request. */
  metadata: FakeMetadata;
  /** The gRPC event stream returned by the interceptor. */
  events: Observable<GrpcEvent<GrpcMessage>>;
  /** Accessor returning the request actually passed to the `next` handler. */
  handled: () => GrpcRequest<GrpcMessage, GrpcMessage>;
}

/**
 * Build a request carrying the given metadata, run it through the interceptor
 * with a `next` handler that records the request it received and emits a
 * sentinel event.
 *
 * @param tokenResult the value the stubbed `TokenProvider` should return.
 * @param metadata the metadata object carried by the intercepted request.
 * @returns the request metadata, the event stream, and an accessor for the
 *   request handed to `next`.
 */
function run(tokenResult: TokenResult, metadata: FakeMetadata): RunResult {
  const interceptor: AuthGrpcInterceptor = new AuthGrpcInterceptor(new StubTokenProvider(tokenResult));
  const request: GrpcRequest<GrpcMessage, GrpcMessage> = {
    requestMetadata: metadata
  } as unknown as GrpcRequest<GrpcMessage, GrpcMessage>;

  let handledRequest: GrpcRequest<GrpcMessage, GrpcMessage> | undefined;
  const next: GrpcHandler = {
    handle: (req: GrpcRequest<GrpcMessage, GrpcMessage>): Observable<GrpcEvent<GrpcMessage>> => {
      handledRequest = req;
      return of(SENTINEL);
    }
  } as unknown as GrpcHandler;

  const events: Observable<GrpcEvent<GrpcMessage>> = interceptor.intercept(request, next);
  return {
    metadata,
    events,
    handled: (): GrpcRequest<GrpcMessage, GrpcMessage> => {
      if (handledRequest === undefined) {
        throw new Error("next handler was not invoked");
      }
      return handledRequest;
    }
  };
}

describe("AuthGrpcInterceptor", (): void => {
  /** A synchronous token is written onto the request metadata. */
  it("sets the bearer metadata when a synchronous token is present", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** The downstream handler's event is passed through to the caller. */
  it("emits the downstream event from the next handler", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, new FakeMetadata());
    await expect(firstValueFrom(result.events)).resolves.toBe(SENTINEL);
  });

  /** A `null` token leaves the metadata untouched. */
  it("leaves metadata untouched when the token is null", async (): Promise<void> => {
    const result: RunResult = run(null, new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** An empty-string token is treated as absent — the metadata is unchanged. */
  it("leaves metadata untouched when the token is an empty string", async (): Promise<void> => {
    const result: RunResult = run("", new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** A `Promise`-based token is awaited before delegating. */
  it("resolves a Promise-based token before delegating", async (): Promise<void> => {
    const result: RunResult = run(Promise.resolve(TOKEN), new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An `Observable`-based token is resolved before delegating. */
  it("resolves an Observable-based token before delegating", async (): Promise<void> => {
    const result: RunResult = run(of(TOKEN), new FakeMetadata());
    await firstValueFrom(result.events);
    expect(result.metadata.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /**
   * A pre-existing `authorization` entry wins and the token provider is never
   * consulted (no redundant `getToken()` / refresh round-trip).
   */
  it("leaves an existing authorization entry untouched and skips the token provider", async (): Promise<void> => {
    const preset: string = `${BEARER_PREFIX}caller-supplied`;
    const provider: StubTokenProvider = new StubTokenProvider(TOKEN);
    const getTokenSpy: jest.SpyInstance<TokenResult, []> = jest.spyOn(provider, "getToken");
    const interceptor: AuthGrpcInterceptor = new AuthGrpcInterceptor(provider);
    const metadata: FakeMetadata = new FakeMetadata({ [AUTHORIZATION_HEADER]: preset });
    const request: GrpcRequest<GrpcMessage, GrpcMessage> = {
      requestMetadata: metadata
    } as unknown as GrpcRequest<GrpcMessage, GrpcMessage>;
    const next: GrpcHandler = {
      handle: (): Observable<GrpcEvent<GrpcMessage>> => of(SENTINEL)
    } as unknown as GrpcHandler;

    await firstValueFrom(interceptor.intercept(request, next));

    expect(metadata.get(AUTHORIZATION_HEADER)).toBe(preset);
    expect(getTokenSpy).not.toHaveBeenCalled();
  });

  /** An error from the token source aborts delegation and surfaces to the caller. */
  it("propagates an error raised by the token source without delegating", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    const result: RunResult = run(throwError(() => boom), new FakeMetadata());
    await expect(firstValueFrom(result.events)).rejects.toBe(boom);
  });
});
