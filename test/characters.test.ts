import { describe, it, expect } from 'vitest';
import { character } from '../src/characters/index';

describe('characters', () => {
	it('should export characters', () => {
		expect(character).toBeDefined();
		expect(typeof character).toBe('object');
	});

	it('should have common symbols', () => {
		// Just checking existence of some keys as per typical charset
		// The actual values depend on unicode support, which might vary in test env
		expect(character).toHaveProperty('bullet');
		expect(character).toHaveProperty('tick');
		expect(character).toHaveProperty('cross');
	});
});
