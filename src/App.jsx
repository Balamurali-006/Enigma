import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Layout/Logic Components
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import ScrollToTopOnNav from './components/ScrollToTopOnNav'

// Main Page Sections
import Hero from './components/Hero'
import About from './components/About'
import Dignitaries from './components/Dignitaries'
import Streaming from './components/Streaming'
import { PrizePool } from './components/PrizePool'
import Awards from './components/Awards'
import { Sponsors } from './components/Sponsors'
import Team from './components/Team'
import Contact from './components/Contact'

// Separate Page
import RulesPage from './pages/RulesPage'

export default function App() {
  // Floating particles logic
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * window.innerWidth + 'px'
      particle.style.bottom = '-10px'
      particle.style.animationDelay = Math.random() * 2 + 's'
      
      // Basic styling for the particles
      particle.style.position = 'fixed'
      particle.style.width = '4px'
      particle.style.height = '4px'
      particle.style.background = 'rgba(212, 175, 55, 0.4)'
      particle.style.borderRadius = '50%'
      particle.style.pointerEvents = 'none'
      particle.style.zIndex = '1'
      particle.style.animation = 'floatUp 4s linear infinite'
      
      document.body.appendChild(particle)
      setTimeout(() => particle.remove(), 4000)
    }

    const interval = setInterval(createParticle, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Global CSS for floating particles */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
      `}</style>

      {/* Logic Components */}
      <ScrollToTopOnNav />
      <LoadingScreen />
      <ScrollProgress />
      
      <Navbar />

      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Dignitaries />
            <Streaming />
            <PrizePool />
            <Awards />
            <Sponsors />
            <Team />
            <Contact />
          </main>
        } />

        {/* Rules & Regulations Page */}
        <Route path="/rules" element={<RulesPage />} />
      </Routes>

      <Footer />
      
      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </>
  )
}