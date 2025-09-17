import React from 'react'

import * as S from './styles'

interface TagProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className,
}) => {
  return (
    <S.Tag variant={variant} size={size} className={className}>
      {children}
    </S.Tag>
  )
}

export default Tag
