import React from 'react'

import * as S from './styles'

export type BulletItemColor = 'yellow' | 'green' | 'red'

export interface BulletItem {
  text: string
  color: BulletItemColor
}

interface BulletListProps {
  items: BulletItem[]
  className?: string
}

const BulletList: React.FC<BulletListProps> = ({ items, className }) => {
  return (
    <S.BulletList className={className}>
      {items.map((item, index) => (
        <S.BulletItem key={index}>
          <S.BulletPoint color={item.color} />
          <S.BulletText>{item.text}</S.BulletText>
        </S.BulletItem>
      ))}
    </S.BulletList>
  )
}

export default BulletList
