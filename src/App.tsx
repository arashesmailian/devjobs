import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import HomePage from './pages/HomePage'
import GlobalStyles from '@styles/GlobalStyles/GlobalStyles.styled'
import Header from '@components/Header/Header'
import {useSelector} from 'react-redux'
import {RootState} from '@redux/store'
import {useEffect} from 'react'

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme)

  useEffect(() => {
    document.getElementById('root').dataset.theme = theme
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
