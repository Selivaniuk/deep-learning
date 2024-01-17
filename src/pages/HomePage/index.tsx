import {lazy} from 'react';

import delay from 'shared/lib/delay/delay';

export default lazy(async () => await delay(import('./ui/HomePage')));
