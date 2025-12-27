import { colorProto } from './core/color-proto';
import { COLORS_ENABLED } from '@src/constants';
import { rgb, bgHex, bgRgb, hex } from './core/base';
import { DEFINITIONS } from './core/constants';
import type { ColorMethods, StaticColorKey } from './types';
import { build } from './core/build';

/**
 * Main color object exposing functions and chainable color properties.
 *
 * Provides methods to create foreground/background colors using either RGB values or hex strings.
 * Also dynamically exposes predefined colors and styles (from DEFINITIONS) as properties.
 */
export const color = {
	rgb, // Function to create foreground color from RGB
	bgRgb, // Function to create background color from RGB
	hex, // Function to create foreground color from hex string
	bgHex, // Function to create background color from hex string
} as ColorMethods;

// Set the prototype to enable chainable color/style properties like `color.red.bold`
Object.setPrototypeOf(color, colorProto);

// Dynamically define properties for all predefined ANSI colors and styles
for (const key in DEFINITIONS) {
	const [open, close] = DEFINITIONS[key as StaticColorKey]; // Get ANSI open/close codes

	Object.defineProperty(color, key, {
		enumerable: true, // Allows the property to show up in loops (like Object.keys)
		configurable: true, // Allows redefining the property later
		get() {
			// If colors are disabled, fallback to a simple string function (no styling)
			if (!COLORS_ENABLED) return String;

			// Build a new color function with the ANSI codes
			const fn = build(open, close);

			// Cache the function on the property so that the getter is only executed once
			Object.defineProperty(color, key, { value: fn });

			return fn; // Return the color function
		},
	});
}

// Re-export all types for external use
export * from './types';
export { COLORS_ENABLED };
export default color;
