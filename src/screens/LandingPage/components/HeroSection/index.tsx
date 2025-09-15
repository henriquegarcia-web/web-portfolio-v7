import React from 'react'

import * as S from './styles'
import { FaGithub, FaLinkedinIn, FaBehance, FaWhatsapp } from 'react-icons/fa'

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

        <S.CTAButton href="#contact">
          Fale comigo
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <FaWhatsapp />
          </svg>
        </S.CTAButton>

        <S.SocialLinks>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon === 'github' && <FaGithub />}
              {link.icon === 'linkedin' && <FaLinkedinIn />}
              {link.icon === 'behance' && <FaBehance />}
            </a>
          ))}
        </S.SocialLinks>

        <S.FloatingElements>
          <S.Element className="element-1">React</S.Element>
          <S.Element className="element-2">TypeScript</S.Element>
          <S.Element className="element-3">Next.js</S.Element>
          <S.Element className="element-4">Node.js</S.Element>
        </S.FloatingElements>
      </S.Content>

      {/* <S.HeroImage>
        <S.AvatarContainer>
          <S.Avatar>
            <S.AvatarInner>
              <S.CodeSymbols>
                <span>&lt;/&gt;</span>
                <span>{'{'}</span>
                <span>{'}'}</span>
                <span>React</span>
                <span>TS</span>
              </S.CodeSymbols>
            </S.AvatarInner>
          </S.Avatar>
          <S.FloatingElements>
            <S.Element className="element-1">React</S.Element>
            <S.Element className="element-2">TypeScript</S.Element>
            <S.Element className="element-3">Next.js</S.Element>
            <S.Element className="element-4">Node.js</S.Element>
          </S.FloatingElements>
        </S.AvatarContainer>
      </S.HeroImage> */}
    </S.HeroSection>
  )
}

export default HeroSection
