import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = []

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      rootMargin: options.rootMargin || '-40% 0px -50% 0px',
      threshold: options.threshold || 0,
    }

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(callback, observerOptions)
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [sectionIds, options.rootMargin, options.threshold])

  return activeSection
}
