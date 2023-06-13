import * as ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '@redux/store'
import GlobalStyles from './style/GlobalStyles/GlobalStyles.styled'
import Header from '@components/Header/Header'
import App from './App'
import WrrapedJobPage from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/jobs/:id' element={<WrrapedJobPage />} />
        <Route path='/notFound' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/notFound' replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
