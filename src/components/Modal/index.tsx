import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

import * as S from './styles'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return createPortal(
    isOpen && (
      <S.ModalOverlay onClick={onClose}>
        <S.ModalContent className={className} onClick={(e) => e.stopPropagation()}>
          <S.CloseButton onClick={onClose} aria-label="Fechar modal">
            ×
          </S.CloseButton>
          {children}
        </S.ModalContent>
      </S.ModalOverlay>
    ),
    document.body,
  )
}

export default Modal
