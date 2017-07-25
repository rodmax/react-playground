import {createStore, applyMiddleware, compose} from 'redux';
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
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(
        appStoreReducer,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    );
    sagaMiddleware.run(loadLocationsSaga);
    return store;
}
