import React from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'
import { Tag, TechIcon } from '@/components'
import { ISkillTechnology } from '@/utils/types/portfolio'
import { hoverScale, hoverLift, fadeInUp, staggerItem } from '@/utils/constants'

interface SkillCardProps {
  technology: ISkillTechnology
  className?: string
}

const SkillCard: React.FC<SkillCardProps> = ({ technology, className }) => {
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

  return (
    <motion.div
      variants={hoverLift}
      whileHover="hover"
      whileTap="tap"
      initial="hidden"
      animate="visible"
    >
      <S.SkillCard className={className}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <S.SkillHeader>
            <motion.div variants={hoverScale} whileHover="hover" whileTap="tap">
              <S.SkillIcon>
                <TechIcon iconKey={technology.iconKey} size="medium" />
              </S.SkillIcon>
            </motion.div>
            <S.SkillName>{technology.name}</S.SkillName>
            <S.SkillLevel>
              <Tag color={getLevelColor(technology.level)} size="small">
                {getLevelLabel(technology.level)}
              </Tag>
            </S.SkillLevel>
          </S.SkillHeader>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <S.SkillMetrics>
            {[
              { value: technology.projects, label: 'Projetos' },
              { value: technology.jobs, label: 'Trabalhos' },
              { value: technology.courses, label: 'Cursos' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover="hover"
                whileTap="tap"
              >
                <S.MetricItem>
                  <S.MetricValue>{metric.value}</S.MetricValue>
                  <S.MetricLabel>{metric.label}</S.MetricLabel>
                </S.MetricItem>
              </motion.div>
            ))}
          </S.SkillMetrics>
        </motion.div>
      </S.SkillCard>
    </motion.div>
  )
}

export default SkillCard
