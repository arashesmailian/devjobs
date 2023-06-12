// import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '@redux/store'
import App from './App'
import GlobalStyles from './style/GlobalStyles/GlobalStyles.styled'
import JobPage from './pages/JobPage'
import Header from '@components/Header/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/jobs/:id' element={<JobPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
