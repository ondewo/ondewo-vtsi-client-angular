/**
 * Minimal, idiomatic example of consuming `@ondewo/vtsi-client-angular`.
 *
 * It shows the whole round-trip an application performs against the VTSI backend:
 *
 * 1. Inject the generated `@ngx-grpc` service client (`CallsClient`) — Angular
 *    constructs it for you once `provideOndewoVtsiAuth(...)` has registered the
 *    client factory and this library's {@link AuthGrpcInterceptor}.
 * 2. Build a strongly-typed request message (`ListCallersRequest`).
 * 3. Call a representative unary RPC (`Calls/ListCallers`) and map the response
 *    stream to the domain object the UI cares about (the list of callers).
 *
 * Authentication is intentionally invisible here: the consumer never touches a
 * token. Once `provideOndewoVtsiAuth(...)` is wired at bootstrap (see the
 * package README), the {@link AuthGrpcInterceptor} attaches the current Keycloak
 * access token as an `Authorization: Bearer <token>` credential to every request
 * this client sends. A Keycloak bearer token is the only supported credential.
 */
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CallsClient } from "../../../api/ondewo/vtsi/calls.pbsc";
import { Caller, ListCallersRequest, ListCallersResponse } from "../../../api/ondewo/vtsi/calls.pb";

/** Page size encoded into the request's `page_token` to avoid the server's default of 10. */
export const LIST_CALLERS_PAGE_SIZE: string = "page_size-10000";

/**
 * Example application service that lists the callers configured for a VTSI
 * project through the generated {@link CallsClient}.
 */
@Injectable({ providedIn: "root" })
export class VtsiCallsExample {
  /**
   * @param callsClient the generated `ondewo.vtsi.Calls` gRPC-web client. In an
   *   application it is provided by Angular DI; in a unit test a mock is passed
   *   directly to the constructor.
   */
  public constructor(private readonly callsClient: CallsClient) {}

  /**
   * List every caller configured for the given VTSI project.
   *
   * @param vtsiProjectName the fully-qualified VTSI project resource name, e.g.
   *   `projects/<uuid>`.
   * @returns an observable that emits the project's callers once the server
   *   responds. The Keycloak bearer token is attached transparently by the
   *   library's gRPC auth interceptor.
   */
  public listCallers(vtsiProjectName: string): Observable<Caller[]> {
    const request: ListCallersRequest = new ListCallersRequest({
      vtsiProjectName,
      pageToken: LIST_CALLERS_PAGE_SIZE
    });
    return this.callsClient
      .listCallers(request)
      .pipe(map((response: ListCallersResponse): Caller[] => response.callers ?? []));
  }
}
