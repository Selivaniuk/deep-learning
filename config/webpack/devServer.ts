import {type Port} from './types';

import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

const devServer = (port: Port): DevServerConfiguration => ({
	port,
	open: true,
	hot: true,
});

export default devServer;
