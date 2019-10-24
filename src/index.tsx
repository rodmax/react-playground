import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAppStore} from 'store';
import {IntlProvider} from 'react-intl';

import App from 'app/App';

const store = createAppStore();

ReactDOM.render(
    <IntlProvider
        locale="ru"
    >
        <Provider store={store}>
            <App />
        </Provider>
    </IntlProvider>,
    document.getElementById('root')
);
