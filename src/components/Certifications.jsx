import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, scaleIn, viewportConfig } from '../utils/animations'
import { Award, ExternalLink, Shield, Globe } from 'lucide-react'

const certifications = [
  {
    title: 'Fundamentals of Cybersecurity',
    issuer: 'LinkedIn Learning',
    icon: Shield,
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,212,255,0.04))',
    description: 'Comprehensive introduction to cybersecurity concepts including network security, threat detection, and security best practices.',
    skills: ['Network Security', 'Threat Analysis', 'Risk Management'],
    link: 'https://linkedin.com/learning',
  },
  {
    title: 'Cybersecurity for Everyone',
    issuer: 'Coursera',
    icon: Globe,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(168,85,247,0.04))',
    description: 'Expert-led course covering cybersecurity fundamentals, data protection strategies, and understanding of modern security threats.',
    skills: ['Data Protection', 'Security Threats', 'Defense Strategies'],
    link: 'https://coursera.org',
  },
]

function CertCard({ cert, index }) {
  const { title, issuer, icon: Icon, color, gradient, description, skills, link } = cert

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.15, duration: 0.7, type: 'spring', stiffness: 300, damping: 25 }}
      className="group relative p-8 rounded-2xl overflow-hidden"
      style={{
        background: gradient,
        border: `1px solid ${color}25`,
        backdropFilter: 'blur(12px)',
      }}
      whileHover={{
        borderColor: `${color}50`,
        boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${color}15`,
        y: -8,
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}10, transparent 70%)`,
          transform: 'translate(30%, -30%)',
        }}
      />

      {/* Top decoration line */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
              color,
              boxShadow: `0 0 20px ${color}20`,
            }}
          >
            <Icon size={28} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white mb-2 leading-tight">{title}</h3>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: `${color}12`,
                border: `1px solid ${color}25`,
                color,
              }}
            >
              <Award size={12} />
              {issuer}
            </div>
          </div>
        </div>

        <p className="text-sm text-white/50 leading-relaxed mb-6">{description}</p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* View link */}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
          style={{ color }}
          whileHover={{ gap: 8 }}
        >
          View Credential
          <ExternalLink size={14} />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 100% 50%, rgba(168,85,247,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label" style={{ color: '#a855f7' }}>
            <span className="w-8 h-px" style={{ background: '#a855f7' }} />
            Credentials
            <span className="w-8 h-px" style={{ background: '#a855f7' }} />
          </span>
          <h2 className="section-title">
            My{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto">
            Continuously learning and upskilling to stay at the forefront of technology.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-white/25 font-mono">
            More certifications in progress...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
