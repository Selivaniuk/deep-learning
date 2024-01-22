import {type FC} from 'react';

import {useTranslation} from 'react-i18next';

import styles from './LanguageSwitcher.module.scss';

import LanguageIcon from 'shared/assets/icons/Language.svg';
import {AppLanguage} from 'shared/config/i18n/i18n';

const LanguageSwitcher: FC = () => {
	const {i18n, t} = useTranslation('layout');

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
		<button onClick={toggleLanguage} className={styles.languageBtn}>
			<LanguageIcon className={styles.icon} />
			{t('app-language')}
		</button>
	);
};

export default LanguageSwitcher;
