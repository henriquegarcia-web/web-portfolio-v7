import styled from 'styled-components'

export const InfoCard = styled.div<{ onlyTitle: boolean }>`
  display: flex;
  align-items: ${({ onlyTitle }) => (onlyTitle ? 'center' : 'flex-start')};
  gap: 1.25rem;
  padding: 1.25rem;
  border-radius: 8px;
  transition: all 0.2s ease;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.1);
    border-color: rgba(100, 255, 218, 0.3);
  }
`

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 4px;

  font-size: 1.5rem;

  background: rgba(100, 255, 218, 0.1);
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const CardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;

  color: #ffffff;
`

export const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: left;

  color: #a0a0a0;
`
