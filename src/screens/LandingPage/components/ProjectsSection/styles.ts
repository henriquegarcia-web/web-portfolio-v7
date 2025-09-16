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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const ProjectCard = styled.div<{ color: string }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;

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

export const ProjectImage = styled.div`
  .browser-header {
    background: #2d2d2d;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid #404040;

    .browser-dots {
      display: flex;
      gap: 0.5rem;

      span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #ff5f57;

        &:nth-child(2) {
          background: #ffbd2e;
        }

        &:nth-child(3) {
          background: #28ca42;
        }
      }
    }

    .browser-url {
      background: #1a1a1a;
      padding: 0.5rem 1rem;
      border-radius: 15px;
      color: #a0a0a0;
      font-size: 0.9rem;
      font-family: monospace;
    }
  }

  .browser-content {
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    padding: 2rem;
    min-height: 200px;

    .project-preview {
      .preview-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        h3 {
          color: #ffffff;
          font-size: 1.2rem;
          margin: 0;
        }

        .status-badge {
          font-size: 1.2rem;
        }
      }

      .preview-content {
        p {
          color: #a0a0a0;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .tech-preview {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;

          .tech-tag {
            background: rgba(100, 255, 218, 0.2);
            color: #64ffda;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
          }
        }
      }
    }
  }
`

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 1.5rem 1.5rem 0.5rem;
`

export const ProjectDescription = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 1.5rem 1rem;
`

export const ProjectFeatures = styled.ul`
  list-style: none;
  padding: 0 1.5rem;
  margin: 0 0 1rem;

  li {
    color: #a0a0a0;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #64ffda;
      font-weight: bold;
    }
  }
`

export const ProjectTechnologies = styled.div`
  padding: 0 1.5rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  .tech-tag {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`

export const ProjectLinks = styled.div`
  padding: 0 1.5rem 1.5rem;
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.2s ease;

    &.live-link {
      background: linear-gradient(135deg, #64ffda, #ff6b6b);
      color: #000000;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(100, 255, 218, 0.3);
      }
    }

    &.github-link {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.2);

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }
    }
  }
`
