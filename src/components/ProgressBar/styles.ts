import styled, { keyframes } from 'styled-components'

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1000;
  backdrop-filter: blur(10px);
`

export const ProgressBarFill = styled.div<{ progress: number }>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: ${({ progress }) => progress}%;
  max-width: 100%;

  background: linear-gradient(
    135deg,
    #64ffda 0%,
    #ff6b6b 25%,
    #ffd93d 50%,
    #ff6b6b 75%,
    #64ffda 100%
  );
  background-size: 300% 300%;
  animation: ${gradientShift} 4s ease-in-out infinite;

  box-shadow: 0 0 10px rgba(100, 255, 218, 0.3), 0 0 20px rgba(255, 107, 107, 0.2),
    0 0 30px rgba(255, 217, 61, 0.1);

  transition: width 0.1s ease-out;
`
