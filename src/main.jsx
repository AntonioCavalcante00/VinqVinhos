
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import { Home } from './components/pages/Home'
import Team from './components/pages/Team'
import About from './components/pages/About'
import App from './App'


import AgeConfirm from './components/layout/AgeConfirm'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/funcionarios',
        element: <Team />
      },


      {
        path: '/quemsomos',
        element: <About />,
      }
    ]
  },

  {
    path: '/ageconfirm',
    element: <AgeConfirm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
