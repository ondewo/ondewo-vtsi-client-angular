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

	it('defaults to the empty string when the caller says nothing', () => {
		// `refineValues` runs in the constructor and coerces undefined to ''. This is the presence
		// flattening described in the file docstring, asserted rather than assumed.
		expect(makeConfigs().asteriskVersion).toBe('');
	});

	it('survives a binary round trip', () => {
		const sent: AsteriskConfigs = makeConfigs(ASTERISK_VERSION);
		const received: AsteriskConfigs = AsteriskConfigs.deserializeBinary(sent.serializeBinary());
		expect(received.asteriskVersion).toBe(ASTERISK_VERSION);
	});

	it('is omitted from the wire when it is empty, so an empty tag reaches the server as unset', () => {
		// The server treats an explicitly empty tag as a caller error and an absent one as "use the
		// default". Because ngx-grpc only writes a truthy value, an Angular caller cannot produce the
		// former — the two encode identically.
		expect(makeConfigs('').serializeBinary()).toEqual(makeConfigs().serializeBinary());
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
