import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ImagesStore } from './stores/ImagesStoremages'

let imagesStore = new ImagesStore()

ReactDOM.render(<App store={imagesStore} />, document.getElementById('root'))
registerServiceWorker()

serviceWorker.unregister()
