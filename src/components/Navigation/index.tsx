import React from 'react'

import { useSmoothScroll } from '@/hooks'

import * as S from './styles'

interface NavigationProps {
  activeSection: string
  onMenuItemClick: (sectionId: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onMenuItemClick }) => {
  const { scrollToElement } = useSmoothScroll()

  const menuItems = [
    { id: 'home', label: 'Início', href: '#home' },
    { id: 'about', label: 'Sobre', href: '#about' },
    { id: 'skills', label: 'Habilidades', href: '#skills' },
    { id: 'projects', label: 'Projetos', href: '#projects' },
    { id: 'experience', label: 'Experiência', href: '#experience' },
    { id: 'contact', label: 'Contato', href: '#contact' },
  ]

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault()
    scrollToElement(sectionId)
    onMenuItemClick(sectionId)
  }

  return (
    <S.Nav>
      <S.NavSpacer />

      <S.Menu>
        {menuItems.map((item) => (
          <S.MenuItem key={item.id} $isActive={activeSection === item.id}>
            <a href={item.href} onClick={(e) => handleMenuItemClick(e, item.id)}>
              {item.label}
            </a>
          </S.MenuItem>
        ))}
      </S.Menu>

      <S.SpecialNav>
        {/* <S.ServicesItem>
          <a href="/services">Minhas Soluções</a>
        </S.ServicesItem> */}
      </S.SpecialNav>
    </S.Nav>
  )
}

export default Navigation
