import {type FC} from 'react';

import styles from './ThemeSwitcher.module.scss';

import {useTheme} from 'app/providers/theme';
import {Theme} from 'app/providers/theme/lib/ThemeContext';
import ThemeDarkIcon from 'shared/assets/icons/Theme/Dark.svg';
import ThemeLightIcon from 'shared/assets/icons/Theme/Light.svg';
import classNames from 'shared/lib/classNames/classNames';

const ThemeSwitcher: FC = () => {
	const {theme, toggleTheme} = useTheme();
	return (
		<button className={classNames(styles.themeBtn)} onClick={toggleTheme}>
			{theme === Theme.DARK ? (
				<ThemeLightIcon className={styles.icon} />
			) : (
				<ThemeDarkIcon className={styles.icon} />
			)}
		</button>
	);
};

export default ThemeSwitcher;
