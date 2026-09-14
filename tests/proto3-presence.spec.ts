/**
 * proto3 EXPLICIT PRESENCE across field types — the general property, not one field's contract.
 *
 * `tests/asterisk-version.spec.ts` proves presence for `AsteriskConfigs.asteriskVersion`, the field
 * the 5.14.0 compiler bump was cut for. That is one `optional string` out of the 65 the pinned
 * `ondewo-vtsi-api` 8.7.0 declares (measured: `projects.proto` 5, `calls.proto` 43, `logs.proto`
 * 17), so on its own it cannot distinguish "the codegen restores presence" from "the codegen
 * happens to restore presence for one string in one message". This suite asserts the property over
 * additional fields of four different wire shapes, in two different messages.
 *
 * **Everything here is asserted on BYTES.** The Angular stubs expose no `hasX()` / `clearX()` pair,
 * and while the runtime does keep the two states apart (`resumeToken` is `undefined` when unset and
 * `''` when explicitly empty), the DECLARED type of the property — and of `AsObject` and
 * `AsProtobufJSON` — is a non-nullable `string` that the unset case contradicts. So typed caller
 * code cannot branch on presence without lying to the compiler, and a suite that asked the getter
 * would be resting its whole claim on a surface the declaration says does not exist. Measured for
 * the nodejs sibling in plan section A6, the getter is worse still: `getPageToken()` returns `""`
 * for BOTH states. The bytes are the one representation that is correct in every SDK and the only
 * one the server ever sees.
 *
 * **The contrast is what makes the claim non-vacuous.** `ListCallLogsRequest.vtsi_project_name` is
 * a PLAIN `string` — no `optional` keyword — and it is still emitted under a truthiness guard, so
 * an empty one encodes identically to an absent one. That is correct proto3 behaviour for a field
 * without explicit presence, and it is the behaviour every field in this message had before 5.14.0.
 * Asserting it alongside the optional fields is what proves the optional ones are being treated
 * differently rather than everything being written unconditionally.
 *
 * ---
 *
 * **The descriptor-driven sweep that plan section A6 asks for is BLOCKED, and this suite is the
 * hand-picked stand-in.** A6 wants every optional field swept from a committed
 * `presence/presence-manifest.json` emitted by `make presence_check` in `ondewo-vtsi-api`. Three
 * things are missing, and none of them is in this repository's gift:
 *
 *   1. That manifest exists only on the api repo's own unreleased `feature/OND233-367-…` branch
 *      (commit `cc6d7fc`). No `9.x` tag carries it, and this repository pins `tags/8.7.0`, whose
 *      tree has no `presence/` directory at all — so there is nothing to drive a sweep from.
 *   2. A6 states that "each repo already carries a `restore_ci_test_setup` target" and that every
 *      new spec must be added to a `.ci-package.json`. Neither exists here: `git grep` finds no
 *      such target in the `Makefile` and there is no `.ci-package.json` in the tree.
 *   3. Consequently there is no mechanism here to re-attach `scripts` / `devDependencies` after the
 *      codegen minimises the root manifest, which is the problem A6's bullet was written about.
 *
 * So this file is deliberately DESCRIPTOR-FREE: the fixtures are named by hand, and every expected
 * byte sequence below was measured against the committed stubs rather than derived. When the api
 * repo releases the manifest and this repository grows the two missing pieces, this suite becomes
 * the worked examples the sweep is checked against — it should not simply be deleted for one.
 */
import { ListCallLogsRequest } from '../api/ondewo/vtsi/logs.pb';
import { ListVtsiProjectsRequest } from '../api/ondewo/vtsi/projects.pb';
import { fieldNumbersOnTheWire } from './wire-format';

/** A representative resource name, so the anchor field carries a realistic value. */
const VTSI_PROJECT_NAME: string = 'vtsi-projects/p1';

/** `vtsi_project_name` is field 1 and the only field an otherwise-empty fixture puts on the wire. */
const ANCHOR_FIELD_NUMBER: number = 1;

/** Field 1 as it is actually encoded: tag `0x0a`, length 16, then the name's ASCII bytes. */
const ANCHOR_BYTES: number[] = [0x0a, VTSI_PROJECT_NAME.length, ...asciiBytes(VTSI_PROJECT_NAME)];

/**
 * The byte values of a pure-ASCII string.
 *
 * Written out rather than reached for through `TextEncoder`, whose availability depends on the jest
 * environment rather than on the code under test.
 *
 * @param text an ASCII-only string
 * @returns one byte per character
 */
function asciiBytes(text: string): number[] {
	return text.split('').map((character: string): number => character.charCodeAt(0));
}

/**
 * One `optional` field of `ListCallLogsRequest`, with both halves of its presence contract.
 *
 * `explicitDefaultBytes` is the load-bearing one: it is what a caller who deliberately sends the
 * type's zero value puts on the wire, and it is exactly what a pre-5.14.0 truthiness guard drops.
 */
interface OptionalFieldCase {
	/** The generated property name, used to name a failure. */
	readonly property: string;
	/** The field number declared in `ondewo/vtsi/logs.proto`. */
	readonly fieldNumber: number;
	/** The declared proto type, so a failure says which wire shape regressed. */
	readonly protoType: string;
	/** Sets the field to its own type's zero value — the state only presence can express. */
	readonly setExplicitDefault: (request: ListCallLogsRequest) => void;
	/** Sets the field to a representative non-default value. */
	readonly setRealValue: (request: ListCallLogsRequest) => void;
	/** Measured bytes appended for the explicit default. */
	readonly explicitDefaultBytes: number[];
	/** Measured bytes appended for the real value. */
	readonly realValueBytes: number[];
	/** What the getter reports once the explicit default has been round-tripped. */
	readonly explicitDefaultValue: number | string | boolean;
}

/**
 * The fixtures, chosen to span four distinct wire shapes rather than four names.
 *
 * A single message carries all four, which is what lets one encoding be compared against one
 * baseline: `max_lines` is `int32`, `before_seq` is `int64` (surfaced as a JS string, because a
 * 64-bit integer does not fit a JS `number`), `resume_token` is `string` and `oldest_first` is
 * `bool`. Two are length-delimited or varint in ways the other is not, and the `bool` case is the
 * one a truthiness guard mangles most obviously — `false` is exactly as unsendable as `''`.
 */
const OPTIONAL_FIELD_CASES: OptionalFieldCase[] = [
	{
		property: 'maxLines',
		fieldNumber: 3,
		protoType: 'int32',
		setExplicitDefault: (request: ListCallLogsRequest): void => {
			request.maxLines = 0;
		},
		setRealValue: (request: ListCallLogsRequest): void => {
			request.maxLines = 250;
		},
		// tag 0x18 = field 3, wire type 0 (varint); then the value.
		explicitDefaultBytes: [0x18, 0x00],
		realValueBytes: [0x18, 0xfa, 0x01],
		explicitDefaultValue: 0
	},
	{
		property: 'beforeSeq',
		fieldNumber: 4,
		protoType: 'int64',
		setExplicitDefault: (request: ListCallLogsRequest): void => {
			request.beforeSeq = '0';
		},
		setRealValue: (request: ListCallLogsRequest): void => {
			request.beforeSeq = '4294967296';
		},
		// tag 0x20 = field 4, wire type 0. 4294967296 is 2^32, so its varint needs five bytes and
		// overflows what a 32-bit shift could carry — the case the wire reader's multiplier exists for.
		explicitDefaultBytes: [0x20, 0x00],
		realValueBytes: [0x20, 0x80, 0x80, 0x80, 0x80, 0x10],
		explicitDefaultValue: '0'
	},
	{
		property: 'resumeToken',
		fieldNumber: 6,
		protoType: 'string',
		setExplicitDefault: (request: ListCallLogsRequest): void => {
			request.resumeToken = '';
		},
		setRealValue: (request: ListCallLogsRequest): void => {
			request.resumeToken = 'tok';
		},
		// tag 0x32 = field 6, wire type 2 (length-delimited); then the length, then the bytes.
		explicitDefaultBytes: [0x32, 0x00],
		realValueBytes: [0x32, 0x03, ...asciiBytes('tok')],
		explicitDefaultValue: ''
	},
	{
		property: 'oldestFirst',
		fieldNumber: 7,
		protoType: 'bool',
		setExplicitDefault: (request: ListCallLogsRequest): void => {
			request.oldestFirst = false;
		},
		setRealValue: (request: ListCallLogsRequest): void => {
			request.oldestFirst = true;
		},
		// tag 0x38 = field 7, wire type 0.
		explicitDefaultBytes: [0x38, 0x00],
		realValueBytes: [0x38, 0x01],
		explicitDefaultValue: false
	}
];

/** The wire shapes this suite must keep covering; a fixture set that loses one is a regression. */
const REQUIRED_PROTO_TYPES: string[] = ['int32', 'int64', 'string', 'bool'];

/**
 * An otherwise-valid `ListCallLogsRequest` carrying nothing but its required project name.
 *
 * @returns a request with every `optional` field left unsaid
 */
function makeRequest(): ListCallLogsRequest {
	const request: ListCallLogsRequest = new ListCallLogsRequest();
	request.vtsiProjectName = VTSI_PROJECT_NAME;
	return request;
}

describe('proto3 explicit presence across field types', () => {
	it('covers at least one field of every wire shape the sweep would have to cover', () => {
		// The fixtures are hand-picked (see the file header: the descriptor-driven sweep is blocked),
		// so the ONE thing that can silently rot is the fixture set itself. A future edit that drops
		// the bool case would leave three green cases and no coverage of the shape a truthiness guard
		// mangles most. Stated as a floor on the set, not on a count.
		expect(OPTIONAL_FIELD_CASES.map((fieldCase: OptionalFieldCase): string => fieldCase.protoType).sort()).toEqual(
			[...REQUIRED_PROTO_TYPES].sort()
		);
	});

	it('puts no optional field on the wire when the caller says nothing', () => {
		// The ABSOLUTE half of the proof, for all four at once. Stated as the set of field numbers
		// actually encoded rather than as "the encodings differ", which would still pass if a future
		// codegen wrote some other placeholder for an unset field.
		expect(fieldNumbersOnTheWire(makeRequest().serializeBinary())).toEqual([ANCHOR_FIELD_NUMBER]);
		expect(Array.from(makeRequest().serializeBinary())).toEqual(ANCHOR_BYTES);
	});

	describe.each(OPTIONAL_FIELD_CASES)(
		'ListCallLogsRequest.$property ($protoType, field $fieldNumber)',
		(fieldCase: OptionalFieldCase) => {
			it('is written with its own default value, which is what presence is for', () => {
				// The direction the server needs, and the one a pre-5.14.0 truthiness guard silently
				// deletes: `0`, `'0'`, `''` and `false` are all falsy, so without explicit presence a
				// caller asking for exactly those values is indistinguishable from a caller asking for
				// nothing — and the server serves its own default instead of the caller's instruction.
				const request: ListCallLogsRequest = makeRequest();
				fieldCase.setExplicitDefault(request);

				expect(fieldNumbersOnTheWire(request.serializeBinary())).toEqual([ANCHOR_FIELD_NUMBER, fieldCase.fieldNumber]);
				expect(Array.from(request.serializeBinary())).toEqual([...ANCHOR_BYTES, ...fieldCase.explicitDefaultBytes]);
			});

			it('is written with a real value', () => {
				const request: ListCallLogsRequest = makeRequest();
				fieldCase.setRealValue(request);

				expect(Array.from(request.serializeBinary())).toEqual([...ANCHOR_BYTES, ...fieldCase.realValueBytes]);
			});

			it('keeps unset and explicitly-default distinct across a round trip through bytes', () => {
				// Nothing between here and the server — a proxy, a cache, an Angular client re-emitting a
				// decoded message — may promote "unset" to the default or demote the default to "unset".
				const unsetBytes: Uint8Array = makeRequest().serializeBinary();
				const defaulted: ListCallLogsRequest = makeRequest();
				fieldCase.setExplicitDefault(defaulted);
				const defaultedBytes: Uint8Array = defaulted.serializeBinary();

				expect(Array.from(defaultedBytes)).not.toEqual(Array.from(unsetBytes));

				for (const [state, bytes, expected] of [
					['unset', unsetBytes, undefined],
					['explicit default', defaultedBytes, fieldCase.explicitDefaultValue]
				] as [string, Uint8Array, number | string | boolean | undefined][]) {
					const received: ListCallLogsRequest = ListCallLogsRequest.deserializeBinary(bytes);
					const readBack: number | string | boolean | undefined =
						received[fieldCase.property as 'maxLines' | 'beforeSeq' | 'resumeToken' | 'oldestFirst'];
					// Keyed by the state name so a failure says WHICH state collapsed, and compared with
					// toStrictEqual because toEqual treats an undefined property as an absent one — exactly
					// the distinction under test.
					expect({ state, value: readBack }).toStrictEqual({ state, value: expected });
					expect(Array.from(received.serializeBinary())).toStrictEqual(Array.from(bytes));
				}
			});
		}
	);

	it('still FLATTENS a field declared without the optional keyword, which is what makes the above a claim', () => {
		// `vtsi_project_name` is a plain proto3 `string`. It has no explicit presence, so `''` and
		// "said nothing" are the same instruction and the generated writer correctly drops both. If
		// this ever started encoding an empty name, the four cases above would no longer be evidence
		// that the OPTIONAL fields are treated specially — everything would simply be written.
		const named: ListCallLogsRequest = new ListCallLogsRequest();
		named.vtsiProjectName = '';
		const unnamed: ListCallLogsRequest = new ListCallLogsRequest();

		expect(Array.from(named.serializeBinary())).toEqual([]);
		expect(Array.from(unnamed.serializeBinary())).toEqual([]);
	});

	it('holds in a second message, so it is not a quirk of one generated class', () => {
		// `ListVtsiProjectsRequest.page_token` is the field plan section A6 measured the nodejs stub
		// on, and the one a paging caller reaches for. Field 4 (`nlu_agent_names`, repeated) anchors
		// the encoding; field 1 is an enum without explicit presence and is deliberately set to its
		// own zero value to show it is dropped while field 2's zero value is not.
		const anchorName: string = 'projects/p/agent';
		const anchorBytes: number[] = [0x22, anchorName.length, ...asciiBytes(anchorName)];

		const unset: ListVtsiProjectsRequest = new ListVtsiProjectsRequest();
		unset.nluAgentNames = [anchorName];
		unset.vtsiProjectView = 0;
		expect(Array.from(unset.serializeBinary())).toEqual(anchorBytes);

		const emptyToken: ListVtsiProjectsRequest = new ListVtsiProjectsRequest();
		emptyToken.nluAgentNames = [anchorName];
		emptyToken.vtsiProjectView = 0;
		emptyToken.pageToken = '';
		// tag 0x12 = field 2, wire type 2, length 0. Written BEFORE field 4, in field-number order.
		expect(Array.from(emptyToken.serializeBinary())).toEqual([0x12, 0x00, ...anchorBytes]);
		expect(fieldNumbersOnTheWire(emptyToken.serializeBinary())).toEqual([2, 4]);
	});

	it('is not expressible in the declared TypeScript type, which is why every assertion reads bytes', () => {
		// The unsound surface, stated once so nobody rewrites this suite against it. The RUNTIME does
		// distinguish the two states — that is 5.14.0 dropping the `refineValues` coercion — but the
		// DECLARATION does not: `resumeToken` is typed non-nullable `string` and reads `undefined`,
		// and `AsObject` carries the key with an undefined value rather than omitting it. Typed caller
		// code therefore cannot branch on presence without contradicting its own types, which is the
		// reason this suite treats the getter as a symptom and the encoding as the contract.
		const unset: ListCallLogsRequest = makeRequest();
		const explicitlyEmpty: ListCallLogsRequest = makeRequest();
		explicitlyEmpty.resumeToken = '';

		const unsetObject: ListCallLogsRequest.AsObject = unset.toObject();
		expect(Object.prototype.hasOwnProperty.call(unsetObject, 'resumeToken')).toBe(true);
		expect(unsetObject.resumeToken).toBeUndefined();
		expect(explicitlyEmpty.toObject().resumeToken).toBe('');

		// And the distinction survives the wire in both directions, which the declaration cannot say.
		const unsetAfterWire: ListCallLogsRequest = ListCallLogsRequest.deserializeBinary(unset.serializeBinary());
		const emptyAfterWire: ListCallLogsRequest = ListCallLogsRequest.deserializeBinary(
			explicitlyEmpty.serializeBinary()
		);
		expect(unsetAfterWire.resumeToken).toBeUndefined();
		expect(emptyAfterWire.resumeToken).toBe('');
		expect(Array.from(unset.serializeBinary())).not.toEqual(Array.from(explicitlyEmpty.serializeBinary()));
	});
});
