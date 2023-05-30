import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from '@redux/store'
import App from './App'
import Test from '@components/Test'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
    <Test />
  </Provider>
)
