/// <reference types="./redux-observable.patch" />

import { combineReducers, createStore, applyMiddleware, ReducersMapObject, Action } from 'redux'
import { createEpicMiddleware, combineEpics, Epic } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- quick fix to make TS happy
type BaseReducerObject = ReducersMapObject<any, any>

interface StoreOptions<M extends BaseReducerObject> {
    reducers: M
    epics: Array<Epic>
    enabledDevTools?: boolean
}

export const storeFactory = <M extends BaseReducerObject>(options: StoreOptions<M>) => {
    options = {
        enabledDevTools: false,
        ...options,
    }

    return () => {
        const reducer = combineReducers(options.reducers)

        const epicMiddleware = createEpicMiddleware<Action>()
        let enhancer = applyMiddleware(epicMiddleware)
        if (options.enabledDevTools) {
            enhancer = composeWithDevTools(enhancer)
        }
        const store = createStore(reducer, enhancer)
        epicMiddleware.run(combineEpics(...options.epics))
        return store
    }
}
