import {type PropsWithChildren, type FC, memo} from 'react';

import styles from './Layout.module.scss';

import {useSidebar} from 'app/providers/sidebar';
import classNames from 'shared/lib/classNames/classNames';
import Header from 'widgets/Header';
import Sidebar from 'widgets/Sidebar';

const MemoizedHeader = memo(Header);
const MemoizedSidebar = memo(Sidebar);

const Layout: FC<PropsWithChildren> = ({children}) => {
	const {isOpen} = useSidebar();

	return (
		<>
			<MemoizedHeader />
			<MemoizedSidebar />
			<div className={classNames(styles.page, {[styles.small]: isOpen})}>
				{children}
			</div>
		</>
	);
};

export default Layout;
