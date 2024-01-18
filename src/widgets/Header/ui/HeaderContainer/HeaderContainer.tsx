import {type FC, type PropsWithChildren} from 'react';

import styles from './HeaderContainer.module.scss';

import {useSidebar} from 'app/providers/sidebar';
import classNames from 'shared/lib/classNames/classNames';

const HeaderContainer: FC<PropsWithChildren> = ({children}) => {
	const {isOpen} = useSidebar();
	return (
		<header className={classNames(styles.header, {[styles.small]: isOpen})}>
			{children}
		</header>
	);
};

export default HeaderContainer;
