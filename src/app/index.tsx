import {Suspense, type FC} from 'react';

import {AppRouter} from './providers/router';

import Layout from 'widgets/Layout';
import ThemeContainer from 'widgets/ThemeContainer/ThemeContainer';

import './styles/index.scss';

const App: FC = () => {
	return (
		<ThemeContainer>
			<Suspense fallback=''>
				<Layout>
					<AppRouter />
				</Layout>
			</Suspense>
		</ThemeContainer>
	);
};

export default App;
