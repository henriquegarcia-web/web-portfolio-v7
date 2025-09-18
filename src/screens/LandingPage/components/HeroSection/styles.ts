import { theme } from '@/utils/constants'
import { Section } from '@/utils/styles'
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
    filter: drop-shadow(0 0 5px ${theme.colors.glow.primary});
  }
  50% {
    filter: drop-shadow(0 0 8px ${theme.colors.shadow.primary});
  }
`

export const HeroSection = styled(Section)``

export const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${theme.sizes.wrapper.maxWidth};
  height: fit-content;
`

export const Greeting = styled.h2`
  font-size: 1.25rem;
  color: ${theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 600;
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
    ${theme.colors.gradient.primary[0]} 0%,
    ${theme.colors.gradient.primary[1]} 25%,
    ${theme.colors.gradient.primary[2]} 50%,
    ${theme.colors.gradient.primary[1]} 75%,
    ${theme.colors.gradient.primary[0]} 100%
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
      ${theme.colors.glow.primary} 0%,
      ${theme.colors.glow.secondary} 50%,
      ${theme.colors.glow.accent} 100%
    );
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientShift} 4s ease-in-out infinite reverse;
    filter: blur(1px);
    z-index: -1;
  }
`

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  font-weight: 500;
  text-align: center;
  color: ${theme.colors.text.primary};
`

export const TypewriterText = styled.span`
  color: ${theme.colors.primary};
  font-weight: 600;

  &::after {
    content: '|';
    color: ${theme.colors.primary};
    animation: ${blink} 1s infinite;
    margin-left: 2px;
  }
`

export const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  color: ${theme.colors.text.tertiary};
`

export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 1.5rem;
  }
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
  background: ${theme.colors.background.glass};
  color: ${theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid ${theme.colors.border.accent};
  backdrop-filter: blur(10px);
  animation: ${float} 4s ease-in-out infinite;

  &.element-1 {
    top: -10%;
    right: 8%;
    animation-delay: 3s;
  }

  &.element-2 {
    top: -6%;
    left: 5%;
    animation-delay: 1s;
  }

  &.element-3 {
    bottom: 5%;
    right: 4%;
    animation-delay: 1s;
  }

  &.element-4 {
    bottom: -6%;
    left: 8%;
    animation-delay: 2s;
  }

  &.element-5 {
    top: 40%;
    left: 0%;
    animation-delay: 3s;
  }

  &.element-6 {
    top: 40%;
    right: 0%;
    animation-delay: 2s;
  }
`
