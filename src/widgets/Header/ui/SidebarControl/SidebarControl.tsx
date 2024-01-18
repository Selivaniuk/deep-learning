import {type FC} from 'react';

import styles from './SidebarControl.module.scss';

import {useSidebar} from 'app/providers/sidebar';
import ChevronLeftIcon from 'shared/assets/icons/Chevron/Left.svg';
import ChevronRightIcon from 'shared/assets/icons/Chevron/Right.svg';
import classNames from 'shared/lib/classNames/classNames';

const SidebarControl: FC = () => {
	const {isOpen, openSidebar, closeSidebar} = useSidebar();

	const onClose = (): void => {
		isOpen && closeSidebar();
	};

	const onOpen = (): void => {
		!isOpen && openSidebar();
	};

	return (
		<div className={styles.control}>
			<ChevronLeftIcon
				onClick={onClose}
				className={classNames(styles.icon, {[styles.active]: isOpen})}
			/>
			<ChevronRightIcon
				onClick={onOpen}
				className={classNames(styles.icon, {[styles.active]: !isOpen})}
			/>
		</div>
	);
};

export default SidebarControl;
