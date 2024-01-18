import {useMemo, type FC, type PropsWithChildren, useState} from 'react';

import {
	LOCAL_STORAGE_SIDEBAR_KEY,
	SidebarContext,
	SidebarState,
	type SidebarContextProps,
} from '../lib/SidebarContext';

const defaultState =
	(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_KEY) as SidebarState) ??
	SidebarState.OPEN;

const SidebarProvider: FC<PropsWithChildren> = ({children}) => {
	const [sidebarState, setSidebarState] =
		useState<SidebarState>(defaultState);

	const value = useMemo<SidebarContextProps>(
		() => ({
			sidebarState,
			setSidebarState,
		}),
		[sidebarState],
	);

	return (
		<SidebarContext.Provider value={value}>
			{children}
		</SidebarContext.Provider>
	);
};

export default SidebarProvider;
