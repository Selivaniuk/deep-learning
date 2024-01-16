import {type RuleSetRule} from 'webpack';

const loaders = (): RuleSetRule[] => {
	const tsLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		tsLoader,
	];
};

export default loaders;
