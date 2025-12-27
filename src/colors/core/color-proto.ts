import { DEFINITIONS } from './constants';
import type { ColorFunction, StaticColorKey } from '../types';
import { build } from './build';
import { bgHex, bgRgb, hex, rgb } from './base';

/**
 * Prototype object for color functions that allows chaining of additional colors or styles.
 *
 * Each property on this prototype corresponds to a predefined ANSI color or style (from DEFINITIONS).
 * Accessing a property on a color function returns a new function that applies the original color
 * plus the additional style, enabling chaining like: `red.bold.underline("text")`.
 */
export const colorProto: Record<string, any> = {
	rgb, // Function to create foreground color from RGB
	bgRgb, // Function to create background color from RGB
	hex, // Function to create foreground color from hex string
	bgHex, // Function to create background color from hex string

};

// Iterate over all predefined color/style definitions
for (const key in DEFINITIONS) {
  const [open, close] = DEFINITIONS[key as StaticColorKey]; // Extract the opening and closing ANSI codes for this style

  // Define a getter on the prototype for each style
  Object.defineProperty(colorProto, key, {
    /**
     * Getter function for chaining color functions.
     *
     * When accessing a property (e.g., `red.bold`), this getter is called.
     * It combines the current function's ANSI codes (`base`) with the new style codes,
     * and returns a new color function with the combined styling.
     */
    get(this: ColorFunction) {
      const base = this.__mauw_colors; // Retrieve the current ANSI codes of the function
      return build(base.open + open, close + base.close); // Return a new color function with combined codes
    },
  });
}
