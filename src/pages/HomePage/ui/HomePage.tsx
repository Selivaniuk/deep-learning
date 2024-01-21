import {type FC} from 'react';
import {useTranslation} from 'react-i18next';

import {AppLanguage} from 'shared/config/i18n/i18n';

const HomePage: FC = () => {
	const {i18n, t} = useTranslation('home');
	const toggleLanguage = (): void => {
		const currentLanguage = i18n.language as AppLanguage;
		const newLanguage =
			currentLanguage === AppLanguage.EN
				? AppLanguage.RU
				: AppLanguage.EN;
		i18n.changeLanguage(newLanguage).catch(err => {
			console.error(err);
		});
	};
	return (
		<div>
			<h1>{t('Home page')}</h1>
			<button onClick={toggleLanguage}>Lng</button>
		</div>
	);
};

export default HomePage;
