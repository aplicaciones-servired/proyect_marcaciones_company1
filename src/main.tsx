import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './routes/Login.tsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import { SigUp } from './routes/SigUp.tsx'
import { Dashboard } from './routes/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/sigup",
    element: <SigUp />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
