import { GithubUserDto } from './github-profile-api.typings'
import { httpClient } from 'app/shared/http-client/http-client'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export const ghProfileApiClient = {
    getProfile,
}

function getProfile(username: string): Observable<GithubUserDto> {
    return httpClient
        .request<GithubUserDto>({
            method: 'GET',
            url: `https://api.github.com/users/${username}`,
        })
        .pipe(map(({ data }) => data))
}
