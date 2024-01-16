import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {type WebpackPluginInstance, ProgressPlugin, HotModuleReplacementPlugin} from 'webpack';
import {type BuildPaths} from './types';

const configurationPlugins = (paths: BuildPaths, isDev: boolean): WebpackPluginInstance[] => {
	const plugins = [
		new HtmlWebpackPlugin({template: paths.html}),
		new ProgressPlugin(),
		new HotModuleReplacementPlugin(),
	];
	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin());
		plugins.push(new HotModuleReplacementPlugin());
	}

	return plugins.filter(Boolean);
};

export default configurationPlugins;
