import { Epic, ofType } from 'redux-observable'
import { switchMap, map, startWith } from 'rxjs/operators'
import { githubApiClient } from 'api/github/github-api.client'
import { GithubProfileAction, githubProfileActions } from './github-profile.actions'

const DEFAULT_USERNAME = 'rodmax'

export const githubProfileFetchDataEpic: Epic<GithubProfileAction> = action$ => {
    return action$.pipe(
        ofType('@githubProfile/dataLoad.Start'),
        switchMap(action => {
            return githubApiClient.getProfile(action.payload.username).pipe(
                map(userDto => {
                    return githubProfileActions.dataLoadSuccess(userDto)
                })
            )
        }),
        // Kick start initial loading
        startWith(githubProfileActions.dataLoadingStart({ username: DEFAULT_USERNAME }))
    )
}
