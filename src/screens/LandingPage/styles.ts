import { theme } from '@/utils/constants'
import styled from 'styled-components'

export const LandingPage = styled.div`
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

export const LandingPageContent = styled.div`
  position: relative;
  z-index: 15;
  display: flex;
  flex-direction: column;
  padding: 0 ${theme.spacing.lg};
`
