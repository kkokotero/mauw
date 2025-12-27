import { parseHex } from '../utils/parse-hex';
import { build } from './build';
import { CLOSE_BG, CLOSE_FG } from './constants';

/**
 * Generates an ANSI escape code for setting a foreground color using RGB values.
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns A styled string or function (depending on build implementation) that applies the foreground color
 *
 * Example usage:
 *   console.log(rgb(255, 0, 0) + "This text will be red" + CLOSE_FG);
 */
export const rgb = (r: number, g: number, b: number) =>
	build(`\x1b[38;2;${r};${g};${b}m`, CLOSE_FG);

/**
 * Generates an ANSI escape code for setting a background color using RGB values.
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns A styled string or function (depending on build implementation) that applies the background color
 *
 * Example usage:
 *   console.log(bgRgb(0, 255, 0) + "This background will be green" + CLOSE_BG);
 */
export const bgRgb = (r: number, g: number, b: number) =>
	build(`\x1b[48;2;${r};${g};${b}m`, CLOSE_BG);

/**
 * Converts a hexadecimal color string to RGB and returns an ANSI foreground color code.
 * @param h - Hexadecimal color string (e.g., "#FF0000" or "FF0000")
 * @returns A styled string or function (depending on build implementation) that applies the foreground color
 *
 * Example usage:
 *   console.log(hex("#00FF00") + "This text will be green" + CLOSE_FG);
 */
export const hex = (h: string) => {
	const [r, g, b] = parseHex(h); // Convert hex to RGB
	return rgb(r, g, b); // Apply as foreground color
};

/**
 * Converts a hexadecimal color string to RGB and returns an ANSI background color code.
 * @param h - Hexadecimal color string (e.g., "#0000FF" or "0000FF")
 * @returns A styled string or function (depending on build implementation) that applies the background color
 *
 * Example usage:
 *   console.log(bgHex("#FF00FF") + "This background will be magenta" + CLOSE_BG);
 */
export const bgHex = (h: string) => {
	const [r, g, b] = parseHex(h); // Convert hex to RGB
	return bgRgb(r, g, b); // Apply as background color
};
