import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../app/store/store'

export const GithubProfileCard: React.FC = () => {
    const userDto = useSelector(selectGithubUserDto)
    if (!userDto) {
        return <h4>Loading...</h4>
    }
    return (
        <>
            <h2>Github profile</h2>
            <h3>{userDto.login}</h3>
            <img src={userDto.avatar_url} />
            <pre>{JSON.stringify(userDto, null, 4)}</pre>
        </>
    )
}

const selectGithubUserDto = (state: AppState) => state.ghProfile.userDto
