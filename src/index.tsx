import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from 'app/app'
import { Provider } from 'react-redux'
import { createAppStore } from 'app/core/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createAppStore()}>
            <App></App>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
