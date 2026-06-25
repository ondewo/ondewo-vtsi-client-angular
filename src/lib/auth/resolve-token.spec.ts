/**
 * Specs for the token-normalization helpers in `./resolve-token`.
 *
 * These cover the full matrix of values a {@link TokenResult} source can yield
 * — synchronous strings, `null`, empty / whitespace-only strings, `undefined`
 * emissions from a mistyped source, and `Promise` / `Observable` sources that
 * succeed or error — and assert that every "no usable token" case collapses to
 * `null` (so an empty `Bearer` header is never built) while a real token is
 * trimmed and prefixed correctly. Subscription teardown is verified so the
 * helpers don't leak the underlying source subscription.
 */
import { firstValueFrom, Observable, of, Subject, Subscription, throwError } from "rxjs";
import {
  AUTHORIZATION_HEADER,
  BEARER_PREFIX,
  buildBearerValue,
  once,
  resolveBearerValue,
  resolveToken
} from "./resolve-token";

/** A representative, well-formed JWT-shaped access token used across the specs. */
const TOKEN: string = "eyJhbGciOi.payload.signature";

describe("constants", (): void => {
  /** The header name must be lower-cased (HTTP/2 + gRPC-web metadata convention). */
  it("uses a lower-case authorization header name", (): void => {
    expect(AUTHORIZATION_HEADER).toBe("authorization");
  });

  /** The scheme prefix must be the canonical `"Bearer "` (note the trailing space). */
  it("uses the standard bearer scheme prefix", (): void => {
    expect(BEARER_PREFIX).toBe("Bearer ");
  });
});

describe("resolveToken", (): void => {
  /** A plain string token passes through unchanged. */
  it("resolves a synchronous string token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(TOKEN))).resolves.toBe(TOKEN);
  });

  /** An explicit `null` (unauthenticated) stays `null`. */
  it("resolves null when the token is null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(null))).resolves.toBeNull();
  });

  /** An empty string is treated as "no token". */
  it("collapses an empty-string token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(""))).resolves.toBeNull();
  });

  /** A whitespace-only string is treated as "no token". */
  it("collapses a whitespace-only token to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken("   "))).resolves.toBeNull();
  });

  /**
   * A `TokenResult` source can emit `undefined` at runtime even though the type
   * says `string | null`; it must be treated as "no token", not crash.
   */
  it("collapses an undefined emission from a misbehaving source to null", async (): Promise<void> => {
    const source: Observable<string | null> = of(undefined as unknown as string | null);
    await expect(firstValueFrom(resolveToken(source))).resolves.toBeNull();
  });

  /** Surrounding whitespace is trimmed off a real token. */
  it("trims surrounding whitespace from a real token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(`  ${TOKEN}  `))).resolves.toBe(TOKEN);
  });

  /** A `Promise` source is awaited and its value normalized. */
  it("resolves a Promise-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A `Promise` resolving to `null` yields `null`. */
  it("resolves a Promise that resolves to null", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(Promise.resolve(null)))).resolves.toBeNull();
  });

  /** An `Observable` source is subscribed and its value normalized. */
  it("resolves an Observable-based token source", async (): Promise<void> => {
    await expect(firstValueFrom(resolveToken(of(TOKEN)))).resolves.toBe(TOKEN);
  });

  /** A rejected `Promise` source surfaces as an error, not a silent `null`. */
  it("propagates an error from a Promise token source", async (): Promise<void> => {
    const boom: Error = new Error("token refresh failed");
    await expect(firstValueFrom(resolveToken(Promise.reject<string | null>(boom)))).rejects.toBe(boom);
  });

  /** An erroring `Observable` source surfaces as an error. */
  it("propagates an error from an Observable token source", async (): Promise<void> => {
    const boom: Error = new Error("token stream failed");
    await expect(firstValueFrom(resolveToken(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing the consumer must tear down the wrapped source subscription. */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveToken(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });
});

describe("buildBearerValue", (): void => {
  /** A real token is prefixed with the bearer scheme. */
  it("prefixes a real token with the bearer scheme", (): void => {
    expect(buildBearerValue(TOKEN)).toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** A `null` token produces no header value. */
  it("returns null for a null token", (): void => {
    expect(buildBearerValue(null)).toBeNull();
  });
});

describe("resolveBearerValue", (): void => {
  /** A present token yields the ready-to-use `"Bearer <token>"` value. */
  it("emits the bearer header value for a present token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(TOKEN))).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });

  /** Absent token → `null` (no header attached downstream). */
  it("emits null when no token is available", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(null))).resolves.toBeNull();
  });

  /** Empty-string token → `null`. */
  it("emits null for an empty token", async (): Promise<void> => {
    await expect(firstValueFrom(resolveBearerValue(""))).resolves.toBeNull();
  });

  /** An error from the token source propagates through unchanged. */
  it("propagates an error from the token source", async (): Promise<void> => {
    const boom: Error = new Error("nope");
    await expect(firstValueFrom(resolveBearerValue(throwError(() => boom)))).rejects.toBe(boom);
  });

  /** Unsubscribing the consumer must tear down the wrapped source subscription. */
  it("tears down the underlying subscription when the consumer unsubscribes", (): void => {
    const source: Subject<string | null> = new Subject<string | null>();
    const subscription: Subscription = resolveBearerValue(source).subscribe();
    expect(source.observed).toBe(true);
    subscription.unsubscribe();
    expect(source.observed).toBe(false);
  });

  /** A token pushed asynchronously through an `Observable` is wrapped on emission. */
  it("emits the bearer value for a token pushed through an Observable source", async (): Promise<void> => {
    const source: Subject<string | null> = new Subject<string | null>();
    const promise: Promise<string | null> = firstValueFrom(resolveBearerValue(source));
    source.next(TOKEN);
    source.complete();
    await expect(promise).resolves.toBe(`${BEARER_PREFIX}${TOKEN}`);
  });
});

describe("once", (): void => {
  /** The helper emits its argument a single time and completes. */
  it("emits the given value exactly once", async (): Promise<void> => {
    await expect(firstValueFrom(once("value"))).resolves.toBe("value");
  });
});
