import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAppStore} from 'store';

import App from 'app.jsx';

const store = createAppStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
