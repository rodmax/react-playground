import { GithubUserDto } from './github-api.typings'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { httpBackend } from 'api/common/http-backend'

export const githubApiClient = {
    getProfile,
}

function getProfile(username: string): Observable<GithubUserDto> {
    return httpBackend
        .request<GithubUserDto>({
            method: 'GET',
            url: `https://api.github.com/users/${username}`,
        })
        .pipe(map(({ body }) => body))
}
