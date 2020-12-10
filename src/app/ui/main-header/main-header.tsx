import React from 'react'
import './main-header.scss'
import bundleReportPath from 'assets/bundles-report.html'
import { t } from 'modules/i18n/i18n'

export const MainHeader: React.FC = () => {
    return (
        <div className='main-header'>
            <h1>{t('app:header.mainHeader')}</h1>
            <section className='main-header__right'>
                <a href={bundleReportPath} target='_blank' rel='noreferrer'>
                    {t('app:header.bundleReportLink')}
                </a>
            </section>
        </div>
    )
}
