import React from 'react'
import { useAppRoute } from 'modules/core/router/router'
import { AppRouteName } from 'modules/core/router/router.types'
import { GithubProfilePage } from 'modules/github/pages/github-profile-page/github-profile-page'
import './main-layout.scss'
import { UsersListPage } from 'modules/user/pages/users-list-page/users-list-page'
import { MainSidebar } from '../main-sidebar/main-sidebar'
import { MainHeader } from '../main-header/main-header'
import { HomePage } from '../home-page/home-page'

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
        PageComponent: HomePage,
    },
}

export const MainLayout: React.FC = () => {
    const routeName = useAppRoute().route.name
    const config = FEATURE_PAGES_CONFIG_BY_ID[routeName]

    return (
        <main className='main-layout g-layout'>
            <header className='main-layout__header'>
                <MainHeader />
            </header>
            <aside className='main-layout__sidebar'>
                <MainSidebar />
            </aside>
            <section className='main-layout__content'>
                {<config.PageComponent></config.PageComponent>}
            </section>
        </main>
    )
}
