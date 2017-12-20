import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	input: 'src/raf-bounce.js',
	output: {
		file: 'lib/raf-bounce.js',
		format: 'umd',
		name: 'RafBounce'
	},
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**',
			presets: [
				[
					'env',
					{'modules': false},
				]
			],
			'plugins': [
				"external-helpers",
			],
		}),
	],
	watch: {
		include: 'src/**'
	},
}
