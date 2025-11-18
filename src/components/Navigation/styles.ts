import styled from 'styled-components'
import { theme } from '@/utils/constants'

export const Nav = styled.nav`
  z-index: 1000;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 40px;
    padding: 0 ${theme.spacing.md};
  }

  /* border: 1px solid red; */
`

export const NavSpacer = styled.ul`
  display: flex;
  width: 100px;
`

export const SpecialNav = styled.ul`
  display: flex;
  gap: ${theme.spacing.xs};
  height: 100%;
  padding: ${theme.spacing.sm} 0;
`

interface BaseNavItemProps {
  $backgroundColor?: string
  $borderColor?: string
  $hoverBackgroundColor?: string
  $textColor?: string
  $hoverTextColor?: string
}

const BaseNavItem = styled.li<BaseNavItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${theme.spacing.md};
  border-radius: 25px;
  transition: all 0.2s ease;

  background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
  border: 1px solid ${({ $borderColor }) => $borderColor || 'transparent'};

  &:hover {
    background-color: ${({ $hoverBackgroundColor }) =>
      $hoverBackgroundColor || 'rgba(255, 255, 255, 0.1)'};
  }

  a {
    position: relative;
    transition: all 0.2s ease;

    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    white-space: nowrap;

    color: ${({ $textColor }) => $textColor || '#ffffff'};

    &:hover {
      color: ${({ $hoverTextColor }) => $hoverTextColor || '#64ffda'};
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.sm};

    a {
      font-size: 0.8rem;
    }
  }
`

export const ServicesItem = styled(BaseNavItem)`
  background-color: rgba(0, 212, 255, 0.2);
  border: 1px solid rgba(0, 212, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);

  &:hover {
    background-color: rgba(0, 212, 255, 0.3);
    border-color: rgba(0, 212, 255, 0.5);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }

  a {
    color: #00d4ff;
    font-weight: 600;

    &:hover {
      color: #00d4ff;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  gap: ${theme.spacing.xs};
  height: 100%;
  padding: 8px;
  border-radius: 30px;

  background: rgba(10, 10, 10, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4px;
  }
`

export const MenuItem = styled(BaseNavItem)<{ $isActive?: boolean }>`
  background-color: ${({ $isActive }) =>
    $isActive ? 'rgba(100, 255, 218, 0.2)' : 'transparent'};
  border: 1px solid
    ${({ $isActive }) => ($isActive ? 'rgba(100, 255, 218, 0.3)' : 'transparent')};

  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? 'rgba(100, 255, 218, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  }

  a {
    color: ${({ $isActive }) => ($isActive ? '#64ffda' : '#ffffff')};
  }
`

