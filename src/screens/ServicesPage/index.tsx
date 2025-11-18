import React from 'react'

import * as S from './styles'

import { Navigation, ProgressBar } from '@/components'
import { useScrollSpy } from '@/hooks'

const ServicesPage: React.FC = () => {
  const activeSection = useScrollSpy({ threshold: 0.2 })

  const handleMenuItemClick = () => {
    // O scroll spy já gerencia o estado ativo, não precisamos de estado local
  }

  return (
    <S.ServicesPage>
      <ProgressBar />
      <Navigation activeSection={activeSection} onMenuItemClick={handleMenuItemClick} />

      <S.ServicesPageContent>
        <S.CenterText>Services Page</S.CenterText>
      </S.ServicesPageContent>
    </S.ServicesPage>
  )
}

export default ServicesPage

