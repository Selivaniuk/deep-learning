import {useTranslation} from 'react-i18next';

import ClockIcon from 'shared/assets/icons/Clock.svg';
import ContinueIcon from 'shared/assets/icons/Continue.svg';
import HistoryIcon from 'shared/assets/icons/History.svg';
import HomeIcon from 'shared/assets/icons/Home.svg';
import MovieIcon from 'shared/assets/icons/Movie.svg';
import UsersIcon from 'shared/assets/icons/Users.svg';

export interface SidebarLink {
	label: string;
	href: string;
	icon: JSX.Element;
}

export interface SidebarItem {
	category: string;
	links: SidebarLink[];
}

export const getSidebarItems = (): SidebarItem[] => {
	const {t} = useTranslation('layout');
	return [
		{
			category: t('sidebar-menu-label'),
			links: [
				{
					label: t('sidebar-menu-link-home'),
					href: '/',
					icon: <HomeIcon />,
				},
				{
					label: t('sidebar-menu-link-watch-later'),
					href: '/test',
					// href: '/watch-later',
					icon: <ClockIcon />,
				},
				{
					label: t('sidebar-menu-link-continue-watching'),
					href: '/continue-watching',
					icon: <ContinueIcon />,
				},
				{
					label: t('sidebar-menu-link-history'),
					href: '/history',
					icon: <HistoryIcon />,
				},
			],
		},
		{
			category: t('sidebar-social-label'),
			links: [
				{
					label: t('sidebar-social-link-friends'),
					href: '/friends',
					icon: <UsersIcon />,
				},
				{
					label: t('sidebar-social-link-rooms'),
					href: '/rooms',
					icon: <MovieIcon />,
				},
			],
		},
	];
};
