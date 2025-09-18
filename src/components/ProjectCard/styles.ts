import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const ProjectCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: ${theme.radius.lg};
  transition: all 0.3s ease;
  overflow: hidden;

  /* Liquid Glass Effect */
  background: ${theme.glass.background};
  backdrop-filter: ${theme.glass.backdropFilter};
  border: ${theme.glass.border};
  box-shadow: ${theme.glass.boxShadow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.border.accent};
    background: ${theme.colors.background.glassHover};
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
  color: ${theme.colors.text.primary};
`

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
`

export const PlaceholderImage = styled.div`
  height: 200px;
  background: linear-gradient(
    135deg,
    ${theme.colors.background.secondary},
    ${theme.colors.background.tertiary}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius.md};
  border: 1px solid ${theme.colors.border.primary};
`

export const PlaceholderIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  opacity: 0.5;
  color: ${theme.colors.text.accent};
`

export const PlaceholderText = styled.p`
  color: ${theme.colors.text.tertiary};
  font-size: 0.9rem;
  opacity: 0.7;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProjectDescription = styled.p`
  color: ${theme.colors.text.tertiary};
  font-size: 0.9rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
  color: ${theme.colors.text.tertiary};
  font-size: 0.85rem;
`

export const CheckIcon = styled.span`
  color: ${theme.colors.primary};
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
