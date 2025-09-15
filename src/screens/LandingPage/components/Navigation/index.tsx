import React from 'react'

import * as S from './styles'

import { IPersonalInfo } from '@/utils/types'

interface NavigationProps {
  data: IPersonalInfo
}

const Navigation: React.FC<NavigationProps> = ({ data }) => {
  const menuItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  const handleMenuItemClick = () => {}

  return (
    <S.Nav>
      <S.Menu>
        {menuItems.map((item) => (
          <S.MenuItem key={item.id}>
            <a href={item.href} onClick={handleMenuItemClick}>
              {item.label}
            </a>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Nav>
  )
}

export default Navigation
