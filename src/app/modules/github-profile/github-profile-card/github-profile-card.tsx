import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../core/store'

export const GithubProfileCard: React.FC = () => {
    const userDto = useSelector(selectGithubUserDto)
    return (
        <>
            <h2>Github profile</h2>
            <pre>{JSON.stringify(userDto)}</pre>
        </>
    )
}

const selectGithubUserDto = (state: AppState) => state.ghProfile.userDto
