import { GithubUserCard } from 'modules/github/ui/github-user-card/github-user.card'
import React, { Dispatch, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GithubProfileAction, githubProfileActions } from './state/github-profile.actions'
import { DEFAULT_GITHUB_USERNAME, GithubProfileStateSlice } from './state/github-profile.reducer'

export const GithubProfilePage: React.FC = () => {
    const userDto = useSelector(selectGithubUserDto)
    const dispatch = useDispatch<Dispatch<GithubProfileAction>>()

    useEffect(() => {
        dispatch(githubProfileActions.loadStart({ username: DEFAULT_GITHUB_USERNAME }))
    }, [dispatch])

    if (!userDto) {
        return <h4>Loading...</h4>
    }

    return (
        <>
            <h2>Github profile</h2>
            <GithubUserCard user={userDto}></GithubUserCard>
        </>
    )
}

const selectGithubUserDto = (state: GithubProfileStateSlice) => state.githubProfile.userDto
