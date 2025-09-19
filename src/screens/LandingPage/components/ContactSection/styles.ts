import styled from 'styled-components'
import { theme } from '@/utils/constants'
import { Section } from '@/utils/styles'
import { motion } from 'framer-motion'

export const ContactSection = styled(Section)``

export const ContactCard = styled(motion.div)`
  position: relative;
  min-width: ${theme.sizes.wrapper.contactSection};
  height: fit-content;
  border-radius: ${theme.radius.lg};
  padding: 1.5rem;
  transition: all 0.3s ease;

  /* Liquid Glass Effect */
  background: ${theme.glass.background};
  backdrop-filter: ${theme.glass.backdropFilter};
  border: ${theme.glass.border};
  box-shadow: ${theme.glass.boxShadow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.border.accent};
    background: ${theme.colors.background.glassHover};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContactItem = styled(motion.div)<{ color: string; $isCopied: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${theme.colors.background.glass};
  border-radius: ${theme.radius.md};
  transition: all 0.2s ease;
  border: 1px solid
    ${({ $isCopied }) => ($isCopied ? theme.colors.primary : theme.colors.border.primary)};
  cursor: pointer;
  position: relative;

  &:hover {
    background: ${theme.colors.background.glassHover};
    transform: translateY(-2px);
    border-color: ${theme.colors.border.accent};
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 6px;

    background: ${({ color }) => `${color}20`};
    border: 2px solid ${({ color }) => `${color}40`};

    svg {
      font-size: 1rem;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    flex: 1;

    .label {
      font-size: 0.75rem;
      color: ${theme.colors.text.tertiary};
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
`

export const ContactValue = styled.span<{ $isCopied?: boolean }>`
  font-size: 1rem;
  color: ${({ $isCopied }) =>
    $isCopied ? theme.colors.primary : theme.colors.text.primary};
  font-weight: 600;
  transition: color 0.3s ease;
`

export const CopyIcon = styled.div<{ $isCopied?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: ${theme.radius.md};
  transition: all 0.2s ease;

  color: ${({ $isCopied }) =>
    $isCopied ? theme.colors.primary : theme.colors.text.tertiary};
  background: ${theme.colors.background.glass};
  border: 1px solid
    ${({ $isCopied }) => ($isCopied ? theme.colors.primary : theme.colors.border.primary)};

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: ${theme.colors.background.glassHover};
    color: ${theme.colors.primary};
    border-color: ${theme.colors.border.accent};
  }
`

export const SocialButtonsContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;
`
