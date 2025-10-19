import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoadingPage from './pages/LoadingPage.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

const router = createBrowserRouter([
  {path: 'thesis/', element: <LoadingPage />},
  {path: 'thesis/login', element: <App />},
  {path: 'thesis/admin', element: <AdminDashboard />}
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
