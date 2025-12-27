import { group, bench, run } from 'mitata';
import { spawnSync } from 'node:child_process';

const runtime = process.execPath;

function measure(cmd: string) {
	const result = spawnSync(runtime, ['-e', cmd], {
		stdio: 'pipe',
	});
	return Number(result.stdout.toString());
}

group('load time (cold)', () => {
	bench('mauw', () => {
		measure(`
			const t = process.hrtime.bigint();
			await import('../src/colors/index.js');
			console.log(Number(process.hrtime.bigint() - t));
		`);
	});

	bench('chalk', () => {
		measure(`
			const t = process.hrtime.bigint();
			await import('chalk');
			console.log(Number(process.hrtime.bigint() - t));
		`);
	});

	bench('kleur', () => {
		measure(`
			const t = process.hrtime.bigint();
			await import('kleur');
			console.log(Number(process.hrtime.bigint() - t));
		`);
	});

	bench('ansi-colors', () => {
		measure(`
			const t = process.hrtime.bigint();
			await import('ansi-colors');
			console.log(Number(process.hrtime.bigint() - t));
		`);
	});

	bench('picocolors', () => {
		measure(`
			const t = process.hrtime.bigint();
			await import('picocolors');
			console.log(Number(process.hrtime.bigint() - t));
		`);
	});

	bench('colorette', () => {
		measure(`
			const t = process.hrtime.bigint();
			await import('colorette');
			console.log(Number(process.hrtime.bigint() - t));
		`);
	});
});

run();
