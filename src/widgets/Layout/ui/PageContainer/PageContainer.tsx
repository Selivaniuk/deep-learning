import {type PropsWithChildren, type FC} from 'react';

import styles from './PageContainer.module.scss';

import {useSidebar} from 'app/providers/sidebar';
import classNames from 'shared/lib/classNames/classNames';

const PageContainer: FC<PropsWithChildren> = ({children}) => {
	const {isOpen} = useSidebar();

	return (
		<>
			<div
				className={classNames([styles.page, {[styles.small]: isOpen}])}
			>
				{children}
			</div>
		</>
	);
};

export default PageContainer;
