/**
 * A minimal protobuf wire reader, shared by every spec that has to answer a PRESENCE question.
 *
 * Presence is a property of the ENCODING here. The Angular stubs expose no `hasX()` / `clearX()`
 * pair and declare every `optional` scalar as a non-nullable type, so neither the getter nor
 * `toObject()` can distinguish "the caller said nothing" from "the caller said the default" — the
 * bytes are the only representation that carries all three states and the only one the server ever
 * sees. Both presence suites therefore read tags rather than trusting the generated surface.
 *
 * This lives outside a `*.spec.ts` on purpose: jest's `testMatch` is `**\/*.spec.ts`, so a helper
 * module is compiled and imported but never collected as an empty suite.
 */

/**
 * Read back the field number of every field present in a serialized message, in wire order.
 *
 * Parsing the tags is what makes the answer trustworthy: a field's tag byte is also a printable
 * ASCII character for many field numbers (`0x2a` is field 5, wire type 2, and the ASCII `*`), so a
 * byte search answers "present" for an absent field whose neighbour's value happens to contain one.
 *
 * The reader throws on anything it does not model — an unknown wire type, a truncated varint, a
 * length that runs past the end. An inspection that cannot parse its input must fail, never return
 * a short list that reads as "the field is absent" (ondewo-vtsi CLAUDE.md section 11).
 *
 * @param encoded the output of a generated message's `serializeBinary()`
 * @returns the field number of each field on the wire, in the order they were written
 * @throws Error when the encoding is truncated or uses a wire type this reader does not model
 */
export function fieldNumbersOnTheWire(encoded: Uint8Array): number[] {
	const fieldNumbers: number[] = [];
	let offset: number = 0;
	const readVarint: () => number = (): number => {
		let value: number = 0;
		// A running multiplier rather than a bit shift: a protobuf varint can carry more than 32 bits,
		// and `<<` would silently truncate one.
		let multiplier: number = 1;
		for (;;) {
			if (offset >= encoded.length) {
				throw new Error(`truncated varint: the encoding ends mid-field at offset ${offset}`);
			}
			const byte: number = encoded[offset];
			offset += 1;
			value += (byte & 0x7f) * multiplier;
			if ((byte & 0x80) === 0) {
				return value;
			}
			multiplier *= 128;
		}
	};
	while (offset < encoded.length) {
		const tag: number = readVarint();
		fieldNumbers.push(Math.floor(tag / 8));
		const wireType: number = tag % 8;
		if (wireType === 0) {
			readVarint();
		} else if (wireType === 1) {
			offset += 8;
		} else if (wireType === 2) {
			// The length must be read into a local before the seek: `offset += readVarint()` captures
			// the PRE-call `offset`, discarding the bytes the varint itself consumed.
			const length: number = readVarint();
			offset += length;
		} else if (wireType === 5) {
			offset += 4;
		} else {
			throw new Error(`unsupported protobuf wire type ${wireType} at offset ${offset}`);
		}
		if (offset > encoded.length) {
			throw new Error(`field length runs past the end of the encoding at offset ${offset}`);
		}
	}
	return fieldNumbers;
}
