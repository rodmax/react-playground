import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { ghProfileReducer } from '../modules/github-profile/state/github-profile.reducer'
import { ghProfileFetchDataEpic } from '../modules/github-profile/state/github-profile.epics'
import { GhProfileAnyAction } from '../modules/github-profile/state/github-profile.actions'
import { composeWithDevTools } from 'redux-devtools-extension'

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>

export const createAppStore = () => {
    const epicMiddleware = createEpicMiddleware<AnyAction>()
    const store = createStore(
        createRootReducer(),
        composeWithDevTools(applyMiddleware(epicMiddleware))
    )
    epicMiddleware.run(createRootEpic())
    return store
}

// Root action
export type AnyAction = GhProfileAnyAction

// Root reducer
function createRootReducer() {
    return combineReducers({
        ghProfile: ghProfileReducer,
    })
}

// Root epic
function createRootEpic() {
    return combineEpics(ghProfileFetchDataEpic)
}
