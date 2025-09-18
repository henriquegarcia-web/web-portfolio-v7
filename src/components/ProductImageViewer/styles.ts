import styled, { css } from 'styled-components'
import { theme } from '@/utils/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a2e, #16213e);

  @media (max-width: 768px) {
    height: 300px;
  }
`

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const PlaceholderImage = styled.div`
  height: 100%;
  background: linear-gradient(
    135deg,
    ${theme.colors.background.secondary},
    ${theme.colors.background.tertiary}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius.lg};
  border: 1px solid ${theme.colors.border.primary};
`

export const PlaceholderIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
  color: ${theme.colors.text.accent};
`

export const PlaceholderText = styled.p`
  color: ${theme.colors.text.tertiary};
  font-size: 1rem;
  opacity: 0.7;
`

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 0.25rem 0 0.25rem 0.25rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.background.secondary};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.border.primary};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.border.accent};
  }
`

export const Thumbnail = styled.img<{ $isActive: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${theme.radius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  flex-shrink: 0;

  ${({ $isActive }) => css`
    border-color: ${$isActive ? theme.colors.primary : 'transparent'};
    opacity: ${$isActive ? 1 : 0.7};
    transform: ${$isActive ? 'scale(1.05)' : 'scale(1)'};
  `}

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    border-color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`
