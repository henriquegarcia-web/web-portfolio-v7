import styled from 'styled-components'
import { theme } from '@/utils/constants/theme'

export const Nav = styled.nav`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: ${theme.sizes.header.height};
`
export const Menu = styled.ul`
  display: flex;
  gap: ${theme.spacing.sm};
  height: 100%;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.radius.full};

  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.borderPrimary};
`

export const MenuItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${theme.spacing.md};
  border-radius: ${theme.radius.full};

  backdrop-filter: blur(10px);
  background-color: ${({ isActive }) => (isActive ? theme.colors.white : 'transparent')};

  a {
    position: relative;
    transition: color 0.3s ease;

    text-decoration: none;
    font-weight: 500;

    color: ${({ isActive }) => (isActive ? theme.colors.black : theme.colors.white)};
  }
`
