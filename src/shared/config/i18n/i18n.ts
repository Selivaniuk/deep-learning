import i18n, {use} from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

export enum AppLanguage {
	ENGLISH = 'en',
	RUSSIAN = 'ru',
}

use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: AppLanguage.ENGLISH,
		debug: __IS_DEV__,

		interpolation: {
			escapeValue: false,
		},
	})
	.catch(err => {
		console.error('i18n ', err);
	});

export default i18n;
