import React from 'react'

import * as S from './styles'

import { ProgressBar } from '@/components'
import { useScrollSpy } from '@/hooks'
import { USER_DATA } from '@/utils/constants/data'

import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

const LandingPage: React.FC = () => {
  const activeSection = useScrollSpy({ threshold: 0.2 })

  const handleMenuItemClick = () => {
    // O scroll spy já gerencia o estado ativo, não precisamos de estado local
  }

  return (
    <S.LandingPage>
      <ProgressBar />
      <Navigation activeSection={activeSection} onMenuItemClick={handleMenuItemClick} />
      <HeroSection data={USER_DATA.personal} />
      <AboutSection data={USER_DATA} />
      <SkillsSection data={USER_DATA.skills} />
      <ProjectsSection data={USER_DATA.projects} />
      <ExperienceSection data={USER_DATA.experience} />
      <ContactSection data={USER_DATA.personal} />
    </S.LandingPage>
  )
}

export default LandingPage
