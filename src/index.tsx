import {createRoot} from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom';

import App from 'app';

const domNode = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(domNode!);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
