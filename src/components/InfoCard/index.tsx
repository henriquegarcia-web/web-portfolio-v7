import React from 'react'

import * as S from './styles'

interface InfoCardProps {
  icon: string
  title: string
  description: React.ReactNode
  className?: string
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, className }) => {
  const onlyTitle = !!title && !description

  return (
    <S.InfoCard className={className} onlyTitle={onlyTitle}>
      <S.CardIcon>{icon}</S.CardIcon>
      <S.CardContent>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{description}</S.CardDescription>
      </S.CardContent>
    </S.InfoCard>
  )
}

export default InfoCard
