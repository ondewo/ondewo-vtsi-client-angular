import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable, InjectionToken, OnDestroy, Optional } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { TokenProvider, TokenResult } from "./token-provider";

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the background
 * refresh fires *before* the access token actually lapses. Covers clock skew
 * plus the round-trip to Keycloak, so an in-flight request never travels with a
 * token that expires mid-call. Mirrors the Python SDK's `_EXPIRY_LEEWAY_S` and
 * the Node SDK's `REFRESH_SKEW_IN_S`.
 */
export const REFRESH_SKEW_IN_S: number = 30;

/**
 * Lower bound (in seconds) for the scheduled refresh delay so a tiny or zero
 * `expires_in` returned by Keycloak cannot spin a hot refresh loop.
 */
export const MIN_REFRESH_DELAY_IN_S: number = 1;

/**
 * Runtime configuration for {@link KeycloakTokenProvider}. Supplied by the
 * consuming application under {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
 *
 * Exactly one credential mode must be provided:
 *
 * - `refreshToken` — a pre-acquired *offline* refresh token. The provider never
 *   sees the user's password; it exchanges this token for access tokens. This is
 *   the recommended, browser-safe mode.
 * - `username` + `password` — a 2FA-exempt *technical-user* Resource Owner
 *   Password Credentials (ROPC) login with `scope=offline_access`. Only suitable
 *   for headless/technical accounts, never for interactive browser users.
 */
export interface KeycloakTokenProviderConfig {
  /**
   * Base Keycloak URL, e.g. `https://auth.example.com/auth` (a trailing slash is
   * tolerated). The realm path is appended automatically.
   */
  keycloakUrl: string;
  /** Realm name, e.g. `ondewo-ccai-platform`. */
  realm: string;
  /**
   * Public SDK client id, e.g. `ondewo-nlu-cai-sdk-public`. No `client_secret`
   * is ever sent (the client is public).
   */
  clientId: string;
  /**
   * A pre-acquired *offline* refresh token. When set, the provider uses the
   * `refresh_token` grant for the initial login and never needs credentials.
   * Mutually exclusive with {@link username} / {@link password}.
   */
  refreshToken?: string;
  /**
   * Technical-user email/username for the ROPC `password` grant. Required when
   * {@link refreshToken} is absent.
   */
  username?: string;
  /**
   * Technical-user password for the ROPC `password` grant. Required when
   * {@link refreshToken} is absent.
   */
  password?: string;
  /**
   * Optional cap (in seconds since {@link KeycloakTokenProvider.initialize}) on
   * how long the background auto-refresh loop runs. Once elapsed the loop stops
   * and the access token is allowed to lapse (re-initialization required).
   * Omit to keep refreshing until the offline session itself expires.
   */
  tokenExpirationInS?: number;
  /**
   * Whether to verify the Keycloak server's TLS certificate on the
   * token-endpoint call. Defaults to `true` (secure).
   *
   * NO-OP IN THIS ANGULAR/BROWSER CLIENT. The token request is made with
   * Angular's `HttpClient` (an XHR/fetch call), and in a browser the TLS
   * handshake is owned by the user agent — there is no `https.Agent`, undici
   * dispatcher, or `rejectUnauthorized` hook that app code can reach, and
   * `HttpClient`'s request options expose no certificate-verification slot. The
   * value is therefore stored on the provider for cross-SDK config parity with
   * the Python/Node.js clients (where it does disable TLS verification) but has
   * no effect on the outgoing request here. For a self-signed local Envoy the
   * certificate must be trusted at the browser/OS level instead.
   */
  keycloakVerifySsl?: boolean;
}

/**
 * DI token under which the consuming application supplies the
 * {@link KeycloakTokenProviderConfig} consumed by {@link KeycloakTokenProvider}.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   {
 *     provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *     useValue: {
 *       keycloakUrl: "https://auth.example.com/auth",
 *       realm: "ondewo-ccai-platform",
 *       clientId: "ondewo-nlu-cai-sdk-public",
 *       refreshToken: environment.offlineRefreshToken,
 *     } satisfies KeycloakTokenProviderConfig,
 *   },
 * ]
 * ```
 */
export const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig> =
  new InjectionToken<KeycloakTokenProviderConfig>("ONDEWO_VTSI_KEYCLOAK_TOKEN_PROVIDER_CONFIG");

/** The subset of the Keycloak token-endpoint JSON body this provider consumes. */
interface KeycloakTokenResponse {
  /** The short-lived bearer access token. */
  access_token: string;
  /** The (optionally rotated) offline refresh token; absent if none was issued. */
  refresh_token?: string;
  /** The access token lifetime in seconds, as reported by Keycloak. */
  expires_in?: number;
}

/**
 * Error raised when the Keycloak token endpoint rejects a login/refresh request
 * or returns a body without a usable `access_token`.
 */
export class KeycloakAuthenticationError extends Error {
  /**
   * @param message a human-readable description of the authentication failure.
   */
  public constructor(message: string) {
    super(message);
    this.name = "KeycloakAuthenticationError";
  }
}

/**
 * A concrete, ready-to-use {@link TokenProvider} that performs the Keycloak
 * offline-token flow itself, so consumers get background access-token refresh
 * **without** implementing `TokenProvider` (or pulling in `keycloak-js`).
 *
 * Lifecycle:
 *
 * 1. {@link initialize} performs a one-time login against the realm's token
 *    endpoint — either a `refresh_token` grant (when a pre-acquired offline
 *    refresh token is configured) or a ROPC `password` grant with
 *    `scope=offline_access` for a 2FA-exempt technical user — and stores the
 *    resulting access + offline-refresh tokens.
 * 2. A background timer then refreshes the access token shortly *before* it
 *    expires ({@link REFRESH_SKEW_IN_S} of head-room), keeping the cached token
 *    fresh. The loop stops once `tokenExpirationInS` (if configured) has elapsed.
 * 3. {@link getToken} synchronously returns the current cached access token (or
 *    `null` before initialization / after the loop has lapsed), satisfying the
 *    {@link TokenProvider} contract the auth interceptors consume.
 *
 * Register it at application startup (e.g. via `APP_INITIALIZER`) so the first
 * token is acquired before any VTSI request is issued:
 *
 * ```ts
 * provideOndewoVtsiAuth(KeycloakTokenProvider),
 * {
 *   provide: APP_INITIALIZER,
 *   multi: true,
 *   deps: [TOKEN_PROVIDER],
 *   useFactory: (p: KeycloakTokenProvider) => () => p.initialize(),
 * },
 * ```
 *
 * SECURITY: when configured with `username` + `password`, the provider sends a
 * ROPC grant — use that mode only for headless/technical accounts. The
 * `refreshToken` mode is preferred for browser apps as no password is handled.
 */
@Injectable({ providedIn: "root" })
export class KeycloakTokenProvider implements TokenProvider, OnDestroy {
  /** Pre-computed OIDC token endpoint URL for the configured realm. */
  private readonly tokenEndpoint: string;
  /** The current access token, or `null` before {@link initialize} / after lapse. */
  private accessToken: string | null = null;
  /** The current offline refresh token; empty until a login response issues one. */
  private refreshToken: string = "";
  /** The pre-acquired offline refresh token used to bootstrap login; empty in password mode. */
  private readonly configRefreshToken: string;
  /** The ROPC username for password-mode login; empty in refresh-token mode. */
  private readonly username: string;
  /** The ROPC password for password-mode login; empty in refresh-token mode. */
  private readonly password: string;
  /**
   * Whether TLS-certificate verification is requested for the token-endpoint
   * call. Defaults to `true`. Stored for cross-SDK config parity only — it is a
   * NO-OP in this browser client (the browser owns the TLS handshake), so the
   * outgoing {@link postToken} call is unaffected by its value. See
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl}.
   */
  private readonly verifySsl: boolean;
  /** Handle of the armed refresh timer, or `null` when no refresh is scheduled. */
  private timer: ReturnType<typeof setTimeout> | null = null;
  /** Whether {@link ngOnDestroy} ran; suppresses any further (re-)scheduling. */
  private destroyed: boolean = false;
  /** Absolute epoch-ms deadline for the bounded loop, or `null` when unbounded. */
  private deadlineInMs: number | null = null;
  /** The validated, non-null runtime configuration. */
  private readonly config: KeycloakTokenProviderConfig;

  /**
   * @param http the Angular `HttpClient` used for the token-endpoint calls.
   * @param config the {@link KeycloakTokenProviderConfig} supplied under
   *   {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
   * @throws {@link KeycloakAuthenticationError} if `config` is missing or its
   *   required fields / credential mode are absent or malformed.
   */
  public constructor(
    private readonly http: HttpClient,
    @Optional() @Inject(KEYCLOAK_TOKEN_PROVIDER_CONFIG) config: KeycloakTokenProviderConfig | null
  ) {
    if (config === null) {
      throw new KeycloakAuthenticationError(
        "KeycloakTokenProvider requires a KeycloakTokenProviderConfig under KEYCLOAK_TOKEN_PROVIDER_CONFIG"
      );
    }
    this.assertConfig(config);
    this.config = config;
    this.configRefreshToken = config.refreshToken === undefined ? "" : config.refreshToken;
    this.username = config.username === undefined ? "" : config.username;
    this.password = config.password === undefined ? "" : config.password;
    // Stored for cross-SDK config parity; a no-op on the browser transport (see field doc).
    this.verifySsl = config.keycloakVerifySsl ?? true;
    const base: string = config.keycloakUrl.replace(/\/+$/, "");
    this.tokenEndpoint = `${base}/realms/${encodeURIComponent(config.realm)}/protocol/openid-connect/token`;
  }

  /**
   * Perform the one-time login and arm the first background refresh. Idempotent:
   * a second call after a successful initialization is a no-op (the existing
   * refresh loop keeps the token fresh).
   *
   * @returns a promise that resolves once the first access token is stored and
   *   the background refresh is armed.
   * @throws {@link KeycloakAuthenticationError} if the token endpoint rejects the
   *   login or the response carries no `access_token` / `refresh_token`.
   */
  public async initialize(): Promise<void> {
    if (this.accessToken !== null) {
      return;
    }
    const response: KeycloakTokenResponse = await this.postToken(this.buildLoginParams(), "login");
    this.storeTokens(response);
    if (this.refreshToken.length === 0) {
      throw new KeycloakAuthenticationError(
        "Keycloak token response did not contain a refresh_token; the SDK client must have " +
          "directAccessGrants + the offline_access scope (e.g. ondewo-nlu-cai-sdk-public)"
      );
    }
    if (this.config.tokenExpirationInS !== undefined) {
      this.deadlineInMs = Date.now() + this.config.tokenExpirationInS * 1000;
    }
    this.scheduleRefresh(response.expires_in);
  }

  /**
   * Return the current access token, satisfying the {@link TokenProvider}
   * contract consumed by the auth interceptors.
   *
   * @returns the current access token, or `null` before {@link initialize} has
   *   completed / after the bounded refresh loop has lapsed.
   */
  public getToken(): TokenResult {
    return this.accessToken;
  }

  /**
   * The resolved TLS-verification setting from
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl} (defaults to `true`).
   *
   * Exposed for cross-SDK config parity and introspection only. It is a NO-OP in
   * this browser client — the browser owns the TLS handshake, so the value never
   * reaches {@link postToken} and does not change the outgoing request.
   *
   * @returns `true` when TLS verification is requested (the default), `false`
   *   when the config explicitly opted out (still inert here).
   */
  public get keycloakVerifySsl(): boolean {
    return this.verifySsl;
  }

  /** Stop the background refresh loop when the provider is torn down. */
  public ngOnDestroy(): void {
    this.destroyed = true;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  /**
   * Exchange the offline refresh token for a fresh access token and re-arm the
   * next refresh. No-ops once destroyed or once the bounded deadline has elapsed
   * (in which case the loop is allowed to lapse).
   */
  private async refresh(): Promise<void> {
    if (this.destroyed) {
      return;
    }
    if (this.deadlineInMs !== null && Date.now() >= this.deadlineInMs) {
      return;
    }
    const response: KeycloakTokenResponse = await this.postToken(
      {
        grant_type: "refresh_token",
        client_id: this.config.clientId,
        refresh_token: this.refreshToken
      },
      "refresh"
    );
    this.storeTokens(response);
    this.scheduleRefresh(response.expires_in);
  }

  /**
   * Arm a single timer for the next refresh, clamped to the bounded deadline.
   * Stops silently once `tokenExpirationInS` has elapsed. Only ever called from
   * {@link initialize} and {@link refresh}, both of which have already ensured
   * the provider is not destroyed, so it does not re-check that itself.
   *
   * The delay is `expires_in` minus {@link REFRESH_SKEW_IN_S}, floored at
   * {@link MIN_REFRESH_DELAY_IN_S}, then clamped to the time left before the
   * deadline.
   *
   * @param expiresInRaw the `expires_in` (seconds) from the latest token
   *   response; a missing or non-positive value falls back to
   *   {@link MIN_REFRESH_DELAY_IN_S}.
   */
  private scheduleRefresh(expiresInRaw: number | undefined): void {
    const expiresInS: number =
      typeof expiresInRaw === "number" && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_IN_S;
    let delayInS: number = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);

    if (this.deadlineInMs !== null) {
      const remainingInMs: number = this.deadlineInMs - Date.now();
      if (remainingInMs <= 0) {
        return;
      }
      delayInS = Math.min(delayInS, remainingInMs / 1000);
    }

    this.timer = setTimeout((): void => {
      void this.refresh().catch((): void => {
        // Swallow a transient background-refresh failure: the cached (possibly
        // stale) token is still returned and the next request re-authenticates
        // on UNAUTHENTICATED. Surfacing it here would crash the timer callback.
      });
    }, delayInS * 1000);
  }

  /**
   * POST a form-encoded body to the token endpoint and return the parsed JSON.
   *
   * @param params form fields to URL-encode (grant type, client id, credentials).
   * @param action `"login"` / `"refresh"` for the error message.
   * @returns the parsed {@link KeycloakTokenResponse}.
   * @throws {@link KeycloakAuthenticationError} on a non-2xx status.
   */
  private async postToken(params: Record<string, string>, action: string): Promise<KeycloakTokenResponse> {
    const body: string = new URLSearchParams(params).toString();
    try {
      return await firstValueFrom(
        this.http.post<KeycloakTokenResponse>(this.tokenEndpoint, body, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
          }
        })
      );
    } catch (caught: unknown) {
      let detail: string;
      if (caught instanceof HttpErrorResponse) {
        detail = `HTTP ${caught.status}: ${caught.message}`;
      } else if (caught instanceof Error) {
        detail = caught.message;
      } else {
        detail = "unknown error";
      }
      throw new KeycloakAuthenticationError(`Keycloak token ${action} failed: ${detail}`);
    }
  }

  /**
   * Store the access token, the (optionally rotated) refresh token, and the
   * computed deadline-relative state from a token response.
   *
   * @param response the parsed token-endpoint response.
   * @throws {@link KeycloakAuthenticationError} if the response carries no
   *   non-empty `access_token`.
   */
  private storeTokens(response: KeycloakTokenResponse): void {
    if (typeof response.access_token !== "string" || response.access_token.length === 0) {
      throw new KeycloakAuthenticationError("Keycloak token response did not contain an access_token");
    }
    this.accessToken = response.access_token;
    // Keycloak may rotate the offline refresh token; keep the newest one when
    // present so a response that omits it does not blank out the offline token.
    if (typeof response.refresh_token === "string" && response.refresh_token.length > 0) {
      this.refreshToken = response.refresh_token;
    }
  }

  /**
   * Build the form parameters for the one-time login: a `refresh_token` grant
   * when a pre-acquired offline refresh token is configured, otherwise a ROPC
   * `password` grant with `scope=offline_access`. The credential mode has already
   * been validated by {@link assertConfig}.
   *
   * @returns the URL-encodable form fields for the initial token request.
   */
  private buildLoginParams(): Record<string, string> {
    if (this.configRefreshToken.length > 0) {
      return {
        grant_type: "refresh_token",
        client_id: this.config.clientId,
        refresh_token: this.configRefreshToken
      };
    }
    return {
      grant_type: "password",
      client_id: this.config.clientId,
      username: this.username,
      password: this.password,
      scope: "offline_access"
    };
  }

  /**
   * Validate the supplied config: required string fields plus exactly one
   * credential mode (offline refresh token, or username + password).
   *
   * @param config the {@link KeycloakTokenProviderConfig} to validate.
   * @throws {@link KeycloakAuthenticationError} on any missing/empty field or an
   *   incomplete credential mode.
   */
  private assertConfig(config: KeycloakTokenProviderConfig): void {
    for (const key of ["keycloakUrl", "realm", "clientId"] as const) {
      const value: string = config[key];
      if (typeof value !== "string" || value.length === 0) {
        throw new KeycloakAuthenticationError(`KeycloakTokenProviderConfig.${key} is required and must be non-empty`);
      }
    }
    const hasRefreshToken: boolean = typeof config.refreshToken === "string" && config.refreshToken.length > 0;
    const hasCredentials: boolean =
      typeof config.username === "string" &&
      config.username.length > 0 &&
      typeof config.password === "string" &&
      config.password.length > 0;
    if (!hasRefreshToken && !hasCredentials) {
      throw new KeycloakAuthenticationError(
        "KeycloakTokenProviderConfig requires either a refreshToken or both username and password"
      );
    }
  }
}
