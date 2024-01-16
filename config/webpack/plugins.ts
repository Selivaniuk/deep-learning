import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
	type WebpackPluginInstance,
	ProgressPlugin,
	HotModuleReplacementPlugin,
} from 'webpack';

import {type BuildPaths} from './types';

const configurationPlugins = (
	paths: BuildPaths,
	isDev: boolean,
): WebpackPluginInstance[] => {
	const plugins = [
		new HtmlWebpackPlugin({template: paths.html}),
		new ProgressPlugin(),
	];
	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin());
		plugins.push(new HotModuleReplacementPlugin());
	} else {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[id].[contenthash:8].css',
			}),
		);
	}

	return plugins.filter(Boolean);
};

export default configurationPlugins;
