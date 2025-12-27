import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	test: {
		fileParallelism: true,
		env: {
			FORCE_COLOR: '1',
		},
	},
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, './src'),
			'@colors': path.resolve(__dirname, './src/colors'),
			'@characters': path.resolve(__dirname, './src/characters'),
			mauw: path.resolve(__dirname, './src'),
		},
	},
});
