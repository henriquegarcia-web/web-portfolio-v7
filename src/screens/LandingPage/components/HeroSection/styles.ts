import { theme } from '@/utils/constants'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`

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

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`

const glow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(100, 255, 218, 0.3)) 
            drop-shadow(0 0 40px rgba(255, 107, 107, 0.2))
            drop-shadow(0 0 60px rgba(255, 217, 61, 0.1));
  }
  50% {
    filter: drop-shadow(0 0 30px rgba(100, 255, 218, 0.5)) 
            drop-shadow(0 0 60px rgba(255, 107, 107, 0.3))
            drop-shadow(0 0 90px rgba(255, 217, 61, 0.2));
  }
`

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: ${theme.sizes.wrapper.maxWidth};
`

export const Greeting = styled.h2`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 0.5rem;
  font-weight: 400;
  text-align: center;
`

export const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  line-height: 1.1;
  text-align: center;
  animation: ${glow} 3s ease-in-out infinite;

  /* Gradiente animado principal */
  background: linear-gradient(
    135deg,
    #64ffda 0%,
    #ff6b6b 25%,
    #ffd93d 50%,
    #ff6b6b 75%,
    #64ffda 100%
  );
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 4s ease-in-out infinite, ${glow} 3s ease-in-out infinite;

  /* Efeito shimmer adicional */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
    background-clip: text;
    -webkit-background-clip: text;
    pointer-events: none;
  }

  /* Efeito de brilho sutil */
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(100, 255, 218, 0.1) 0%,
      rgba(255, 107, 107, 0.1) 50%,
      rgba(255, 217, 61, 0.1) 100%
    );
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientShift} 4s ease-in-out infinite reverse;
    filter: blur(1px);
    z-index: -1;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const Title = styled.h2`
  margin-bottom: 1.5rem;

  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  color: #ffffff;
`

export const TypewriterText = styled.span`
  color: #64ffda;
  font-weight: 600;

  &::after {
    content: '|';
    color: #64ffda;
    animation: ${blink} 1s infinite;
    margin-left: 2px;
  }
`

export const Description = styled.p`
  margin-bottom: 2rem;

  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;

  color: #a0a0a0;
`

export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Element = styled.div`
  position: absolute;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(100, 255, 218, 0.3);
  backdrop-filter: blur(10px);
  animation: ${float} 4s ease-in-out infinite;

  &.element-1 {
    top: 10%;
    right: 2%;
    animation-delay: 0s;
  }

  &.element-2 {
    top: 30%;
    left: 2%;
    animation-delay: 1s;
  }

  &.element-3 {
    bottom: 30%;
    right: 2%;
    animation-delay: 2s;
  }

  &.element-4 {
    bottom: 10%;
    left: 2%;
    animation-delay: 3s;
  }
`
