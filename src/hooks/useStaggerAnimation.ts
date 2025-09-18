import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseStaggerAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
  staggerDelay?: number
}

export const useStaggerAnimation = (options: UseStaggerAnimationOptions = {}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    threshold: options.threshold || 0.1,
    once: options.triggerOnce !== false,
    margin: options.rootMargin || '0px 0px -50px 0px',
  })

  const staggerDelay = options.staggerDelay || 0.1

  return { ref, isInView, staggerDelay }
}

export default useStaggerAnimation
