/**
 * `AsteriskConfigs.asteriskVersion` — the generated surface for the Asterisk image tag.
 *
 * The field selects the docker image tag of the Asterisk image a VTSI project starts. On the wire
 * it is declared `optional string asterisk_version = 5`, i.e. it carries EXPLICIT PRESENCE: the
 * server falls back to its own `ONDEWO_VTSI_ASTERISK_IMAGE_TAG` default when the caller says
 * nothing, and rejects an explicitly empty tag.
 *
 * **ngx-grpc flattens that presence, and this suite pins the consequence rather than pretending
 * otherwise.** The generated class exposes a plain `asteriskVersion: string` with no `has`/`clear`
 * pair, `refineValues` coerces `undefined` to `''`, and `writeToBinary` emits the field only when
 * it is truthy. So an Angular caller can send a tag or send nothing, and CANNOT send the empty
 * string — which is harmless here, because the empty string is exactly the value the server
 * rejects. Anyone porting this field to a client that needs the third state has to say so
 * deliberately, and these assertions are what will tell them.
 */
import { AsteriskConfigs } from '../api/ondewo/vtsi/projects.pb';

/** A real ONDEWO Asterisk image tag, so the value is representative rather than a placeholder. */
const ASTERISK_VERSION: string = 'alpine-3.18-18.20.2';

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

	it('is left UNDEFINED when the caller says nothing, rather than coerced to an empty string', () => {
		// This REVERSED at 8.6.0 and the old expectation ('') is the reason this suite went red.
		// The client's `ondewo-proto-compiler` submodule moved from tags/5.13.0 to tags/5.14.0, and
		// `refineValues` stopped coercing the field: 8.5.0 ran
		// `_instance.asteriskVersion = _instance.asteriskVersion || '';` and 8.6.0 touches only
		// `asteriskPort`. So the runtime no longer erases the difference between "omitted" and "''",
		// which is precisely what the server needs -- an unset tag means "use
		// ONDEWO_VTSI_ASTERISK_IMAGE_TAG", an empty one is a caller error.
		expect(makeConfigs().asteriskVersion).toBeUndefined();
	});

	it('survives a binary round trip', () => {
		const sent: AsteriskConfigs = makeConfigs(ASTERISK_VERSION);
		const received: AsteriskConfigs = AsteriskConfigs.deserializeBinary(sent.serializeBinary());
		expect(received.asteriskVersion).toBe(ASTERISK_VERSION);
	});

	it('puts an EMPTY tag on the wire, so the server can refuse it instead of silently defaulting', () => {
		// The second half of the 8.6.0 change, and the other reason this suite went red. The write
		// guard moved from TRUTHY to PRESENCE -- 8.5.0 wrote `if (_instance.asteriskVersion) {`,
		// 8.6.0 writes `if (_instance.asteriskVersion !== undefined && ... !== null) {`. An Angular
		// caller setting '' therefore emits field 5 with length 0 where 8.5.0 emitted nothing at all.
		//
		// This is the CORRECT direction: ondewo-vtsi refuses an empty docker tag with
		// INVALID_ARGUMENT (Validators.validate_semantic_version), and it can only do that if the
		// empty value actually reaches it. Flattening the two encodings hid a caller error.
		const unset: Uint8Array = makeConfigs().serializeBinary();
		const empty: Uint8Array = makeConfigs('').serializeBinary();
		expect(Array.from(empty)).not.toEqual(Array.from(unset));

		// Measured: the difference is exactly the two bytes 0x2a 0x00 -- field 5, wire type 2,
		// length 0 -- appended to the unset encoding. Asserting the bytes rather than "they differ"
		// keeps the test honest about WHAT is on the wire.
		expect(Array.from(empty)).toEqual([...Array.from(unset), 0x2a, 0x00]);
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
});
