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

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #64ffda, #ff6b6b);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`

export const TimelineItem = styled.div<{ isEven: boolean }>`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  justify-content: ${({ isEven }) => (isEven ? 'flex-start' : 'flex-end')};

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-left: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: ${({ isEven }) => (isEven ? 'calc(50% - 8px)' : 'calc(50% - 8px)')};
    top: 2rem;
    width: 16px;
    height: 16px;
    background: #64ffda;
    border-radius: 50%;
    border: 4px solid #1a1a2e;
    z-index: 2;

    @media (max-width: 768px) {
      left: -2.5rem;
    }
  }
`

export const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
  width: calc(50% - 2rem);
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #64ffda, #ff6b6b);
    border-radius: 20px 20px 0 0;
  }
`

export const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ExperienceTitle = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 0.5rem;
  }

  .company {
    font-size: 1rem;
    color: #64ffda;
    font-weight: 500;
  }
`

export const ExperienceDate = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media (max-width: 768px) {
    text-align: left;
  }

  .duration {
    font-size: 0.9rem;
    color: #ff6b6b;
    font-weight: 600;
    background: rgba(255, 107, 107, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    display: inline-block;
  }

  .period {
    font-size: 0.8rem;
    color: #a0a0a0;
  }
`

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ExperienceDescription = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`

export const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const ExperienceListItem = styled.li`
  color: #a0a0a0;
  font-size: 0.9rem;
  line-height: 1.5;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #64ffda;
    font-size: 0.8rem;
  }
`

export const ExperienceTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  .tech-tag {
    background: rgba(100, 255, 218, 0.1);
    color: #64ffda;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(100, 255, 218, 0.2);
  }
`
