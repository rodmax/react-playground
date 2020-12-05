import { apiClientBackend } from 'api/pizza-store/common/api-client-backend'
import { shouldNeverBeCalled } from 'common/utils/misc'
import { Epic, ofType } from 'redux-observable'
import { merge, NEVER } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { AuthAction } from './auth.actions'

export const authEpic: Epic<AuthAction> = action$ => {
    const handleAuthChanges$ = action$.pipe(
        ofType('@auth.login', '@auth.logout'),
        switchMap(action => {
            switch (action.type) {
                case '@auth.login':
                    apiClientBackend.updateToken(action.payload.apiToken)
                    break
                case '@auth.logout':
                    apiClientBackend.updateToken('')
                    break
                default:
                    shouldNeverBeCalled(action)
            }
            return NEVER
        })
    )
    const restoreAuthToken$ = NEVER

    return merge(handleAuthChanges$, restoreAuthToken$)
}
