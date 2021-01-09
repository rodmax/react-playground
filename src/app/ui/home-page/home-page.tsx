import React from 'react'
import { PageContent } from 'common/ui/page-content/page-content'
import bigLogoUrl from 'assets/big-logo.svg'
import { t } from 'modules/core/i18n'
import { config } from 'modules/core/config/config'
import './home-page.scss'

export const HomePage: React.FC = () => {
    return (
        <PageContent>
            <div className='home-page'>
                <section>
                    <h1>{t('app:homePageTitle')}</h1>
                    <pre>{JSON.stringify(config(), null, 2)}</pre>
                </section>
                <img src={bigLogoUrl} />
            </div>
        </PageContent>
    )
}
