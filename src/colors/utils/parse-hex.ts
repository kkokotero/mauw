/**
 * Parses a hex color string into RGB components.
 *
 * Supports the following formats:
 * - "#RGB"
 * - "RGB"
 * - "#RRGGBB"
 * - "RRGGBB"
 *
 * @param hex - Hex color string.
 * @returns A tuple containing [red, green, blue] values (0–255).
 * @throws If the input is not a valid hex color.
 */
export function parseHex(hex: string): [number, number, number] {
	let i = hex.charCodeAt(0) === 35 ? 1 : 0; // '#'
	const len = hex.length - i;

	if (len !== 3 && len !== 6) {
		throw new Error(`Invalid hex color: "${hex}"`);
	}

	const toNibble = (c: number) =>
		c <= 57 ? c - 48 : (c & 0x5f) - 55; // 0–9 / A–F / a–f

	let r: number;
	let g: number;
	let b: number;

	if (len === 3) {
		const c1 = toNibble(hex.charCodeAt(i++));
		const c2 = toNibble(hex.charCodeAt(i++));
		const c3 = toNibble(hex.charCodeAt(i));

		r = (c1 << 4) | c1;
		g = (c2 << 4) | c2;
		b = (c3 << 4) | c3;
	} else {
		r = (toNibble(hex.charCodeAt(i)) << 4) | toNibble(hex.charCodeAt(i + 1));
		g = (toNibble(hex.charCodeAt(i + 2)) << 4) | toNibble(hex.charCodeAt(i + 3));
		b = (toNibble(hex.charCodeAt(i + 4)) << 4) | toNibble(hex.charCodeAt(i + 5));
	}

	return [r, g, b];
}

