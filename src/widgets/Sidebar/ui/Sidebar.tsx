import {type FC} from 'react';
import {Link, useLocation} from 'react-router-dom';

import styles from './Sidebar.module.scss';

import {useSidebar} from 'app/providers/sidebar';
import ClockIcon from 'shared/assets/icons/Clock.svg';
import ContinueIcon from 'shared/assets/icons/Continue.svg';
import HistoryIcon from 'shared/assets/icons/History.svg';
import HomeIcon from 'shared/assets/icons/Home.svg';
import LogoLargeIcon from 'shared/assets/icons/logo/Large.svg';
import LogoSmallIcon from 'shared/assets/icons/logo/Small.svg';
import MovieIcon from 'shared/assets/icons/Movie.svg';
import UsersIcon from 'shared/assets/icons/Users.svg';
import classNames from 'shared/lib/classNames/classNames';

const SIDEBAR_LINKS = [
	{
		category: 'Menu',
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
		category: 'Social',
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

const Navbar: FC = () => {
	const {pathname} = useLocation();
	const {isOpen} = useSidebar();

	return (
		<div className={classNames(styles.sidebar, {[styles.isOpen]: isOpen})}>
			{isOpen ? (
				<LogoLargeIcon className={styles.logo} />
			) : (
				<LogoSmallIcon
					className={classNames(styles.logo, {}, [styles.small])}
				/>
			)}

			{SIDEBAR_LINKS.map(({category, links}) => (
				<div className={styles.category} key={category}>
					<p className={styles.label}>{category}</p>
					<ul className={styles.links}>
						{links.map(({label, href, icon}) => {
							const isActive = pathname === href;
							return (
								<Link
									className={classNames(styles.link, {
										[styles.active]: isActive,
									})}
									to={href}
									key={href}
								>
									<span className={styles.icon}>{icon}</span>
									<p className={styles.text}>{label}</p>
								</Link>
							);
						})}
					</ul>
				</div>
			))}
			{/* <button onClick={toggleSidebar}>toggle</button> */}
		</div>
	);
};

export default Navbar;
