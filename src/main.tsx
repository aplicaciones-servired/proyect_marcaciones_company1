import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Routes/Login.tsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import { SigUp } from './Routes/SigUp.tsx'
import { Dashboard } from './Routes/Dashboard.tsx'
import { ProtectedRoute } from './Routes/ProtectedRoute.tsx'
import { AuthProvider } from './Auth/AuthProvider.tsx'

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
