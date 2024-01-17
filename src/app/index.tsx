import {type FC} from 'react';
import './styles/index.scss';

import {Link} from 'react-router-dom';

import {AppRouter} from './providers/router';

const App: FC = () => {
	return (
		<div>
			<div style={{display: 'flex', gap: 24}}>
				<Link to={'/'}>Home</Link>
				<Link to={'/test'}>Test</Link>
			</div>
			<AppRouter />
		</div>
	);
};

export default App;
