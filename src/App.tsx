import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import HomePage from './pages/HomePage'
import GlobalStyles from '@styles/GlobalStyles'
import Header from '@components/Header/Header'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import { ThemeSelector } from '@redux/selectors'

const App: React.FC = () => {
  const theme = useSelector(ThemeSelector)

  useEffect(() => {
    document.getElementById('root').dataset.theme = theme
    document.getElementById('modal').dataset.theme = theme
  }, [theme])

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs/:id' element={<JobPage />} />
        <Route path='/notFound' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/notFound' replace />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
