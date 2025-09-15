import { useCallback } from 'react'

interface UseSmoothScrollOptions {
  duration?: number
  easing?: (t: number) => number
}

export const useSmoothScroll = ({
  duration = 200,
  easing = (t) => t * (2 - t),
}: UseSmoothScrollOptions = {}) => {
  const scrollToElement = useCallback(
    (elementId: string) => {
      const element = document.getElementById(elementId)
      if (!element) return

      const startPosition = window.pageYOffset
      const targetPosition = element.offsetTop
      const distance = targetPosition - startPosition
      let startTime: number | null = null

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easing(progress)

        window.scrollTo(0, startPosition + distance * ease)

        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    },
    [duration, easing],
  )

  return { scrollToElement }
}
