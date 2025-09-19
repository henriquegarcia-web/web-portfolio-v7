import React, { useRef } from 'react'
import { useInView } from 'framer-motion'

import * as S from './styles'

interface InfoCardProps {
  icon: string
  title: string
  description: React.ReactNode
  className?: string
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const onlyTitle = !!title && !description

  // Variantes de animação para elementos internos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const contentVariants = {
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

  return (
    <S.InfoCard
      ref={ref}
      className={className}
      $onlyTitle={onlyTitle}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <S.CardIcon variants={iconVariants}>{icon}</S.CardIcon>
      <S.CardContent variants={contentVariants}>
        <S.CardTitle variants={textVariants}>{title}</S.CardTitle>
        <S.CardDescription variants={textVariants}>{description}</S.CardDescription>
      </S.CardContent>
    </S.InfoCard>
  )
}

export default InfoCard
