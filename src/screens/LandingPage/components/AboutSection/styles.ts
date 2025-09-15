import styled from 'styled-components'

export const Container = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  color: #ffffff;

  span {
    position: relative;
    z-index: 2;
  }

  .underline {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #64ffda, #ff6b6b);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #a0a0a0;
  margin: 0;
`

export const Highlight = styled.span`
  color: #64ffda;
  font-weight: 600;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
`

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`

export const StatItem = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(100, 255, 218, 0.2);
  }

  .value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #64ffda;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #64ffda, #ff6b6b);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .label {
    font-size: 0.9rem;
    color: #a0a0a0;
    font-weight: 500;
  }
`
