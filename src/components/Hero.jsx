import { useRef, Suspense, useMemo } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations'
import * as THREE from 'three'

// ── 3D Scene ──────────────────────────────────────────────────────────────────

function TorusKnot() {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
  })
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.35, 120, 16]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function FloatingOrb({ position, color, size = 0.4, speed = 2 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
  })
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.2} metalness={0.9} />
      </mesh>
    </Float>
  )
}

function FloatingCube({ position, color, speed = 1.5 }) {
  const meshRef = useRef()
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.6
  })
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.3} metalness={0.7} wireframe />
      </mesh>
    </Float>
  )
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={3} />
      <pointLight position={[-5, -3, -5]} color="#a855f7" intensity={2} />
      <pointLight position={[0, -5, 3]} color="#7c3aed" intensity={1} />

      <TorusKnot />
      <FloatingOrb position={[2.8, 1.5, -1.5]} color="#a855f7" size={0.35} speed={2.5} />
      <FloatingOrb position={[-2.8, -1.5, -1]} color="#00d4ff" size={0.28} speed={1.8} />
      <FloatingCube position={[-2.5, 1.8, -2]} color="#00d4ff" speed={2} />
      <FloatingCube position={[3, -1.8, -1]} color="#a855f7" speed={1.5} />
      <FloatingOrb position={[0.8, -2.5, -0.5]} color="#7c3aed" size={0.2} speed={3} />

      <Stars radius={80} depth={50} count={2500} factor={3} saturation={0} fade speed={0.4} />
    </>
  )
}

// ── Particle Field ─────────────────────────────────────────────────────────────

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#7c3aed',
            opacity: Math.random() * 0.4 + 0.1,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// ── Grid Lines ─────────────────────────────────────────────────────────────────

function GridBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
  )
}

// ── Main Hero ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById('about')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0,212,255,0.08) 0%, transparent 70%)' }}
    >
      <GridBackground />
      <ParticleField />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(168,85,247,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="section-container w-full relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* Left — Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:gap-8"
          >
            {/* Status badge */}
            <motion.div variants={fadeInUp}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium"
                style={{
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  color: '#00d4ff',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#00d4ff', boxShadow: '0 0 8px #00d4ff' }}
                />
                Available for Freelance &amp; Full-time
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden">
              <motion.p
                variants={fadeInUp}
                className="text-base font-mono text-white/50 tracking-[0.25em] uppercase mb-2"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight"
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.85) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Abu
                </span>
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.3))',
                  }}
                >
                  Huraira
                </span>
              </motion.h1>
            </div>

            {/* Typing animation */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <span className="text-white/40 font-mono text-sm">&gt;_</span>
              <div
                className="text-lg sm:text-xl font-mono font-medium"
                style={{ color: '#00d4ff' }}
              >
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    2000,
                    'React Developer',
                    2000,
                    'Shopify Developer',
                    2000,
                    'WordPress Developer',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                    'Full-Stack Learner',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-base leading-relaxed max-w-md"
            >
              BBIT student crafting modern digital experiences. Passionate about building
              beautiful, fast, and scalable web applications with React and modern tooling.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-space-950 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                  boxShadow: '0 0 30px rgba(0,212,255,0.3)',
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(0,212,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={16} />
                View Projects
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm"
                style={{
                  border: '1px solid rgba(0,212,255,0.4)',
                  color: '#00d4ff',
                }}
                whileHover={{ scale: 1.04, background: 'rgba(0,212,255,0.08)', boxShadow: '0 0 25px rgba(0,212,255,0.2)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={16} />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="text-xs font-mono text-white/20 tracking-widest">FIND ME ON</span>
              <div
                className="flex-1 h-px"
                style={{ background: 'linear-gradient(90deg, rgba(0,212,255,0.2), transparent)' }}
              />
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
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                    whileHover={{
                      scale: 1.15,
                      color: '#00d4ff',
                      borderColor: 'rgba(0,212,255,0.4)',
                      background: 'rgba(0,212,255,0.08)',
                      boxShadow: '0 0 15px rgba(0,212,255,0.2)',
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — 3D Canvas */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative h-[420px] sm:h-[500px] lg:h-[600px] w-full"
          >
            {/* Glow behind canvas */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 70%)',
              }}
            />
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full border-2 border-cyber-500 border-t-transparent animate-spin"
                    style={{ boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
                  />
                </div>
              }
            >
              <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]}
                gl={{ alpha: true, antialias: true }}
              >
                <HeroScene />
              </Canvas>
            </Suspense>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-white/25 tracking-widest uppercase">Scroll</span>
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/25 hover:text-cyber-500 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
