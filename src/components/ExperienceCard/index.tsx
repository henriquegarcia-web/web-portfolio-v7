import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import * as S from './styles'

import { IWorkExperience } from '@/utils/types'
import { BulletList, Tag } from '@/components'
import { BulletItem } from '@/components/BulletList'

interface ExperienceCardProps {
  experience: IWorkExperience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

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

  // Variantes de animação para os valores internos
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

  const tagVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

  return (
    <S.ExperienceCard ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <S.ExperienceHeader>
          <motion.div variants={itemVariants}>
            <S.ExperienceTitle>
              <h3>{experience.position}</h3>
              <S.CompanyName>{experience.company}</S.CompanyName>
            </S.ExperienceTitle>
          </motion.div>
          <motion.div variants={textVariants}>
            <S.ExperienceDate>
              <S.Period>
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </S.Period>
            </S.ExperienceDate>
          </motion.div>
        </S.ExperienceHeader>

        <S.ExperienceContent>
          <motion.div variants={textVariants}>
            <S.ExperienceDescription>{experience.description}</S.ExperienceDescription>
          </motion.div>

          <motion.div variants={itemVariants}>
            <BulletList
              items={experience.achievements.map(
                (achievement): BulletItem => ({
                  text: achievement,
                  color: 'green',
                }),
              )}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <S.ExperienceTechnologies>
              {experience.technologies.map((tech, techIndex) => (
                <motion.div key={techIndex} variants={tagVariants} custom={techIndex}>
                  <Tag color="#64ffda" size="small">
                    {tech}
                  </Tag>
                </motion.div>
              ))}
            </S.ExperienceTechnologies>
          </motion.div>
        </S.ExperienceContent>
      </motion.div>
    </S.ExperienceCard>
  )
}

export default ExperienceCard
