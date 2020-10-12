import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { GhProfileAction } from 'modules/github/pages/github-profile-page/state/github-profile.actions'
import { ghProfileReducer } from 'modules/github/pages/github-profile-page/state/github-profile.reducer'
import { ghProfileFetchDataEpic } from 'modules/github/pages/github-profile-page/state/github-profile.epics'

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
export type AnyAction = GhProfileAction

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
