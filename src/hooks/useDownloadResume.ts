import { useCallback } from 'react'

interface UseDownloadResumeReturn {
  downloadResume: () => void
  isDownloading: boolean
}

export const useDownloadResume = (): UseDownloadResumeReturn => {
  const downloadResume = useCallback(() => {
    try {
      // Cria um elemento <a> temporário para fazer o download
      const link = document.createElement('a')
      link.href = '/CURRICULO_HENRIQUE_PEREIRA_GARCIA_FULL_STACK.pdf'
      link.download = 'CURRICULO_HENRIQUE_PEREIRA_GARCIA_FULL_STACK.pdf'

      // Adiciona o link ao DOM temporariamente
      document.body.appendChild(link)

      // Simula o clique no link para iniciar o download
      link.click()

      // Remove o link do DOM
      document.body.removeChild(link)
    } catch (error) {
      console.error('Erro ao fazer download do currículo:', error)

      // Fallback: abre o PDF em uma nova aba
      window.open('/CURRICULO_HENRIQUE_PEREIRA_GARCIA_FULL_STACK.pdf', '_blank')
    }
  }, [])

  return {
    downloadResume,
    isDownloading: false, // Pode ser expandido para mostrar estado de loading
  }
}
