import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appStoreReducer from 'reducers';
import {searchOsmLocations} from 'client/fetch-osm';
import {loadSearchResults} from 'actions';

import App from 'app.jsx';

const store = createStore(appStoreReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

searchOsmLocations().then(resp => {
    console.log('resp', resp);
    store.dispatch(loadSearchResults(resp.data));
});
