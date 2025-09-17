import React from 'react'

import * as S from './styles'

interface TagProps {
  children: React.ReactNode
  color?: string
  size?: 'small' | 'medium' | 'large'
  className?: string
}

const Tag: React.FC<TagProps> = ({
  children,
  color = '#64ffda',
  size = 'medium',
  className,
}) => {
  return (
    <S.Tag color={color} size={size} className={className}>
      {children}
    </S.Tag>
  )
}

export default Tag
