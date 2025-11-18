import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/components'
import { LandingPage, ServicesPage } from '@/screens'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
    ],
  },
])

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
