import {useContext} from 'react';

import {ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY} from './ThemeContext';

interface UseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

const useTheme = (): UseThemeResult => {
	const {theme, setTheme} = useContext(ThemeContext);

	const toggleTheme = (): void => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return {theme: theme ?? defaultTheme, toggleTheme};
};

export default useTheme;
