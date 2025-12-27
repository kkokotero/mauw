export type ColorFunction = ((text?: string | number) => string) &
	ColorMethods & {
		__mauw_colors: {
			open: string;
			close: string;
		};
	};

export type StaticColorKey =
	| 'reset'
	| 'bold'
	| 'dim'
	| 'italic'
	| 'underline'
	| 'overline'
	| 'inverse'
	| 'hidden'
	| 'strike'
	| 'black'
	| 'red'
	| 'green'
	| 'yellow'
	| 'blue'
	| 'magenta'
	| 'cyan'
	| 'white'
	| 'gray'
	| 'grey'
	| 'brightBlack'
	| 'brightRed'
	| 'brightGreen'
	| 'brightYellow'
	| 'brightBlue'
	| 'brightMagenta'
	| 'brightCyan'
	| 'brightWhite'
	| 'bgBlack'
	| 'bgRed'
	| 'bgGreen'
	| 'bgYellow'
	| 'bgBlue'
	| 'bgMagenta'
	| 'bgCyan'
	| 'bgWhite'
	| 'bgBrightBlack'
	| 'bgBrightRed'
	| 'bgBrightGreen'
	| 'bgBrightYellow'
	| 'bgBrightBlue'
	| 'bgBrightMagenta'
	| 'bgBrightCyan'
	| 'bgBrightWhite';

export type ColorMethods = {
	[K in StaticColorKey]: ColorFunction;
} & {
	rgb(r: number, g: number, b: number): ColorFunction;
	bgRgb(r: number, g: number, b: number): ColorFunction;
	hex(hex: string): ColorFunction;
	bgHex(hex: string): ColorFunction;
};
