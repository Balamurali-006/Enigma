import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollProgress from '../components/ScrollProgress'
import Footer from '../components/Footer'

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
        <div style={{ background: 'rgba(212,175,55,0.1)', borderLeft: '4px solid #d4af37', padding: 20, margin: '20px 0', borderRadius: 8 }}>
          <strong style={{ color: '#f1d77a', display: 'block', marginBottom: 10 }}>Promotional Materials Required:</strong>
          You must submit one of the following along with your film:
          <ul style={{ marginTop: 10 }}>
            <li>Movie Poster</li>
            <li>Teaser (30-60 seconds)</li>
            <li>Trailer (1-2 minutes)</li>
          </ul>
          <em style={{ color: '#b89fc5', fontSize: '0.95rem' }}>Note: Submitted materials may be used for event promotion</em>
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
        <div style={{ background: 'linear-gradient(135deg, rgba(220,20,20,0.15), rgba(125,76,255,0.1))', border: '2px solid rgba(220,20,20,0.3)', borderRadius: 15, padding: 25, margin: '30px 0' }}>
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#d4af37', fontSize: '1.5rem', letterSpacing: 2, marginBottom: 15 }}>Content Restrictions</h3>
          <ul style={{ color: '#e0d0e8', lineHeight: 1.8 }}>
            <li>No religious, political, pornographic, or explicit content</li>
            <li>Nudity and offensive material are <strong>strictly prohibited</strong></li>
            <li>Sensitive content must be appropriately censored</li>
            <li>Depiction of smoking, alcohol, drugs, violence, or self-harm must be handled responsibly and not glorified</li>
            <li>Films with blood or extreme violence must be presented in <strong>black and white</strong></li>
          </ul>
        </div>
        <p className="font-semibold mb-2" style={{ color: '#f5e9ff' }}>Child Actors:</p>
        <ul>
          <li>Proper parental or guardian consent is mandatory</li>
          <li>The organizing committee will not be responsible for legal issues arising from non-compliance</li>
        </ul>
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
          <li>File must be playable and free from technical defects</li>
        </ul>
        <p className="font-semibold mt-5 mb-2" style={{ color: '#f5e9ff' }}>Quality Standards:</p>
        <ul>
          <li>No audio lag, distorted sound, or black screens</li>
          <li>No corrupted files or poor resolution</li>
          <li>The committee is not responsible for technical issues from improper submissions</li>
        </ul>
        <p className="font-semibold mt-5 mb-2" style={{ color: '#f5e9ff' }}>Language & Subtitles:</p>
        <ul>
          <li>Tamil films do not require subtitles</li>
          <li>Films in other languages must include <strong>English subtitles</strong></li>
          <li>Subtitles must be clear, readable, and properly synchronized</li>
        </ul>
        <div style={{ background: 'rgba(212,175,55,0.1)', borderLeft: '4px solid #d4af37', padding: 20, margin: '20px 0', borderRadius: 8 }}>
          <strong style={{ color: '#f1d77a', display: 'block', marginBottom: 10 }}>Music & Copyright:</strong>
          <ul style={{ marginTop: 10 }}>
            <li>Only copyright-free music or original compositions allowed</li>
            <li>Proper credit must be given for all music and sound resources</li>
            <li>Copyright violations will lead to disqualification</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    num: '05',
    icon: '⚠️',
    title: 'Mandatory Disclaimer',
    content: (
      <>
        <div style={{ background: 'linear-gradient(135deg, rgba(220,20,20,0.15), rgba(125,76,255,0.1))', border: '2px solid rgba(220,20,20,0.3)', borderRadius: 15, padding: 25, margin: '10px 0 30px' }}>
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#d4af37', fontSize: '1.5rem', letterSpacing: 2, marginBottom: 15 }}>All Films Must Include:</h3>
          <ul style={{ color: '#e0d0e8', lineHeight: 1.8 }}>
            <li>Statement that views expressed are solely those of the creators</li>
            <li>Clarification that the film does not reflect the views of organizing committee or institutions</li>
            <li>Declaration that the film is a work of fiction (if applicable)</li>
            <li>Any resemblance to real persons or events is purely coincidental</li>
          </ul>
        </div>
        <p className="font-semibold mb-2" style={{ color: '#f5e9ff' }}>Additional Requirements:</p>
        <ul>
          <li>If film contains smoking, alcohol, drugs, violence, blood, or self-harm: statutory disclaimer and viewer discretion warning required</li>
          <li>Disclaimer must be displayed at the beginning for minimum <strong>5 seconds</strong></li>
          <li>Text must be clearly legible and readable</li>
        </ul>
      </>
    ),
  },
  {
    num: '06',
    icon: '🏆',
    title: 'Screening, Judging & Awards',
    content: (
      <>
        <p className="font-semibold mb-2" style={{ color: '#f5e9ff' }}>Screening Process:</p>
        <ul>
          <li>The top <strong>7 films</strong> will be screened during the event</li>
          <li>Screening decisions are made by the organizing committee</li>
          <li>All decisions are final and binding</li>
        </ul>
        <p className="font-semibold mt-5 mb-2" style={{ color: '#f5e9ff' }}>Judging Criteria:</p>
        <ul>
          <li>Films will be evaluated by a professional jury panel</li>
          <li>Jury decisions are final and cannot be contested</li>
          <li>Winners will be announced during the award ceremony</li>
        </ul>
        <div style={{ background: 'rgba(212,175,55,0.1)', borderLeft: '4px solid #d4af37', padding: 20, margin: '20px 0', borderRadius: 8 }}>
          <strong style={{ color: '#f1d77a', display: 'block', marginBottom: 10 }}>Intellectual Property Rights:</strong>
          <ul style={{ marginTop: 10 }}>
            <li>Participants retain full ownership of their films</li>
            <li>Organizers may screen, promote, and use excerpts for non-commercial purposes</li>
            <li>Promotional use helps showcase the talent and work of participants</li>
          </ul>
        </div>
        <p className="font-semibold mt-5 mb-2" style={{ color: '#f5e9ff' }}>Disqualification:</p>
        <ul>
          <li>The committee reserves the right to disqualify films violating rules</li>
          <li>Incomplete or misleading information may lead to disqualification</li>
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
        if (el && window.scrollY >= el.offsetTop - 200) current = i
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
      
      {/* Quick Nav */}
      <div
        className="fixed right-8 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
        style={{ display: showQuickNav ? 'block' : 'none' }}
      >
        {navLabels.map((label, i) => (
          <div
            key={i}
            onClick={() => scrollToSection(i)}
            className="group relative cursor-pointer my-4"
            style={{
              width: 12,
              height: 12,
              background: i === activeSection ? '#d4af37' : 'rgba(212,175,55,0.3)',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              transform: i === activeSection ? 'scale(1.5)' : 'scale(1)',
            }}
          >
            <span
              className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 text-sm whitespace-nowrap px-3 py-1 rounded"
              style={{ background: 'rgba(10,0,20,0.9)', color: '#d4af37', border: '1px solid rgba(212,175,55,0.3)' }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full flex justify-between items-center px-[5%] py-4 z-[1000]"
        style={{ background: 'rgba(10,0,20,0.98)', backdropFilter: 'blur(10px)', boxShadow: '0 2px 20px rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(212,175,55,0.3)' }}
      >
        <div className="flex gap-4 items-center">
          <img src="/images/cit.png" alt="CIT" className="h-12 object-contain" onError={e => e.target.style.display='none'} />
          <img src="/images/FC_logo.png" alt="Film Club" className="h-12 object-contain" onError={e => e.target.style.display='none'} />
        </div>
        <div className="flex gap-8 items-center">
          <Link to="/" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.95rem', letterSpacing: 2, fontWeight: 500 }}>Home</Link>
          <a href="#register-section" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '0.95rem', letterSpacing: 2, fontWeight: 500 }}>Register</a>
        </div>
        <a
          href="#register-section"
          className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5"
          style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f2d06b 100%)', color: '#0a0014', boxShadow: '0 4px 15px rgba(212,175,55,0.3)', textDecoration: 'none' }}
        >
          Register Now →
        </a>
      </nav>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a0b2e 0%, #0f0520 100%)',
          padding: '140px 20px 80px',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(125,76,255,0.15), transparent 40%)',
          animation: 'bgPulse 8s ease-in-out infinite',
        }} />
        <style>{`@keyframes bgPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }`}</style>
        <div className="max-w-3xl mx-auto text-center relative z-10 mb-16">
          <h1
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '3.5rem',
              color: '#d4af37',
              letterSpacing: 6,
              marginBottom: 20,
              textShadow: '0 0 30px rgba(212,175,55,0.6)',
            }}
          >
            RULES & REGULATIONS
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#e0d0e8', lineHeight: 1.8 }}>
            Welcome to ENIGMA Take-III! Please read through these guidelines carefully to ensure
            your submission meets all requirements. We're excited to see your creative vision come to life!
          </p>
        </div>
      </section>

      {/* Rules Content */}
      <div
        className="max-w-5xl mx-auto px-5"
        style={{ paddingBottom: 80, background: 'linear-gradient(180deg, #0f0520, #1a0b2e)' }}
      >
        <style>{`
          @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
          @keyframes shineSlide { 0% { left: -100%; } 100% { left: 100%; } }
          .rule-card-inner { padding: 36px; }
          .rule-content-body { padding-left: 80px; }
          .rule-icon-circle { width: 60px; height: 60px; font-size: 1.8rem; }
          .rule-title { font-size: 1.8rem; }
          .rules-nav-dots { display: flex; }
          @media (max-width: 768px) {
            .rule-card-inner { padding: 20px 15px !important; }
            .rule-content-body { padding-left: 0 !important; }
            .rule-icon-circle { width: 48px !important; height: 48px !important; font-size: 1.5rem !important; }
            .rule-title { font-size: 1.3rem !important; }
            .rules-nav-dots { display: none !important; }
          }
          @media (max-width: 480px) {
            .rule-title { font-size: 1.2rem !important; }
          }
        `}</style>

        {rules.map((rule, i) => (
          <div
            key={i}
            ref={el => sectionsRef.current[i] = el}
            data-category={i}
            className="mb-12"
            style={{ opacity: 0, transform: 'translateY(30px)', animation: 'fadeInUp 0.6s ease forwards', animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <div
              className="relative rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden rule-card-inner"
              style={{
                background: 'linear-gradient(135deg, rgba(125,76,255,0.12), rgba(212,175,55,0.08))',
                border: '2px solid rgba(125,76,255,0.3)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = '#d4af37'
                el.style.transform = 'translateX(10px)'
                el.style.boxShadow = '0 15px 50px rgba(125,76,255,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(125,76,255,0.3)'
                el.style.transform = ''
                el.style.boxShadow = 'none'
              }}
            >
              {/* Shine on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-y-0 w-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent)',
                    left: '-100%',
                    transition: 'left 0.6s ease',
                  }}
                />
              </div>

              {/* Rule number watermark */}
              <span
                className="absolute top-4 right-6 leading-none"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.5rem', color: 'rgba(212,175,55,0.3)' }}
              >
                {rule.num}
              </span>

              {/* Header */}
              <div className="flex items-center gap-5 mb-5">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 rule-icon-circle"
                  style={{
                    background: 'linear-gradient(135deg, #d4af37, #f1d77a)',
                    boxShadow: '0 5px 20px rgba(212,175,55,0.4)',
                  }}
                >
                  {rule.icon}
                </div>
                <h2
                  className="rule-title"
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    color: '#d4af37',
                    letterSpacing: 3,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {rule.title}
                </h2>
              </div>

              {/* Content */}
              <div
                className="rule-content-body"
                style={{
                  color: '#e0d0e8',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                }}
              >
                <style>{`
                  .rule-content ul { margin-top: 15px; padding-left: 20px; }
                  .rule-content li { margin-bottom: 8px; position: relative; padding-left: 10px; list-style: none; }
                  .rule-content li::before { content: '▸'; position: absolute; left: -15px; color: #d4af37; }
                `}</style>
                <div className="rule-content">{rule.content}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Important Notes */}
        <div
          ref={el => sectionsRef.current[6] = el}
          className="mb-12"
        >
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(220,20,20,0.15), rgba(125,76,255,0.1))',
              border: '2px solid rgba(220,20,20,0.3)',
              borderRadius: 15,
              padding: 25,
            }}
          >
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#d4af37', fontSize: '1.5rem', letterSpacing: 2, marginBottom: 15, paddingLeft: 50 }}>Important Notes</h3>
            <div className="rule-content">
              <ul style={{ color: '#e0d0e8', lineHeight: 1.9 }}>
                <li>The committee reserves the right to modify or update rules at any time</li>
                <li>Any changes will be communicated through official channels</li>
                <li>Submission of a film confirms acceptance of all rules and regulations</li>
                <li>For queries, contact: <a href="mailto:citfilmclub@gmail.com" style={{ color: '#d4af37' }}>citfilmclub@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Register Section */}
      <section
        id="register-section"
        className="text-center relative overflow-hidden"
        style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #1a0b2e, #0f0520)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.2), transparent 70%)', animation: 'registerPulse 3s ease-in-out infinite' }}
        />
        <style>{`@keyframes registerPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }`}</style>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', color: '#d4af37', letterSpacing: 5, marginBottom: 20, textShadow: '0 0 30px rgba(212,175,55,0.6)' }}>
            Ready to Submit?
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#e0d0e8', marginBottom: 40, lineHeight: 1.8 }}>
            We can't wait to see your creative vision! Make sure you've read all the rules
            and have your film ready for submission. Let your story shine on the silver screen.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSffypKHcbHbS6v_FxaK2EBy7DSNkFqNKUZWKnbL5avTNBp3tg/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
            className="inline-block transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #d4af37, #f1d77a)',
              color: '#0a0014',
              padding: '20px 60px',
              borderRadius: 50,
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.5rem',
              letterSpacing: 3,
              textDecoration: 'none',
              boxShadow: '0 15px 40px rgba(212,175,55,0.4)',
            }}
          >
            REGISTER NOW →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
