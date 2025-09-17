import styled, { css } from 'styled-components'

interface TagProps {
  variant: 'primary' | 'secondary'
  size: 'small' | 'medium' | 'large'
}

export const Tag = styled.span<TagProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 15px;
  font-weight: 500;
  transition: all 0.2s ease;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: rgba(100, 255, 218, 0.2);
          color: #64ffda;
          border: 1px solid rgba(100, 255, 218, 0.3);
        `
      case 'secondary':
        return css`
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        `
      default:
        return css`
          background: rgba(100, 255, 218, 0.2);
          color: #64ffda;
          border: 1px solid rgba(100, 255, 218, 0.3);
        `
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 0.25rem 0.5rem;
          font-size: 0.75rem;
        `
      case 'medium':
        return css`
          padding: 0.4rem 0.8rem;
          font-size: 0.8rem;
        `
      case 'large':
        return css`
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        `
      default:
        return css`
          padding: 0.4rem 0.8rem;
          font-size: 0.8rem;
        `
    }
  }}

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`
