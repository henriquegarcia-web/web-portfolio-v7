import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const ModalContent = styled.div`
  position: relative;
  background: ${theme.colors.background.primary};
  border-radius: ${theme.radius.xl};
  max-width: 1280px;
  max-height: 90vh;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  box-shadow: ${theme.shadows.xl};
  border: 1px solid ${theme.colors.border.primary};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  background: ${theme.colors.background.glass};
  backdrop-filter: ${theme.glass.backdropFilter};
  border: 1px solid ${theme.colors.border.primary};
  border-radius: 50%;
  color: ${theme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.background.glassHover};
    border-color: ${theme.colors.border.accent};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    width: 36px;
    height: 36px;
    font-size: 1.25rem;
  }
`
