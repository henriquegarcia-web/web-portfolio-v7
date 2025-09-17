import React from 'react'

import * as S from './styles'
import StackIcon from 'tech-stack-icons'

interface TechIconProps {
  iconKey: string
  size?: 'small' | 'medium' | 'large'
}

const TechIcon: React.FC<TechIconProps> = ({ iconKey, size = 'medium' }) => {
  const getIconSize = () => {
    switch (size) {
      case 'small':
        return '16px'
      case 'medium':
        return '24px'
      case 'large':
        return '32px'
      default:
        return '24px'
    }
  }

  return (
    <S.TechIconContainer size={size} title={iconKey}>
      <StackIcon
        name={iconKey}
        variant="dark"
        style={{
          width: getIconSize(),
          height: getIconSize(),
        }}
      />
    </S.TechIconContainer>
  )
}

export default TechIcon
