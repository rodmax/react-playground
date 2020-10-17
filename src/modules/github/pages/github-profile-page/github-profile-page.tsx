import { GithubUserCard } from 'modules/github/ui/github-user-card/github-user.card'
import React from 'react'
import { useSelector } from 'react-redux'
import { GithubProfileStateSlice } from './state/github-profile.reducer'

export const GithubProfilePage: React.FC = () => {
    const userDto = useSelector(selectGithubUserDto)
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
