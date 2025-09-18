import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import * as S from './styles'
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
    <S.SkillCard ref={ref} className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <S.SkillHeader>
          <motion.div variants={iconVariants}>
            <S.SkillIcon>
              <TechIcon iconKey={technology.iconKey} size="medium" />
            </S.SkillIcon>
          </motion.div>
          <motion.div variants={textVariants}>
            <S.SkillName>{technology.name}</S.SkillName>
          </motion.div>
          <motion.div variants={itemVariants}>
            <S.SkillLevel>
              <Tag color={getLevelColor(technology.level)} size="small">
                {getLevelLabel(technology.level)}
              </Tag>
            </S.SkillLevel>
          </motion.div>
        </S.SkillHeader>

        <motion.div variants={itemVariants}>
          <S.SkillMetrics>
            {[
              { value: technology.projects, label: 'Projetos' },
              { value: technology.jobs, label: 'Trabalhos' },
              { value: technology.courses, label: 'Cursos' },
            ].map((metric, index) => (
              <motion.div key={index} variants={metricVariants} custom={index}>
                <S.MetricItem>
                  <S.MetricValue>{metric.value}</S.MetricValue>
                  <S.MetricLabel>{metric.label}</S.MetricLabel>
                </S.MetricItem>
              </motion.div>
            ))}
          </S.SkillMetrics>
        </motion.div>
      </motion.div>
    </S.SkillCard>
  )
}

export default SkillCard
