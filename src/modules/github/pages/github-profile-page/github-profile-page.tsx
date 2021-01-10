import { BarsSpinner } from 'common/ui/bars-spinner/bars-spinner'
import { PageContent } from 'common/ui/page-content/page-content'
import { GithubUserCard } from 'modules/github/ui/github-user-card/github-user.card'
import { Dispatch, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GithubProfileAction, githubProfileActions } from './state/github-profile.actions'
import { DEFAULT_GITHUB_USERNAME } from './state/github-profile.reducer'
import { selectGithubUserDto, selectIsGithubUserLoading } from './state/github-profile.selectors'

export const GithubProfilePage: React.FC = () => {
    const userDto = useSelector(selectGithubUserDto)
    const isLoading = useSelector(selectIsGithubUserLoading)
    const dispatch = useDispatch<Dispatch<GithubProfileAction>>()

    useEffect(() => {
        dispatch(githubProfileActions.loadStart({ username: DEFAULT_GITHUB_USERNAME }))
    }, [dispatch])

    return (
        <PageContent>
            <h2>Github profile</h2>
            {userDto ? <GithubUserCard user={userDto}></GithubUserCard> : null}
            <BarsSpinner isVisible={isLoading} fitContainer></BarsSpinner>
        </PageContent>
    )
}
