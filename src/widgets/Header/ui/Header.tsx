import {type FC} from 'react';

import GenreFilter from './GenreFilter/GenreFilter';
import styles from './Header.module.scss';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import SidebarControl from './SidebarControl/SidebarControl';

import classNames from 'shared/lib/classNames/classNames';
import ThemeSwitcher from 'widgets/ThemeSwitcher/ThemeSwitcher';

const Header: FC = () => {
	return (
		<HeaderContainer>
			<div className={classNames(styles.main)}>
				<div className={styles.left}>
					<SidebarControl />
				</div>
				<div className={styles.center}>
					<GenreFilter />
				</div>
				<div className={styles.right}>
					<ThemeSwitcher />
				</div>
			</div>
		</HeaderContainer>
	);
};

export default Header;
