import React from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'
import { Button, CopyButton } from '@/components'
import { useTypewriter, useScrollAnimation } from '@/hooks'
import { IPersonalInfo } from '@/utils/types'
import { fadeInUp, fadeInLeft, textReveal } from '@/utils/constants'

interface HeroSectionProps {
  data: IPersonalInfo
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
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

  const floatingElements = ['React', 'TypeScript', 'AWS', 'Next.js', 'Node.js', 'Docker']

  return (
    <S.HeroSection id="home" ref={ref}>
      <S.Content>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
        >
          <S.Greeting>Olá, eu sou o</S.Greeting>
        </motion.div>

        <motion.div
          variants={textReveal}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.4 }}
        >
          <S.Name data-text={data.name}>{data.name}</S.Name>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
        >
          <S.Title>
            Desenvolvedor <S.TypewriterText>{currentText}</S.TypewriterText>
          </S.Title>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.8 }}
        >
          <S.Description>{data.heroSummary}</S.Description>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 1.0 }}
        >
          <S.CTAWrapper>
            <Button href={data.whatsapp} icon="whatsapp" size="large">
              Fale comigo
            </Button>
            <CopyButton label={data.email} value={data.email} />
          </S.CTAWrapper>
        </motion.div>

        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 1.2 }}
        >
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
        </motion.div>

        <S.FloatingElements>
          {floatingElements.map((element, index) => (
            <S.Element key={element} className={`element-${index + 1}`}>
              {element}
            </S.Element>
          ))}
        </S.FloatingElements>
      </S.Content>
    </S.HeroSection>
  )
}

export default HeroSection
