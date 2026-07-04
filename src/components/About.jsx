import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp, viewportConfig } from '../utils/animations'
import { GraduationCap, Code2, Briefcase, Award, MapPin, Calendar } from 'lucide-react'

function StatCard({ value, label, icon: Icon, suffix = '+', color = '#00d4ff' }) {
  const ref = useRef()
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const { count, startCounting } = useCountUp(value, 2000)

  useEffect(() => {
    if (isInView) startCounting()
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="group relative p-6 rounded-2xl overflow-hidden flex flex-col items-center text-center"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(10px)',
      }}
      whileHover={{
        borderColor: `${color}40`,
        background: `${color}06`,
        y: -4,
        boxShadow: `0 0 30px ${color}20`,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}15`, color }}
      >
        <Icon size={22} />
      </div>
      <div
        className="text-4xl font-bold font-mono mb-1"
        style={{ color }}
      >
        {count}{suffix}
      </div>
      <p className="text-sm text-white/50 font-medium">{label}</p>
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef()
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: '#00d4ff' }} />
            About Me
            <span className="w-8 h-px" style={{ background: '#00d4ff' }} />
          </span>
          <h2 className="section-title">
            Who I{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Am
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            {/* Main avatar card */}
            <div className="relative mx-auto max-w-sm">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'conic-gradient(from 0deg, #00d4ff, #a855f7, #7c3aed, #00d4ff)',
                  padding: '2px',
                  borderRadius: '24px',
                  opacity: 0.5,
                  filter: 'blur(2px)',
                }}
              />

              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(168,85,247,0.08))',
                  border: '1px solid rgba(0,212,255,0.2)',
                  padding: '2px',
                }}
              >
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{ background: 'rgba(8,8,18,0.9)' }}
                >
                  {/* Profile visual */}
                  <div className="aspect-square relative flex items-center justify-center overflow-hidden" style={{ minHeight: 320 }}>
                    {/* Animated background pattern */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(0,212,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.15) 0%, transparent 50%)',
                      }}
                    />
                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }}
                    />
                    {/* Monogram */}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className="w-32 h-32 rounded-full flex items-center justify-center text-6xl font-bold font-mono"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(168,85,247,0.2))',
                          border: '2px solid rgba(0,212,255,0.4)',
                          color: '#00d4ff',
                          boxShadow: '0 0 40px rgba(0,212,255,0.25), 0 0 80px rgba(168,85,247,0.1)',
                          textShadow: '0 0 20px rgba(0,212,255,0.8)',
                        }}
                      >
                        AH
                      </motion.div>
                      <div className="text-center">
                        <p className="text-white font-semibold text-lg">Abu Huraira</p>
                        <p className="text-white/40 text-sm font-mono">Frontend Developer</p>
                      </div>
                    </div>
                    {/* Orbiting elements */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                          background: i === 0 ? '#00d4ff' : i === 1 ? '#a855f7' : '#7c3aed',
                          boxShadow: `0 0 10px ${i === 0 ? '#00d4ff' : i === 1 ? '#a855f7' : '#7c3aed'}`,
                          top: '50%',
                          left: '50%',
                        }}
                        animate={{
                          rotate: [i * 120, i * 120 + 360],
                          x: [Math.cos((i * 120 * Math.PI) / 180) * 100, Math.cos(((i * 120 + 360) * Math.PI) / 180) * 100],
                          y: [Math.sin((i * 120 * Math.PI) / 180) * 100, Math.sin(((i * 120 + 360) * Math.PI) / 180) * 100],
                        }}
                        transition={{
                          duration: 6 + i * 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    ))}
                  </div>

                  {/* Info bar */}
                  <div
                    className="p-5 border-t flex items-center gap-4"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <MapPin size={14} style={{ color: '#00d4ff' }} />
                      <span>Lahore, Pakistan</span>
                    </div>
                    <div
                      className="h-4 w-px"
                      style={{ background: 'rgba(255,255,255,0.1)' }}
                    />
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <Calendar size={14} style={{ color: '#a855f7' }} />
                      <span>2022 – Present</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech pill */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-16 px-4 py-2 rounded-full text-xs font-mono font-medium"
              style={{
                background: 'rgba(0,212,255,0.1)',
                border: '1px solid rgba(0,212,255,0.3)',
                color: '#00d4ff',
                backdropFilter: 'blur(10px)',
              }}
            >
              React Developer
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-4 bottom-24 px-4 py-2 rounded-full text-xs font-mono font-medium"
              style={{
                background: 'rgba(168,85,247,0.1)',
                border: '1px solid rgba(168,85,247,0.3)',
                color: '#a855f7',
                backdropFilter: 'blur(10px)',
              }}
            >
              UI/UX Design
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Crafting Digital Experiences with{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Passion & Precision
                </span>
              </h3>
              <p className="text-white/55 text-base leading-relaxed">
                I'm a BBIT student in the 8th semester with a strong foundation in frontend web
                development using React, Bootstrap, HTML, and CSS. Skilled in WordPress and
                Shopify development with growing expertise in AI integration and databases.
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-white/55 text-base leading-relaxed">
              Passionate about becoming a full-stack developer and building modern digital
              experiences. Currently working at iConnecto as a Web Developer, where I build
              responsive websites, Shopify stores, and animation-rich interfaces.
            </motion.p>

            {/* Key highlights */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
              {[
                { icon: Code2, text: 'React & JavaScript', color: '#00d4ff' },
                { icon: Briefcase, text: 'Shopify & WordPress', color: '#a855f7' },
                { icon: GraduationCap, text: 'BBIT — UET Lahore', color: '#00d4ff' },
                { icon: Award, text: 'Cybersecurity Certs', color: '#a855f7' },
              ].map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    background: `${color}08`,
                    border: `1px solid ${color}20`,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  <Icon size={16} style={{ color, flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { value: 10, label: 'Projects Done', icon: Code2, suffix: '+', color: '#00d4ff' },
                { value: 1, label: 'Year Experience', icon: Briefcase, suffix: '+', color: '#a855f7' },
                { value: 2, label: 'Certifications', icon: Award, suffix: '', color: '#00d4ff' },
                { value: 5, label: 'Happy Clients', icon: GraduationCap, suffix: '+', color: '#a855f7' },
              ].map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
