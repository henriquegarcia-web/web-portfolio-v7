import { theme } from '@/utils/constants'
import styled from 'styled-components'

export const SectionHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  row-gap: 2.5rem;
  width: 100%;
  height: 160px;
  margin-bottom: 4rem;
`

export const Title = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BackgroundText = styled.h1`
  z-index: 1;
  position: absolute;
  pointer-events: none;
  user-select: none;

  text-align: center;
  font-size: 8rem;
  font-weight: 900;
  text-transform: uppercase;
  white-space: nowrap;

  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.02) 20%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.16) 80%,
    rgba(255, 255, 255, 0.35) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 6rem;
  }
`

export const MainTitle = styled.h2`
  position: relative;
  z-index: 2;

  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  white-space: nowrap;
  text-align: center;

  color: ${theme.colors.text.primary};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`

export const Subtitle = styled.p`
  margin: 0;

  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-align: center;

  color: ${theme.colors.text.tertiary};
`
