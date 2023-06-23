import {useRouteError} from 'react-router-dom'
import NotFoundPage from '@pages/NotFoundPage'

const ErrorBoundary = () => {
  let error = useRouteError() as Error
  return <NotFoundPage />
}

export default ErrorBoundary
