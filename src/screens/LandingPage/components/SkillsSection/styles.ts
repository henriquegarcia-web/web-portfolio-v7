import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '@/utils/constants'
import { Section } from '@/utils/styles'

export const SkillsSection = styled(Section)``

export const Content = styled(motion.div)<{ $isFiltered?: boolean }>`
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

export const SkillCategoryCard = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1.5rem;
  border-radius: ${theme.radius.lg};
  transition: all 0.3s ease;
  overflow: hidden;

  /* Liquid Glass Effect */
  background: ${theme.glass.background};
  backdrop-filter: ${theme.glass.backdropFilter};
  border: ${theme.glass.border};
  box-shadow: ${theme.glass.boxShadow};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.md};
    border-color: ${theme.colors.border.accent};
    background: ${theme.colors.background.glassHover};
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
  color: ${theme.colors.text.primary};
  margin: 0;
`

export const ViewAllLink = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    color: ${theme.colors.text.primary};
    text-decoration: none;
  }
`

export const ViewAllButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
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

export const FilterContainer = styled(motion.div)`
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
  border: 1px solid
    ${(props) => (props.$isActive ? theme.colors.primary : theme.colors.border.primary)};
  border-radius: 25px;
  background: ${(props) => (props.$isActive ? theme.colors.state.active : 'transparent')};
  color: ${(props) =>
    props.$isActive ? theme.colors.primary : theme.colors.text.primary};
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.state.active};
    color: ${theme.colors.primary};
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
  color: ${theme.colors.primary};
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
