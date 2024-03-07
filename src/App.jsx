import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Layout from './components/layout/Layout'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import './global.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Navigate replace to='home' />} />
      <Route path='home' element={<HomePage />} />
      <Route path='catalog' element={<ProductsPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  ),
  { basename: '/val-product-list' }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
