import styled from 'styled-components'
import { theme } from '@/utils/constants'

interface CopyButtonProps {
  $isCopied: boolean
}

export const CopyButton = styled.button<CopyButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  font-size: 1.1rem;
  font-weight: 600;

  color: ${({ $isCopied }) => ($isCopied ? '#4ade80' : theme.colors.secondary)};
  background: none;
  border: none;

  &:hover {
    color: ${({ $isCopied }) => ($isCopied ? '#4ade80' : theme.colors.light)};
  }

  svg {
    transition: all 0.2s ease;
    color: ${({ $isCopied }) => ($isCopied ? '#4ade80' : 'inherit')};
  }
`
