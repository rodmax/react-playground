import { GithubProfileStateSlice } from './github-profile.reducer'

export const selectGithubUserDto = (state: GithubProfileStateSlice) => state.githubProfile.userDto
export const selectIsGithubUserLoading = (state: GithubProfileStateSlice) =>
    state.githubProfile.isLoading
