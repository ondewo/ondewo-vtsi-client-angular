/**
 * Specs for {@link authHttpInterceptor}, the functional HTTP interceptor that
 * attaches the current Keycloak access token as an `Authorization: Bearer`
 * header.
 *
 * Each spec drives the interceptor inside a real Angular injection context (so
 * the `inject(TOKEN_PROVIDER)` call resolves) with a stubbed `TokenProvider`
 * and a fake `next` handler that records the request actually forwarded. The
 * suite covers the present/absent/empty token paths, async (`Promise` /
 * `Observable`) token sources, the "caller already set the header" short-circuit,
 * and error propagation from the token source.
 */
import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injector, runInInjectionContext } from "@angular/core";
import { firstValueFrom, Observable, of, throwError } from "rxjs";
import { authHttpInterceptor } from "./auth-http.interceptor";
import { AUTHORIZATION_HEADER, BEARER_PREFIX } from "./resolve-token";
import { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";

/** A JWT-shaped access token used as the happy-path credential. */
const TOKEN: string = "header.payload.signature";
/** The expected `Authorization` header value for {@link TOKEN}. */
const BEARER: string = `${BEARER_PREFIX}${TOKEN}`;
/** An arbitrary gRPC-web-style endpoint the test requests target. */
const URL: string = "https://api.example.com/ondewo.vtsi.Calls/ListCallers";

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

/** Outcome of {@link run}: the captured forwarded request and the event stream. */
interface RunResult {
  /** The request actually handed to the `next` handler. */
  forwarded: HttpRequest<unknown>;
  /** The HTTP event stream returned by the interceptor. */
  events: Observable<HttpEvent<unknown>>;
}

/**
 * Drive `authHttpInterceptor` inside an injection context that provides the
 * given `TokenProvider`, capturing the request actually handed to the next
 * handler. The fake `next` echoes a sentinel data event so the stream is
 * observable end-to-end.
 *
 * @param tokenResult the value the stubbed `TokenProvider` should return.
 * @param request the request fed into the interceptor.
 * @returns the captured forwarded request (lazily, via a getter) and the event
 *   stream the interceptor produced.
 */
function run(tokenResult: TokenResult, request: HttpRequest<unknown>): RunResult {
  const injector: Injector = Injector.create({
    providers: [{ provide: TOKEN_PROVIDER, useValue: new StubTokenProvider(tokenResult) }]
  });

  let forwarded: HttpRequest<unknown> | undefined;
  const next: HttpHandlerFn = (req: HttpRequest<unknown>): Observable<HttpEvent<unknown>> => {
    forwarded = req;
    return of({ type: 0 } as HttpEvent<unknown>);
  };

  const events: Observable<HttpEvent<unknown>> = runInInjectionContext(injector, () =>
    authHttpInterceptor(request, next)
  );
  // `forwarded` is assigned synchronously only for the sync-token paths; the
  // caller awaits `events` before reading it for async paths.
  return {
    get forwarded(): HttpRequest<unknown> {
      if (forwarded === undefined) {
        throw new Error("next handler was not invoked");
      }
      return forwarded;
    },
    events
  };
}

/**
 * Build a `GET` request at {@link URL}, optionally pre-seeded with headers.
 *
 * @param headers optional headers to attach to the request.
 * @returns a fresh `HttpRequest`.
 */
function newRequest(headers?: HttpHeaders): HttpRequest<unknown> {
  return new HttpRequest("GET", URL, headers === undefined ? undefined : { headers });
}

describe("authHttpInterceptor", (): void => {
  /** A synchronous token is attached as the bearer header on a cloned request. */
  it("attaches the bearer header when a synchronous token is present", async (): Promise<void> => {
    const result: RunResult = run(TOKEN, newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** A `null` token leaves the original request untouched (no header). */
  it("forwards the original request untouched when the token is null", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run(null, request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** An empty-string token is treated as absent — the request is unmodified. */
  it("forwards untouched when the token is an empty string", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run("", request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.has(AUTHORIZATION_HEADER)).toBe(false);
  });

  /** A `Promise`-based token is awaited before the request is sent. */
  it("resolves a Promise-based token before sending", async (): Promise<void> => {
    const result: RunResult = run(Promise.resolve(TOKEN), newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An `Observable`-based token is resolved before the request is sent. */
  it("resolves an Observable-based token before sending", async (): Promise<void> => {
    const result: RunResult = run(of(TOKEN), newRequest());
    await firstValueFrom(result.events);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(BEARER);
  });

  /** An async source resolving to `null` must not clone the request. */
  it("does not clone the request when the token source resolves to null", async (): Promise<void> => {
    const request: HttpRequest<unknown> = newRequest();
    const result: RunResult = run(Promise.resolve(null), request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
  });

  /** A caller-supplied `Authorization` header wins and is left as-is. */
  it("leaves an explicitly-set Authorization header untouched", async (): Promise<void> => {
    const preset: string = `${BEARER_PREFIX}caller-supplied`;
    const request: HttpRequest<unknown> = newRequest(new HttpHeaders({ [AUTHORIZATION_HEADER]: preset }));
    const result: RunResult = run(TOKEN, request);
    await firstValueFrom(result.events);
    expect(result.forwarded).toBe(request);
    expect(result.forwarded.headers.get(AUTHORIZATION_HEADER)).toBe(preset);
  });

  /** An error from the token source aborts the request and surfaces to the caller. */
  it("propagates an error raised by the token source without sending the request", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    const result: RunResult = run(throwError(() => boom), newRequest());
    await expect(firstValueFrom(result.events)).rejects.toBe(boom);
  });
});
