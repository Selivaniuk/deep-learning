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

	const svgLoader: RuleSetRule = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader: RuleSetRule = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};
	return [svgLoader, fileLoader, tsLoader, cssLoader];
};

export default loaders;
