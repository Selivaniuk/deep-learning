import {type FC} from 'react';
import './styles/index.scss';

import {Link} from 'react-router-dom';

import {AppRouter} from './providers/router';
import {useTheme} from './providers/theme';

const App: FC = () => {
	const {theme, toggleTheme} = useTheme();
	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<div style={{display: 'flex', gap: 24}}>
				<Link to={'/'}>Home</Link>
				<Link to={'/test'}>Test</Link>
			</div>
			<AppRouter />
		</div>
	);
};

export default App;
