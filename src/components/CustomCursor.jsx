import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const ringSpringConfig = { damping: 20, stiffness: 200, mass: 1 }

  const dotX = useSpring(cursorX, springConfig)
  const dotY = useSpring(cursorY, springConfig)
  const rX = useSpring(ringX, ringSpringConfig)
  const rY = useSpring(ringY, ringSpringConfig)

  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleHoverStart = (e) => {
      if (
        e.target.closest('a, button, [data-cursor="pointer"], input, textarea, select, label')
      ) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleHoverStart)
    document.addEventListener('mouseout', handleHoverEnd)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleHoverStart)
      document.removeEventListener('mouseout', handleHoverEnd)
    }
  }, [cursorX, cursorY, ringX, ringY])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#00d4ff',
            boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff',
          }}
        />
      </motion.div>

      {/* Ring cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: rX,
          y: rY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.8 : isClicking ? 0.8 : 1,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: isHovering
              ? '1.5px solid rgba(168,85,247,0.8)'
              : '1.5px solid rgba(0,212,255,0.6)',
            boxShadow: isHovering
              ? '0 0 10px rgba(168,85,247,0.3)'
              : '0 0 8px rgba(0,212,255,0.2)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        />
      </motion.div>

      {/* Trailing glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: rX,
          y: rY,
          translateX: '-50%',
          translateY: '-50%',
          width: 80,
          height: 80,
        }}
        animate={{ opacity: isVisible ? 0.06 : 0 }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: isHovering
              ? 'radial-gradient(circle, rgba(168,85,247,1), transparent 70%)'
              : 'radial-gradient(circle, rgba(0,212,255,1), transparent 70%)',
          }}
        />
      </motion.div>
    </>
  )
}
