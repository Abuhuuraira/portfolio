import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from '../utils/animations'
import { GraduationCap, MapPin, Calendar, BookOpen, ChevronRight } from 'lucide-react'

const courses = [
  'Web Development',
  'E-Commerce Systems',
  'Cybersecurity Fundamentals',
  'Marketing Management',
  'Financial Management',
  'Business Intelligence',
  'Database Management',
  'Project Management',
]

export default function Education() {
  return (
    <section id="education" className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 60%)',
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
            Education
            <span className="w-8 h-px" style={{ background: '#00d4ff' }} />
          </span>
          <h2 className="section-title">
            Academic{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Background
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — degree card */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div
              className="relative p-8 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(0,212,255,0.2)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }}
              />

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  color: '#00d4ff',
                  boxShadow: '0 0 25px rgba(0,212,255,0.15)',
                }}
              >
                <GraduationCap size={30} />
              </div>

              {/* Degree info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Bachelor of Business Information Technology
                </h3>
                <p
                  className="text-sm font-mono font-semibold mb-4"
                  style={{ color: '#00d4ff' }}
                >
                  BBIT — 8th Semester
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-white/55">
                    <MapPin size={15} style={{ color: '#00d4ff', flexShrink: 0 }} />
                    <span>University of Engineering and Technology (UET), Lahore</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/55">
                    <Calendar size={15} style={{ color: '#a855f7', flexShrink: 0 }} />
                    <span>2022 – 2026 (Expected)</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-white/40">Degree Progress</span>
                  <span className="text-xs font-mono" style={{ color: '#00d4ff' }}>8/8 Semesters</span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
                      boxShadow: '0 0 10px rgba(0,212,255,0.5)',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                  />
                </div>
              </div>

              {/* Status badge */}
              <div className="mt-6 flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(0,212,255,0.1)',
                    border: '1px solid rgba(0,212,255,0.3)',
                    color: '#00d4ff',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  Final Semester
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — coursework */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={20} style={{ color: '#a855f7' }} />
                <h4 className="text-lg font-bold text-white">Relevant Coursework</h4>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {courses.map((course, i) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    whileHover={{
                      background: 'rgba(168,85,247,0.06)',
                      borderColor: 'rgba(168,85,247,0.25)',
                      x: 4,
                    }}
                  >
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: '#a855f7' }}
                    />
                    <span className="text-sm font-medium text-white/65 group-hover:text-white/85 transition-colors">
                      {course}
                    </span>
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: '#a855f7' }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Focus areas */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(168,85,247,0.06)',
                border: '1px solid rgba(168,85,247,0.15)',
              }}
            >
              <h4 className="text-sm font-semibold text-white/70 mb-3">Primary Focus</h4>
              <p className="text-sm text-white/45 leading-relaxed">
                Bridging business and technology — combining software development expertise
                with business fundamentals to build solutions that drive real-world value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
