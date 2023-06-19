import {createBrowserRouter, Outlet, Route, Routes} from 'react-router-dom'

import Header from '@components/Header/Header'

import HomePage from '@pages/HomePage'
import JobPage from '@pages/JobPage'
import NotFoundPage from '@pages/NotFoundPage'

import GlobalStyles from '@styles/GlobalStyles'
import NewErrorBoundary from '@components/ErrorBoundary/ErrorBoundary'
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary'

const Root = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}></Route>
      </Routes>
    </>
  )
}

export const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {path: '/', Component: HomePage, errorElement: <ErrorBoundary />},
      {path: '/jobs/:id', Component: JobPage, ErrorBoundary: ErrorBoundary},
      {
        path: '/notFound',
        Component: NotFoundPage,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {path: '*', Component: Root},
])
