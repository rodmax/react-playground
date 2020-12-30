import React from 'react'
import './main-header.scss'
import bundleReportPath from 'assets/bundles-report.html'
import { t } from 'modules/core/i18n'
import { LanguageSelect } from '../language-select/language-select'

export const MainHeader: React.FC = () => {
    return (
        <div className='main-header'>
            <h1 className='main-header__title'>{t('app:header.mainHeader')}</h1>
            <a
                className='main-header__right-item'
                href={bundleReportPath}
                target='_blank'
                rel='noreferrer'
            >
                {t('app:header.bundleReportLink')}
            </a>
            <div className='main-header__right-item'>
                <LanguageSelect />
            </div>
        </div>
    )
}
