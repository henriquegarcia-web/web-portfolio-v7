import styled from 'styled-components'
import { theme } from '@/utils/constants'
import { Section } from '@/utils/styles'

export const SkillsSection = styled(Section)``

export const Content = styled.div<{ $isFiltered?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.$isFiltered ? '1fr' : '1fr 1fr')};
  gap: 2rem;
  max-width: ${theme.sizes.wrapper.maxWidth};
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
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

export const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`

export const ViewAllLink = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
`

export const TechnologiesGrid = styled.div<{ $isFiltered?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.$isFiltered ? 'repeat(3, 1fr)' : '1fr')};
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    grid-template-columns: ${(props) => (props.$isFiltered ? 'repeat(2, 1fr)' : '1fr')};
  }
`

// ====================================== FILTER SECTION

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  max-width: ${theme.sizes.wrapper.maxWidth};
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
`

export const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 0.75rem 1.25rem;
  border: 1px solid ${(props) => (props.$isActive ? '#64ffda' : '#2f2f2f')};
  border-radius: 25px;
  background: ${(props) =>
    props.$isActive ? 'rgba(100, 255, 218, 0.1)' : 'transparent'};
  color: ${(props) => (props.$isActive ? '#64ffda' : '#ffffff')};
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: #64ffda;
    background: rgba(100, 255, 218, 0.1);
    color: #64ffda;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
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
