import styled from 'styled-components'

interface TechIconContainerProps {
  size: 'small' | 'medium' | 'large'
}

export const TechIconContainer = styled.div<TechIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '20px'
      case 'medium':
        return '28px'
      case 'large':
        return '36px'
      default:
        return '28px'
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '20px'
      case 'medium':
        return '28px'
      case 'large':
        return '36px'
      default:
        return '28px'
    }
  }};
`
