import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const InfoCard = styled.div<{ onlyTitle: boolean }>`
  display: flex;
  align-items: ${({ onlyTitle }) => (onlyTitle ? 'center' : 'flex-start')};
  gap: 1.25rem;
  padding: 1.25rem;
  border-radius: ${theme.radius.lg};
  transition: all 0.3s ease;
  overflow: hidden;

  /* Liquid Glass Effect */
  background: ${theme.glass.background};
  backdrop-filter: ${theme.glass.backdropFilter};
  border: ${theme.glass.border};
  box-shadow: ${theme.shadows.glass};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.md};
    border-color: ${theme.colors.border.accent};
    background: ${theme.colors.background.glassHover};
  }
`

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: ${theme.radius.sm};
  font-size: 1.5rem;
  background: ${theme.colors.state.active};
  color: ${theme.colors.primary};
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`

export const CardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
`

export const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: left;
  color: ${theme.colors.text.tertiary};
`
