import {type FC} from 'react';
import {useTranslation} from 'react-i18next';

const TestPage: FC = () => {
	const {t} = useTranslation('translation');

	return (
		<div>
			<h1>{t('test-page')}</h1>
		</div>
	);
};

export default TestPage;
