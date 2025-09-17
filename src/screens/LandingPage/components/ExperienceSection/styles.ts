import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const ExperienceSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 6rem 2rem;
  overflow: hidden;
  max-width: ${theme.sizes.wrapper.maxWidth};
  margin: 0 auto;
`

export const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: ${theme.sizes.wrapper.maxWidth};

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #64ffda 0%, #ff6b6b 100%);
    transform: translateX(-50%);
    border-radius: 2px;

    @media (max-width: ${theme.breakpoints.mobile}) {
      left: 2rem;
    }
  }
`

export const TimelineItem = styled.div<{ isEven: boolean }>`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  justify-content: ${({ isEven }) => (isEven ? 'flex-start' : 'flex-end')};
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: flex-start;
    margin-left: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 2rem;
    width: 20px;
    height: 20px;
    background: #64ffda;
    border-radius: 50%;
    border: 4px solid #1a1a2e;
    z-index: 2;
    transform: translateX(-50%);
    box-shadow: 0 0 0 4px rgba(100, 255, 218, 0.2);

    @media (max-width: ${theme.breakpoints.mobile}) {
      left: 2rem;
      transform: none;
    }
  }
`
