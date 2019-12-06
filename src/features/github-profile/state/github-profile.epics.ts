import { Epic, ofType } from 'redux-observable'
import { switchMap, map, startWith } from 'rxjs/operators'
import { ghProfileApiClient } from '../api/github-profile-api.client'
import { GhProfileAction, ghProfileActions } from './github-profile.actions'

const DEFAULT_USERNAME = 'rodmax'

export const ghProfileFetchDataEpic: Epic<GhProfileAction> = action$ => {
    return action$.pipe(
        ofType('@gh-profile/fetch-requested'),
        switchMap(action => {
            return ghProfileApiClient.getProfile(action.payload.username).pipe(
                map(userDto => {
                    return ghProfileActions.fetchComplete.create(userDto)
                })
            )
        }),
        // Kick start initial loading
        startWith(ghProfileActions.fetchRequested.create({ username: DEFAULT_USERNAME }))
    )
}
