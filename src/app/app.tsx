import React from 'react'
import { GithubProfileCard } from './modules/github-profile/github-profile-card/github-profile-card'

export const App: React.FunctionComponent = () => {
    return (
        <>
            <h1>App component</h1>
            <GithubProfileCard></GithubProfileCard>
        </>
    )
}
