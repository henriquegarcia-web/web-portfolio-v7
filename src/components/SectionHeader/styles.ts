import styled from 'styled-components'

export const SectionHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.5rem;
  width: 100%;
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
`

export const MainTitle = styled.h2`
  position: relative;
  z-index: 2;

  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  white-space: nowrap;

  color: #ffffff;
`

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.15em;

  color: #a0a0a0;
`
