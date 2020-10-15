import { GithubUserDto } from './github-api.typings'
import { httpClient } from 'common/http/http-client'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export const githubApiClient = {
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
