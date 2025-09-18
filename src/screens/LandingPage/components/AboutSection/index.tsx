import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import * as S from './styles'

import {
  SectionHeader,
  Button,
  InfoCard,
  BulletList,
  type BulletItem,
} from '@/components'
import { IPortfolioData } from '@/utils/types'

interface AboutSectionProps {
  data: IPortfolioData
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { personal, education, technicalAreas } = data

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
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

  return (
    <S.AboutSection id="about" ref={ref}>
      <motion.div
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
          <motion.div variants={columnVariants}>
            <S.LeftColumn>
              <motion.div variants={itemVariants}>
                <ContentSection title="O Henrique" children={personal.summary} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <S.CardsContainer>
                  <motion.div variants={cardVariants}>
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
                  </motion.div>

                  <motion.div variants={cardVariants}>
                    <InfoCard
                      icon="💡"
                      title="Interesses"
                      description={personal.interests.join(', ')}
                    />
                  </motion.div>
                </S.CardsContainer>
              </motion.div>

              <motion.div variants={itemVariants}>
                <S.DownloadButton>
                  <Button
                    variant="primary"
                    size="large"
                    icon="download"
                    onClick={() => window.open(data.resumeUrl, '_blank')}
                  >
                    Download CV
                  </Button>
                </S.DownloadButton>
              </motion.div>
            </S.LeftColumn>
          </motion.div>

          <motion.div variants={rightColumnVariants}>
            <S.RightColumn>
              <motion.div variants={itemVariants}>
                <ContentSection title="Áreas de Foco">
                  <S.TechnicalsWrapper>
                    {technicalAreas.map((area, index) => (
                      <motion.div key={index} variants={cardVariants} custom={index}>
                        <InfoCard
                          icon={area.icon}
                          title={area.title}
                          description={area.description}
                        />
                      </motion.div>
                    ))}
                  </S.TechnicalsWrapper>
                </ContentSection>
              </motion.div>
            </S.RightColumn>
          </motion.div>
        </S.Content>
      </motion.div>
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
    <S.ContentSection>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.SectionContent>{children}</S.SectionContent>
    </S.ContentSection>
  )
}
