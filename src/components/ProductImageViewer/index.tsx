import React, { useState } from 'react'

import * as S from './styles'

interface ProductImageViewerProps {
  images: string[]
  className?: string
}

const ProductImageViewer: React.FC<ProductImageViewerProps> = ({ images, className }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <S.Container className={className}>
        <S.MainImageContainer>
          <S.PlaceholderImage>
            <S.PlaceholderIcon>📱</S.PlaceholderIcon>
            <S.PlaceholderText>Sem imagem</S.PlaceholderText>
          </S.PlaceholderImage>
        </S.MainImageContainer>
      </S.Container>
    )
  }

  return (
    <S.Container className={className}>
      <S.MainImageContainer>
        <S.MainImage
          src={images[activeImageIndex]}
          alt={`Project image ${activeImageIndex + 1}`}
        />
      </S.MainImageContainer>

      {images.length > 1 && (
        <S.ThumbnailContainer>
          {images.map((image, index) => (
            <S.Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              $isActive={index === activeImageIndex}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </S.ThumbnailContainer>
      )}
    </S.Container>
  )
}

export default ProductImageViewer
