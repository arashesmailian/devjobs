import {RouterProvider} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'

import {selectTheme} from '@redux/selectors'

import {router} from './routes'

const App: React.FC = () => {
  const theme = useSelector(selectTheme)

  useEffect(() => {
    document.getElementById('root').dataset.theme = theme
    document.getElementById('modal').dataset.theme = theme
  }, [theme])

  return <RouterProvider router={router} />
}
export default App
