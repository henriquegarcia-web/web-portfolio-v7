import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

type Provider = (props: Props) => JSX.Element

export const composeProviders = (...providers: Provider[]): Provider => {
  return providers.reduceRight(
    (AccumulatedProviders, CurrentProvider) => {
      return ({ children }: Props) => (
        <CurrentProvider>
          <AccumulatedProviders>{children}</AccumulatedProviders>
        </CurrentProvider>
      )
    },
    ({ children }: Props) => <>{children}</>,
  )
}
