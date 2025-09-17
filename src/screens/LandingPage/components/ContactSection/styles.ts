import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const ContactSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`

export const ContactCard = styled.div`
  position: relative;
  min-width: ${theme.sizes.wrapper.contactSection};
  height: fit-content;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ContactItem = styled.div<{ color: string; isCopied: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid
    ${({ isCopied }) => (isCopied ? '#64ffda' : 'rgba(255, 255, 255, 0.05)')};
  cursor: pointer;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
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
      color: #a0a0a0;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
`

export const ContactValue = styled.span<{ isCopied?: boolean }>`
  font-size: 1rem;
  color: ${({ isCopied }) => (isCopied ? '#64ffda' : '#ffffff')};
  font-weight: 600;
  transition: color 0.3s ease;
`

export const CopyIcon = styled.div<{ isCopied?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  transition: all 0.2s ease;

  color: ${({ isCopied }) => (isCopied ? '#64ffda' : '#a0a0a0')};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid
    ${({ isCopied }) => (isCopied ? '#64ffda' : 'rgba(255, 255, 255, 0.1)')};

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #64ffda;
  }
`

export const SocialButtonsContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`
