import { GithubUserDto } from './github-profile-api.typings'
import { httpClient } from 'app/shared/http/http-client'
import { Observable } from 'rxjs'

export const ghProfileApiClient = {
    getProfile,
}

function getProfile(username: string): Observable<GithubUserDto> {
    return httpClient.request<GithubUserDto>({
        method: 'GET',
        url: `https://api.github.com/users/${username}`,
    })
}
