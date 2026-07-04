import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('loading') // loading | done

  useEffect(() => {
    const intervals = [
      setTimeout(() => setProgress(20), 200),
      setTimeout(() => setProgress(45), 600),
      setTimeout(() => setProgress(70), 1100),
      setTimeout(() => setProgress(88), 1700),
      setTimeout(() => setProgress(100), 2200),
      setTimeout(() => setPhase('done'), 2500),
      setTimeout(() => onComplete?.(), 2900),
    ]
    return () => intervals.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-space-950"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative flex flex-col items-center gap-12">
            {/* Logo / Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold font-mono"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))',
                  border: '1px solid rgba(0,212,255,0.3)',
                  boxShadow: '0 0 40px rgba(0,212,255,0.2), inset 0 0 20px rgba(0,212,255,0.05)',
                  color: '#00d4ff',
                }}
              >
                AH
              </div>
              {/* Spinning border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: '1px solid transparent',
                  background:
                    'linear-gradient(#080812, #080812) padding-box, linear-gradient(135deg, #00d4ff, #a855f7, #00d4ff) border-box',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold tracking-[0.2em] text-white mb-1">
                ABU HURAIRA
              </h1>
              <p className="text-xs font-mono tracking-[0.4em] text-cyan-500/70 uppercase">
                Frontend & React Developer
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-64"
            >
              <div className="flex justify-between mb-2">
                <span className="text-xs font-mono text-white/30">Initializing</span>
                <span
                  className="text-xs font-mono"
                  style={{ color: '#00d4ff' }}
                >
                  {progress}%
                </span>
              </div>
              <div
                className="h-px w-full rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
                    boxShadow: '0 0 10px rgba(0,212,255,0.6)',
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </motion.div>

            {/* Status text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs font-mono text-white/20 tracking-widest"
            >
              {progress < 45 ? 'Loading assets...' : progress < 80 ? 'Building components...' : 'Almost ready...'}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
