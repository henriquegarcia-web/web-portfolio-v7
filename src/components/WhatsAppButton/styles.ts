import styled, { keyframes } from 'styled-components'

import { theme } from '@/utils/constants/theme'

const slideIn = keyframes`
  from {
    transform: translateX(100px) scale(0.8);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateX(100px) scale(0.8);
    opacity: 0;
  }
`

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`

export const WhatsAppButtonContainer = styled.button<{
  $isVisible: boolean
  $isAnimating: boolean
}>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Cores do WhatsApp */
  /* background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3); */

  background-color: rgba(100, 255, 218, 0.2);
  border: 1px solid rgba(100, 255, 218, 0.3);
  backdrop-filter: blur(4px);

  &:hover {
    background-color: rgba(100, 255, 218, 0.3);
  }

  /* Animações baseadas no estado */
  animation: ${({ $isVisible, $isAnimating }) => {
      if (!$isVisible) return 'none'
      if ($isAnimating) return slideIn
      return 'none'
    }}
    0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  /* Animação de saída quando está saindo */
  &.exiting {
    animation: ${slideOut} 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  /* Efeito de hover */
  &:hover {
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  }

  /* Efeito de foco para acessibilidade */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.3);
  }

  /* Efeito de clique */
  &:active {
    transform: translateY(0) scale(0.95);
  }

  /* Animação de pulso contínua quando visível */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: transparent;
    animation: ${({ $isVisible }) => ($isVisible ? pulse : 'none')} 2s infinite;
  }

  /* Responsividade */
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 48px;
    height: 48px;
    bottom: 20px;
    right: 20px;
  }
`

export const WhatsAppIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;

  svg {
    opacity: 0.75;

    font-size: 1.75rem;
    transition: transform 0.2s ease;
  }

  /* Animação do ícone no hover */
  ${WhatsAppButtonContainer}:hover & svg {
    opacity: 0.9;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    /* svg {
      width: 20px;
      height: 20px;
    } */
  }
`
