import styled from 'styled-components'
import { theme } from '@/utils/constants/theme'

export const SkillCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1em;
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

    h3 {
      color: ${theme.colors.text.primary};
    }

    svg {
      opacity: 1;
    }
  }
`

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;

  svg {
    transition: all 0.2s ease;
    opacity: 0.8;
  }
`

export const SkillName = styled.h3`
  flex: 1;
  margin: 0;
  transition: all 0.2s ease;
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.text.tertiary};
`

export const SkillLevel = styled.div`
  display: flex;
  align-items: center;
`

export const SkillMetrics = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const MetricItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: ${theme.radius.sm};
  transition: all 0.2s ease;
  background: ${theme.colors.background.glass};

  &:hover {
    background: ${theme.colors.background.glassHover};
  }
`

export const MetricValue = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${theme.colors.primary};
`

export const MetricLabel = styled.span`
  font-size: 0.75rem;
  color: ${theme.colors.text.tertiary};
  text-align: center;
`
