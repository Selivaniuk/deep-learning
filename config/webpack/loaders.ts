import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {type RuleSetRule} from 'webpack';

import {type BuildPaths} from './types';

const loaders = (paths: BuildPaths, isDev: boolean): RuleSetRule[] => {
	const cssLoader: RuleSetRule = {
		test: /\.(sa|sc|c)ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev
				? 'style-loader'
				: {
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: paths.output,
						},
					},
			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) =>
							resourcePath.endsWith('module.scss'),
						localIdentName: isDev
							? '[path][name]__[local]'
							: '[hash:base64:8]',
					},
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	};

	const tsLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [tsLoader, cssLoader];
};

export default loaders;
