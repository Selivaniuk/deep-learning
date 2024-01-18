import {createRoot} from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom';

import App from 'app';
import {SidebarProvider} from 'app/providers/sidebar';
import {ThemeProvider} from 'app/providers/theme';

const domNode = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(domNode!);

root.render(
	<BrowserRouter>
		<ThemeProvider>
			<SidebarProvider>
				<App />
			</SidebarProvider>
		</ThemeProvider>
	</BrowserRouter>,
);
