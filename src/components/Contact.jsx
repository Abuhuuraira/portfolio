import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp, viewportConfig } from '../utils/animations'
import {
  Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Phone
} from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Abuhuuraira',
    href: 'https://github.com/Abuhuuraira',
    color: '#00d4ff',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abuhuraira',
    href: 'https://linkedin.com/',
    color: '#a855f7',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'abu@medtechkits.com',
    href: 'mailto:abu@medtechkits.com',
    color: '#00d4ff',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lahore, Pakistan',
    href: '#',
    color: '#a855f7',
  },
]

function FloatingLabel({ label, focused, hasValue }) {
  return (
    <motion.label
      animate={{
        y: focused || hasValue ? -24 : 0,
        scale: focused || hasValue ? 0.8 : 1,
        color: focused ? '#00d4ff' : 'rgba(255,255,255,0.3)',
      }}
      transition={{ duration: 0.2 }}
      className="absolute left-4 top-4 text-sm origin-left pointer-events-none font-medium"
    >
      {label}
    </motion.label>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [focused, setFocused] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFocus = (field) => setFocused((prev) => ({ ...prev, [field]: true }))
  const handleBlur = (field) => setFocused((prev) => ({ ...prev, [field]: false }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1800))
    setStatus('success')
    setTimeout(() => {
      setStatus('idle')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 3500)
  }

  const inputBase = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#fff',
    width: '100%',
    padding: '16px',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  }

  const focusedStyle = {
    borderColor: 'rgba(0,212,255,0.6)',
    boxShadow: '0 0 15px rgba(0,212,255,0.1)',
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
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
            Get In Touch
            <span className="w-8 h-px" style={{ background: '#00d4ff' }} />
          </span>
          <h2 className="section-title">
            Let's{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Connect
            </span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto">
            Have a project in mind, or just want to say hello? I'm always open to discussing
            new opportunities, freelance work, or collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to build something{' '}
                <span style={{ color: '#00d4ff' }}>amazing</span>?
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                I'm currently available for freelance work and open to full-time opportunities.
                Let's discuss your project and bring your vision to life.
              </p>
            </div>

            {/* Contact info list */}
            <div className="flex flex-col gap-4">
              {socialLinks.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  whileHover={{
                    background: `${color}06`,
                    borderColor: `${color}30`,
                    x: 4,
                    boxShadow: `0 0 20px ${color}10`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: `${color}12`, border: `1px solid ${color}25`, color }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/35 font-medium mb-0.5">{label}</p>
                    <p className="text-sm text-white/70 font-medium">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability status */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'rgba(0,212,255,0.06)',
                border: '1px solid rgba(0,212,255,0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ background: '#00d4ff', boxShadow: '0 0 8px #00d4ff' }}
                />
                <span className="text-sm font-semibold" style={{ color: '#00d4ff' }}>
                  Currently Available
                </span>
              </div>
              <p className="text-sm text-white/45">
                Open to freelance projects and full-time roles. Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl flex flex-col gap-5"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-8 right-8 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)' }}
              />

              {/* Name */}
              <div className="relative">
                <FloatingLabel label="Your Name" focused={focused.name} hasValue={!!form.name} />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  required
                  style={{
                    ...inputBase,
                    ...(focused.name ? focusedStyle : {}),
                  }}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FloatingLabel label="Email Address" focused={focused.email} hasValue={!!form.email} />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  required
                  style={{
                    ...inputBase,
                    ...(focused.email ? focusedStyle : {}),
                  }}
                />
              </div>

              {/* Subject */}
              <div className="relative">
                <FloatingLabel label="Subject" focused={focused.subject} hasValue={!!form.subject} />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={() => handleBlur('subject')}
                  required
                  style={{
                    ...inputBase,
                    ...(focused.subject ? focusedStyle : {}),
                  }}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FloatingLabel label="Your Message" focused={focused.message} hasValue={!!form.message} />
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  required
                  style={{
                    ...inputBase,
                    ...(focused.message ? focusedStyle : {}),
                    resize: 'vertical',
                    minHeight: '130px',
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="relative flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-sm overflow-hidden"
                style={{
                  background: status === 'success'
                    ? 'rgba(0,200,100,0.15)'
                    : 'linear-gradient(135deg, #00d4ff, #a855f7)',
                  border: status === 'success' ? '1px solid rgba(0,200,100,0.4)' : 'none',
                  color: status === 'success' ? '#00c864' : '#080812',
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                  boxShadow: status !== 'success' ? '0 0 30px rgba(0,212,255,0.25)' : 'none',
                }}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1, boxShadow: status === 'idle' ? '0 0 40px rgba(0,212,255,0.4)' : undefined }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' && (
                  <motion.span
                    className="w-5 h-5 rounded-full border-2 border-current border-t-transparent"
                    style={{ color: '#080812' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                  />
                )}
                {status === 'success' && <CheckCircle2 size={18} />}
                {status === 'idle' && <Send size={16} />}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Message Sent!'}
                {status === 'idle' && 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
