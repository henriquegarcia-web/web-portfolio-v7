import React from 'react'

import * as S from './styles'
import { Button } from '@/components'
import { IPersonalInfo } from '@/utils/types'

interface HeroSectionProps {
  data: IPersonalInfo
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const socialLinks = [
    { name: 'GitHub', url: data.socialLinks?.github, icon: 'github' },
    { name: 'LinkedIn', url: data.socialLinks?.linkedin, icon: 'linkedin' },
    { name: 'Behance', url: data.socialLinks?.twitter, icon: 'behance' },
  ]

  return (
    <S.HeroSection id="home">
      <S.Content>
        <S.Greeting>Olá, eu sou o</S.Greeting>
        <S.Name>{data.name}</S.Name>
        <S.Title>{data.title}</S.Title>
        <S.Description>{data.heroSummary}</S.Description>

        <S.CTAWrapper>
          <Button href="#contact" icon="whatsapp" size="large">
            Fale comigo
          </Button>
        </S.CTAWrapper>

        <S.SocialLinks>
          {socialLinks.map((link) => {
            return (
              <Button
                key={link.name}
                href={link.url}
                icon={link.icon as any}
                variant="primary"
                size="small"
                aria-label={link.name}
              />
            )
          })}
        </S.SocialLinks>

        <S.FloatingElements>
          <S.Element className="element-1">React</S.Element>
          <S.Element className="element-2">TypeScript</S.Element>
          <S.Element className="element-3">Next.js</S.Element>
          <S.Element className="element-4">Node.js</S.Element>
        </S.FloatingElements>
      </S.Content>
    </S.HeroSection>
  )
}

export default HeroSection
