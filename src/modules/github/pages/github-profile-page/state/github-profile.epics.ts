import { Epic, ofType } from 'redux-observable'
import { switchMap, map } from 'rxjs/operators'
import { githubApiClient } from 'api/github/github-api.client'
import { GithubProfileAction, githubProfileActions } from './github-profile.actions'

export const githubProfileFetchDataEpic: Epic<GithubProfileAction> = action$ => {
    return action$.pipe(
        ofType('@githubProfile.loadStart'),
        switchMap(action => {
            return githubApiClient.getProfile(action.payload.username).pipe(
                map(userDto => {
                    return githubProfileActions.loadSuccess(userDto)
                })
            )
        })
    )
}
