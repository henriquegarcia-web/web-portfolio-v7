import React from 'react'

import * as S from './styles'
import { Button, CopyButton } from '@/components'
import { useTypewriter } from '@/hooks'
import { IPersonalInfo } from '@/utils/types'

interface HeroSectionProps {
  data: IPersonalInfo
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { currentText } = useTypewriter({
    words: data.title.hero,
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseTime: 2000,
    loop: true,
  })

  const socialLinks = [
    { name: 'GitHub', url: data.socialLinks?.github, icon: 'github' },
    { name: 'LinkedIn', url: data.socialLinks?.linkedin, icon: 'linkedin' },
    { name: 'Behance', url: data.socialLinks?.behance, icon: 'behance' },
  ]

  return (
    <S.HeroSection id="home">
      <S.Content>
        <S.Greeting>Olá, eu sou o</S.Greeting>
        <S.Name data-text={data.name}>{data.name}</S.Name>
        <S.Title>
          Desenvolvedor <S.TypewriterText>{currentText}</S.TypewriterText>
        </S.Title>
        <S.Description>{data.heroSummary}</S.Description>

        <S.CTAWrapper>
          <Button href={data.whatsapp} icon="whatsapp" size="large">
            Fale comigo
          </Button>
          <CopyButton label={data.email} value={data.email} />
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
          <S.Element className="element-3">AWS</S.Element>
          <S.Element className="element-4">Next.js</S.Element>
          <S.Element className="element-5">Node.js</S.Element>
          <S.Element className="element-6">Docker</S.Element>
        </S.FloatingElements>
      </S.Content>
    </S.HeroSection>
  )
}

export default HeroSection
