import { TERM, TERM_PROGRAM } from '@src/constants';

/**
 * Detects whether the current runtime environment supports Unicode characters.
 * Works across Node.js, Bun and Deno.
 */
export function isUnicodeSupported(): boolean {
	// On non-Windows, most modern terminals support Unicode except the Linux kernel console
	if (process.platform !== 'win32') return TERM !== 'linux';

	// Windows-specific checks for Unicode-capable terminals
	return Boolean(
		process.env.WT_SESSION || // Windows Terminal
			process.env.TERMINUS_SUBLIME || // Terminus (<0.2.27)
			process.env.ConEmuTask === '{cmd::Cmder}' || // ConEmu/Cmder
			TERM_PROGRAM === 'Terminus-Sublime' ||
			TERM_PROGRAM === 'vscode' ||
			TERM === 'xterm-256color' ||
			TERM === 'alacritty' ||
			TERM === 'rxvt-unicode' ||
			TERM === 'rxvt-unicode-256color' ||
			process.env.TERMINAL_EMULATOR === 'JetBrains-JediTerm',
	);
}
