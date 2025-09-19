import styled, { css } from 'styled-components'
import { IButtonProps } from '.'
import { theme } from '@/utils/constants'

// Estilos base do botão (sem herança para filhos)
const getButtonVariantStyles = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return css`
        background: ${theme.colors.background.tertiary};
        color: ${theme.colors.text.primary};
        border: 1px solid ${theme.colors.border.primary};

        &:hover {
          background: ${theme.colors.background.glassHover};
          border-color: ${theme.colors.border.accent};
        }
      `
    case 'outline':
      return css`
        background: transparent;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};

        &:hover {
          background: ${theme.colors.state.active};
        }
      `
    case 'link':
      return css`
        background: none;
        color: ${theme.colors.primary};
        border: none;
        text-decoration: underline;
        font-weight: 500;
        padding: 0;
        height: auto;

        &:hover {
          color: ${theme.colors.text.primary};
          text-decoration: none;
        }
      `
    case 'primary':
    default:
      return css`
        background: ${theme.colors.background.glass};
        color: ${theme.colors.text.primary};
        border: 1px solid ${theme.colors.border.primary};
        backdrop-filter: ${theme.glass.backdropFilter};

        &:hover {
          background: ${theme.colors.background.glassHover};
          border-color: ${theme.colors.border.accent};
        }
      `
  }
}

const getSizeStyles = (size: string, hasIcon: boolean, variant: string) => {
  // Para variante link, usar estilos específicos
  if (variant === 'link') {
    switch (size) {
      case 'small':
        return css`
          font-size: 0.8rem;
        `
      case 'large':
        return css`
          font-size: 1rem;
        `
      case 'medium':
      default:
        return css`
          font-size: 0.9rem;
        `
    }
  }

  // Para outras variantes, usar estilos normais
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
          font-size: 18px;
        }
      `
    case 'large':
      return css`
        width: 48px;
        height: 48px;
        padding: 0;
        border-radius: 50%;

        svg {
          font-size: 22px;
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
          font-size: 20px;
        }
      `
  }
}

export const Button = styled.button<IButtonProps & { $hasIcon?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${theme.radius.full};
  transition: all 0.2s ease;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;

  ${({ variant = 'primary' }) => getButtonVariantStyles(variant)}
  ${({ size = 'medium', $hasIcon = false, variant = 'primary' }) =>
    getSizeStyles(size, $hasIcon, variant)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  /* &:not(:disabled):hover {
    transform: translateY(-2px);
  } */
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
        background: ${theme.colors.text.primary};
        color: ${theme.colors.background.tertiary};
      `
    case 'outline':
      return css`
        background: ${theme.colors.primary};
        color: ${theme.colors.background.primary};
      `
    case 'primary':
    default:
      return css`
        background: ${theme.colors.text.primary};
        color: ${theme.colors.background.primary};
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
          font-size: 16px;
        }
      `
    case 'large':
      return css`
        width: 36px;
        height: 36px;
        margin-right: 6px;

        svg {
          font-size: 20px;
        }
      `
    case 'medium':
    default:
      return css`
        width: 32px;
        height: 32px;
        margin-right: 4px;

        svg {
          font-size: 18px;
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
        background: ${theme.colors.text.primary};
        color: ${theme.colors.background.tertiary};
        border: 1px solid ${theme.colors.text.primary};

        &:hover {
          background: ${theme.colors.background.glassHover};
          border-color: ${theme.colors.border.accent};
        }
      `
    case 'outline':
      return css`
        background: transparent;
        color: ${theme.colors.text.primary};
        border: 1px solid ${theme.colors.border.primary};

        &:hover {
          background: ${theme.colors.state.active};
          border-color: ${theme.colors.border.accent};
          box-shadow: ${theme.shadows.md};
        }
      `
    case 'primary':
    default:
      return css`
        background: ${theme.colors.background.glass};
        color: ${theme.colors.text.primary};
        border: 1px solid ${theme.colors.border.primary};
        backdrop-filter: ${theme.glass.backdropFilter};

        &:hover {
          background: ${theme.colors.background.glassHover};
          border-color: ${theme.colors.border.accent};
        }
      `
  }
}

export const ButtonIcon = styled.button<{ variant?: string; size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
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

  /* &:not(:disabled):hover {
    transform: translateY(-2px);
  } */
`
