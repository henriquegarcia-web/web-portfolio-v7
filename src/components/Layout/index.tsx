import React from 'react'
import { Outlet } from 'react-router-dom'

import { GlobalStyle } from '@/styles'
import { Container } from './styles'

const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
