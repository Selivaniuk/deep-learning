import {type FC} from 'react';
import {useTranslation} from 'react-i18next';

const HomePage: FC = () => {
	const {t} = useTranslation('home');

	return (
		<div>
			<h1>{t('Home page')}</h1>
		</div>
	);
};

export default HomePage;
