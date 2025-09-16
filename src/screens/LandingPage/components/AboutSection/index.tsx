import React from 'react'

import * as S from './styles'

import { SectionHeader, Button, InfoCard, BulletList } from '@/components'
import { IPortfolioData } from '@/utils/types'

interface AboutSectionProps {
  data: IPortfolioData
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const { personal, education, technicalAreas } = data

  return (
    <S.AboutSection id="about">
      <SectionHeader
        mainTitle="Sobre"
        backgroundText="Sobre Mim"
        subtitle="Quem sou eu?"
      />

      <S.Content>
        <S.LeftColumn>
          <ContentSection title="O Henrique" children={personal.summary} />

          <S.CardsContainer>
            <InfoCard
              icon="🎓"
              title="Educação"
              description={
                <BulletList
                  items={education.map((edu) => `${edu.institution} - ${edu.degree}`)}
                />
              }
            />

            <InfoCard
              icon="💡"
              title="Interesses"
              description={personal.interests.join(', ')}
            />
          </S.CardsContainer>

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
        </S.LeftColumn>

        <S.RightColumn>
          <ContentSection title="Áreas de Foco">
            <S.TechnicalsWrapper>
              {technicalAreas.map((area, index) => (
                <InfoCard
                  key={index}
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
    <S.ContentSection>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.SectionContent>{children}</S.SectionContent>
    </S.ContentSection>
  )
}
