import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const AboutSection = styled.section`
  padding: 6rem 2rem;
  max-width: ${theme.sizes.wrapper.maxWidth};
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr; /* 60% e 40% */
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

// Left Column Styles
export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const DownloadButton = styled.div`
  margin-top: 1rem;
`

// Right Column Styles
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TechnicalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
// ====================================== CONTENT SECTION

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #64ffda;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const SectionContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  text-align: justify;
`
