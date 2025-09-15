import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/components'
import { LandingPage } from '@/screens'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
])

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
