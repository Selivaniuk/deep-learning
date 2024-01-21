import {type Configuration} from 'webpack';

import devServer from './devServer';
import loaders from './loaders';
import plugins from './plugins';
import resolves from './resolves';

import {type BuildOptions} from './types';

const webpackConfig = ({
	mode,
	paths,
	port,
	isDev,
}: BuildOptions): Configuration => ({
	mode,
	entry: paths.entry,
	module: {
		rules: loaders(paths, isDev),
	},
	resolve: resolves(paths),
	output: {
		filename: '[name].[contenthash].js',
		path: paths.output,
		clean: true,
	},
	plugins: plugins(paths, isDev),
	devtool: isDev ? 'eval-source-map' : undefined,
	devServer: isDev ? devServer(port) : undefined,
});

export default webpackConfig;
