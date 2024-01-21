import {useState, type FC} from 'react';

import styles from './GenreFilter.module.scss';

import classNames from 'shared/lib/classNames/classNames';

export enum GenresFilterValue {
	ALL = 'all',
	MOVIES = 'movies',
	SERIALS = 'serials',
	ANIME = 'anime',
}

interface FilterType {
	label: string;
	value: GenresFilterValue;
}

const FILTERS: FilterType[] = [
	{
		label: 'All shows',
		value: GenresFilterValue.ALL,
	},
	{
		label: 'Movies',
		value: GenresFilterValue.MOVIES,
	},
	{
		label: 'Serials',
		value: GenresFilterValue.SERIALS,
	},
	{
		label: 'Anime',
		value: GenresFilterValue.ANIME,
	},
];
const GenreFilter: FC = () => {
	const [activeFilter, setActiveFilter] = useState<GenresFilterValue>(
		GenresFilterValue.ALL,
	);

	const onFilterClick = (value: GenresFilterValue): void => {
		setActiveFilter(value);
	};

	return (
		<div className={styles.filters}>
			{FILTERS.map((filter, i) => (
				<span
					onClick={() => {
						onFilterClick(filter.value);
					}}
					className={classNames([
						styles.filter,
						{
							[styles.activeFilter]:
								activeFilter === filter.value,
						},
					])}
					key={filter.value}
				>
					<span className={styles.label}>{filter.label}</span>
					{i + 1 < FILTERS.length && (
						<span style={{userSelect: 'none'}}>/</span>
					)}
				</span>
			))}
		</div>
	);
};

export default GenreFilter;
