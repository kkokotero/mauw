import type { StaticColorKey } from '../types';

export const CLOSE_FG = '\x1b[39m';
export const CLOSE_BG = '\x1b[49m';

export const DEFINITIONS: Record<StaticColorKey, [string, string]> = {
	reset: ['\x1b[0m', '\x1b[0m'],

	bold: ['\x1b[1m', '\x1b[22m'],
	dim: ['\x1b[2m', '\x1b[22m'],
	italic: ['\x1b[3m', '\x1b[23m'],
	underline: ['\x1b[4m', '\x1b[24m'],
	overline: ['\x1b[53m', '\x1b[55m'],
	inverse: ['\x1b[7m', '\x1b[27m'],
	hidden: ['\x1b[8m', '\x1b[28m'],
	strike: ['\x1b[9m', '\x1b[29m'],

	black: ['\x1b[30m', CLOSE_FG],
	red: ['\x1b[31m', CLOSE_FG],
	green: ['\x1b[32m', CLOSE_FG],
	yellow: ['\x1b[33m', CLOSE_FG],
	blue: ['\x1b[34m', CLOSE_FG],
	magenta: ['\x1b[35m', CLOSE_FG],
	cyan: ['\x1b[36m', CLOSE_FG],
	white: ['\x1b[37m', CLOSE_FG],

	gray: ['\x1b[90m', CLOSE_FG],
	grey: ['\x1b[90m', CLOSE_FG],

	brightBlack: ['\x1b[90m', CLOSE_FG],
	brightRed: ['\x1b[91m', CLOSE_FG],
	brightGreen: ['\x1b[92m', CLOSE_FG],
	brightYellow: ['\x1b[93m', CLOSE_FG],
	brightBlue: ['\x1b[94m', CLOSE_FG],
	brightMagenta: ['\x1b[95m', CLOSE_FG],
	brightCyan: ['\x1b[96m', CLOSE_FG],
	brightWhite: ['\x1b[97m', CLOSE_FG],

	bgBlack: ['\x1b[40m', CLOSE_BG],
	bgRed: ['\x1b[41m', CLOSE_BG],
	bgGreen: ['\x1b[42m', CLOSE_BG],
	bgYellow: ['\x1b[43m', CLOSE_BG],
	bgBlue: ['\x1b[44m', CLOSE_BG],
	bgMagenta: ['\x1b[45m', CLOSE_BG],
	bgCyan: ['\x1b[46m', CLOSE_BG],
	bgWhite: ['\x1b[47m', CLOSE_BG],

	bgBrightBlack: ['\x1b[100m', CLOSE_BG],
	bgBrightRed: ['\x1b[101m', CLOSE_BG],
	bgBrightGreen: ['\x1b[102m', CLOSE_BG],
	bgBrightYellow: ['\x1b[103m', CLOSE_BG],
	bgBrightBlue: ['\x1b[104m', CLOSE_BG],
	bgBrightMagenta: ['\x1b[105m', CLOSE_BG],
	bgBrightCyan: ['\x1b[106m', CLOSE_BG],
	bgBrightWhite: ['\x1b[107m', CLOSE_BG],
};
