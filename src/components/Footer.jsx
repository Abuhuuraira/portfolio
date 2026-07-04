 import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from 'lucide-react'
import { fadeInUp, viewportConfig } from '../utils/animations'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Abuhuuraira', label: 'GitHub', color: '#00d4ff' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn', color: '#a855f7' },
  { icon: Mail, href: 'mailto:abu@medtechkits.com', label: 'Email', color: '#00d4ff' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.3)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(168,85,247,0.4), transparent)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Top area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-mono"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00d4ff',
                  boxShadow: '0 0 15px rgba(0,212,255,0.1)',
                }}
              >
                AH
              </div>
              <div>
                <p className="font-bold text-white">Abu Huraira</p>
                <p className="text-xs text-white/35 font-mono">Frontend Developer</p>
              </div>
            </div>

            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Crafting modern digital experiences with React, Shopify, and cutting-edge web technologies.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                  whileHover={{
                    scale: 1.15,
                    color,
                    borderColor: `${color}40`,
                    background: `${color}08`,
                    boxShadow: `0 0 12px ${color}20`,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white/60 mb-5 tracking-widest uppercase font-mono">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-sm text-white/35 hover:text-cyber-500 transition-colors duration-200 py-1"
                  whileHover={{ x: 3 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white/60 mb-5 tracking-widest uppercase font-mono">
              Quick Contact
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:abu@medtechkits.com"
                className="text-sm text-white/35 hover:text-cyber-500 transition-colors"
              >
                abu@medtechkits.com
              </a>
              <span className="text-sm text-white/35">Lahore, Pakistan</span>
            </div>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                color: '#080812',
                boxShadow: '0 0 20px rgba(0,212,255,0.2)',
              }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(0,212,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me →
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            className="text-xs text-white/25 font-mono text-center sm:text-left"
          >
            © {new Date().getFullYear()} Abu Huraira. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            className="flex items-center gap-2 text-xs text-white/25 font-mono"
          >
            <span>Built with</span>
            <Code2 size={12} style={{ color: '#00d4ff' }} />
            <span>React &</span>
            <Heart size={12} style={{ color: '#a855f7' }} />
            <span>Creativity</span>
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-white/35 hover:text-cyber-500 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            Back to top
            <div
              className="flex items-center justify-center w-7 h-7 rounded-lg"
              style={{ border: '1px solid rgba(0,212,255,0.25)', color: '#00d4ff' }}
            >
              <ArrowUp size={12} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
