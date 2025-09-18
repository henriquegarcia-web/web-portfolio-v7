import styled, { css } from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Image = styled.img<{ $isActive: boolean; $totalImages: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

  ${({ $isActive, $totalImages }) => {
    if ($totalImages === 1) {
      return css`
        opacity: 1;
        transform: translateX(0);
      `
    }

    return css`
      opacity: ${$isActive ? 1 : 0};
      transform: translateX(${$isActive ? '0' : '100%'});
    `
  }}
`

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`

export const Dot = styled.button<{ $isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $isActive }) => css`
    background: ${$isActive ? '#0A0A0F' : 'rgba(0, 0, 0, 0.25)'};
    transform: scale(${$isActive ? 1.2 : 1});
  `}

  &:hover {
    background: #0a0a0f;
    transform: scale(1.2);
  }
`
