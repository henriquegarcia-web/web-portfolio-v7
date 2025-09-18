import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: options.threshold || 0.1,
    once: options.triggerOnce !== false,
    margin: (options.rootMargin || '0px 0px -100px 0px') as any,
  })

  return { ref, isInView }
}

export default useScrollAnimation
