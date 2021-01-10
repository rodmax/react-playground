import ReactDOM from 'react-dom'
import './index.scss'
import { App } from 'app/app'
import { initializeDevTools } from 'modules/core/devtools/devtools'

initializeDevTools()

ReactDOM.render(<App />, document.getElementById('root'))
