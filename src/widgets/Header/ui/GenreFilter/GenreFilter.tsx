import {useState, type FC} from 'react';

import {
	GenresFilterValue,
	getItems,
} from './GenereFilterItems/GenereFilterItems';
import styles from './GenreFilter.module.scss';

import classNames from 'shared/lib/classNames/classNames';

const GenreFilter: FC = () => {
	const [activeFilter, setActiveFilter] = useState<GenresFilterValue>(
		GenresFilterValue.ALL,
	);
	const filters = getItems();

	const onFilterClick = (value: GenresFilterValue): void => {
		setActiveFilter(value);
	};

	return (
		<div className={styles.filters}>
			{filters.map((filter, i) => (
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
					{i + 1 < filters.length && (
						<span style={{userSelect: 'none'}}>/</span>
					)}
				</span>
			))}
		</div>
	);
};

export default GenreFilter;
