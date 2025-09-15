import React from 'react'

import { IWorkExperience } from '@/utils/types'
import {
  Container,
  ExperienceCard,
  ExperienceContent,
  ExperienceDate,
  ExperienceDescription,
  ExperienceHeader,
  ExperienceList,
  ExperienceListItem,
  ExperienceTechnologies,
  ExperienceTitle,
  SectionTitle,
  Timeline,
  TimelineItem,
} from './styles'

interface ExperienceSectionProps {
  data: IWorkExperience[]
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
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

  const getExperienceDuration = (startDate: string, endDate: string) => {
    if (endDate === 'present') return 'Atual'

    const start = new Date(startDate)
    const end = new Date(endDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))

    if (diffMonths < 12) {
      return `${diffMonths} meses`
    } else {
      const years = Math.floor(diffMonths / 12)
      const months = diffMonths % 12
      return months > 0 ? `${years}a ${months}m` : `${years} anos`
    }
  }

  return (
    <Container id="experience">
      <SectionTitle>
        <span>Experience</span>
        <div className="underline" />
        <p>My professional journey and career milestones</p>
      </SectionTitle>

      <Timeline>
        {data.map((experience, index) => (
          <TimelineItem key={experience.id} isEven={index % 2 === 0}>
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceTitle>
                  <h3>{experience.position}</h3>
                  <span className="company">{experience.company}</span>
                </ExperienceTitle>
                <ExperienceDate>
                  <span className="duration">
                    {getExperienceDuration(experience.startDate, experience.endDate)}
                  </span>
                  <span className="period">
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                  </span>
                </ExperienceDate>
              </ExperienceHeader>

              <ExperienceContent>
                <ExperienceDescription>{experience.description}</ExperienceDescription>

                <ExperienceList>
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <ExperienceListItem key={achievementIndex}>
                      {achievement}
                    </ExperienceListItem>
                  ))}
                </ExperienceList>

                <ExperienceTechnologies>
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </ExperienceTechnologies>
              </ExperienceContent>
            </ExperienceCard>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  )
}

export default ExperienceSection
