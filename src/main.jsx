import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product_page from './pages/Product_page.jsx'
import About_page from './pages/About_page.jsx'
import Contact_page from './pages/Contact_page.jsx'
import Home_page from './pages/Home_page.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children : [
      {
        path: '',
        element:<Home_page />
      },
      {
        path: 'About',
        element:<About_page/>
      },
      {
        path: "Products",
        element: <Product_page/>
      },
      {
        path: "Contact",
        element: <Contact_page />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
