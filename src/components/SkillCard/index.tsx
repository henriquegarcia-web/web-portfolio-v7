import React from 'react'

import * as S from './styles'
import { Tag, TechIcon } from '@/components'
import { ISkillTechnology } from '@/utils/types/portfolio'

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
    <S.SkillCard className={className}>
      <S.SkillHeader>
        <S.SkillIcon>
          <TechIcon iconKey={technology.iconKey} size="medium" />
        </S.SkillIcon>
        <S.SkillName>{technology.name}</S.SkillName>
        <S.SkillLevel>
          <Tag color={getLevelColor(technology.level)} size="small">
            {getLevelLabel(technology.level)}
          </Tag>
        </S.SkillLevel>
      </S.SkillHeader>

      <S.SkillMetrics>
        {[
          { value: technology.projects, label: 'Projetos' },
          { value: technology.jobs, label: 'Trabalhos' },
          { value: technology.courses, label: 'Cursos' },
        ].map((metric, index) => (
          <S.MetricItem key={index}>
            <S.MetricValue>{metric.value}</S.MetricValue>
            <S.MetricLabel>{metric.label}</S.MetricLabel>
          </S.MetricItem>
        ))}
      </S.SkillMetrics>
    </S.SkillCard>
  )
}

export default SkillCard
