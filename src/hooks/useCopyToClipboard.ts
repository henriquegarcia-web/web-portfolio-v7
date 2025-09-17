import { useState } from 'react'

export const useCopyToClipboard = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(text)

      // Remove o feedback visual após 2 segundos
      setTimeout(() => {
        setCopiedItem(null)
      }, 2000)
    } catch (err) {
      console.error('Erro ao copiar para área de transferência:', err)
    }
  }

  return {
    copiedItem,
    copyToClipboard,
  }
}
