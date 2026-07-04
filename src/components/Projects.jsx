import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportConfig } from '../utils/animations'
import { Github, ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'MCA Expose',
    description:
      'Developed a modern informational platform using React with responsive UI, smooth UX, and optimized frontend architecture. Features dynamic routing and component-based design.',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'react',
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff22, #7c3aed22)',
    github: 'https://github.com/Abuhuuraira',
    live: 'https://mca.exposed/',
    featured: true,
  },
  {
    id: 2,
    title: 'MedTech Simulation',
    description:
      'Healthcare training website with responsive frontend and backend-integrated contact functionality. Built for medical simulation and e-learning with modern UI/UX.',
    tech: ['HTML', 'CSS', 'PHP'],
    category: 'html',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f722, #00d4ff22)',
    github: 'https://github.com/Abuhuuraira',
    live: 'https://www.medtechsimulation.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'iConnecto',
    description:
      'Company portfolio website focused on SEO, responsive design, and smooth animations. Clean, professional design that converts visitors into clients.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'html',
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff20, #00aed620)',
    github: 'https://github.com/Abuhuuraira',
    live: 'https://iconnecto.net/',
    featured: false,
  },
  {
    id: 4,
    title: 'Grill Guard',
    description:
      'Restaurant management system with billing automation, order tracking, and backend logic. Features real-time order management and automated invoice generation.',
    tech: ['HTML', 'CSS', 'Python'],
    category: 'python',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #7c3aed20, #a855f720)',
    github: 'https://github.com/Abuhuuraira',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'LiftChairFactory',
    description:
      'Professional Shopify store with complete customization, performance optimization, improved UI/UX, and SEO enhancements for lift chair products.',
    tech: ['Shopify', 'Liquid', 'CSS'],
    category: 'shopify',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f722, #7c3aed22)',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'MedTechKits',
    description:
      'E-commerce Shopify store for medical equipment kits with custom theme, product organization, and optimized mobile shopping experience.',
    tech: ['Shopify', 'Liquid', 'JavaScript'],
    category: 'shopify',
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff20, #a855f720)',
    github: '#',
    live: 'https://medtechkits.com/',
    featured: false,
  },
]

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'react', label: 'React' },
  { id: 'html', label: 'HTML/CSS/JS' },
  { id: 'shopify', label: 'Shopify' },
  { id: 'python', label: 'Python' },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const { title, description, tech, color, gradient, github, live, featured } = project

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? `${color}40` : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${color}15` : 'none',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Preview image area */}
      <div
        className="relative h-48 overflow-hidden"
        style={{ background: gradient }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Center text/logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3"
              style={{ background: `${color}25`, border: `1px solid ${color}40`, color }}
            >
              <Code2 size={28} />
            </div>
            <p className="text-xs font-mono font-semibold" style={{ color: `${color}cc` }}>
              {tech.join(' · ')}
            </p>
          </div>
        </div>

        {/* Featured badge */}
        {featured && (
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-semibold"
            style={{
              background: `${color}20`,
              border: `1px solid ${color}40`,
              color,
            }}
          >
            Featured
          </div>
        )}

        {/* Hover overlay with links */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ background: 'rgba(8,8,18,0.75)', backdropFilter: 'blur(4px)' }}
        >
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
            style={{ border: `1px solid ${color}50`, color }}
            whileHover={{ scale: 1.08, background: `${color}15` }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
            transition={{ delay: 0.05 }}
          >
            <Github size={15} />
            Code
          </motion.a>
          {live && live !== '#' && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-space-950"
              style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)` }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
            >
              <ExternalLink size={15} />
              Live
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-white/60 transition-colors flex-shrink-0 mt-0.5"
          >
            <Github size={16} />
          </a>
        </div>

        <p className="text-sm text-white/45 leading-relaxed flex-1">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium"
              style={{
                background: `${color}0d`,
                border: `1px solid ${color}25`,
                color: `${color}cc`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-px w-full transition-all duration-300"
        style={{
          background: hovered
            ? `linear-gradient(90deg, transparent, ${color}, transparent)`
            : 'transparent',
          boxShadow: hovered ? `0 0 8px ${color}` : 'none',
        }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.04) 0%, transparent 60%)',
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
            My Work
            <span className="w-8 h-px" style={{ background: '#00d4ff' }} />
          </span>
          <h2 className="section-title">
            Featured{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Projects
            </span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto">
            A selection of projects that showcase my skills in frontend development,
            e-commerce, and full-stack solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: activeFilter === filter.id ? 'rgba(0,212,255,0.12)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${activeFilter === filter.id ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                color: activeFilter === filter.id ? '#00d4ff' : 'rgba(255,255,255,0.5)',
                boxShadow: activeFilter === filter.id ? '0 0 20px rgba(0,212,255,0.15)' : 'none',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/Abuhuuraira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm"
              style={{
                border: '1px solid rgba(0,212,255,0.3)',
                color: '#00d4ff',
              }}
              whileHover={{ scale: 1.04, background: 'rgba(0,212,255,0.08)', boxShadow: '0 0 25px rgba(0,212,255,0.2)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={16} />
              View All on GitHub
              <ExternalLink size={14} />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
