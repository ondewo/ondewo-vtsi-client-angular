/**
 * `AsteriskConfigs.asteriskVersion` — the generated surface for the Asterisk image tag.
 *
 * The field selects the docker image tag of the Asterisk image a VTSI project starts. On the wire
 * it is declared `optional string asterisk_version = 5`, i.e. it carries EXPLICIT PRESENCE: the
 * server falls back to its own `ONDEWO_VTSI_ASTERISK_IMAGE_TAG` default when the caller says
 * nothing, and rejects an explicitly empty tag with `INVALID_ARGUMENT`.
 *
 * **Presence survives the Angular pipeline, but ONLY on the wire — never in the declared type.**
 * The angular codegen strips the `optional` keyword from every `.proto` before protoc-gen-ng runs,
 * so the plugin cannot see it; `ondewo-proto-compiler` 5.14.0 added `fix-proto3-optional-presence.ts`,
 * which replays the `proto3_optional` flags out of a descriptor set taken BEFORE that strip and
 * rewrites the emitted stubs. What it can restore is the runtime and the encoding:
 *
 *   - `refineValues` no longer coerces the field, so an unset field really holds `undefined`;
 *   - `serializeBinaryToWriter` guards on PRESENCE (`!== undefined && !== null`) rather than on
 *     truthiness, so an explicitly empty tag is written as field 5 with length 0.
 *
 * What it does NOT restore is the TypeScript surface. There is no `hasAsteriskVersion()` /
 * `clearAsteriskVersion()` pair, and the declared type of both the getter and `AsObject` is a
 * non-nullable `string` that the runtime contradicts. **So the getter is not a presence oracle and
 * this suite does not use it as one** — every presence assertion below is made on the BYTES, which
 * are the only representation that distinguishes all three states and the only one the server ever
 * sees. Anyone porting this field to a client that needs `has`/`clear` has to say so deliberately,
 * and these assertions are what will tell them.
 *
 * Every byte sequence asserted here was measured against the committed stubs, not derived by hand.
 */
import { AsteriskConfigs } from '../api/ondewo/vtsi/projects.pb';
import { fieldNumbersOnTheWire } from './wire-format';

/** A real ONDEWO Asterisk image tag, so the value is representative rather than a placeholder. */
const ASTERISK_VERSION: string = 'alpine-3.18-18.20.2';

/** `asterisk_version` is field 5 of `AsteriskConfigs`, as declared in `ondewo/vtsi/projects.proto`. */
const ASTERISK_VERSION_FIELD_NUMBER: number = 5;

/** Field numbers an otherwise-valid fixture always puts on the wire, whatever the version does. */
const ALWAYS_ON_THE_WIRE: number[] = [3, 4];

/** Builds an otherwise-valid AsteriskConfigs — the oneof is set, as the server requires. */
function makeConfigs(asteriskVersion?: string): AsteriskConfigs {
	const configs: AsteriskConfigs = new AsteriskConfigs();
	configs.asteriskConfigsTargetDirectoryName = 'asterisk_configs_dir';
	configs.asteriskPort = 5060;
	if (asteriskVersion !== undefined) {
		configs.asteriskVersion = asteriskVersion;
	}
	return configs;
}

describe('AsteriskConfigs.asteriskVersion', () => {
	it('is carried on the generated message', () => {
		const configs: AsteriskConfigs = makeConfigs(ASTERISK_VERSION);
		expect(configs.asteriskVersion).toBe(ASTERISK_VERSION);
	});

	it('survives a binary round trip', () => {
		const sent: AsteriskConfigs = makeConfigs(ASTERISK_VERSION);
		const received: AsteriskConfigs = AsteriskConfigs.deserializeBinary(sent.serializeBinary());
		expect(received.asteriskVersion).toBe(ASTERISK_VERSION);
	});

	it('appears in both object projections', () => {
		const configs: AsteriskConfigs = makeConfigs(ASTERISK_VERSION);
		expect(configs.toObject().asteriskVersion).toBe(ASTERISK_VERSION);
		expect(configs.toProtobufJSON().asteriskVersion).toBe(ASTERISK_VERSION);
	});

	it('does not participate in the asterisk_configs oneof', () => {
		// `optional` compiles to a SYNTHETIC oneof upstream. The server reads its configuration
		// variant with `WhichOneof("asterisk_configs_oneof")` and rejects an unset one as a caller
		// error, so the version must not select or clear a variant in either direction.
		const versionOnly: AsteriskConfigs = new AsteriskConfigs();
		versionOnly.asteriskVersion = ASTERISK_VERSION;
		expect(versionOnly.asteriskConfigsOneof).toBe(AsteriskConfigs.AsteriskConfigsOneofCase.none);

		expect(makeConfigs(ASTERISK_VERSION).asteriskConfigsOneof).toBe(
			AsteriskConfigs.AsteriskConfigsOneofCase.asteriskConfigsTargetDirectoryName
		);
	});

	describe('presence, asserted on the wire', () => {
		it('omits field 5 entirely when the caller says nothing', () => {
			// The ABSOLUTE half of the proof. Asserting only that the unset and empty encodings
			// DIFFER would still pass if a future codegen wrote some other placeholder for an unset
			// field, so the absence is stated as a field number that is not on the wire at all.
			expect(fieldNumbersOnTheWire(makeConfigs().serializeBinary())).toEqual(ALWAYS_ON_THE_WIRE);
		});

		it('writes field 5 with length 0 for an explicitly empty tag', () => {
			// This is the second half of the presence restoration and the direction the server needs:
			// ondewo-vtsi refuses an empty docker image tag with INVALID_ARGUMENT
			// (Validators.validate_semantic_version), and it can only do that if the empty value
			// actually reaches it. A truthiness guard — what protoc-gen-ng emits unaided, and what
			// this client shipped up to 8.5.0 — encodes '' and "unset" identically and hides a caller
			// error as a silent default.
			const unset: number[] = Array.from(makeConfigs().serializeBinary());
			const empty: number[] = Array.from(makeConfigs('').serializeBinary());

			expect(fieldNumbersOnTheWire(makeConfigs('').serializeBinary())).toEqual([
				...ALWAYS_ON_THE_WIRE,
				ASTERISK_VERSION_FIELD_NUMBER
			]);
			// Measured: exactly two bytes appended — 0x2a is field 5 with wire type 2, 0x00 is the
			// length. Asserting the bytes rather than "they differ" keeps the test honest about WHAT
			// is on the wire.
			expect(empty).toEqual([...unset, 0x2a, 0x00]);
		});

		it('writes field 5 with the tag length for a real tag', () => {
			// Measured: 0x2a, then 0x13 = 19 = the tag's byte length, then the tag itself.
			const unset: number[] = Array.from(makeConfigs().serializeBinary());
			const set: number[] = Array.from(makeConfigs(ASTERISK_VERSION).serializeBinary());
			// The tag is pure ASCII, so its UTF-8 encoding is its char codes — no TextEncoder, whose
			// availability depends on the jest environment rather than on the code under test.
			const tagBytes: number[] = ASTERISK_VERSION.split('').map((character: string): number => character.charCodeAt(0));

			expect(set).toEqual([...unset, 0x2a, tagBytes.length, ...tagBytes]);
		});

		it('keeps the three presence states distinct across a round trip through bytes', () => {
			// The property the whole feature rests on, stated once: unset, empty and set are three
			// different encodings, deserializing each recovers its own state, and re-serializing what
			// came back reproduces the bytes byte for byte. Nothing is lost in either direction, so a
			// proxy, a cache or an Angular client re-emitting a decoded message cannot silently
			// promote "unset" to "" or demote "" to "unset".
			const cases: readonly (readonly [string, Uint8Array, string | undefined])[] = [
				['unset', makeConfigs().serializeBinary(), undefined],
				['empty', makeConfigs('').serializeBinary(), ''],
				['set', makeConfigs(ASTERISK_VERSION).serializeBinary(), ASTERISK_VERSION]
			];
			const distinct: Set<string> = new Set(
				cases.map(([, bytes]: readonly [string, Uint8Array, string | undefined]): string => Array.from(bytes).join(','))
			);
			expect(distinct.size).toBe(cases.length);

			for (const [state, bytes, expected] of cases) {
				const received: AsteriskConfigs = AsteriskConfigs.deserializeBinary(bytes);
				// Keyed by the state name so a failure names WHICH state collapsed, and compared with
				// toStrictEqual because toEqual treats an undefined property as an absent one — which
				// is exactly the distinction under test.
				expect({ state, value: received.asteriskVersion }).toStrictEqual({ state, value: expected });
				expect(Array.from(received.serializeBinary())).toStrictEqual(Array.from(bytes));
			}
		});

		it('is not expressible in the declared TypeScript type, which is why these assertions read bytes', () => {
			// `AsObject.asteriskVersion` and the getter are both declared non-nullable `string`, and
			// there is no has/clear pair. The runtime contradicts the declaration for an unset field,
			// so typed caller code cannot branch on presence without lying to the compiler — and a
			// test that asked the getter would be asserting on the very surface that is unsound.
			const unsetObject: AsteriskConfigs.AsObject = makeConfigs().toObject();
			expect(Object.prototype.hasOwnProperty.call(unsetObject, 'asteriskVersion')).toBe(true);
			expect(unsetObject.asteriskVersion).toBeUndefined();
			expect(makeConfigs().asteriskVersion).toBeUndefined();
			expect(makeConfigs('').asteriskVersion).toBe('');
		});
	});
});
