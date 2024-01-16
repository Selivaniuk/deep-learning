import plugins from './plugins';
import loaders from './loaders';
import resolves from './resolves';
import devServer from './devServer';
import {type BuildOptions} from './types';
import {type Configuration} from 'webpack';

const webpackConfig = ({mode, paths, port, isDev}: BuildOptions): Configuration => ({
	mode,
	entry: paths.entry,
	module: {
		rules: loaders(),
	},
	resolve: resolves(paths),
	output: {
		filename: '[name].[contenthash].js',
		path: paths.output,
		clean: true,
	},
	plugins: plugins(paths, isDev),
	devtool: isDev ? 'inline-source-map' : undefined,
	devServer: isDev ? devServer(port) : undefined,
});

export default webpackConfig;
