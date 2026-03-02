import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    const loadVanta = () => {
      if (window.VANTA && vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,

          minHeight: 200,
          minWidth: 200,

          scale: 1,
          scaleMobile: 1.1,

          backgroundColor: 0x0a0014,
          color: 0xd4af37,

          points: 14,
          maxDistance: 24,
          spacing: 16,
        })
      }
    }

    if (window.THREE && window.VANTA) {
      loadVanta()
    } else {
      const ts = document.createElement('script')
      ts.src =
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
      ts.onload = () => {
        const vs = document.createElement('script')
        vs.src =
          'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js'
        vs.onload = loadVanta
        document.body.appendChild(vs)
      }
      document.body.appendChild(ts)
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  const scrollToAbout = () => {
    const el = document.getElementById('about-enigma')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        #vanta-bg {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0,0,0,0.3), rgba(0,0,0,0.8));
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          padding: 20px;
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glowText {
          from { filter: drop-shadow(0 0 20px rgba(212,175,55,0.4)); }
          to { filter: drop-shadow(0 0 40px rgba(212,175,55,0.8)); }
        }

        .hero-content h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 6rem;
          letter-spacing: 12px;
          background: linear-gradient(135deg, #d4af37, #f1d77a, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
          animation: glowText 2s ease-in-out infinite alternate;
        }

        .hero-content h3 {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 6px;
          color: #f1d77a;
          font-size: 1.8rem;
        }

        .hero-content p {
          margin-top: 12px;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #f0e6ff;
          font-weight: 400;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .btn-gold {
          padding: 15px 40px;
          background: linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.4));
          border: 2px solid #d4af37;
          color: #d4af37;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .btn-register {
          padding: 15px 40px;
          background: linear-gradient(135deg, #d4af37, #f2d06b);
          color: #0a0014;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          display: inline-block;
        }

        /* ---------------- MOBILE FIX ---------------- */

        @media (max-width: 768px) {

          .hero-overlay {
            background: rgba(0, 0, 0, 0.75); /* Stronger dark layer */
          }

          .hero-content {
            background: rgba(0, 0, 0, 0.55); /* Dark glass box */
            backdrop-filter: blur(8px);
            border-radius: 20px;
            padding: 30px 20px;
          }

          .hero-content h1 {
            font-size: 3rem !important;
            letter-spacing: 6px !important;
            text-shadow: 0 0 15px rgba(0,0,0,0.8);
          }

          .hero-content h3 {
            font-size: 1.2rem !important;
            text-shadow: 0 0 10px rgba(0,0,0,0.8);
          }

          .hero-content p {
            font-size: 1rem;
            color: #ffffff; /* pure white for clarity */
            text-shadow: 0 0 8px rgba(0,0,0,0.9);
          }

          .hero-btns {
            gap: 15px;
          }

          .btn-gold,
          .btn-register {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2.3rem !important;
          }
        }
      `}</style>

      <div id="vanta-bg" ref={vantaRef}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>ENIGMA</h1>
          <h3># TAKE-III</h3>
          <p>An Echo of Cinema</p>
          <p>
            Where stories rise, visions compete, and filmmakers step closer to the silver screen.
          </p>

          <div className="hero-btns">
            <button className="btn-gold" onClick={scrollToAbout}>
              Explore Festival
            </button>
            <Link to="/rules" className="btn-register">
              Register Now →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}