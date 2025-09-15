import { createContext, useContext, ReactNode } from 'react'

interface MainContextProps {
  children: ReactNode
}

interface MainContextValue {}

const MainContext = createContext<MainContextValue | undefined>(undefined)

export const MainContextProvider = ({ children }: MainContextProps) => {
  const value: MainContextValue = {}

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export const useMainContext = (): MainContextValue => {
  const context = useContext(MainContext)

  if (context === undefined) {
    throw new Error('useMainContext must be used within a MainContextProvider')
  }

  return context
}
