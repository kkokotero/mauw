export const FORCE_COLOR = process.env.FORCE_COLOR;
export const NODE_DISABLE_COLORS = process.env.NODE_DISABLE_COLORS;
export const NO_COLOR = process.env.NO_COLOR;
export const TERM = process.env.TERM;
export const TERM_PROGRAM = process.env.TERM_PROGRAM;

export const IS_TTY = process.stdout?.isTTY;

export const COLORS_ENABLED =
	!NODE_DISABLE_COLORS &&
	NO_COLOR == null &&
	TERM !== 'dumb' &&
	((FORCE_COLOR != null && FORCE_COLOR !== '0') || IS_TTY);
