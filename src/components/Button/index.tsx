import React from 'react'

import * as S from './styles'
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
  FaBehance,
} from 'react-icons/fa'
import { IoDownloadOutline } from 'react-icons/io5'

export interface IButtonProps {
  children?: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  icon?:
    | 'whatsapp'
    | 'arrow'
    | 'email'
    | 'phone'
    | 'github'
    | 'linkedin'
    | 'behance'
    | 'download'
    | 'none'
  disabled?: boolean
  className?: string
  'aria-label'?: string
}

const Button: React.FC<IButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon = 'arrow',
  disabled = false,
  className,
  'aria-label': ariaLabel,
}) => {
  const renderIcon = () => {
    if (icon === 'none') return null

    const iconMap = {
      whatsapp: FaWhatsapp,
      email: FaEnvelope,
      phone: FaPhone,
      github: FaGithub,
      linkedin: FaLinkedinIn,
      behance: FaBehance,
      download: IoDownloadOutline,
      arrow: FaExternalLinkAlt,
    }

    const IconComponent = iconMap[icon] || FaExternalLinkAlt
    return <IconComponent />
  }

  const hasText = children && children.toString().trim() !== ''
  const hasIcon = icon && icon !== 'none'

  // Caso 1: Apenas ícone (sem texto)
  if (!hasText && hasIcon) {
    const iconProps = {
      variant,
      size,
      disabled,
      className,
      'aria-label': ariaLabel,
    }

    if (href) {
      return (
        <S.ButtonIcon as="a" href={href} target="_blank" {...iconProps}>
          {renderIcon()}
        </S.ButtonIcon>
      )
    }

    return (
      <S.ButtonIcon as="button" type="button" onClick={onClick} {...iconProps}>
        {renderIcon()}
      </S.ButtonIcon>
    )
  }

  // Caso 2: Apenas texto (sem ícone)
  if (hasText && !hasIcon) {
    const buttonProps = {
      variant,
      size,
      disabled,
      className,
      'aria-label': ariaLabel,
    }

    if (href) {
      return (
        <S.Button as="a" href={href} target="_blank" {...buttonProps}>
          <S.ButtonText>{children}</S.ButtonText>
        </S.Button>
      )
    }

    return (
      <S.Button as="button" type="button" onClick={onClick} {...buttonProps}>
        <S.ButtonText>{children}</S.ButtonText>
      </S.Button>
    )
  }

  // Caso 3: Texto + Ícone
  if (hasText && hasIcon) {
    const buttonProps = {
      variant,
      size,
      disabled,
      hasIcon,
      className,
      'aria-label': ariaLabel,
    }

    if (href) {
      return (
        <S.Button as="a" href={href} target="_blank" {...buttonProps}>
          <S.ButtonText>{children}</S.ButtonText>
          <S.ButtonIconInternal variant={variant} size={size}>
            {renderIcon()}
          </S.ButtonIconInternal>
        </S.Button>
      )
    }

    return (
      <S.Button as="button" type="button" onClick={onClick} {...buttonProps}>
        <S.ButtonText>{children}</S.ButtonText>
        <S.ButtonIconInternal variant={variant} size={size}>
          {renderIcon()}
        </S.ButtonIconInternal>
      </S.Button>
    )
  }

  return null
}

export default Button
