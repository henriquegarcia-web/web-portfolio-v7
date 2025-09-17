import React from 'react'

import * as S from './styles'

import { IWorkExperience } from '@/utils/types'
import { BulletList, Tag } from '@/components'
import { BulletItem } from '@/components/BulletList'

interface ExperienceCardProps {
  experience: IWorkExperience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const formatDate = (date: string) => {
    if (date === 'present') return 'Presente'

    const [year, month] = date.split('-')
    const monthNames = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ]

    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <S.ExperienceCard>
      <S.ExperienceHeader>
        <S.ExperienceTitle>
          <h3>{experience.position}</h3>
          <S.CompanyName>{experience.company}</S.CompanyName>
        </S.ExperienceTitle>
        <S.ExperienceDate>
          <S.Period>
            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
          </S.Period>
        </S.ExperienceDate>
      </S.ExperienceHeader>

      <S.ExperienceContent>
        <S.ExperienceDescription>{experience.description}</S.ExperienceDescription>

        <BulletList
          items={experience.achievements.map(
            (achievement): BulletItem => ({
              text: achievement,
              color: 'green',
            }),
          )}
        />

        <S.ExperienceTechnologies>
          {experience.technologies.map((tech, techIndex) => (
            <Tag key={techIndex} color="#64ffda" size="small">
              {tech}
            </Tag>
          ))}
        </S.ExperienceTechnologies>
      </S.ExperienceContent>
    </S.ExperienceCard>
  )
}

export default ExperienceCard
