import {type FC, Suspense} from 'react';

import {Route, Routes} from 'react-router-dom';

import {routeConfig} from 'shared/config/routeConfig/routeConfig';

// TODO
const Loader: FC = () => {
	return <div>Loading...</div>;
};

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{routeConfig.map(route => (
					<Route {...route} key={route.path} />
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
