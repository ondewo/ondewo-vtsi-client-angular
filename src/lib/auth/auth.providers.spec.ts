/**
 * Specs for {@link provideOndewoVtsiAuth}, the convenience factory that wires a
 * consumer's `TokenProvider` and the {@link AuthGrpcInterceptor} into Angular's
 * DI.
 *
 * Rather than bootstrapping a full environment injector (which would pull in
 * zone.js / `TestBed`), each spec flattens the opaque `EnvironmentProviders`
 * back into its raw provider list and asserts the exact bindings: the
 * `TokenProvider` class itself, the `TOKEN_PROVIDER` `useExisting` alias, and
 * the `GRPC_INTERCEPTORS` multi-provider for the interceptor.
 */
import { EnvironmentProviders, Provider } from "@angular/core";
import { GRPC_INTERCEPTORS } from "@ngx-grpc/core";
import { AuthGrpcInterceptor } from "./auth-grpc.interceptor";
import { provideOndewoVtsiAuth } from "./auth.providers";
import { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";

/** A concrete `TokenProvider` the consumer would register. */
class KeycloakTokenProvider implements TokenProvider {
  /**
   * @returns a fixed token; the value is irrelevant to these wiring-only specs.
   */
  public getToken(): TokenResult {
    return "token-from-keycloak";
  }
}

/**
 * `makeEnvironmentProviders` wraps the provider array in an opaque
 * `EnvironmentProviders` whose flat list lives under the internal `ɵproviders`
 * field. Reading it lets us assert the exact wiring without bootstrapping a full
 * Angular environment injector (which would need zone.js / TestBed).
 *
 * @param environmentProviders the result of {@link provideOndewoVtsiAuth}.
 * @returns the raw, flat list of providers it contributes.
 */
function flatten(environmentProviders: EnvironmentProviders): Provider[] {
  return (environmentProviders as unknown as { ɵproviders: Provider[] }).ɵproviders;
}

describe("provideOndewoVtsiAuth", (): void => {
  /** The supplied `TokenProvider` class is registered so Angular can instantiate it. */
  it("registers the supplied TokenProvider class so it is instantiable", (): void => {
    const providers: Provider[] = flatten(provideOndewoVtsiAuth(KeycloakTokenProvider));
    expect(providers).toContain(KeycloakTokenProvider);
  });

  /** `TOKEN_PROVIDER` resolves to the same instance via `useExisting`. */
  it("aliases TOKEN_PROVIDER to the supplied implementation via useExisting", (): void => {
    const providers: Provider[] = flatten(provideOndewoVtsiAuth(KeycloakTokenProvider));
    const tokenBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" &&
        provider !== null &&
        "provide" in provider &&
        provider.provide === TOKEN_PROVIDER
    );
    expect(tokenBinding).toEqual({ provide: TOKEN_PROVIDER, useExisting: KeycloakTokenProvider });
  });

  /** The interceptor is contributed as a `multi` `GRPC_INTERCEPTORS` provider. */
  it("registers AuthGrpcInterceptor as a multi GRPC_INTERCEPTORS provider", (): void => {
    const providers: Provider[] = flatten(provideOndewoVtsiAuth(KeycloakTokenProvider));
    const interceptorBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" &&
        provider !== null &&
        "provide" in provider &&
        provider.provide === GRPC_INTERCEPTORS
    );
    expect(interceptorBinding).toEqual({
      provide: GRPC_INTERCEPTORS,
      useClass: AuthGrpcInterceptor,
      multi: true
    });
  });
});
