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

export const routeConfig: RouteProps[] = [
	{
		path: RoutePath[AppRoutes.HOME],
		element: <HomePage />,
	},
	{
		path: RoutePath[AppRoutes.TEST],
		element: <TestPage />,
	},
];
