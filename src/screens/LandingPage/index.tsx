import React from 'react'

import { USER_DATA } from '@/utils/constants/data'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import { Container } from './styles'

// Página inicial do portfólio
const LandingPage: React.FC = () => {
  return (
    <Container>
      <Navigation data={USER_DATA.personal} />
      <HeroSection data={USER_DATA.personal} />
      <AboutSection data={USER_DATA.personal} />
      <SkillsSection data={USER_DATA.skills} />
      <ProjectsSection data={USER_DATA.projects} />
      <ExperienceSection data={USER_DATA.experience} />
      <ContactSection data={USER_DATA.personal} />
    </Container>
  )
}

export default LandingPage
