/**
 * Mock-based specs for {@link VtsiCallsExample}.
 *
 * These prove the example works WITHOUT a live VTSI backend: the generated
 * {@link CallsClient} is replaced by a jest mock, so the specs assert exactly
 * two things — the example builds the right `ListCallersRequest`, and it maps
 * the `ListCallersResponse` (and errors) the way a consumer expects. No gRPC
 * channel is ever opened.
 */
import { firstValueFrom, Observable, of, throwError } from "rxjs";
import { CallsClient } from "../../../api/ondewo/vtsi/calls.pbsc";
import { Caller, ListCallersRequest, ListCallersResponse } from "../../../api/ondewo/vtsi/calls.pb";
import { LIST_CALLERS_PAGE_SIZE, VtsiCallsExample } from "./vtsi-calls.example";

/** A representative VTSI project resource name used across the specs. */
const PROJECT_NAME: string = "projects/11111111-1111-1111-1111-111111111111";

/** A jest mock of the single RPC the example calls, plus the example under test. */
interface Harness {
  /** The example service wired to the mocked client. */
  example: VtsiCallsExample;
  /** The jest mock standing in for `CallsClient.listCallers`. */
  listCallers: jest.Mock<Observable<ListCallersResponse>, [ListCallersRequest]>;
}

/**
 * Build a {@link VtsiCallsExample} backed by a mocked `CallsClient` whose
 * `listCallers` returns the supplied stream.
 *
 * @param stream the observable the mocked `listCallers` should return.
 * @returns the example service and the `listCallers` mock for assertions.
 */
function buildHarness(stream: Observable<ListCallersResponse>): Harness {
  const listCallers: jest.Mock<Observable<ListCallersResponse>, [ListCallersRequest]> = jest
    .fn<Observable<ListCallersResponse>, [ListCallersRequest]>()
    .mockReturnValue(stream);
  const client: CallsClient = { listCallers } as unknown as CallsClient;
  return { example: new VtsiCallsExample(client), listCallers };
}

describe("VtsiCallsExample", (): void => {
  /** The example builds a `ListCallersRequest` carrying the project name and an explicit page size. */
  it("builds a ListCallersRequest with the project name and an explicit page size", async (): Promise<void> => {
    const harness: Harness = buildHarness(of(new ListCallersResponse({ callers: [] })));

    await firstValueFrom(harness.example.listCallers(PROJECT_NAME));

    expect(harness.listCallers).toHaveBeenCalledTimes(1);
    const request: ListCallersRequest = harness.listCallers.mock.calls[0][0];
    expect(request).toBeInstanceOf(ListCallersRequest);
    expect(request.vtsiProjectName).toBe(PROJECT_NAME);
    expect(request.pageToken).toBe(LIST_CALLERS_PAGE_SIZE);
  });

  /** A populated response is mapped straight through to the callers array. */
  it("maps the response to its callers", async (): Promise<void> => {
    const caller: Caller = new Caller({ name: "callers/abc", callName: "outbound-campaign" });
    const harness: Harness = buildHarness(of(new ListCallersResponse({ callers: [caller] })));

    const emitted: Caller[] = await firstValueFrom(harness.example.listCallers(PROJECT_NAME));

    expect(emitted).toHaveLength(1);
    expect(emitted[0].name).toBe("callers/abc");
    expect(emitted[0].callName).toBe("outbound-campaign");
  });

  /** A response with no `callers` field is normalized to an empty array, never `undefined`. */
  it("normalizes a response without callers to an empty array", async (): Promise<void> => {
    const harness: Harness = buildHarness(of(new ListCallersResponse({})));

    const emitted: Caller[] = await firstValueFrom(harness.example.listCallers(PROJECT_NAME));

    expect(emitted).toEqual([]);
  });

  /** A server-side error (e.g. an auth rejection) propagates to the subscriber unchanged. */
  it("propagates a server error to the caller", async (): Promise<void> => {
    const boom: Error = new Error("UNAUTHENTICATED");
    const harness: Harness = buildHarness(throwError((): Error => boom));

    await expect(firstValueFrom(harness.example.listCallers(PROJECT_NAME))).rejects.toBe(boom);
  });
});
