import {type FC} from 'react';
import {Link, useLocation} from 'react-router-dom';

import styles from './Sidebar.module.scss';

import {getSidebarItems} from '../lib/sidebarItems';

import {useSidebar} from 'app/providers/sidebar';
import LogoLargeIcon from 'shared/assets/icons/logo/Large.svg';
import LogoSmallIcon from 'shared/assets/icons/logo/Small.svg';
import classNames from 'shared/lib/classNames/classNames';

const Sidebar: FC = () => {
	const {pathname} = useLocation();
	const {isOpen} = useSidebar();
	const sidebarItems = getSidebarItems();
	return (
		<div
			className={classNames([styles.sidebar, {[styles.isOpen]: isOpen}])}
		>
			{isOpen ? (
				<LogoLargeIcon className={styles.logo} />
			) : (
				<LogoSmallIcon
					className={classNames([styles.logo, styles.small])}
				/>
			)}

			{sidebarItems.map(({category, links}) => (
				<div className={styles.category} key={category}>
					<p className={styles.label}>{category}</p>
					<ul className={styles.links}>
						{links.map(({label, href, icon}) => {
							const isActive = pathname === href;
							return (
								<Link
									className={classNames([
										styles.link,
										{[styles.active]: isActive},
									])}
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
		</div>
	);
};

export default Sidebar;
