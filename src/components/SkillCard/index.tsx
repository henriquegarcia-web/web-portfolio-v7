import React, { useRef } from 'react'

import * as S from './styles'

import { useInView } from 'framer-motion'
import { Tag, TechIcon } from '@/components'
import { ISkillTechnology } from '@/utils/types/portfolio'

interface SkillCardProps {
  technology: ISkillTechnology
  className?: string
}

const SkillCard: React.FC<SkillCardProps> = ({ technology, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'learning':
        return '#ff6b6b'
      case 'intermediate':
        return '#ffd93d'
      case 'advanced':
        return '#64ffda'
      default:
        return '#64ffda'
    }
  }

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'learning':
        return 'Aprendendo'
      case 'intermediate':
        return 'Intermediário'
      case 'advanced':
        return 'Avançado'
      default:
        return 'Aprendendo'
    }
  }

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

  const itemVariants = {
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

  const metricVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  return (
    <S.SkillCard
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <S.SkillHeader>
        <S.SkillIcon variants={iconVariants}>
          <TechIcon iconKey={technology.iconKey} size="medium" />
        </S.SkillIcon>
        <S.SkillName variants={textVariants}>{technology.name}</S.SkillName>
        <S.SkillLevel variants={itemVariants}>
          <Tag color={getLevelColor(technology.level)} size="small">
            {getLevelLabel(technology.level)}
          </Tag>
        </S.SkillLevel>
      </S.SkillHeader>

      <S.SkillMetrics variants={itemVariants}>
        {[
          { value: technology.projects, label: 'Projetos' },
          { value: technology.jobs, label: 'Trabalhos' },
          { value: technology.courses, label: 'Cursos' },
        ].map((metric, index) => (
          <S.MetricItem variants={metricVariants}>
            <S.MetricValue>{metric.value}</S.MetricValue>
            <S.MetricLabel>{metric.label}</S.MetricLabel>
          </S.MetricItem>
        ))}
      </S.SkillMetrics>
    </S.SkillCard>
  )
}

export default SkillCard
