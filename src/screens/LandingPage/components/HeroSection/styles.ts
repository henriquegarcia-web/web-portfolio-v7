import { theme } from '@/utils/constants'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
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
  background: linear-gradient(135deg, #64ffda, #ff6b6b, #ffd93d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  text-align: center;

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

export const Description = styled.p`
  margin-bottom: 2rem;

  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;

  color: #a0a0a0;
`

export const CTAWrapper = styled.div`
  margin-bottom: 3rem;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

// export const HeroImage = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   z-index: 1;
// `

// export const AvatarContainer = styled.div`
//   position: relative;
//   width: 400px;
//   height: 400px;

//   @media (max-width: 768px) {
//     width: 300px;
//     height: 300px;
//   }
// `

// export const Avatar = styled.div`
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   background: linear-gradient(135deg, #64ffda, #ff6b6b, #ffd93d);
//   padding: 4px;
//   animation: ${float} 6s ease-in-out infinite;
// `

// export const AvatarInner = styled.div`
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   background: linear-gradient(135deg, #1a1a2e, #16213e);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   overflow: hidden;
// `

// export const CodeSymbols = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.5rem;
//   font-size: 1.5rem;
//   font-weight: 700;
//   color: #64ffda;

//   span {
//     animation: ${pulse} 2s ease-in-out infinite;
//     animation-delay: calc(var(--i) * 0.2s);
//   }

//   span:nth-child(1) {
//     --i: 0;
//   }
//   span:nth-child(2) {
//     --i: 1;
//   }
//   span:nth-child(3) {
//     --i: 2;
//   }
//   span:nth-child(4) {
//     --i: 3;
//   }
//   span:nth-child(5) {
//     --i: 4;
//   }
// `

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
    right: -10%;
    animation-delay: 0s;
  }

  &.element-2 {
    top: 30%;
    left: -15%;
    animation-delay: 1s;
  }

  &.element-3 {
    bottom: 30%;
    right: -10%;
    animation-delay: 2s;
  }

  &.element-4 {
    bottom: 10%;
    left: -15%;
    animation-delay: 3s;
  }
`
