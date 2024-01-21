import {useTranslation} from 'react-i18next';

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

export const getItems = (): FilterType[] => {
	const {t} = useTranslation('layout');

	const filters: FilterType[] = [
		{
			label: t('All shows'),
			value: GenresFilterValue.ALL,
		},
		{
			label: t('Movies'),
			value: GenresFilterValue.MOVIES,
		},
		{
			label: t('serials'),
			value: GenresFilterValue.SERIALS,
		},
		{
			label: t('anime'),
			value: GenresFilterValue.ANIME,
		},
	];

	return filters;
};
