import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Streaming from './components/Streaming'
import Awards from './components/Awards'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Dignitaries from './components/Dignitaries'
import { useEffect } from 'react'

export default function App() {
  // Floating particles
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * window.innerWidth + 'px'
      particle.style.bottom = '0px'
      particle.style.animationDelay = Math.random() * 2 + 's'
      document.body.appendChild(particle)
      setTimeout(() => particle.remove(), 3000)
    }
    const interval = setInterval(createParticle, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Dignitaries/>
        <Streaming />
        <Awards />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
