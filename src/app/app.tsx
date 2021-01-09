import React from 'react'
import { selectIsAppInitialized } from 'modules/core/settings/settings.selectors'
import { Provider, useSelector } from 'react-redux'
import { RouterProvider } from 'react-router5'
import { appStore } from 'app/app-store'
import { createAppRouter } from 'modules/core/router/router'
import { MainLayout } from './ui/main-layout/main-layout'

const router = createAppRouter()
router.start()

const AppInner: React.FC = () => {
    const isAppInitialized = useSelector(selectIsAppInitialized)
    if (isAppInitialized) {
        return <MainLayout></MainLayout>
    }
    return <>...</>
}

export const App: React.FunctionComponent = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router}>
                <Provider store={appStore()}>
                    <AppInner />
                </Provider>
            </RouterProvider>
        </React.StrictMode>
    )
}
