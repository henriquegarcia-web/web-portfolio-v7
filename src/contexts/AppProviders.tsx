import { MainContextProvider } from './MainContext'
import { composeProviders } from './composeProviders'

export const AppProviders = composeProviders(MainContextProvider)
