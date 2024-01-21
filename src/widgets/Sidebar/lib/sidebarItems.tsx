import ClockIcon from 'shared/assets/icons/Clock.svg';
import ContinueIcon from 'shared/assets/icons/Continue.svg';
import HistoryIcon from 'shared/assets/icons/History.svg';
import HomeIcon from 'shared/assets/icons/Home.svg';
import MovieIcon from 'shared/assets/icons/Movie.svg';
import UsersIcon from 'shared/assets/icons/Users.svg';

export enum SidebarCategory {
	MENU = 'Menu',
	SOCIAL = 'Social',
}

export interface SidebarLink {
	label: string;
	href: string;
	icon: JSX.Element;
}

export interface SidebarItem {
	category: SidebarCategory;
	links: SidebarLink[];
}
export const SIDEBAR_ITEMS: SidebarItem[] = [
	{
		category: SidebarCategory.MENU,
		links: [
			{label: 'Home', href: '/', icon: <HomeIcon />},
			{
				label: 'Watch later',
				href: '/test',
				// href: '/watch-later',
				icon: <ClockIcon />,
			},
			{
				label: 'Continue watching',
				href: '/continue-watching',
				icon: <ContinueIcon />,
			},
			{
				label: 'History',
				href: '/history',
				icon: <HistoryIcon />,
			},
		],
	},
	{
		category: SidebarCategory.SOCIAL,
		links: [
			{
				label: 'Friends',
				href: '/friends',
				icon: <UsersIcon />,
			},
			{
				label: 'Rooms',
				href: '/rooms',
				icon: <MovieIcon />,
			},
		],
	},
];
