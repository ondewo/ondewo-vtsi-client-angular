/**
 * Specs for the {@link TOKEN_PROVIDER} DI token.
 *
 * These assert the token's identity and human-readable description so a
 * misconfigured or accidentally-renamed `InjectionToken` is caught at build
 * time rather than surfacing as an opaque DI resolution failure in a consuming
 * application.
 */
import { InjectionToken } from "@angular/core";
import { TOKEN_PROVIDER } from "./token-provider";

describe("TOKEN_PROVIDER", (): void => {
  /**
   * The exported symbol must be an `InjectionToken` whose description embeds the
   * `ONDEWO_VTSI_TOKEN_PROVIDER` marker used in DI error messages.
   */
  it("is an InjectionToken with a descriptive name", (): void => {
    expect(TOKEN_PROVIDER).toBeInstanceOf(InjectionToken);
    expect(TOKEN_PROVIDER.toString()).toContain("ONDEWO_VTSI_TOKEN_PROVIDER");
  });
});
