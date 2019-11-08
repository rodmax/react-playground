import { fromFetch } from 'rxjs/fetch'
import { GithubUserDto } from './github-profile-api.typings'
import { switchMap } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs'

export const ghProfileApiClient = {
    getProfile,
}

function getProfile(username: string): Observable<GithubUserDto> {
    return fromFetch(`https://api.github.com/users/${username}`).pipe(
        switchMap(resp => {
            if (resp.ok) {
                return resp.json()
            } else {
                return throwError(resp)
            }
        })
    )
}
