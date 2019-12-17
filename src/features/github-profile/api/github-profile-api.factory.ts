import { FactoryT } from 'factory-t'
import { GithubUserDto } from './github-profile-api.typings'

export const githubUserDtoFactory = new FactoryT<GithubUserDto>({
    login: 'login',
    avatar_url: 'mocked-avatar-url',
    repos_url: 'mocked-repo-url',
})
