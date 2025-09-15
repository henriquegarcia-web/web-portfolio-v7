import React from 'react'
import { Outlet } from 'react-router-dom'

import { GlobalStyle } from '@/utils/styles'
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
