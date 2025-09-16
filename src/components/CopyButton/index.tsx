import React, { useState } from 'react'
import { FaRegClone, FaCheck } from 'react-icons/fa'
import * as S from './styles'

interface CopyButtonProps {
  label: string
  value: string
  className?: string
}

const CopyButton: React.FC<CopyButtonProps> = ({ label, value, className }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setIsCopied(true)

      // Reset after 3 seconds
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = value
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 3000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  return (
    <S.CopyButton onClick={handleCopy} className={className} $isCopied={isCopied}>
      {isCopied ? <FaCheck /> : <FaRegClone />}
      {label}
    </S.CopyButton>
  )
}

export default CopyButton
