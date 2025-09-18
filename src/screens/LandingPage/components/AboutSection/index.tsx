import React from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'

import {
  SectionHeader,
  Button,
  InfoCard,
  BulletList,
  type BulletItem,
} from '@/components'
import { useScrollAnimation, useStaggerAnimation } from '@/hooks'
import { IPortfolioData } from '@/utils/types'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from '@/utils/constants'

interface AboutSectionProps {
  data: IPortfolioData
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const { personal, education, technicalAreas } = data
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: cardsRef, isInView: cardsInView } = useStaggerAnimation({ threshold: 0.1 })

  return (
    <S.AboutSection id="about" ref={ref}>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ delay: 0.2 }}
      >
        <SectionHeader
          mainTitle="Sobre"
          backgroundText="Sobre Mim"
          subtitle="Quem sou eu?"
        />
      </motion.div>

      <S.Content>
        <S.LeftColumn>
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.4 }}
          >
            <ContentSection title="O Henrique" children={personal.summary} />
          </motion.div>

          <motion.div
            ref={cardsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={cardsInView ? 'visible' : 'hidden'}
          >
            <S.CardsContainer>
              <motion.div variants={staggerItem}>
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

              <motion.div variants={staggerItem}>
                <InfoCard
                  icon="💡"
                  title="Interesses"
                  description={personal.interests.join(', ')}
                />
              </motion.div>
            </S.CardsContainer>
          </motion.div>

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.8 }}
          >
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

        <S.RightColumn>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.6 }}
          >
            <ContentSection title="Áreas de Foco">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <S.TechnicalsWrapper>
                  {technicalAreas.map((area, index) => (
                    <motion.div key={index} variants={staggerItem}>
                      <InfoCard
                        icon={area.icon}
                        title={area.title}
                        description={area.description}
                      />
                    </motion.div>
                  ))}
                </S.TechnicalsWrapper>
              </motion.div>
            </ContentSection>
          </motion.div>
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
    <S.ContentSection>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.SectionContent>{children}</S.SectionContent>
    </S.ContentSection>
  )
}
