import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp, scaleIn, viewportConfig } from '../utils/animations'

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#00d4ff',
    skills: [
      { name: 'React', level: 85, icon: '⚛️' },
      { name: 'JavaScript', level: 80, icon: '🟨' },
      { name: 'HTML5', level: 95, icon: '🧱' },
      { name: 'CSS3', level: 90, icon: '🎨' },
      { name: 'Bootstrap', level: 88, icon: '🅱️' },
      { name: 'Tailwind CSS', level: 82, icon: '💨' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & DB',
    color: '#a855f7',
    skills: [
      { name: 'Python', level: 70, icon: '🐍' },
      { name: 'PHP', level: 65, icon: '🐘' },
      { name: 'MySQL', level: 70, icon: '🗄️' },
      { name: 'Database Mgmt', level: 68, icon: '📊' },
    ],
  },
  {
    id: 'platforms',
    label: 'Platforms & Tools',
    color: '#7c3aed',
    skills: [
      { name: 'Shopify', level: 85, icon: '🛍️' },
      { name: 'WordPress', level: 80, icon: '🌐' },
      { name: 'GitHub', level: 82, icon: '🐙' },
      { name: 'VS Code', level: 92, icon: '💻' },
      { name: 'Canva', level: 78, icon: '🎭' },
      { name: 'Google Workspace', level: 85, icon: '📁' },
    ],
  },
]

function SkillBar({ name, level, icon, color, index }) {
  const ref = useRef()
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <motion.span
          className="text-xs font-mono font-semibold"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}60`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  )
}

function SkillCard({ name, level, icon, color, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef()
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-5 rounded-2xl flex flex-col items-center gap-3 cursor-default"
      style={{
        background: hovered ? `${color}0a` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? `${color}40` : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 0 25px ${color}20` : 'none',
        transform: hovered ? 'translateY(-6px) scale(1.04)' : 'translateY(0) scale(1)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300"
        style={{
          background: `${color}12`,
          transform: hovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
        }}
      >
        {icon}
      </div>
      <span className="text-sm font-semibold text-white/80 text-center">{name}</span>

      {/* Mini progress */}
      <div
        className="w-full h-0.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
        />
      </div>

      {/* Level indicator on hover */}
      <motion.span
        className="absolute top-3 right-3 text-xs font-mono"
        style={{ color }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {level}%
      </motion.span>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')
  const activeCategory = skillCategories.find((c) => c.id === activeTab)

  return (
    <section
      id="skills"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background */}
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
          <span className="section-label">
            <span className="w-8 h-px" style={{ background: '#a855f7' }} />
            My Skills
            <span className="w-8 h-px" style={{ background: '#a855f7' }} />
          </span>
          <h2 className="section-title">
            Technical{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Expertise
            </span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto">
            A curated stack of technologies I use to build modern, performant digital products.
          </p>
        </motion.div>

        {/* Tab nav */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: activeTab === cat.id ? `${cat.color}15` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${activeTab === cat.id ? `${cat.color}50` : 'rgba(255,255,255,0.08)'}`,
                color: activeTab === cat.id ? cat.color : 'rgba(255,255,255,0.5)',
                boxShadow: activeTab === cat.id ? `0 0 20px ${cat.color}20` : 'none',
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
              {activeTab === cat.id && (
                <motion.div
                  layoutId="tab-glow"
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, ${cat.color}15, transparent 70%)`,
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills display */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bars */}
          <motion.div
            key={activeTab + '-bars'}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 p-8 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <h3 className="text-base font-semibold text-white/70 mb-2 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: activeCategory.color, boxShadow: `0 0 8px ${activeCategory.color}` }}
              />
              {activeCategory.label} Skills
            </h3>
            {activeCategory.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                {...skill}
                color={activeCategory.color}
                index={i}
              />
            ))}
          </motion.div>

          {/* Right — cards grid */}
          <motion.div
            key={activeTab + '-cards'}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {activeCategory.skills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                {...skill}
                color={activeCategory.color}
                index={i}
              />
            ))}
          </motion.div>
        </div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind', 'Python', 'PHP', 'MySQL', 'Shopify', 'WordPress', 'Git', 'VS Code'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full text-xs font-mono font-medium cursor-default"
              style={{
                background: i % 2 === 0 ? 'rgba(0,212,255,0.08)' : 'rgba(168,85,247,0.08)',
                border: `1px solid ${i % 2 === 0 ? 'rgba(0,212,255,0.2)' : 'rgba(168,85,247,0.2)'}`,
                color: i % 2 === 0 ? '#00d4ff' : '#a855f7',
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
