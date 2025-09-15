import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const Nav = styled.nav`
  z-index: 1000;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
`

export const Menu = styled.ul`
  display: flex;
  gap: ${theme.spacing.xs};
  height: 100%;
  padding: 8px;
  border-radius: 30px;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`

export const MenuItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${theme.spacing.md};
  border-radius: 25px;
  transition: all 0.3s ease;
  background-color: ${({ isActive }) =>
    isActive ? 'rgba(100, 255, 218, 0.2)' : 'transparent'};
  border: 1px solid
    ${({ isActive }) => (isActive ? 'rgba(100, 255, 218, 0.3)' : 'transparent')};

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? 'rgba(100, 255, 218, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  }

  a {
    position: relative;
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    color: ${({ isActive }) => (isActive ? '#64ffda' : '#ffffff')};
    white-space: nowrap;

    &:hover {
      color: #64ffda;
    }
  }
`
