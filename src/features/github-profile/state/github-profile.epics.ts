import { Epic, ofType } from 'redux-observable'
import { switchMap, map, startWith } from 'rxjs/operators'
import { ghProfileApiClient } from '../api/github-profile-api.client'
import { GhProfileAction, ghProfileActions } from './github-profile.actions'

const DEFAULT_USERNAME = 'rodmax'

export const ghProfileFetchDataEpic: Epic<GhProfileAction> = action$ => {
    return action$.pipe(
        ofType('ghProfile/profileDataRequested'),
        switchMap(action => {
            return ghProfileApiClient.getProfile(action.payload.username).pipe(
                map(userDto => {
                    return ghProfileActions.profileDataLoaded.create(userDto)
                })
            )
        }),
        // Kick start initial loading
        startWith(ghProfileActions.profileDataRequested.create({ username: DEFAULT_USERNAME }))
    )
}
