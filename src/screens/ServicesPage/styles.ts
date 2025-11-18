import { theme } from '@/utils/constants'
import styled from 'styled-components'

export const ServicesPage = styled.div`
  position: relative;
  color: ${theme.colors.text.primary};
  overflow-x: hidden;
  background: ${theme.colors.background.primary};
  min-height: 100vh;

  /* Background minimalista */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: ${theme.effects.noise.background},
      linear-gradient(
        135deg,
        ${theme.colors.background.primary} 0%,
        ${theme.colors.background.secondary} 100%
      );
    background-size: 50px 50px, 100% 100%;
    pointer-events: none;
  }
`

export const ServicesPageContent = styled.div`
  position: relative;
  z-index: 15;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 ${theme.spacing.lg};
`

export const CenterText = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  text-align: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`

