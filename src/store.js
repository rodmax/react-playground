import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appStoreReducer from 'reducers';
import {loadLocationsSaga} from 'actions';

let store = null;

export function getStore() {
    if (!store) {
        throw new Error('Store doesn\'t create yet. Call createAppStore() first');
    }
    return store;
}

export function createAppStore() {
    const sagaMiddleware = createSagaMiddleware();
    store = createStore(appStoreReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(loadLocationsSaga);
    return store;
}
