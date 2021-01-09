import { selectIsAppInitialized } from 'modules/core/settings/settings.selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { MainLayout } from './ui/main-layout/main-layout'

export const App: React.FunctionComponent = () => {
    const isAppInitialized = useSelector(selectIsAppInitialized)
    if (isAppInitialized) {
        return <MainLayout></MainLayout>
    }
    return <>...</>
}
