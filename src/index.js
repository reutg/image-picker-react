import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import { ImagesStore } from './stores/ImagesStore'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const imagesStore = new ImagesStore()
const stores = { imagesStore }

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
