import styled from 'styled-components'

export const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  margin: 0.5rem 0 0 0;
`

export const BulletItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 16px;
    width: 2px;
    height: calc(100% + 0.75rem);
    background: linear-gradient(
      to bottom,
      rgba(100, 255, 218, 0.3) 0%,
      rgba(100, 255, 218, 0.1) 100%
    );
  }
`

export const BulletPoint = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.2);
  border: 2px solid rgba(100, 255, 218, 0.6);
  flex-shrink: 0;
  margin-top: 2px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(100, 255, 218, 0.8);
  }
`

export const BulletText = styled.span`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #a0a0a0;
  flex: 1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.75rem;
    right: 0;
    height: 100%;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 2px,
      rgba(100, 255, 218, 0.1) 2px,
      rgba(100, 255, 218, 0.1) 4px
    );
    background-size: 8px 100%;
    z-index: -1;
    opacity: 0.3;
  }
`
