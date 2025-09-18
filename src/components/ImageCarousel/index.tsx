import React, { useState, useEffect } from 'react'

import * as S from './styles'

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
        <S.Image
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          $isActive={true}
          $totalImages={images.length}
        />
      </S.ImageWrapper>
      {images.length > 1 && (
        <S.DotsContainer>
          {images.map((_, index) => (
            <S.Dot
              key={index}
              $isActive={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </S.DotsContainer>
      )}
    </S.CarouselContainer>
  )
}

export default ImageCarousel
