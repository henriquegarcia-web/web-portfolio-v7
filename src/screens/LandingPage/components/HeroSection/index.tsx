import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import * as S from './styles'
import { Button, CopyButton } from '@/components'
import { useTypewriter } from '@/hooks'
import { IPersonalInfo } from '@/utils/types'

interface HeroSectionProps {
  data: IPersonalInfo
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const nameVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const ctaVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const socialVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  return (
    <S.HeroSection id="home" ref={ref}>
      <motion.div
        className="content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <S.Greeting>Olá, eu sou o</S.Greeting>
        </motion.div>

        <motion.div variants={nameVariants}>
          <S.Name data-text={data.name}>{data.name}</S.Name>
        </motion.div>

        <motion.div variants={itemVariants}>
          <S.Title>
            Desenvolvedor <S.TypewriterText>{currentText}</S.TypewriterText>
          </S.Title>
        </motion.div>

        <motion.div variants={itemVariants}>
          <S.Description>{data.heroSummary}</S.Description>
        </motion.div>

        <motion.div variants={ctaVariants}>
          <S.CTAWrapper>
            <Button href={data.whatsapp} icon="whatsapp" size="large">
              Fale comigo
            </Button>
            <CopyButton label={data.email} value={data.email} />
          </S.CTAWrapper>
        </motion.div>

        <motion.div variants={socialVariants}>
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
      </motion.div>
    </S.HeroSection>
  )
}

export default HeroSection
