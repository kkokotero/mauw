import { builtinModules } from 'node:module';
import { defineConfig } from 'tsup';

export default defineConfig([
	{
		entry: ['./src/**/*ts'],
		format: ['esm'],
		splitting: true,
		minify: true,
		clean: true,
		target: 'es2022',
		outDir: 'dist',
		external: [...builtinModules],
		shims: true,
		bundle: true,
		dts: true,
		treeshake: true,
		tsconfig: './tsconfig.json',
	},
]);
