import { useState, useEffect, useRef } from 'react'

export function useCountUp(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [isRunning, setIsRunning] = useState(false)
  const ref = useRef(null)

  const startCounting = () => {
    if (isRunning) return
    setIsRunning(true)

    const startTime = performance.now()
    const range = end - start

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + range * eased)

      setCount(current)

      if (progress < 1) {
        ref.current = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    ref.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current)
    }
  }, [])

  return { count, startCounting }
}
