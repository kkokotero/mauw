/* Basic */
export const TICK = '[OK]' as const;
export const CROSS = '[X]' as const;
export const INFO = '(i)' as const;
export const WARNING = '!!' as const;
export const QUESTION = '(?)' as const;
export const PENDING = '...' as const;
export const SUCCESS = '[+]' as const;
export const FAILURE = '[-]' as const;

/* Arrows & pointers */
export const ARROW_UP = '^' as const;
export const ARROW_DOWN = 'v' as const;
export const ARROW_LEFT = '<' as const;
export const ARROW_RIGHT = '>' as const;
export const ARROW_DOUBLE_RIGHT = '>>' as const;
export const ARROW_DOUBLE_LEFT = '<<' as const;
export const ARROW_CURVE_RIGHT = '->' as const;
export const ARROW_CURVE_LEFT = '<-' as const;
export const POINTER = '>' as const;
export const POINTER_SMALL = '-' as const;

/* Inputs */
export const CHECKBOX_ON = '[X]' as const;
export const CHECKBOX_OFF = '[ ]' as const;
export const RADIO_ON = '(*)' as const;
export const RADIO_OFF = '( )' as const;

/* Progress / bars */
export const PROGRESS_START = '[' as const;
export const PROGRESS_MID = '=' as const;
export const PROGRESS_END = ']' as const;
export const BAR_LEFT = '[' as const;
export const BAR_RIGHT = ']' as const;

/* Shapes */
export const SQUARE_SMALL = '[ ]' as const;
export const SQUARE_SMALL_FILLED = '[#]' as const;
export const CIRCLE = '( )' as const;
export const CIRCLE_FILLED = '(O)' as const;
export const TRIANGLE_UP = '/\\' as const;
export const TRIANGLE_DOWN = '\\/' as const;
export const LOZENGE = '<>' as const;
export const LOZENGE_FILLED = '<#>' as const;
export const DIAMOND = '<>' as const;
export const BLOCK = '#' as const;

/* Shades */
export const SHADE_LIGHT = '.' as const;
export const SHADE_MEDIUM = '-' as const;
export const SHADE_DARK = '=' as const;

/* Boxes (reuse shared symbols) */
const PLUS = '+' as const;
const PIPE = '|' as const;
const DOUBLE_PIPE = '||' as const;
const HASH = '#' as const;

export const BOX_LIGHT_HORIZONTAL = '-' as const;
export const BOX_LIGHT_VERTICAL = PIPE;
export const BOX_LIGHT_TOP_LEFT = PLUS;
export const BOX_LIGHT_TOP_RIGHT = PLUS;
export const BOX_LIGHT_BOTTOM_LEFT = PLUS;
export const BOX_LIGHT_BOTTOM_RIGHT = PLUS;
export const BOX_LIGHT_T_UP = PLUS;
export const BOX_LIGHT_T_DOWN = PLUS;
export const BOX_LIGHT_T_LEFT = PLUS;
export const BOX_LIGHT_T_RIGHT = PLUS;
export const BOX_LIGHT_CROSS = PLUS;

export const BOX_DOUBLE_HORIZONTAL = '=' as const;
export const BOX_DOUBLE_VERTICAL = DOUBLE_PIPE;
export const BOX_DOUBLE_TOP_LEFT = PLUS;
export const BOX_DOUBLE_TOP_RIGHT = PLUS;
export const BOX_DOUBLE_BOTTOM_LEFT = PLUS;
export const BOX_DOUBLE_BOTTOM_RIGHT = PLUS;
export const BOX_DOUBLE_T_UP = PLUS;
export const BOX_DOUBLE_T_DOWN = PLUS;
export const BOX_DOUBLE_T_LEFT = PLUS;
export const BOX_DOUBLE_T_RIGHT = PLUS;
export const BOX_DOUBLE_CROSS = PLUS;

export const BOX_HEAVY_HORIZONTAL = HASH;
export const BOX_HEAVY_VERTICAL = HASH;
export const BOX_HEAVY_TOP_LEFT = HASH;
export const BOX_HEAVY_TOP_RIGHT = HASH;
export const BOX_HEAVY_BOTTOM_LEFT = HASH;
export const BOX_HEAVY_BOTTOM_RIGHT = HASH;
export const BOX_HEAVY_CROSS = HASH;

/* Rounded boxes */
export const BOX_ROUNDED_TOP_LEFT = '(' as const;
export const BOX_ROUNDED_TOP_RIGHT = ')' as const;
export const BOX_ROUNDED_BOTTOM_LEFT = '(' as const;
export const BOX_ROUNDED_BOTTOM_RIGHT = ')' as const;
export const BOX_ROUNDED_HORIZONTAL = '-' as const;
export const BOX_ROUNDED_VERTICAL = '|' as const;

export const BOX_ROUNDED_HEAVY_TOP_LEFT = '(' as const;
export const BOX_ROUNDED_HEAVY_TOP_RIGHT = ')' as const;
export const BOX_ROUNDED_HEAVY_BOTTOM_LEFT = '(' as const;
export const BOX_ROUNDED_HEAVY_BOTTOM_RIGHT = ')' as const;
export const BOX_ROUNDED_HEAVY_HORIZONTAL = '=' as const;
export const BOX_ROUNDED_HEAVY_VERTICAL = '|' as const;

/* Dividers */
export const DIVIDER_THIN = '-' as const;
export const DIVIDER_THICK = '=' as const;
export const DIVIDER_DOUBLE = '=' as const;
export const DIVIDER_DASHED = '- - -' as const;
export const DIVIDER_DOTTED = '...' as const;
export const DIVIDER_BOLD = '=' as const;

/* Misc / icons */
export const HEART = '<3' as const;
export const STAR = '*' as const;
export const STAR_OUTLINE = '+' as const;
export const PLAY = '>' as const;
export const PAUSE = '||' as const;
export const STOP = '[]' as const;

export const FOLDER = '[dir]' as const;
export const FILE = '[file]' as const;

export const BRANCH = '|--' as const;
export const FORK = '+--' as const;
export const PIPE_CHAR = '|' as const;
export const CONNECTOR = '`--' as const;

export const NODEJS = '<node>' as const;
export const KEY = '[key]' as const;
export const GEAR = '[cfg]' as const;
export const CLOCK = '[time]' as const;
export const CHECKMARK = '[v]' as const;
export const EYE = '[eye]' as const;
export const PASSWORD_MASK = '*' as const;
export const ELLIPSIS = '...' as const;

/* Spinners */
export const SPINNER_DOTS = ['-', '\\', '|', '/'] as const;
export const SPINNER_LINE = ['|', '/', '-', '\\'] as const;
export const SPINNER_BAR = [
	'[    ]',
	'[=   ]',
	'[==  ]',
	'[=== ]',
	'[====]',
	'[ ===]',
	'[  ==]',
	'[   =]',
] as const;
export const SPINNER_CIRCLE = ['( )', '(•)', '(o)', '(•)'] as const;
export const SPINNER_BOUNCE = ['.', 'o', 'O', 'o'] as const;
export const SPINNER_SQUARE = ['[]', '[=]', '[#]', '[=]'] as const;
export const SPINNER_CLOCK = ['12', '3', '6', '9'] as const;
export const SPINNER_DIAGONAL = ['/', '\\', '/', '\\'] as const;
export const SPINNER_BARS = ['_', '-', '=', '-', '_'] as const;
export const SPINNER_WAVE = ['.', '..', '...', '....', '...'] as const;

/* ============================================================================
 * Aggregated export (legacy / convenience)
 * ========================================================================== */

export const FALLBACK_CHARACTERS = {
	tick: TICK,
	cross: CROSS,
	info: INFO,
	warning: WARNING,
	question: QUESTION,
	pending: PENDING,
	success: SUCCESS,
	failure: FAILURE,

	arrowUp: ARROW_UP,
	arrowDown: ARROW_DOWN,
	arrowLeft: ARROW_LEFT,
	arrowRight: ARROW_RIGHT,
	arrowDoubleRight: ARROW_DOUBLE_RIGHT,
	arrowDoubleLeft: ARROW_DOUBLE_LEFT,
	arrowCurveRight: ARROW_CURVE_RIGHT,
	arrowCurveLeft: ARROW_CURVE_LEFT,

	pointer: POINTER,
	pointerSmall: POINTER_SMALL,

	checkboxOn: CHECKBOX_ON,
	checkboxOff: CHECKBOX_OFF,
	radioOn: RADIO_ON,
	radioOff: RADIO_OFF,

	progressStart: PROGRESS_START,
	progressMid: PROGRESS_MID,
	progressEnd: PROGRESS_END,
	barLeft: BAR_LEFT,
	barRight: BAR_RIGHT,

	squareSmall: SQUARE_SMALL,
	squareSmallFilled: SQUARE_SMALL_FILLED,
	circle: CIRCLE,
	circleFilled: CIRCLE_FILLED,
	triangleUp: TRIANGLE_UP,
	triangleDown: TRIANGLE_DOWN,
	lozenge: LOZENGE,
	lozengeFilled: LOZENGE_FILLED,
	diamond: DIAMOND,
	block: BLOCK,

	shadeLight: SHADE_LIGHT,
	shadeMedium: SHADE_MEDIUM,
	shadeDark: SHADE_DARK,

	boxLightHorizontal: BOX_LIGHT_HORIZONTAL,
	boxLightVertical: BOX_LIGHT_VERTICAL,
	boxLightTopLeft: BOX_LIGHT_TOP_LEFT,
	boxLightTopRight: BOX_LIGHT_TOP_RIGHT,
	boxLightBottomLeft: BOX_LIGHT_BOTTOM_LEFT,
	boxLightBottomRight: BOX_LIGHT_BOTTOM_RIGHT,
	boxLightTUp: BOX_LIGHT_T_UP,
	boxLightTDown: BOX_LIGHT_T_DOWN,
	boxLightTLeft: BOX_LIGHT_T_LEFT,
	boxLightTRight: BOX_LIGHT_T_RIGHT,
	boxLightCross: BOX_LIGHT_CROSS,

	boxDoubleHorizontal: BOX_DOUBLE_HORIZONTAL,
	boxDoubleVertical: BOX_DOUBLE_VERTICAL,
	boxDoubleTopLeft: BOX_DOUBLE_TOP_LEFT,
	boxDoubleTopRight: BOX_DOUBLE_TOP_RIGHT,
	boxDoubleBottomLeft: BOX_DOUBLE_BOTTOM_LEFT,
	boxDoubleBottomRight: BOX_DOUBLE_BOTTOM_RIGHT,
	boxDoubleTUp: BOX_DOUBLE_T_UP,
	boxDoubleTDown: BOX_DOUBLE_T_DOWN,
	boxDoubleTLeft: BOX_DOUBLE_T_LEFT,
	boxDoubleTRight: BOX_DOUBLE_T_RIGHT,
	boxDoubleCross: BOX_DOUBLE_CROSS,

	boxHeavyHorizontal: BOX_HEAVY_HORIZONTAL,
	boxHeavyVertical: BOX_HEAVY_VERTICAL,
	boxHeavyTopLeft: BOX_HEAVY_TOP_LEFT,
	boxHeavyTopRight: BOX_HEAVY_TOP_RIGHT,
	boxHeavyBottomLeft: BOX_HEAVY_BOTTOM_LEFT,
	boxHeavyBottomRight: BOX_HEAVY_BOTTOM_RIGHT,
	boxHeavyCross: BOX_HEAVY_CROSS,

	boxRoundedTopLeft: BOX_ROUNDED_TOP_LEFT,
	boxRoundedTopRight: BOX_ROUNDED_TOP_RIGHT,
	boxRoundedBottomLeft: BOX_ROUNDED_BOTTOM_LEFT,
	boxRoundedBottomRight: BOX_ROUNDED_BOTTOM_RIGHT,
	boxRoundedHorizontal: BOX_ROUNDED_HORIZONTAL,
	boxRoundedVertical: BOX_ROUNDED_VERTICAL,

	boxRoundedHeavyTopLeft: BOX_ROUNDED_HEAVY_TOP_LEFT,
	boxRoundedHeavyTopRight: BOX_ROUNDED_HEAVY_TOP_RIGHT,
	boxRoundedHeavyBottomLeft: BOX_ROUNDED_HEAVY_BOTTOM_LEFT,
	boxRoundedHeavyBottomRight: BOX_ROUNDED_HEAVY_BOTTOM_RIGHT,
	boxRoundedHeavyHorizontal: BOX_ROUNDED_HEAVY_HORIZONTAL,
	boxRoundedHeavyVertical: BOX_ROUNDED_HEAVY_VERTICAL,

	dividerThin: DIVIDER_THIN,
	dividerThick: DIVIDER_THICK,
	dividerDouble: DIVIDER_DOUBLE,
	dividerDashed: DIVIDER_DASHED,
	dividerDotted: DIVIDER_DOTTED,
	dividerBold: DIVIDER_BOLD,

	heart: HEART,
	star: STAR,
	starOutline: STAR_OUTLINE,

	play: PLAY,
	pause: PAUSE,
	stop: STOP,

	folder: FOLDER,
	file: FILE,

	branch: BRANCH,
	fork: FORK,
	pipe: PIPE_CHAR,
	connector: CONNECTOR,

	nodejs: NODEJS,
	key: KEY,
	gear: GEAR,
	clock: CLOCK,
	checkmark: CHECKMARK,
	eye: EYE,
	passwordMask: PASSWORD_MASK,
	ellipsis: ELLIPSIS,

	spinners: {
		dots: SPINNER_DOTS,
		line: SPINNER_LINE,
		bar: SPINNER_BAR,
		circle: SPINNER_CIRCLE,
		bounce: SPINNER_BOUNCE,
		square: SPINNER_SQUARE,
		clock: SPINNER_CLOCK,
		diagonal: SPINNER_DIAGONAL,
		bars: SPINNER_BARS,
		wave: SPINNER_WAVE,
	},
} as const;

export default FALLBACK_CHARACTERS;
