import {type PropsWithChildren, type FC} from 'react';

import PageContainer from './PageContainer/PageContainer';

import Header from 'widgets/Header';
import Sidebar from 'widgets/Sidebar';

const Layout: FC<PropsWithChildren> = ({children}) => {
	return (
		<>
			<Header />
			<Sidebar />
			<PageContainer>{children}</PageContainer>
		</>
	);
};

export default Layout;
