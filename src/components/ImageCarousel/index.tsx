import React, { useState, useEffect } from 'react'

import * as S from './styles'

interface ImageCarouselProps {
  images: string[]
  interval?: number
  className?: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 2000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <S.CarouselContainer className={className}>
      <S.ImageWrapper>
        {images.map((image, index) => (
          <S.Image
            key={index}
            src={image}
            alt={`Project image ${index + 1}`}
            $isActive={index === currentIndex}
            $totalImages={images.length}
          />
        ))}
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
