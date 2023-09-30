import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProtectedRoute } from './Routes/ProtectedRoute.js'
import { AuthProvider } from './Auth/AuthProvider.js'
import { Dashboard } from './Routes/Dashboard.js'
import { Login } from './Routes/Login.js'
import { SigUp } from './Routes/SigUp.js'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SigUp />
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
