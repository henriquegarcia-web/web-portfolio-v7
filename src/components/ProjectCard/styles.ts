import styled from 'styled-components'

export const ProjectCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(100, 255, 218, 0.15);
  }
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProjectTitle = styled.h3`
  flex: 1;

  font-size: 1.125rem;
  font-weight: 700;

  color: #ffffff;
`

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
`

export const PlaceholderImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

export const PlaceholderIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  opacity: 0.5;
`

export const PlaceholderText = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  opacity: 0.7;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProjectDescription = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  line-height: 1.4;
`

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #a0a0a0;
  font-size: 0.85rem;
`

export const CheckIcon = styled.span`
  color: #64ffda;
  font-weight: bold;
  font-size: 0.9rem;
  flex-shrink: 0;
`

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
