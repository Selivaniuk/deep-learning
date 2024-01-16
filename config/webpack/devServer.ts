import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {type Port} from './types';

const devServer = (port: Port): DevServerConfiguration => ({
	port,
	open: true,
	hot: true,
});

export default devServer;
