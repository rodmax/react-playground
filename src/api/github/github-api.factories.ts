import { factoryT } from 'factory-t'
import { GithubUserDto } from './github-api.types'

export const githubUserDtoFactory = factoryT<GithubUserDto>({
    login: 'login',
    avatar_url: 'mocked-avatar-url',
    repos_url: 'mocked-repo-url',
})
