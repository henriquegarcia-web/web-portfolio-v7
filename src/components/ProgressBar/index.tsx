import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'
import { progressBar } from '@/utils/constants'

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(Math.min(scrollPercent, 100))
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress() // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <S.ProgressBarContainer>
      <motion.div
        variants={progressBar}
        initial="hidden"
        animate="visible"
        style={{ width: `${progress}%` }}
      >
        <S.ProgressBarFill progress={progress} />
      </motion.div>
    </S.ProgressBarContainer>
  )
}

export default ProgressBar
