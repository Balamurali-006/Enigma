import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollProgress from '../components/ScrollProgress'
import Footer from '../components/Footer'

// ... (rules array stays exactly the same as your original)
const rules = [
  {
    num: '01',
    icon: '🎬',
    title: 'Eligibility & Duration',
    content: (
      <>
        <p className="font-semibold mb-2" style={{ color: '#f5e9ff' }}>Who Can Participate:</p>
        <ul>
          <li>The competition is open to all participants across Tamil Nadu</li>
          <li>Only short films produced on or after <strong>January 2025</strong> are eligible</li>
          <li>No restrictions on team size or number of participants</li>
        </ul>
        <p className="font-semibold mt-5 mb-2" style={{ color: '#f5e9ff' }}>Film Duration:</p>
        <ul>
          <li>Film length must be between <strong>3 and 20 minutes</strong></li>
          <li>Duration excludes opening and closing credits</li>
          <li>Films exceeding or falling short will be disqualified</li>
        </ul>
      </>
    ),
  },
  {
    num: '02',
    icon: '📤',
    title: 'Submission Guidelines',
    content: (
      <>
        <p className="font-semibold mb-2" style={{ color: '#f5e9ff' }}>How to Submit:</p>
        <ul>
          <li>Films must be submitted only through the official submission link</li>
          <li>File naming format: <code style={{ background: 'rgba(212,175,55,0.1)', padding: '2px 8px', borderRadius: 4, color: '#f1d77a' }}>DirectorName_FilmTitle_FileFormat</code></li>
          <li>Late submissions will <strong>not be accepted</strong> under any circumstances</li>
        </ul>
        <div style={{ background: 'rgba(212,175,55,0.1)', borderLeft: '4px solid #d4af37', padding: '15px', margin: '20px 0', borderRadius: 8 }}>
          <strong style={{ color: '#f1d77a', display: 'block', marginBottom: 10 }}>Promotional Materials Required:</strong>
          You must submit one of the following along with your film:
          <ul style={{ marginTop: 10 }}>
            <li>Movie Poster</li>
            <li>Teaser (30-60 seconds)</li>
            <li>Trailer (1-2 minutes)</li>
          </ul>
          <em style={{ color: '#b89fc5', fontSize: '0.85rem' }}>Note: Submitted materials may be used for event promotion</em>
        </div>
      </>
    ),
  },
  {
    num: '03',
    icon: '✨',
    title: 'Content & Originality',
    content: (
      <>
        <p className="font-semibold mb-2" style={{ color: '#f5e9ff' }}>Originality Requirements:</p>
        <ul>
          <li>All films must be <strong>original works</strong> of the participants</li>
          <li>Plagiarism, remakes, or unauthorized copyrighted content will lead to immediate disqualification</li>
        </ul>
        <div style={{ background: 'linear-gradient(135deg, rgba(220,20,20,0.15), rgba(125,76,255,0.1))', border: '2px solid rgba(220,20,20,0.3)', borderRadius: 15, padding: '20px', margin: '20px 0' }}>
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#d4af37', fontSize: '1.3rem', letterSpacing: 2, marginBottom: 15 }}>Content Restrictions</h3>
          <ul style={{ color: '#e0d0e8', lineHeight: 1.6, fontSize: '0.9rem' }}>
            <li>No religious, political, pornographic, or explicit content</li>
            <li>Nudity and offensive material are <strong>strictly prohibited</strong></li>
            <li>Sensitive content must be appropriately censored</li>
            <li>Depiction of smoking, alcohol, drugs, violence, or self-harm must be handled responsibly</li>
            <li>Films with blood or extreme violence must be presented in <strong>black and white</strong></li>
          </ul>
        </div>
      </>
    ),
  },
  {
    num: '04',
    icon: '🎥',
    title: 'Technical Specifications',
    content: (
      <>
        <p className="font-semibold mb-2" style={{ color: '#f5e9ff' }}>Video Format & Resolution:</p>
        <ul>
          <li>Accepted formats: MP4, MOV, AVI, or any standard video format</li>
          <li>Resolution must be between <strong>720p and 4K</strong></li>
        </ul>
        <p className="font-semibold mt-4 mb-2" style={{ color: '#f5e9ff' }}>Language & Subtitles:</p>
        <ul>
          <li>Tamil films do not require subtitles</li>
          <li>Films in other languages must include <strong>English subtitles</strong></li>
        </ul>
      </>
    ),
  },
  {
    num: '05',
    icon: '⚠️',
    title: 'Mandatory Disclaimer',
    content: (
      <>
        <div style={{ background: 'rgba(220,20,20,0.1)', border: '1px solid rgba(220,20,20,0.3)', borderRadius: 12, padding: '15px', margin: '10px 0' }}>
          <ul style={{ color: '#e0d0e8', fontSize: '0.9rem' }}>
            <li>Statement that views expressed are solely those of the creators</li>
            <li>Declaration that the film is a work of fiction</li>
            <li>Disclaimer must be displayed for minimum <strong>5 seconds</strong> at the start</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    num: '06',
    icon: '🏆',
    title: 'Judging & Awards',
    content: (
      <>
        <ul>
          <li>The top <strong>7 films</strong> will be screened during the event</li>
          <li>Jury decisions are final and cannot be contested</li>
          <li>Participants retain full ownership of their films</li>
        </ul>
      </>
    ),
  },
]

export default function RulesPage() {
  const [showQuickNav, setShowQuickNav] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef([])

  useEffect(() => {
    const onScroll = () => {
      setShowQuickNav(window.scrollY > 300)
      let current = 0
      sectionsRef.current.forEach((el, i) => {
        if (el && window.scrollY >= el.offsetTop - 300) current = i
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (i) => {
    sectionsRef.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const navLabels = ['Eligibility', 'Submission', 'Content', 'Technical', 'Disclaimer', 'Judging', 'Register']

  return (
    <>
      <ScrollProgress />
      
      <style>{`
        /* Global Mobile Fixes */
        html, body { overflow-x: hidden; width: 100%; }

        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
        
        .rule-card-inner { 
            padding: 30px; 
            transition: all 0.3s ease;
        }
        
        .rule-content-body { padding-left: 80px; }
        
        .rule-content ul { margin-top: 15px; padding-left: 20px; }
        .rule-content li { margin-bottom: 8px; position: relative; padding-left: 10px; list-style: none; font-size: 0.95rem;}
        .rule-content li::before { content: '▸'; position: absolute; left: -15px; color: #d4af37; }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
            .rule-content-body { padding-left: 0; margin-top: 20px; }
            .rule-card-inner { padding: 25px 20px; }
        }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hero-title { font-size: 2.5rem !important; }
          .hero-subtitle { font-size: 1rem !important; }
          .rule-title { font-size: 1.4rem !important; }
          .rule-icon-circle { width: 50px !important; height: 50px !important; font-size: 1.5rem !important; }
          .register-btn-main { width: 100%; padding: 15px 30px !important; font-size: 1.2rem !important; }
          .watermark-num { font-size: 2rem !important; right: 15px !important; top: 15px !important; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2rem !important; letter-spacing: 3px !important; }
          .nav-logo { h-8 !important; }
          .section-padding { padding: 80px 15px 40px !important; }
        }
      `}</style>

      {/* Quick Nav (Desktop Only) */}
      <div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
        style={{ display: showQuickNav ? 'block' : 'none' }}
      >
        {navLabels.map((label, i) => (
          <div
            key={i}
            onClick={() => scrollToSection(i)}
            className="group relative cursor-pointer my-4"
            style={{
              width: 10,
              height: 10,
              background: i === activeSection ? '#d4af37' : 'rgba(212,175,55,0.3)',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              transform: i === activeSection ? 'scale(1.4)' : 'scale(1)',
            }}
          >
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 text-xs whitespace-nowrap px-2 py-1 rounded bg-[#0a0014] text-[#d4af37] border border-[#d4af37]/30">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-[5%] py-3 z-[1000]"
        style={{ background: 'rgba(10,0,20,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(212,175,55,0.2)' }}
      >
        <div className="flex gap-2 md:gap-4 items-center">
          <img src="/images/cit.png" alt="CIT" className="h-8 md:h-10 object-contain" />
          <img src="/images/FC_logo.png" alt="Film Club" className="h-8 md:h-10 object-contain" />
        </div>
        
        <div className="flex gap-4 md:gap-8 items-center">
          <Link to="/" className="hidden sm:block" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: 1.5, fontWeight: 500 }}>HOME</Link>
          <a
            href="#register-section"
            className="px-4 py-2 rounded-full font-bold text-[0.7rem] md:text-xs tracking-wider transition-all"
            style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f2d06b 100%)', color: '#0a0014', textDecoration: 'none' }}
          >
            REGISTER
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="section-padding relative text-center"
        style={{
          background: 'linear-gradient(135deg, #1a0b2e 0%, #0f0520 100%)',
          padding: '120px 20px 60px',
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle at center, rgba(125,76,255,0.1), transparent 70%)' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="hero-title" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: '#d4af37', letterSpacing: 4, marginBottom: 15 }}>
            RULES & REGULATIONS
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1rem', color: '#e0d0e8', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Ensure your masterpiece meets the ENIGMA Take-III standards.
          </p>
        </div>
      </section>

      {/* Rules Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        {rules.map((rule, i) => (
          <div
            key={i}
            ref={el => sectionsRef.current[i] = el}
            className="mb-8 md:mb-12"
            style={{ opacity: 0, transform: 'translateY(20px)', animation: 'fadeInUp 0.5s ease forwards', animationDelay: `${0.1 + i * 0.05}s` }}
          >
            <div
              className="rule-card-inner relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(125,76,255,0.2)',
              }}
            >
              <span className="watermark-num absolute top-4 right-6 opacity-20" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', color: '#d4af37' }}>
                {rule.num}
              </span>

              <div className="flex items-center gap-4 mb-4">
                <div className="rule-icon-circle flex items-center justify-center rounded-full bg-[#d4af37] text-[#0a0014] w-[50px] h-[50px] text-xl">
                  {rule.icon}
                </div>
                <h2 className="rule-title" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#d4af37', letterSpacing: 2, margin: 0 }}>
                  {rule.title}
                </h2>
              </div>

              <div className="rule-content-body" style={{ color: '#e0d0e8' }}>
                <div className="rule-content">{rule.content}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Notes */}
        <div ref={el => sectionsRef.current[6] = el} className="p-6 rounded-2xl border border-red-900/30 bg-red-950/10">
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#d4af37', fontSize: '1.4rem', marginBottom: 10 }}>Important Notes</h3>
          <ul className="rule-content text-sm text-[#e0d0e8] space-y-2 opacity-80">
            <li>The committee reserves the right to update rules.</li>
            <li>Submission confirms acceptance of all terms.</li>
            <li>Contact: <a href="mailto:citfilmclub@gmail.com" className="text-[#d4af37]">thecitfilmclub@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Register CTA */}
      <section id="register-section" className="py-20 px-4 text-center bg-[#0a0014] border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.5rem', color: '#d4af37', marginBottom: 15 }}>READY TO RISE?</h2>
          <p className="mb-10 text-[#e0d0e8] opacity-70">Submit your entry and witness your story on the silver screen.</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSffypKHcbHbS6v_FxaK2EBy7DSNkFqNKUZWKnbL5avTNBp3tg/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
            className="register-btn-main inline-block px-12 py-4 rounded-full font-bold transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #d4af37, #f1d77a)', color: '#0a0014', textDecoration: 'none', boxShadow: '0 10px 30px rgba(212,175,55,0.3)' }}
          >
            REGISTER NOW
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}