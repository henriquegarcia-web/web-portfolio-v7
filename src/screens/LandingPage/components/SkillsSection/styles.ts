import styled from 'styled-components'

export const Container = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  span {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    display: block;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .underline {
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #64ffda, #ff6b6b);
    border-radius: 2px;
    margin: 0 auto 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #a0a0a0;
    margin: 0;
  }
`

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const SkillCard = styled.div<{ color: string }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ color }) => color};
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: ${({ color }) => color}40;
  }
`

export const SkillCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  .icon {
    font-size: 2rem;
  }

  .name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
  }
`

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.8rem;
`

export const SkillItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  text-align: center;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`

export const SkillName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
