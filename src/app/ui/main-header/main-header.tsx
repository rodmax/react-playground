import React from 'react'
import './main-header.scss'
import bundleReportPath from 'assets/bundles-report.html'

export const MainHeader: React.FC = () => {
    return (
        <div className='main-header'>
            <h1>React Playground</h1>
            <section className='main-header__right'>
                <a href={bundleReportPath} target='_blank' rel='noreferrer'>
                    Bundles report
                </a>
            </section>
        </div>
    )
}
