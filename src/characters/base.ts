/* Base */
export const DOT = '.' as const;
export const BULLET = '•' as const;
export const POINTER_SMALL_BASE = '>' as const;
export const SQUARE = '█' as const;
export const LINE = '─' as const;
export const WAVE = '~' as const;

/* ============================================================================
 * Aggregated export (legacy / convenience)
 * ========================================================================== */

export const BASE_CHARACTERS = {
	dot: DOT,
	bullet: BULLET,
	pointerSmall: POINTER_SMALL_BASE,
	square: SQUARE,
	line: LINE,
	wave: WAVE,
} as const;
