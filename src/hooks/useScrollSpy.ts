import { useEffect, useState } from 'react'

interface UseScrollSpyOptions {
  threshold?: number
  rootMargin?: string
}

export const useScrollSpy = ({
  threshold = 0.5,
  rootMargin = '0px',
}: UseScrollSpyOptions) => {
  const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 100) {
        setActiveSection('home')
        return
      }

      let currentSection = 'home'
      let minDistance = Infinity

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const distance = Math.abs(rect.top)

          if (rect.top <= 200 && rect.bottom >= 0 && distance < minDistance) {
            minDistance = distance
            currentSection = id
          }
        }
      })

      setActiveSection(currentSection)
    }

    const observer = new IntersectionObserver(
      () => {
        handleScroll()
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px',
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds, threshold, rootMargin])

  return activeSection
}
