import {createContext} from 'react';

export const LOCAL_STORAGE_SIDEBAR_KEY = 'sidebar';

export enum SidebarState {
	OPEN = 'open',
	CLOSE = 'close',
}

export interface SidebarContextProps {
	sidebarState?: SidebarState;
	setSidebarState?: (isOpen: SidebarState) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({});
