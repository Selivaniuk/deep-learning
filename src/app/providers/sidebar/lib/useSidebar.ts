import {useContext, useMemo} from 'react';

import {
	LOCAL_STORAGE_SIDEBAR_KEY,
	SidebarContext,
	SidebarState,
} from './SidebarContext';

interface UseSidebarResult {
	isOpen: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
	toggleSidebar: () => void;
}

const useSidebar = (): UseSidebarResult => {
	const {sidebarState, setSidebarState} = useContext(SidebarContext);

	const openSidebar = (): void => {
		if (sidebarState === SidebarState.OPEN) return;
		setSidebarState?.(SidebarState.OPEN);
		localStorage.setItem(LOCAL_STORAGE_SIDEBAR_KEY, SidebarState.OPEN);
	};

	const closeSidebar = (): void => {
		if (sidebarState === SidebarState.CLOSE) return;
		setSidebarState?.(SidebarState.CLOSE);
		localStorage.setItem(LOCAL_STORAGE_SIDEBAR_KEY, SidebarState.CLOSE);
	};

	const toggleSidebar = (): void => {
		if (sidebarState === SidebarState.OPEN) {
			closeSidebar();
		} else {
			openSidebar();
		}
	};

	const isOpen = useMemo<boolean>(
		() => sidebarState !== SidebarState.CLOSE,
		[sidebarState],
	);

	return {isOpen, toggleSidebar, openSidebar, closeSidebar};
};

export default useSidebar;
