import { isUnicodeSupported } from './utils/is-unicode-supported';
import { FALLBACK_CHARACTERS } from './fallback';
import { UNICODE_CHARACTERS } from './unicode';
import { BASE_CHARACTERS } from './base';

// Auto-select according to Unicode support
export const character = {
	...BASE_CHARACTERS,
	...(isUnicodeSupported() ? UNICODE_CHARACTERS : FALLBACK_CHARACTERS),
};

export type Characters = typeof character;

export default character;
