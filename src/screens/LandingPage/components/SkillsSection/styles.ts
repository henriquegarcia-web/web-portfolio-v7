import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const SkillsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: fit-content;
  overflow: hidden;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 50% e 50% */
  gap: 2rem;
  max-width: ${theme.sizes.wrapper.maxWidth};
  width: 100%;

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

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

// Right Column Styles
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ToolsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SkillCategoryCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  overflow: hidden;

  backdrop-filter: blur(10px);
  /* background: rgba(22, 22, 22, 0.5); */
  border: 1px solid #2f2f2f;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ color }) => color};
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CategoryIcon = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;

  font-size: 1.125rem;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ color }) => color};
`

export const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`

export const TechnologiesGrid = styled.div`
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

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
