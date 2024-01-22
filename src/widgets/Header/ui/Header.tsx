import {type FC} from 'react';

import GenreFilter from './GenreFilter/GenreFilter';
import styles from './Header.module.scss';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import SidebarControl from './SidebarControl/SidebarControl';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

const Header: FC = () => {
	return (
		<HeaderContainer>
			<div className={styles.main}>
				<div className={styles.left}>
					<SidebarControl />
				</div>
				<div className={styles.center}>
					<GenreFilter />
				</div>
				<div className={styles.right}>
					<ThemeSwitcher />
					<LanguageSwitcher />
				</div>
			</div>
		</HeaderContainer>
	);
};

export default Header;
