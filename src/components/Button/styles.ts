import styled, { css } from 'styled-components'
import { IButtonProps } from '.'
import { theme } from '@/utils/constants'

// Estilos base do botão (sem herança para filhos)
const getButtonVariantStyles = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return css`
        background: #1a1a2e;
        color: #ffffff;
        border: 1px solid #333;

        &:hover {
          background: #2a2a3e;
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
        }
      `
    case 'outline':
      return css`
        background: transparent;
        color: #64ffda;
        border: 1px solid #64ffda;

        &:hover {
          background: rgba(100, 255, 218, 0.1);
          box-shadow: 0 8px 25px rgba(100, 255, 218, 0.2);
        }
      `
    case 'primary':
    default:
      return css`
        background: #0a0a0a;
        color: #ffffff;
        border: 1px solid #333;

        &:hover {
          background: #1a1a1a;
          box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
        }
      `
  }
}

const getSizeStyles = (size: string, hasIcon: boolean) => {
  switch (size) {
    case 'small':
      return css`
        height: 36px;
        padding: 0 ${hasIcon ? '0' : '1rem'} 0 1rem;
        gap: 0.5rem;
        font-size: 0.875rem;
      `
    case 'large':
      return css`
        height: 48px;
        padding: 0 ${hasIcon ? '0' : '1.5rem'} 0 1.5rem;
        gap: 0.75rem;
        font-size: 1.125rem;
      `
    case 'medium':
    default:
      return css`
        height: 42px;
        padding: 0 ${hasIcon ? '0' : '1.25rem'} 0 1.25rem;
        gap: 0.625rem;
        font-size: 1rem;
      `
  }
}

const getIconSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        width: 36px;
        height: 36px;
        padding: 0;
        border-radius: 50%;

        svg {
          width: 16px;
          height: 16px;
          font-size: 16px;
        }
      `
    case 'large':
      return css`
        width: 48px;
        height: 48px;
        padding: 0;
        border-radius: 50%;

        svg {
          width: 20px;
          height: 20px;
          font-size: 20px;
        }
      `
    case 'medium':
    default:
      return css`
        width: 42px;
        height: 42px;
        padding: 0;
        border-radius: 50%;

        svg {
          width: 18px;
          height: 18px;
          font-size: 18px;
        }
      `
  }
}

export const Button = styled.button<IButtonProps & { hasIcon?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${theme.radius.full};
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;

  ${({ variant = 'primary' }) => getButtonVariantStyles(variant)}
  ${({ size = 'medium', hasIcon = false }) => getSizeStyles(size, hasIcon)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
  }
`

export const ButtonText = styled.span`
  flex: 1;
  text-align: left;
`

// Estilos do ícone interno (dentro do botão com texto)
const getIconInternalVariantStyles = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return css`
        background: #ffffff;
        color: #1a1a2e;
      `
    case 'outline':
      return css`
        background: #64ffda;
        color: #0a0a0a;
      `
    case 'primary':
    default:
      return css`
        background: #ffffff;
        color: #0a0a0a;
      `
  }
}

// Função para obter estilos de tamanho do ícone interno
const getIconInternalSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        width: 28px;
        height: 28px;
        margin-right: 4px;

        svg {
          width: 14px;
          height: 14px;
          font-size: 14px;
        }
      `
    case 'large':
      return css`
        width: 36px;
        height: 36px;
        margin-right: 6px;

        svg {
          width: 18px;
          height: 18px;
          font-size: 18px;
        }
      `
    case 'medium':
    default:
      return css`
        width: 32px;
        height: 32px;
        margin-right: 4px;

        svg {
          width: 16px;
          height: 16px;
          font-size: 16px;
        }
      `
  }
}

export const ButtonIconInternal = styled.div<{ variant?: string; size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;

  ${({ variant = 'primary' }) => getIconInternalVariantStyles(variant)}
  ${({ size = 'medium' }) => getIconInternalSizeStyles(size)}
`

// Estilos do ícone baseados na variant do botão
const getIconVariantStyles = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return css`
        background: #ffffff;
        color: #1a1a2e;
        border: 1px solid #ffffff;
      `
    case 'outline':
      return css`
        background: transparent;
        color: #ffffff;
        border: 1px solid #ffffff;
      `
    case 'primary':
    default:
      return css`
        background: #ffffff;
        color: #0a0a0a;
        border: 1px solid #ffffff;
      `
  }
}

export const ButtonIcon = styled.button<{ variant?: string; size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  border: none;
  overflow: hidden;

  ${({ variant = 'primary' }) => getIconVariantStyles(variant)}
  ${({ size = 'medium' }) => getIconSizeStyles(size)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
  }
`
