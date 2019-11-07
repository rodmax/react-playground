import { Epic, ofType } from 'redux-observable'
import { switchMap, map, startWith } from 'rxjs/operators'
import { of } from 'rxjs'
import { GithubUserDto } from '../api/github-profile.api.typings'
import { GhProfileAnyAction, ghProfileActions } from './github-profile.actions'

export const ghProfileFetchDataEpic: Epic<GhProfileAnyAction> = action$ => {
    return action$.pipe(
        ofType(ghProfileActions.fetchRequested.type),
        startWith(true), // For debug we load data when app inited
        switchMap(() => {
            return of({ login: 'rod-max' } as GithubUserDto).pipe(
                map(useDto => {
                    return ghProfileActions.fetchComplete.create(useDto)
                })
            )
        })
    )
}
