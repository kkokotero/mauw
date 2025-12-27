import type { ColorFunction } from '../types';
import { colorProto } from './color-proto';

/**
 * Builds a color function that wraps a string with ANSI escape codes.
 *
 * This function generates a callable function which applies an opening and closing ANSI code
 * to a given string, effectively coloring it in the terminal. It also attaches metadata and
 * a prototype for extended behavior.
 *
 * @param open - ANSI escape code to start the color (e.g., foreground or background)
 * @param close - ANSI escape code to reset the color back to default
 * @returns A function that takes a string and returns it wrapped in the ANSI codes
 *
 * Example usage:
 *   const red = build('\x1b[31m', '\x1b[39m'); // ANSI red foreground
 *   console.log(red("This text is red"));
 */
export function build(open: string, close: string): ColorFunction {
  // Create the color function that wraps input text with the ANSI codes
  const fn = ((text: string) => open + text + close) as ColorFunction;

  // Attach the ANSI codes as metadata for potential introspection
  fn.__mauw_colors = { open, close };

  // Set the prototype of the function to allow shared behavior (methods, chaining, etc.)
  Object.setPrototypeOf(fn, colorProto);

  return fn;
}
