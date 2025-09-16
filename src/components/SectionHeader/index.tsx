import React from 'react'

import * as S from './styles'

interface SectionHeaderProps {
  mainTitle: string
  backgroundText: string
  subtitle: string
  className?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  mainTitle,
  backgroundText,
  subtitle,
  className,
}) => {
  return (
    <S.SectionHeader className={className}>
      <S.Title>
        <S.BackgroundText>{backgroundText}</S.BackgroundText>
        <S.MainTitle>{mainTitle}</S.MainTitle>
      </S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.SectionHeader>
  )
}

export default SectionHeader
