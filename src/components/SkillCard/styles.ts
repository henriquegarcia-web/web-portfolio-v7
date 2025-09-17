import styled from 'styled-components'
import { theme } from '@/utils/constants/theme'

export const SkillCard = styled.div`
  position: relative;
  padding: 1em;
  border-radius: 10px;
  transition: all 0.3s ease;
  overflow: hidden;

  background: #161616;
  border: 1px solid #2f2f2f;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(100, 255, 218, 0.2);

    h3 {
      color: ${theme.colors.text.active};
    }

    svg {
      opacity: 1;
    }
  }
`

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

export const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;

  svg {
    transition: all 0.2s ease;
    opacity: 0.8;
  }
`

export const SkillName = styled.h3`
  flex: 1;
  margin: 0;
  transition: all 0.2s ease;

  font-size: 1rem;
  font-weight: 600;

  color: ${theme.colors.text.unhovered};
`

export const SkillLevel = styled.div`
  display: flex;
  align-items: center;
`

export const SkillMetrics = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const MetricItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;

  background: rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

export const MetricValue = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: #64ffda;
`

export const MetricLabel = styled.span`
  font-size: 0.75rem;
  color: #a0a0a0;
  text-align: center;
`
