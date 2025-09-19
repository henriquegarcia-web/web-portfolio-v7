import React, { useRef } from 'react'

import * as S from './styles'

import { useInView } from 'framer-motion'

import { IWorkExperience } from '@/utils/types'
import { SectionHeader, ExperienceCard } from '@/components'

interface ExperienceSectionProps {
  data: IWorkExperience[]
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const timelineVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <S.ExperienceSection
      id="experience"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <SectionHeader
        mainTitle="Experiência"
        backgroundText="Profissional"
        subtitle="Minha jornada profissional e marcos de carreira"
      />
      <S.Content>
        <S.Timeline variants={timelineVariants}>
          {data.map((experience, index) => (
            <S.TimelineItem
              key={`experience-${experience.id}`}
              isEven={index % 2 === 0}
              variants={itemVariants}
            >
              <ExperienceCard experience={experience} />
            </S.TimelineItem>
          ))}
        </S.Timeline>
      </S.Content>
    </S.ExperienceSection>
  )
}

export default ExperienceSection
