import {createRoot} from 'react-dom/client';

import App from 'app';
import './styles/index.scss';

const domNode = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(domNode!);
root.render(<App />);
