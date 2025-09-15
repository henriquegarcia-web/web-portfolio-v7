import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`

export const Content = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;
`

export const Greeting = styled.h2`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 0.5rem;
  font-weight: 400;
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

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 500;
`

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #a0a0a0;
  margin-bottom: 2rem;
  max-width: 500px;
`

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #64ffda, #ff6b6b);
  color: #000000;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-bottom: 3rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(100, 255, 218, 0.4);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(100, 255, 218, 0.2);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(100, 255, 218, 0.3);
    }
  }
`

export const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  .avatar-container {
    position: relative;
    width: 400px;
    height: 400px;

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }
  }

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(135deg, #64ffda, #ff6b6b, #ffd93d);
    padding: 4px;
    animation: ${float} 6s ease-in-out infinite;

    .avatar-inner {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;

      .code-symbols {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: #64ffda;

        span {
          animation: ${pulse} 2s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.2s);
        }

        span:nth-child(1) { --i: 0; }
        span:nth-child(2) { --i: 1; }
        span:nth-child(3) { --i: 2; }
        span:nth-child(4) { --i: 3; }
        span:nth-child(5) { --i: 4; }
      }
    }
  }

  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .element {
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
    }
  }

  @media (max-width: 768px) {
    .floating-elements .element {
      display: none;
    }
  }
`
