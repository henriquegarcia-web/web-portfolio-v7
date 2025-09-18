import React from 'react'

import { IWorkExperience } from '@/utils/types'
import { SectionHeader, ExperienceCard } from '@/components'
import * as S from './styles'

interface ExperienceSectionProps {
  data: IWorkExperience[]
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
  return (
    <S.ExperienceSection id="experience">
      <S.Content>
        <SectionHeader
          mainTitle="Experiência"
          backgroundText="Profissional"
          subtitle="Minha jornada profissional e marcos de carreira"
        />

        <S.Timeline>
          {data.map((experience, index) => (
            <S.TimelineItem key={experience.id} isEven={index % 2 === 0}>
              <ExperienceCard experience={experience} />
            </S.TimelineItem>
          ))}
        </S.Timeline>
      </S.Content>
    </S.ExperienceSection>
  )
}

export default ExperienceSection
