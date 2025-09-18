import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const ExperienceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  width: calc(50% - 3rem);
  padding: ${theme.spacing.xl};
  border-radius: ${theme.radius.lg};
  transition: all 0.3s ease;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(100, 255, 218, 0.2);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: 2rem;
    width: calc(100% - 5rem);
  }
`

export const ExperienceHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ExperienceTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};

  h3 {
    font-size: ${theme.fonts.sizes.xl};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.text.active};
    font-family: ${theme.fonts.families.primary};
  }
`

export const CompanyName = styled.span`
  font-size: ${theme.fonts.sizes.md};
  color: #64ffda;
  font-weight: ${theme.fonts.weights.medium};
  font-family: ${theme.fonts.families.primary};
`

export const ExperienceDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};

  @media (max-width: ${theme.breakpoints.mobile}) {
    text-align: left;
  }
`

export const Period = styled.span`
  font-size: ${theme.fonts.sizes.xs};
  color: ${theme.colors.text.unhovered};
  font-family: ${theme.fonts.families.primary};
`

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`

export const ExperienceDescription = styled.p`
  color: ${theme.colors.text.unhovered};
  font-size: ${theme.fonts.sizes.md};
  line-height: 1.6;
  margin: 0;
  font-family: ${theme.fonts.families.primary};
`

export const ExperienceTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`
