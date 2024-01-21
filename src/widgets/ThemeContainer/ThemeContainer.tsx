import {type PropsWithChildren, type FC} from 'react';

import {useTheme} from 'app/providers/theme';
import classNames from 'shared/lib/classNames/classNames';

const ThemeContainer: FC<PropsWithChildren> = ({children}) => {
	const {theme} = useTheme();

	return <main className={classNames(['app', theme])}>{children}</main>;
};

export default ThemeContainer;
