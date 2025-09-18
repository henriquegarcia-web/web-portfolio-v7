import React from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'

import { IWorkExperience } from '@/utils/types'
import { BulletList, Tag } from '@/components'
import { BulletItem } from '@/components/BulletList'
import { hoverLift, fadeInUp, staggerItem } from '@/utils/constants'

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
    <motion.div
      variants={hoverLift}
      whileHover="hover"
      whileTap="tap"
      initial="hidden"
      animate="visible"
    >
      <S.ExperienceCard>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
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
        </motion.div>

        <S.ExperienceContent>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <S.ExperienceDescription>{experience.description}</S.ExperienceDescription>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <BulletList
              items={experience.achievements.map(
                (achievement): BulletItem => ({
                  text: achievement,
                  color: 'green',
                }),
              )}
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <S.ExperienceTechnologies>
              {experience.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  variants={staggerItem}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 + techIndex * 0.05 }}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Tag color="#64ffda" size="small">
                    {tech}
                  </Tag>
                </motion.div>
              ))}
            </S.ExperienceTechnologies>
          </motion.div>
        </S.ExperienceContent>
      </S.ExperienceCard>
    </motion.div>
  )
}

export default ExperienceCard
