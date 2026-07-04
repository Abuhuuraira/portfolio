import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const sectionIds = ['hero', 'about', 'skills', 'services', 'projects', 'experience', 'certifications', 'education', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-[200] transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(8, 8, 18, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : '1px solid transparent',
          boxShadow: scrolled ? '0 0 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
              whileHover={{ scale: 1.05 }}
              className="relative group flex items-center gap-3"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-bold font-mono transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))',
                  border: '1px solid rgba(0,212,255,0.4)',
                  color: '#00d4ff',
                  boxShadow: '0 0 15px rgba(0,212,255,0.15)',
                }}
              >
                AH
              </div>
              <span
                className="hidden sm:block font-bold text-lg tracking-wide"
                style={{
                  background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Abu Huraira
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="relative px-4 py-2 text-base font-semibold tracking-wide transition-colors duration-200"
                    style={{ color: isActive ? '#00d4ff' : 'rgba(255,255,255,0.75)' }}
                    whileHover={{ color: '#00d4ff', y: -2 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg -z-10"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(168,85,247,0.12))',
                          border: '1px solid rgba(0,212,255,0.25)',
                          boxShadow: '0 0 20px rgba(0,212,255,0.15)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </motion.a>
                )
              })}
            </div>

            {/* CTA + Social */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: 'https://github.com/Abuhuuraira', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:abu@medtechkits.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#00d4ff' }}
                    className="text-white/50 hover:text-cyber-500 transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon size={19} />
                  </motion.a>
                ))}
              </div>

              <motion.button
                onClick={() => scrollTo('#contact')}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 rounded-lg text-base font-bold text-space-950 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                  boxShadow: '0 0 20px rgba(0,212,255,0.3)',
                }}
              >
                Hire Me
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              className="lg:hidden p-2 rounded-lg"
              style={{ border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[199] lg:hidden flex"
          >
            {/* Backdrop */}
            <motion.div
              className="flex-1"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <div
              className="w-72 h-full flex flex-col py-20 px-8"
              style={{
                background: 'rgba(8,8,18,0.98)',
                backdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(0,212,255,0.15)',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200"
                    style={{
                      color: activeSection === link.href.replace('#', '') ? '#00d4ff' : 'rgba(255,255,255,0.7)',
                      background: activeSection === link.href.replace('#', '') ? 'rgba(0,212,255,0.08)' : 'transparent',
                      border: activeSection === link.href.replace('#', '') ? '1px solid rgba(0,212,255,0.2)' : '1px solid transparent',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: '#00d4ff', opacity: activeSection === link.href.replace('#', '') ? 1 : 0.3 }}
                    />
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => scrollTo('#contact')}
                  className="w-full py-3 rounded-lg text-base font-bold text-space-950 mb-6"
                  style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }}
                >
                  Hire Me
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-6"
                >
                  {[
                    { icon: Github, href: 'https://github.com/Abuhuuraira' },
                    { icon: Linkedin, href: 'https://linkedin.com/' },
                    { icon: Mail, href: 'mailto:abu@medtechkits.com' },
                  ].map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-cyber-500 transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
