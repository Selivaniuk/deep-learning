import {type FC, useState, type PropsWithChildren, useMemo} from 'react';

import {
	type Theme,
	ThemeContext,
	type ThemeContextProps,
} from '../lib/ThemeContext';
import {defaultTheme} from '../lib/useTheme';

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
