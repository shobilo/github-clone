import About from '../pages/About'
import Main from '../pages/Main'
import RepositoryIdPage from '../pages/RepositoryIdPage'

const publicRoutes = [
  {path: '/', element: <Main/>, exact: true},
  {path: '/about', element: <About/>, exact: true},
  {path: '/repository/:id', element: <RepositoryIdPage/>, exact: true}
]

export default publicRoutes