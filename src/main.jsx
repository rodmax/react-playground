import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAppStore} from 'store';
import {IntlProvider} from 'react-intl';


import App from 'app.jsx';

const store = createAppStore();

ReactDOM.render(
    <IntlProvider locale="en">
        <Provider store={store}>
            <App/>
        </Provider>
    </IntlProvider>,
    document.getElementById('root')
);
