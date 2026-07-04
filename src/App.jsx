import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-space-950 text-white overflow-x-hidden min-h-screen">
      <CustomCursor />
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Experience />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
