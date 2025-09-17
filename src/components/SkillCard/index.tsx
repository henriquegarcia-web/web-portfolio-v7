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
        <S.MetricItem>
          <S.MetricValue>{technology.projects}</S.MetricValue>
          <S.MetricLabel>Projetos</S.MetricLabel>
        </S.MetricItem>
        <S.MetricItem>
          <S.MetricValue>{technology.jobs}</S.MetricValue>
          <S.MetricLabel>Trabalhos</S.MetricLabel>
        </S.MetricItem>
        <S.MetricItem>
          <S.MetricValue>{technology.courses}</S.MetricValue>
          <S.MetricLabel>Cursos</S.MetricLabel>
        </S.MetricItem>
      </S.SkillMetrics>
    </S.SkillCard>
  )
}

export default SkillCard
