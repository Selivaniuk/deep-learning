import {memo, type FC} from 'react';
import './styles/index.scss';

import {AppRouter} from './providers/router';
import {useTheme} from './providers/theme';

import classNames from 'shared/lib/classNames/classNames';
import Layout from 'widgets/Layout';

const MemoizedLayout = memo(Layout);
const MemoizedAppRouter = memo(AppRouter);

const App: FC = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<MemoizedLayout>
				<MemoizedAppRouter />
			</MemoizedLayout>
		</div>
	);
};

export default App;
