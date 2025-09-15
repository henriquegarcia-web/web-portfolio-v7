import React from 'react'

import { AppProviders } from './contexts'
import AppRouter from './router'

const App: React.FC = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}

export default App
