/**
 * Specs for the public auth barrel (`./index`).
 *
 * Guards the package's exported auth surface: a missing or renamed re-export is
 * a breaking change for consumers, so the barrel is asserted member-by-member
 * here rather than relying on the individual modules' own specs.
 */
import * as authApi from "./index";

describe("auth public API barrel", (): void => {
  /**
   * Every hand-written symbol the library promises to export must be present and
   * of the expected kind (callable functions/classes, string constants, and the
   * DI token).
   */
  it("re-exports the full hand-written auth surface", (): void => {
    expect(typeof authApi.authHttpInterceptor).toBe("function");
    expect(typeof authApi.AuthGrpcInterceptor).toBe("function");
    expect(typeof authApi.provideOndewoVtsiAuth).toBe("function");
    expect(typeof authApi.resolveToken).toBe("function");
    expect(typeof authApi.resolveBearerValue).toBe("function");
    expect(typeof authApi.buildBearerValue).toBe("function");
    expect(authApi.AUTHORIZATION_HEADER).toBe("authorization");
    expect(authApi.BEARER_PREFIX).toBe("Bearer ");
    expect(authApi.TOKEN_PROVIDER).toBeDefined();
  });
});
