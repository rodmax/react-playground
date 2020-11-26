import { Epic, ofType } from 'redux-observable'
import { switchMap, map } from 'rxjs/operators'
import { UsersListAction, usersListActions } from './users-list.actions'
import { userClient } from 'api/pizza-store/user/user-client'

export const usersListEpic: Epic<UsersListAction> = action$ => {
    return action$.pipe(
        ofType('@usersList.loadStart'),
        switchMap(() => {
            return userClient.search({ limit: 10, page: 1, orderBy: 'asc', sortBy: 'name' }).pipe(
                map(usersList => {
                    return usersListActions.loadSuccess(usersList)
                })
            )
        })
    )
}
