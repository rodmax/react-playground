import React from 'react'
import { useAppRoute } from '../router/router'
import { AppRouteName, APP_FEATURE_ROUTE_NAMES } from '../router/router.typings'
import { GithubProfilePage } from 'modules/github/pages/github-profile-page/github-profile-page'
import './main-layout.scss'
import { Link } from 'react-router5'
import { UsersListPage } from 'modules/user/pages/users-list-page/users-list-page'

interface PageConfig {
    PageComponent: React.ComponentType
}

const FEATURE_PAGES_CONFIG_BY_ID: Record<AppRouteName, PageConfig> = {
    'github-profile': {
        PageComponent: GithubProfilePage,
    },
    users: {
        PageComponent: UsersListPage,
    },
    home: {
        PageComponent: () => <>default page</>,
    },
}

export const MainLayout: React.FC = () => {
    const routeName = useAppRoute().route.name
    const config = FEATURE_PAGES_CONFIG_BY_ID[routeName]

    return (
        <main className='c-main-layout g-layout'>
            <aside className='c-main-layout__sidebar g-layout__fixed u-pad-24'>
                {APP_FEATURE_ROUTE_NAMES.map(name => {
                    return (
                        <Link key={name} className='c-main-layout__nav-link' routeName={name}>
                            {name}
                        </Link>
                    )
                })}
            </aside>
            <section className='g-layout__growable mod-scrollable'>
                {<config.PageComponent></config.PageComponent>}
            </section>
        </main>
    )
}
