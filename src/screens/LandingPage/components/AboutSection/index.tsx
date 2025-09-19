import React, { useRef } from 'react'

import { useInView } from 'framer-motion'

import * as S from './styles'

import {
  SectionHeader,
  Button,
  InfoCard,
  BulletList,
  type BulletItem,
} from '@/components'
import { IPortfolioData } from '@/utils/types'

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

const columnVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const rightColumnVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

interface AboutSectionProps {
  data: IPortfolioData
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { personal, education, technicalAreas } = data

  return (
    <S.AboutSection
      id="about"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <SectionHeader
        mainTitle="Sobre"
        backgroundText="Sobre Mim"
        subtitle="Quem sou eu?"
      />

      <S.Content>
        <S.LeftColumn variants={columnVariants}>
          <ContentSection title="O Henrique" children={personal.summary} />

          <S.CardsContainer variants={itemVariants}>
            <InfoCard
              icon="🎓"
              title="Educação"
              description={
                <BulletList
                  items={education.map(
                    (edu): BulletItem => ({
                      text: `${edu.institution} - ${edu.degree}`,
                      color: edu.current ? 'yellow' : 'green',
                    }),
                  )}
                />
              }
            />

            <InfoCard
              icon="💡"
              title="Interesses"
              description={personal.interests.join(', ')}
            />
          </S.CardsContainer>

          <S.DownloadButton variants={itemVariants}>
            <Button
              variant="primary"
              size="large"
              icon="download"
              onClick={() => window.open(data.resumeUrl, '_blank')}
            >
              Download CV
            </Button>
          </S.DownloadButton>
        </S.LeftColumn>

        <S.RightColumn variants={rightColumnVariants}>
          <ContentSection title="Áreas de Foco">
            <S.TechnicalsWrapper>
              {technicalAreas.map((area, index) => (
                <InfoCard
                  icon={area.icon}
                  title={area.title}
                  description={area.description}
                />
              ))}
            </S.TechnicalsWrapper>
          </ContentSection>
        </S.RightColumn>
      </S.Content>
    </S.AboutSection>
  )
}

export default AboutSection

// ====================================== CONTENT SECTION

interface IContentSection {
  title: string
  children: React.ReactNode
}

export const ContentSection: React.FC<IContentSection> = ({ title, children }) => {
  return (
    <S.ContentSection variants={itemVariants}>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.SectionContent>{children}</S.SectionContent>
    </S.ContentSection>
  )
}
