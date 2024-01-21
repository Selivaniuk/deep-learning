import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {
	type WebpackPluginInstance,
	ProgressPlugin,
	HotModuleReplacementPlugin,
	DefinePlugin,
} from 'webpack';

import {type BuildPaths} from './types';

const configurationPlugins = (
	paths: BuildPaths,
	isDev: boolean,
): WebpackPluginInstance[] => {
	const plugins = [
		new HtmlWebpackPlugin({template: paths.html}),
		new ProgressPlugin(),
		new DefinePlugin({
			__IS_DEV__: isDev,
		}),
	];
	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin());
		plugins.push(new ForkTsCheckerWebpackPlugin());
		plugins.push(new HotModuleReplacementPlugin());
	} else {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[id].[contenthash:8].css',
			}),
		);
	}

	return plugins;
};

export default configurationPlugins;
