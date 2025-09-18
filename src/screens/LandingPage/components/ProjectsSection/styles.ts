import styled from 'styled-components'
import { theme } from '@/utils/constants'
import { Section } from '@/utils/styles'

export const ProjectsSection = styled(Section)``

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: ${theme.sizes.wrapper.maxWidth};
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const ViewAllContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  max-width: ${theme.sizes.wrapper.maxWidth};
  width: 100%;
`

export const ProjectCardWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`
