/**
 * Specs for {@link KeycloakTokenProvider}, the concrete `TokenProvider` that runs
 * the Keycloak offline-token flow itself and keeps the access token fresh with a
 * background timer.
 *
 * The Keycloak `HttpClient` is faked with a queue of scripted responses (success
 * bodies or thrown errors), so every login/refresh round-trip is deterministic
 * and no network or `TestBed`/zone bootstrap is needed. The background refresh
 * schedule is driven with Jest fake timers, and `Date.now()` is stubbed so the
 * bounded-deadline arithmetic is exercised without real wall-clock waits.
 */
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import {
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakAuthenticationError,
  KeycloakTokenProvider,
  KeycloakTokenProviderConfig,
  MIN_REFRESH_DELAY_IN_S,
  REFRESH_SKEW_IN_S
} from "./keycloak-token-provider";

/** A parsed Keycloak token-endpoint body, as the provider consumes it. */
interface TokenBody {
  /** The short-lived bearer access token. */
  access_token?: string;
  /** The (optionally rotated) offline refresh token. */
  refresh_token?: string;
  /** The access token lifetime in seconds. */
  expires_in?: number;
}

/** A scripted outcome for one `http.post` call: emit a body, or error out. */
type ScriptedResponse = { kind: "ok"; body: TokenBody } | { kind: "error"; error: unknown };

/** Records the arguments of one captured `http.post` call. */
interface PostCall {
  /** The endpoint URL the provider posted to. */
  url: string;
  /** The form-encoded request body. */
  body: string;
}

/**
 * A minimal fake {@link HttpClient} whose `post` returns the next scripted
 * response from a queue and records the call arguments.
 */
class FakeHttpClient {
  /** FIFO queue of scripted responses consumed one per `post` call. */
  public readonly responses: ScriptedResponse[] = [];
  /** Every `post` call captured in order, for request-shape assertions. */
  public readonly calls: PostCall[] = [];

  /**
   * Stand-in for `HttpClient.post`: dequeue the next scripted response and
   * return it as an `Observable` (emitting the body, or erroring).
   *
   * @param url the endpoint URL.
   * @param body the form-encoded request body.
   * @returns an observable mirroring the next scripted response.
   */
  public post<T>(url: string, body: string): Observable<T> {
    this.calls.push({ url, body });
    const next: ScriptedResponse | undefined = this.responses.shift();
    if (next === undefined) {
      return throwError((): Error => new Error("no scripted response"));
    }
    if (next.kind === "error") {
      const error: unknown = next.error;
      return throwError((): unknown => error);
    }
    return of(next.body as unknown as T);
  }
}

/** Base Keycloak URL with a trailing slash, to exercise the slash-stripping. */
const KEYCLOAK_URL: string = "https://auth.example.com/auth/";
/** Realm name used in the expected token endpoint. */
const REALM: string = "ondewo-ccai-platform";
/** Public SDK client id (no secret). */
const CLIENT_ID: string = "ondewo-nlu-cai-sdk-public";
/** The expected, normalized token endpoint URL for the above realm. */
const TOKEN_ENDPOINT: string = "https://auth.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token";

/**
 * Build a provider over a {@link FakeHttpClient} with the given config.
 *
 * @param config the {@link KeycloakTokenProviderConfig}, or `null` to omit it.
 * @returns the fake http client and the constructed provider.
 */
function build(config: KeycloakTokenProviderConfig | null): {
  http: FakeHttpClient;
  provider: KeycloakTokenProvider;
} {
  const http: FakeHttpClient = new FakeHttpClient();
  const provider: KeycloakTokenProvider = new KeycloakTokenProvider(http as unknown as HttpClient, config);
  return { http, provider };
}

/** A config using a pre-acquired offline refresh token. */
function refreshTokenConfig(overrides: Partial<KeycloakTokenProviderConfig> = {}): KeycloakTokenProviderConfig {
  return { keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID, refreshToken: "offline-rt-0", ...overrides };
}

/** A config using ROPC username + password credentials. */
function passwordConfig(overrides: Partial<KeycloakTokenProviderConfig> = {}): KeycloakTokenProviderConfig {
  return {
    keycloakUrl: KEYCLOAK_URL,
    realm: REALM,
    clientId: CLIENT_ID,
    username: "tech-user@example.com",
    password: "s3cret",
    ...overrides
  };
}

describe("KeycloakTokenProvider", (): void => {
  beforeEach((): void => {
    jest.useFakeTimers();
  });

  afterEach((): void => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  describe("exported constants", (): void => {
    /** The skew/min-delay constants are part of the public contract. */
    it("exposes the refresh-skew and min-delay constants", (): void => {
      expect(REFRESH_SKEW_IN_S).toBe(30);
      expect(MIN_REFRESH_DELAY_IN_S).toBe(1);
    });
  });

  describe("construction & config validation", (): void => {
    /** A missing config (token not provided) fails fast on construction. */
    it("throws when no config is provided", (): void => {
      expect((): KeycloakTokenProvider => build(null).provider).toThrow(KeycloakAuthenticationError);
    });

    /** Each required string field is validated; empty values are rejected. */
    it.each(["keycloakUrl", "realm", "clientId"] as const)(
      "throws when the required field %s is empty",
      (field: "keycloakUrl" | "realm" | "clientId"): void => {
        expect((): KeycloakTokenProvider => build(refreshTokenConfig({ [field]: "" })).provider).toThrow(
          KeycloakAuthenticationError
        );
      }
    );

    /** Neither a refresh token nor username+password is an invalid credential mode. */
    it("throws when neither a refreshToken nor username+password is given", (): void => {
      const config: KeycloakTokenProviderConfig = { keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID };
      expect((): KeycloakTokenProvider => build(config).provider).toThrow(KeycloakAuthenticationError);
    });

    /** A username without a password is an incomplete credential mode. */
    it("throws when a username is given without a password", (): void => {
      expect(
        (): KeycloakTokenProvider => build(passwordConfig({ password: "" })).provider
      ).toThrow(KeycloakAuthenticationError);
    });

    /** A valid refresh-token config constructs without error. */
    it("constructs with a valid refresh-token config", (): void => {
      expect(build(refreshTokenConfig()).provider).toBeInstanceOf(KeycloakTokenProvider);
    });
  });

  describe("getToken", (): void => {
    /** Before initialization there is no token to hand out. */
    it("returns null before initialize()", (): void => {
      const { provider } = build(refreshTokenConfig());
      expect(provider.getToken()).toBeNull();
    });
  });

  describe("initialize", (): void => {
    /** A refresh-token config logs in via the refresh_token grant. */
    it("logs in with the refresh_token grant and posts to the realm token endpoint", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });

      await provider.initialize();

      expect(provider.getToken()).toBe("at-1");
      expect(http.calls[0].url).toBe(TOKEN_ENDPOINT);
      expect(http.calls[0].body).toContain("grant_type=refresh_token");
      expect(http.calls[0].body).toContain("refresh_token=offline-rt-0");
      expect(http.calls[0].body).not.toContain("client_secret");
    });

    /** A username+password config logs in via the ROPC password grant. */
    it("logs in with the password grant and offline_access scope", async (): Promise<void> => {
      const { http, provider } = build(passwordConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });

      await provider.initialize();

      expect(provider.getToken()).toBe("at-1");
      expect(http.calls[0].body).toContain("grant_type=password");
      expect(http.calls[0].body).toContain("scope=offline_access");
      expect(http.calls[0].body).toContain("username=tech-user");
    });

    /** A second initialize() after success is a no-op (no extra login call). */
    it("is idempotent: a second call does not re-login", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });

      await provider.initialize();
      await provider.initialize();

      expect(http.calls).toHaveLength(1);
    });

    /** A login response without a refresh_token is rejected. */
    it("throws when the login response carries no refresh_token", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", expires_in: 300 } });

      await expect(provider.initialize()).rejects.toThrow(KeycloakAuthenticationError);
    });

    /** A login response without an access_token is rejected. */
    it("throws when the login response carries no access_token", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { refresh_token: "rt-1", expires_in: 300 } });

      await expect(provider.initialize()).rejects.toThrow(KeycloakAuthenticationError);
    });

    /** An HTTP-level rejection is wrapped in a KeycloakAuthenticationError. */
    it("wraps an HttpErrorResponse from the token endpoint", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({
        kind: "error",
        error: new HttpErrorResponse({ status: 401, statusText: "Unauthorized" })
      });

      await expect(provider.initialize()).rejects.toThrow(KeycloakAuthenticationError);
    });

    /** A non-HTTP rejection (e.g. a network TypeError) is still wrapped. */
    it("wraps a non-HttpErrorResponse Error failure", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      const message: string = "network down";
      http.responses.push({ kind: "error", error: new TypeError(message) });

      await expect(provider.initialize()).rejects.toThrow(message);
    });

    /** A thrown non-Error value (e.g. a bare string) is wrapped with a generic detail. */
    it("wraps a non-Error rejection with a generic detail", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "error", error: "boom" });

      await expect(provider.initialize()).rejects.toThrow("unknown error");
    });
  });

  describe("background refresh", (): void => {
    /** The first refresh fires `REFRESH_SKEW_IN_S` before expiry and rotates the token. */
    it("refreshes shortly before expiry and rotates the access + refresh tokens", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });
      http.responses.push({ kind: "ok", body: { access_token: "at-2", refresh_token: "rt-2", expires_in: 300 } });

      await provider.initialize();
      // delay = (300 - 30)s; nothing fires a moment before, the refresh fires at the scheduled tick.
      jest.advanceTimersByTime((300 - REFRESH_SKEW_IN_S) * 1000 - 1);
      expect(provider.getToken()).toBe("at-1");

      jest.advanceTimersByTime(1);
      await Promise.resolve();
      await Promise.resolve();

      expect(provider.getToken()).toBe("at-2");
      // The rotated refresh token is used for the next refresh request.
      expect(http.calls[1].body).toContain("refresh_token=rt-1");
    });

    /** A refresh response that omits refresh_token keeps the previous offline token. */
    it("keeps the previous refresh token when a refresh response omits one", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });
      http.responses.push({ kind: "ok", body: { access_token: "at-2", expires_in: 300 } });
      http.responses.push({ kind: "ok", body: { access_token: "at-3", expires_in: 300 } });

      await provider.initialize();
      jest.advanceTimersByTime((300 - REFRESH_SKEW_IN_S) * 1000);
      await flushMicrotasks();
      jest.advanceTimersByTime((300 - REFRESH_SKEW_IN_S) * 1000);
      await flushMicrotasks();

      expect(provider.getToken()).toBe("at-3");
      // Both refreshes reused rt-1 because no rotated token was issued.
      expect(http.calls[1].body).toContain("refresh_token=rt-1");
      expect(http.calls[2].body).toContain("refresh_token=rt-1");
    });

    /** A missing / non-positive expires_in falls back to the minimum delay. */
    it("falls back to the minimum delay when expires_in is missing", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1" } });
      http.responses.push({ kind: "ok", body: { access_token: "at-2", refresh_token: "rt-2", expires_in: 300 } });

      await provider.initialize();
      jest.advanceTimersByTime(MIN_REFRESH_DELAY_IN_S * 1000);
      await flushMicrotasks();

      expect(provider.getToken()).toBe("at-2");
    });

    /** A failed background refresh is swallowed; the cached token is retained. */
    it("swallows a failed background refresh and keeps the cached token", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });
      http.responses.push({ kind: "error", error: new HttpErrorResponse({ status: 500 }) });

      await provider.initialize();
      jest.advanceTimersByTime((300 - REFRESH_SKEW_IN_S) * 1000);
      await flushMicrotasks();

      expect(provider.getToken()).toBe("at-1");
    });
  });

  describe("keycloakVerifySsl (browser no-op, config -> provider parity)", (): void => {
    /** Omitting the field defaults the stored flag to verification-ON (secure). */
    it("defaults the stored flag to true when keycloakVerifySsl is omitted", (): void => {
      const { provider } = build(refreshTokenConfig());
      expect(provider.keycloakVerifySsl).toBe(true);
    });

    /** An explicit true is stored as true. */
    it("stores an explicit keycloakVerifySsl: true as true", (): void => {
      const { provider } = build(refreshTokenConfig({ keycloakVerifySsl: true }));
      expect(provider.keycloakVerifySsl).toBe(true);
    });

    /** An explicit false is threaded from config through to the provider field. */
    it("stores keycloakVerifySsl: false as false (threaded config -> provider)", (): void => {
      const { provider } = build(refreshTokenConfig({ keycloakVerifySsl: false }));
      expect(provider.keycloakVerifySsl).toBe(false);
    });

    /**
     * The flag is inert at the transport layer: with keycloakVerifySsl: false the
     * provider issues the SAME single POST (same URL and body) and logs in exactly
     * as with the field omitted — proving it is a no-op, not wired to TLS.
     */
    it("does not alter or break the token request when keycloakVerifySsl is false", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig({ keycloakVerifySsl: false }));
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });

      await provider.initialize();

      expect(http.calls).toHaveLength(1);
      expect(http.calls[0].url).toBe(TOKEN_ENDPOINT);
      expect(http.calls[0].body).toContain("grant_type=refresh_token");
      expect(http.calls[0].body).toContain("client_id=" + CLIENT_ID);
      expect(http.calls[0].body).toContain("refresh_token=offline-rt-0");
      expect(provider.getToken()).toBe("at-1");
      provider.ngOnDestroy();
    });
  });

  describe("bounded deadline (tokenExpirationInS)", (): void => {
    /** The scheduled delay is clamped to the remaining time before the deadline. */
    it("clamps the refresh delay to the remaining deadline", async (): Promise<void> => {
      const nowSpy: jest.SpyInstance<number, []> = jest.spyOn(Date, "now").mockReturnValue(0);
      const { http, provider } = build(refreshTokenConfig({ tokenExpirationInS: 100 }));
      // expires_in (300) would schedule at 270s, but the 100s deadline clamps it to 100s.
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });
      http.responses.push({ kind: "ok", body: { access_token: "at-2", refresh_token: "rt-2", expires_in: 300 } });

      await provider.initialize();
      // Just before the clamped 100s deadline, no refresh yet.
      nowSpy.mockReturnValue(100 * 1000 - 1);
      jest.advanceTimersByTime(100 * 1000 - 1);
      expect(provider.getToken()).toBe("at-1");

      // At the deadline the timer fires, but refresh() sees now >= deadline and lapses.
      nowSpy.mockReturnValue(100 * 1000);
      jest.advanceTimersByTime(1);
      await flushMicrotasks();
      expect(provider.getToken()).toBe("at-1");
      // No refresh round-trip happened (only the initial login was posted).
      expect(http.calls).toHaveLength(1);
      nowSpy.mockRestore();
    });

    /** If the deadline has already passed at schedule time, no timer is armed. */
    it("does not arm a refresh when the deadline has already elapsed at login", async (): Promise<void> => {
      const nowSpy: jest.SpyInstance<number, []> = jest.spyOn(Date, "now");
      // Date.now() at login (deadline = 0 + 0) then jumps past it for scheduleRefresh.
      nowSpy.mockReturnValueOnce(0).mockReturnValue(10);
      const { http, provider } = build(refreshTokenConfig({ tokenExpirationInS: 0 }));
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });

      await provider.initialize();
      jest.runOnlyPendingTimers();
      await flushMicrotasks();

      expect(provider.getToken()).toBe("at-1");
      expect(http.calls).toHaveLength(1);
      nowSpy.mockRestore();
    });
  });

  describe("ngOnDestroy", (): void => {
    /** Destroying after initialize() cancels the armed refresh timer. */
    it("clears the armed refresh timer", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });

      await provider.initialize();
      provider.ngOnDestroy();
      jest.advanceTimersByTime((300 - REFRESH_SKEW_IN_S) * 1000);
      await flushMicrotasks();

      // No refresh fired: only the initial login was posted.
      expect(http.calls).toHaveLength(1);
    });

    /** Destroying before any timer is armed is a safe no-op. */
    it("is a no-op when no timer is armed", (): void => {
      const { provider } = build(refreshTokenConfig());
      expect((): void => provider.ngOnDestroy()).not.toThrow();
    });

    /** A scheduled refresh after destruction re-arms nothing. */
    it("does not re-arm after destruction even if a refresh fires", async (): Promise<void> => {
      const { http, provider } = build(refreshTokenConfig());
      http.responses.push({ kind: "ok", body: { access_token: "at-1", refresh_token: "rt-1", expires_in: 300 } });
      http.responses.push({ kind: "ok", body: { access_token: "at-2", refresh_token: "rt-2", expires_in: 300 } });

      await provider.initialize();
      // Mark destroyed but leave the already-armed timer in place, then fire it.
      const timer: ReturnType<typeof setTimeout> = (provider as unknown as { timer: ReturnType<typeof setTimeout> }).timer;
      (provider as unknown as { destroyed: boolean }).destroyed = true;
      jest.advanceTimersByTime((300 - REFRESH_SKEW_IN_S) * 1000);
      await flushMicrotasks();

      expect(timer).toBeDefined();
      // refresh() early-returns on destroyed: no second post, no re-arm, token unchanged.
      expect(http.calls).toHaveLength(1);
      expect(provider.getToken()).toBe("at-1");
    });
  });

  describe("DI token", (): void => {
    /** The config token carries the documented marker for DI error messages. */
    it("exposes a descriptive config injection token", (): void => {
      expect(KEYCLOAK_TOKEN_PROVIDER_CONFIG.toString()).toContain("ONDEWO_VTSI_KEYCLOAK_TOKEN_PROVIDER_CONFIG");
    });
  });
});

/**
 * Flush pending microtasks so awaited `firstValueFrom`/`Promise` continuations
 * inside a fake-timer callback run before assertions.
 *
 * @returns a promise that resolves after a few microtask turns.
 */
async function flushMicrotasks(): Promise<void> {
  await Promise.resolve();
  await Promise.resolve();
  await Promise.resolve();
}
