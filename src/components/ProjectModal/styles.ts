import styled from 'styled-components'
import { theme } from '@/utils/constants'
import { Modal as BaseModal } from '@/components'

export const Modal = styled(BaseModal)``

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2rem;
  max-height: 80vh;
  overflow-y: auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
`

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const ProjectDescription = styled.p`
  color: ${theme.colors.text.tertiary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const FeaturesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${theme.colors.text.tertiary};
  font-size: 1rem;
  line-height: 1.5;
`

export const CheckIcon = styled.span`
  color: ${theme.colors.primary};
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
`

export const TechnologiesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const LinksSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`
