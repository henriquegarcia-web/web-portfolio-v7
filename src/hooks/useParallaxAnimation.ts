import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface UseParallaxAnimationOptions {
  offset?: [string, string]
  clamp?: boolean
}

export const useParallaxAnimation = (options: UseParallaxAnimationOptions = {}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: options.offset || (['start end', 'end start'] as any),
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'], {
    clamp: options.clamp !== false,
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return { ref, y, opacity, scale, scrollYProgress }
}

export default useParallaxAnimation
