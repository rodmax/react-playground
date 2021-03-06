import { GithubUserDto } from 'api/github/github-api.types'

interface GithubProfileCardProps {
    user: GithubUserDto
}
export const GithubUserCard: React.FC<GithubProfileCardProps> = props => {
    const user = props.user
    return (
        <>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} />
            <pre>{JSON.stringify(user, null, 4)}</pre>
        </>
    )
}
