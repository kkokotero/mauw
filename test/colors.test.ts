import { describe, it, expect } from 'vitest';
import { color } from '../src/colors/index';

describe('colors', () => {
	it('should format basic colors', () => {
		expect(color.red('text')).toBe('\x1b[31mtext\x1b[39m');
		expect(color.green('text')).toBe('\x1b[32mtext\x1b[39m');
		expect(color.blue('text')).toBe('\x1b[34mtext\x1b[39m');
	});

	it('should format background colors', () => {
		expect(color.bgRed('text')).toBe('\x1b[41mtext\x1b[49m');
		expect(color.bgGreen('text')).toBe('\x1b[42mtext\x1b[49m');
	});

	it('should support modifiers', () => {
		expect(color.bold('text')).toBe('\x1b[1mtext\x1b[22m');
		expect(color.dim('text')).toBe('\x1b[2mtext\x1b[22m');
		expect(color.underline('text')).toBe('\x1b[4mtext\x1b[24m');
	});

	it('should support chaining', () => {
		// Based on the implementation, chaining might be supported.
		// Let's check src/colors/core/index.ts or similar if I could to be sure,
		// but I'll write a test that expects it.
		// If fails, I fix it.
		expect(color.red.bold('text')).toBe('\x1b[31m\x1b[1mtext\x1b[22m\x1b[39m');
	});

	it('should support nested colors', () => {
		expect(color.red(`foo ${color.blue('bar')} baz`)).toBe(
			'\x1b[31mfoo \x1b[34mbar\x1b[39m baz\x1b[39m',
		);
	});

	it('should support hex colors', () => {
		expect(color.hex('#ff0000')('text')).toBe('\x1b[38;2;255;0;0mtext\x1b[39m');
	});

	it('should support rgb colors', () => {
		expect(color.rgb(255, 0, 0)('text')).toBe('\x1b[38;2;255;0;0mtext\x1b[39m');
	});
});
