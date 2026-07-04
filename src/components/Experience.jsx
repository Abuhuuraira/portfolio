import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInLeft, fadeInRight, fadeInUp, viewportConfig } from '../utils/animations'
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'

const experiences = [
  {
    role: 'Web Developer',
    company: 'iConnecto',
    type: 'Full-time',
    period: 'July 2025 – Present',
    location: 'Lahore, Pakistan',
    color: '#00d4ff',
    responsibilities: [
      'Built responsive websites using React, HTML, CSS, and JavaScript for diverse clients',
      'Developed and customized Shopify stores with performance optimization',
      'Created smooth animations and interactive UI components with CSS and JS',
      'Integrated backend-connected forms and APIs for dynamic web functionality',
      'Implemented mobile-first design approach ensuring perfect cross-device compatibility',
      'Managed version control with GitHub, following best practices for team collaboration',
    ],
    current: true,
  },
]

function TimelineDot({ color, current }) {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 flex-shrink-0">
      {current && (
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: color }}
        />
      )}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center z-10"
        style={{
          background: `${color}15`,
          border: `2px solid ${color}`,
          boxShadow: `0 0 20px ${color}40`,
          color,
        }}
      >
        <Briefcase size={20} />
      </div>
    </div>
  )
}

function ExperienceCard({ exp, index }) {
  const ref = useRef()
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex gap-6 lg:gap-8"
    >
      {/* Timeline left */}
      <div className="flex flex-col items-center gap-0">
        <TimelineDot color={exp.color} current={exp.current} />
        <div
          className="flex-1 w-px mt-2"
          style={{
            background: `linear-gradient(to bottom, ${exp.color}60, transparent)`,
            minHeight: 40,
          }}
        />
      </div>

      {/* Card */}
      <div className="pb-12 flex-1 min-w-0">
        <motion.div
          className="p-7 rounded-2xl relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: `1px solid rgba(255,255,255,0.07)`,
            backdropFilter: 'blur(12px)',
          }}
          whileHover={{
            borderColor: `${exp.color}40`,
            background: `${exp.color}04`,
            boxShadow: `0 0 40px ${exp.color}12`,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)` }}
          />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
              <div className="flex items-center gap-2 text-base font-semibold" style={{ color: exp.color }}>
                {exp.company}
                {exp.current && (
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30`, color: exp.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    Current
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2">
              <div className="flex items-center gap-2 text-sm text-white/40">
                <Calendar size={13} style={{ color: exp.color }} />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <MapPin size={13} style={{ color: exp.color }} />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Type badge */}
          <div className="mb-5">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-medium"
              style={{
                background: `${exp.color}10`,
                border: `1px solid ${exp.color}25`,
                color: `${exp.color}cc`,
              }}
            >
              {exp.type}
            </span>
          </div>

          {/* Responsibilities */}
          <div className="flex flex-col gap-3">
            {exp.responsibilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: exp.color }}
                />
                <span className="text-sm text-white/55 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)',
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
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: '#00d4ff' }} />
            Career
            <span className="w-8 h-px" style={{ background: '#00d4ff' }} />
          </span>
          <h2 className="section-title">
            Work{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Experience
            </span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto">
            My professional journey building impactful digital products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}

          {/* Future placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            className="flex gap-6 lg:gap-8"
          >
            <div className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.2)' }}
              >
                <ArrowRight size={20} />
              </div>
            </div>
            <div className="pb-4 flex-1 flex items-center">
              <p className="text-sm text-white/25 font-mono italic">
                Next chapter... 🚀
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
