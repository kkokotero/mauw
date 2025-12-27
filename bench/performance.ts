import { run, bench, group } from 'mitata';
import chalk from 'chalk';
import * as colorette from 'colorette';
import { color } from '../src/colors/index';
import kleur from 'kleur';
import picocolors from 'picocolors';
import ansiColors from 'ansi-colors';

const ITERATIONS = 10_000_000;

group('colors', () => {
	bench('mauw', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			color.red('foo');
		}
	});

	bench('chalk', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			chalk.red('foo');
		}
	});

	bench('kleur', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			kleur.red('foo');
		}
	});

	bench('ansi-colors', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			ansiColors.red('foo');
		}
	});

	bench('picocolors', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			picocolors.red('foo');
		}
	});

	bench('colorette', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			colorette.red('foo');
		}
	});
});

group('nested colors', () => {
	bench('mauw', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			color.red(`foo ${color.blue('bar')} baz`);
		}
	});

	bench('chalk', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			chalk.red(`foo ${chalk.blue('bar')} baz`);
		}
	});

	bench('ansi-colors', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			ansiColors.red(`foo ${ansiColors.blue('bar')} baz`);
		}
	});

	bench('picocolors', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			picocolors.red(`foo ${picocolors.blue('bar')} baz`);
		}
	});

	bench('kleur', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			kleur.red(`foo ${kleur.blue('bar')} baz`);
		}
	});

	bench('colorette', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			colorette.red(`foo ${colorette.blue('bar')} baz`);
		}
	});
});

group('chaining', () => {
	bench('mauw prop chain', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			color.red.bold.underline('foo');
		}
	});

	bench('mauw func comp', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			color.red(color.bold(color.underline('foo')));
		}
	});

	bench('ansi-colors prop chain', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			ansiColors.red.bold.underline('foo');
		}
	});

	bench('ansi-colors func comp', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			ansiColors.red(ansiColors.bold(ansiColors.underline('foo')));
		}
	});

	bench('kleur', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			kleur.red(kleur.bold(kleur.underline('foo')));
		}
	});

	bench('picocolors', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			picocolors.red(picocolors.bold(picocolors.underline('foo')));
		}
	});

	bench('chalk', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			chalk.red.bold.underline('foo');
		}
	});

	bench('colorette (func comp)', () => {
		for (let i = 0; i < ITERATIONS; i++) {
			colorette.red(colorette.bold(colorette.underline('foo')));
		}
	});
});

run();
