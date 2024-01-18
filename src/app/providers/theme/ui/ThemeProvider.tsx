import {type FC, useState, type PropsWithChildren, useMemo} from 'react';

import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
	type ThemeContextProps,
} from '../lib/ThemeContext';

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const value = useMemo<ThemeContextProps>(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
