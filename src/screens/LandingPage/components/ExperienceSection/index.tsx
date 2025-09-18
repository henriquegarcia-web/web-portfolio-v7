import React from 'react'
import { motion } from 'framer-motion'

import { IWorkExperience } from '@/utils/types'
import { SectionHeader, ExperienceCard } from '@/components'
import { useScrollAnimation, useStaggerAnimation } from '@/hooks'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from '@/utils/constants'
import * as S from './styles'

interface ExperienceSectionProps {
  data: IWorkExperience[]
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: timelineRef, isInView: timelineInView } = useStaggerAnimation({
    threshold: 0.1,
  })

  return (
    <S.ExperienceSection id="experience" ref={ref}>
      <S.Content>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
        >
          <SectionHeader
            mainTitle="Experiência"
            backgroundText="Profissional"
            subtitle="Minha jornada profissional e marcos de carreira"
          />
        </motion.div>

        <motion.div
          ref={timelineRef}
          variants={staggerContainer}
          initial="hidden"
          animate={timelineInView ? 'visible' : 'hidden'}
        >
          <S.Timeline>
            {data.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={staggerItem}
                initial="hidden"
                animate={timelineInView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.2 }}
              >
                <S.TimelineItem isEven={index % 2 === 0}>
                  <ExperienceCard experience={experience} />
                </S.TimelineItem>
              </motion.div>
            ))}
          </S.Timeline>
        </motion.div>
      </S.Content>
    </S.ExperienceSection>
  )
}

export default ExperienceSection
