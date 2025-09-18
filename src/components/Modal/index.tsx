import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { AnimatePresence, motion } from 'framer-motion'

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
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <S.ModalOverlay onClick={onClose}>
            <S.ModalContent
              as={motion.div}
              className={className}
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <S.CloseButton
                as={motion.button}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                aria-label="Fechar modal"
              >
                ×
              </S.CloseButton>
              {children}
            </S.ModalContent>
          </S.ModalOverlay>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default Modal
