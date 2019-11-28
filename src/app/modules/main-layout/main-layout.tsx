import React from 'react'
import { useAppRoute } from '../../core/router/router'
import { AppRouteName, APP_FEATURE_ROUTE_NAMES } from '../../core/router/router.typings'
import { GithubProfileCard } from '../github-profile/github-profile-page/github-profile-page'
import { HttpClientDemoPage } from '../http-client-demo/http-client-demo-page'
import './main-layout.scss'
import { Link } from 'react-router5'

interface PageConfig {
    PageComponent: React.ComponentType
}

const FEATURE_PAGES_CONFIG_BY_ID: Partial<Record<AppRouteName, PageConfig>> = {
    'github-profile': {
        PageComponent: GithubProfileCard,
    },
    'http-client-demo': {
        PageComponent: HttpClientDemoPage,
    },
}

const DEFAULT_PAGE_CONFIG: PageConfig = {
    PageComponent: () => <>default page</>,
}

export const MainLayout: React.FC = () => {
    const routeName = useAppRoute().route.name
    const config = FEATURE_PAGES_CONFIG_BY_ID[routeName] || DEFAULT_PAGE_CONFIG

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
            <section className='g-layout__growable'>
                {<config.PageComponent></config.PageComponent>}
            </section>
        </main>
    )
}
