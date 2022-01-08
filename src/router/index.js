import About from '../pages/About'
import Main from '../pages/Main'
import RepositoryIdPage from '../pages/RepositoryIdPage'
import UnknownPage from '../pages/UnknownPage'

export const publicRoutes = [
  {path: '/', element: <Main/>, exact: true},
  {path: '/about', element: <About/>, exact: true},
  {path: '*', element: <UnknownPage/>, exact: false}
]

export const privateRoutes = [
  {path: '/', element: <Main/>, exact: true},
  {path: '/about', element: <About/>, exact: true},
  {path: '/:owner/:repository', element: <RepositoryIdPage/>, exact: true},
  {path: '*', element: <UnknownPage/>, exact: false}
]