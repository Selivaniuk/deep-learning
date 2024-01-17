import {type Configuration} from 'webpack';

import path from 'path';

import webpackConfig from './config/webpack/config';
import {
	type BuildOptions,
	type BuildEnv,
	type BuildPaths,
} from './config/webpack/types';

const defaultMode = 'development';
const defaultPort = 3000;

const paths: BuildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
	src: path.resolve(__dirname, 'src'),
};

export default ({
	mode = defaultMode,
	port = defaultPort,
}: BuildEnv): Configuration => {
	const isDev = mode === 'development';

	const options: BuildOptions = {
		mode,
		isDev,
		port,
		paths,
	};

	const config = webpackConfig(options);
	console.log('config', config);

	return config;
};
