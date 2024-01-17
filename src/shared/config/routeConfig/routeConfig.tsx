import {type RouteProps} from 'react-router-dom';

import HomePage from 'pages/HomePage';
import TestPage from 'pages/TestPage';

export enum AppRoutes {
	HOME = 'home',
	TEST = 'test',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.TEST]: '/test',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePath[AppRoutes.HOME],
		element: <HomePage />,
	},
	[AppRoutes.TEST]: {
		path: RoutePath[AppRoutes.TEST],
		element: <TestPage />,
	},
};
