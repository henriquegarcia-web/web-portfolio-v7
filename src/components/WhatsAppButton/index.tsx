import React, { useEffect, useState } from 'react'

import * as S from './styles'
import { FaWhatsapp } from 'react-icons/fa6'
import { USER_DATA } from '@/utils/constants/data'

interface WhatsAppButtonProps {
  activeSection: string
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ activeSection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  // Determina se o botão deve estar visível baseado na seção ativa
  const shouldShow = activeSection !== 'home' && activeSection !== 'contact'

  useEffect(() => {
    if (shouldShow && !isVisible) {
      // Entrada: mostrar o botão
      setIsVisible(true)
      setIsAnimating(true)
      setIsExiting(false)

      // Remove a classe de animação após a animação terminar
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 300) // Duração da animação de entrada

      return () => clearTimeout(timer)
    } else if (!shouldShow && isVisible) {
      // Saída: iniciar animação de saída
      setIsExiting(true)
      setIsAnimating(false)

      // Remove o botão após a animação de saída terminar
      const timer = setTimeout(() => {
        setIsVisible(false)
        setIsExiting(false)
      }, 300) // Duração da animação de saída

      return () => clearTimeout(timer)
    }
  }, [shouldShow, isVisible])

  const handleClick = () => {
    // Usa diretamente o link do WhatsApp dos dados
    window.open(USER_DATA.personal.whatsapp, '_blank')
  }

  if (!isVisible) {
    return null
  }

  return (
    <S.WhatsAppButtonContainer
      $isVisible={isVisible}
      $isAnimating={isAnimating}
      className={isExiting ? 'exiting' : ''}
      onClick={handleClick}
      aria-label="Enviar mensagem no WhatsApp"
    >
      <S.WhatsAppIcon>
        <FaWhatsapp />
      </S.WhatsAppIcon>
    </S.WhatsAppButtonContainer>
  )
}

export default WhatsAppButton
