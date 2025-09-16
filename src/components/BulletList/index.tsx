import React from 'react'

import * as S from './styles'

interface BulletListProps {
  items: string[]
  className?: string
}

const BulletList: React.FC<BulletListProps> = ({ items, className }) => {
  return (
    <S.BulletList className={className}>
      {items.map((item, index) => (
        <S.BulletItem key={index}>
          <S.BulletPoint />
          <S.BulletText>{item}</S.BulletText>
        </S.BulletItem>
      ))}
    </S.BulletList>
  )
}

export default BulletList
