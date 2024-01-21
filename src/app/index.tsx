import {type FC} from 'react';

import {AppRouter} from './providers/router';

import Layout from 'widgets/Layout';
import ThemeContainer from 'widgets/ThemeContainer/ThemeContainer';

import './styles/index.scss';

const App: FC = () => {
	return (
		<ThemeContainer>
			<Layout>
				<AppRouter />
			</Layout>
		</ThemeContainer>
	);
};

export default App;
