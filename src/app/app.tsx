import { selectIsI18nReady } from 'modules/core/settings/settings.selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { MainLayout } from './ui/main-layout/main-layout'

export const App: React.FunctionComponent = () => {
    const isI18nReady = useSelector(selectIsI18nReady)
    if (isI18nReady) {
        return <MainLayout></MainLayout>
    }
    return <>...</>
}
