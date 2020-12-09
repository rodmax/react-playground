import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from 'app/app'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import { appStore } from 'app/app-store'
import { createAppRouter } from 'app/router/router'

const router = createAppRouter()
router.start()

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Provider store={appStore()}>
                <App></App>
            </Provider>
        </RouterProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
