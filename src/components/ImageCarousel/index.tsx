import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import * as S from './styles'
import { carouselSlide, hoverScale } from '@/utils/constants'

interface ImageCarouselProps {
  images: string[]
  interval?: number
  className?: string
  isActive?: boolean
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 2000,
  className,
  isActive = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1 || !isActive) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, isActive])

  // Reset para primeira imagem quando não estiver ativo
  useEffect(() => {
    if (!isActive) {
      setCurrentIndex(0)
    }
  }, [isActive])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <S.CarouselContainer className={className}>
      <S.ImageWrapper>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={carouselSlide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            custom={1}
          >
            <S.Image
              src={images[currentIndex]}
              alt={`Project image ${currentIndex + 1}`}
              $isActive={true}
              $totalImages={images.length}
            />
          </motion.div>
        </AnimatePresence>
      </S.ImageWrapper>
      {images.length > 1 && (
        <S.DotsContainer>
          {images.map((_, index) => (
            <motion.div
              key={index}
              variants={hoverScale}
              whileHover="hover"
              whileTap="tap"
            >
              <S.Dot
                $isActive={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            </motion.div>
          ))}
        </S.DotsContainer>
      )}
    </S.CarouselContainer>
  )
}

export default ImageCarousel
