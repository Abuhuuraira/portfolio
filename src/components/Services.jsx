import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportConfig } from '../utils/animations'
import {
  Code2, Layers, ShoppingBag, Globe, Paintbrush,
  Search, Wrench, Store, Zap
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive frontends with modern HTML5, CSS3, and JavaScript. Mobile-first approach with smooth animations.',
    color: '#00d4ff',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    icon: Layers,
    title: 'React Development',
    description: 'Scalable, component-based React applications with hooks, context API, and optimized performance for the best user experience.',
    color: '#a855f7',
    tags: ['React', 'Hooks', 'Vite'],
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    description: 'Custom Shopify stores with theme customization, app integration, and performance optimization for maximum conversions.',
    color: '#00d4ff',
    tags: ['Shopify', 'Liquid', 'E-Commerce'],
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    description: 'Professional WordPress websites with custom themes, plugins, and SEO optimization for powerful digital presence.',
    color: '#a855f7',
    tags: ['WordPress', 'PHP', 'WooCommerce'],
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    description: 'Intuitive, beautiful interface designs that prioritize user experience, accessibility, and conversion-focused design principles.',
    color: '#00d4ff',
    tags: ['Figma', 'Canva', 'Design Systems'],
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Technical SEO implementation, performance optimization, and structured data to boost your search engine rankings.',
    color: '#a855f7',
    tags: ['SEO', 'Performance', 'Analytics'],
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Ongoing website support, security updates, performance monitoring, and content management to keep your site running smoothly.',
    color: '#00d4ff',
    tags: ['Support', 'Updates', 'Security'],
  },
  {
    icon: Store,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce experiences with product management, payment integration, and optimized checkout flows.',
    color: '#a855f7',
    tags: ['E-Commerce', 'Payments', 'CMS'],
  },
]

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const { icon: Icon, title, description, color, tags } = service

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 12, y: x * -12 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative p-7 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${color}0a, rgba(8,8,18,0.9))`
          : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? `${color}40` : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(12px)',
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: 'transform 0.2s ease, border-color 0.3s, background 0.3s, box-shadow 0.3s',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${color}20` : 'none',
      }}
    >
      {/* Glow spot */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${color}12, transparent 60%)`,
          }}
        />
      )}

      {/* Top border glow line */}
      <div
        className="absolute top-0 left-8 right-8 h-px transition-all duration-300"
        style={{
          background: hovered
            ? `linear-gradient(90deg, transparent, ${color}, transparent)`
            : 'transparent',
          boxShadow: hovered ? `0 0 10px ${color}` : 'none',
        }}
      />

      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}25`,
          color,
        }}
        animate={{ rotate: hovered ? [0, -5, 5, 0] : 0 }}
        transition={{ duration: 0.4 }}
      >
        <Icon size={24} />
      </motion.div>

      {/* Content */}
      <h3
        className="text-lg font-bold mb-3 transition-colors duration-200"
        style={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.9)' }}
      >
        {title}
      </h3>
      <p className="text-sm text-white/45 leading-relaxed mb-5">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium"
            style={{
              background: `${color}10`,
              border: `1px solid ${color}20`,
              color: `${color}cc`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <motion.div
        className="absolute bottom-6 right-6"
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        style={{ color }}
      >
        <Zap size={16} />
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
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
            What I Offer
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
              Services
            </span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto">
            From pixel-perfect frontends to fully functional e-commerce stores — I deliver
            complete digital solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl font-semibold text-sm"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
              color: '#080812',
              boxShadow: '0 0 30px rgba(0,212,255,0.25)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(0,212,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Work Together →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
