import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (id) => {
    closeMenu()
    if (isHome) {
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    }
  }

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about-enigma' },
    { label: 'Dignitaries', id: 'dignitaries' },
    { label: 'Team Lumora', id: 'about-us' },
    { label: 'Prizes', id: 'prizes' },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'Contact Us', id: 'contact' },
    { label: 'Rules', to: '/rules' },
  ]

  return (
    <>
      <style>{`
        .enigma-navbar {
          position: fixed; top: 0; left: 0; width: 100%;
          display: flex; justify-content: space-between; align-items: center;
          padding: 0 4%; height: 80px;
          background: rgba(10, 0, 20, 0.96); backdrop-filter: blur(12px);
          z-index: 1000; border-bottom: 1px solid rgba(212,175,55,0.2);
          box-sizing: border-box;
        }

        /* Logo Section */
        .nav-left { display: flex; gap: 12px; align-items: center; z-index: 1002; }
        .nav-left img { height: 45px; width: auto; object-fit: contain; }

        /* Desktop Menu */
        .nav-center {
          display: flex; list-style: none; gap: 20px; margin: 0; padding: 0; align-items: center;
        }
        .nav-item { position: relative; }
        .nav-item a, .nav-item button {
          color: #d4af37; background: none; border: none; cursor: pointer;
          font-size: 14px; font-weight: 500; font-family: 'Poppins', sans-serif;
          text-decoration: none; transition: all 0.3s; padding: 5px 0;
          text-transform: uppercase; letter-spacing: 1px;
        }
        .nav-item a:hover, .nav-item button:hover { color: #fff; }
        
        /* Animated underline for desktop */
        .nav-item::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0;
          height: 1px; background: #d4af37; transition: width 0.3s;
        }
        .nav-item:hover::after { width: 100%; }

        /* Register Button */
        .nav-right { z-index: 1002; }
        .register-btn {
          padding: 10px 22px;
          background: linear-gradient(135deg, #000000 0%, #f2d06b 100%);
          color: #d4af37 !important; text-decoration: none; border-radius: 4px;
          font-weight: 700; font-size: 13px; transition: all 0.3s;
          letter-spacing: 1px; box-shadow: 0 4px 15px rgba(212,175,55,0.2);
        }
        .register-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(212,175,55,0.4); }

        /* Mobile Hamburger */
        .mobile-menu-toggle {
          display: none; flex-direction: column; cursor: pointer;
          padding: 5px; z-index: 1002; background: none; border: none;
        }
        .hamburger-line {
          width: 28px; height: 2px; border-radius: 2px;
          background-color: #d4af37; margin: 3px 0;
          transition: 0.4s; display: block;
        }
        .mobile-open .hamburger-line:nth-child(1) { transform: rotate(-45deg) translate(-6px, 6px); background: #fff; }
        .mobile-open .hamburger-line:nth-child(2) { opacity: 0; }
        .mobile-open .hamburger-line:nth-child(3) { transform: rotate(45deg) translate(-6px, -5px); background: #fff; }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: #0a0014; flex-direction: column; justify-content: center;
          align-items: center; z-index: 1001; opacity: 0; pointer-events: none;
          transition: opacity 0.4s ease; list-style: none; margin: 0; padding: 0;
        }
        .mobile-menu-overlay.open { opacity: 1; pointer-events: all; }
        .mobile-menu-overlay li { margin: 15px 0; width: 100%; text-align: center; }
        .mobile-menu-overlay a, .mobile-menu-overlay button {
          font-size: 24px; font-weight: 600; color: #d4af37; background: none;
          border: none; font-family: 'Bebas Neue', sans-serif; text-decoration: none;
          letter-spacing: 3px; text-transform: uppercase;
        }

        /* Responsiveness */
        @media (max-width: 1200px) {
          .nav-center { gap: 12px; }
          .nav-item a, .nav-item button { font-size: 12px; }
        }

        @media (max-width: 1024px) {
          .nav-center, .nav-right { display: none !important; }
          .mobile-menu-toggle { display: flex !important; }
          .mobile-menu-overlay { display: flex !important; }
        }

        @media (max-width: 480px) {
          .nav-left img { height: 35px !important; }
        }
      `}</style>

      <nav className="enigma-navbar">
        <div className="nav-left">
          <img src="/images/cit.png" alt="CIT Logo" onError={e => e.target.style.display = 'none'} />
          <img src="/images/FC_logo.png" alt="Film Club Logo" onError={e => e.target.style.display = 'none'} />
        </div>

        <ul className="nav-center">
          {navLinks.map(({ label, id, to }) => (
            <li key={label} className="nav-item">
              {to ? (
                <Link to={to}>{label}</Link>
              ) : (
                <button onClick={() => scrollTo(id)}>{label}</button>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link to="/rules" className="register-btn">REGISTER NOW</Link>
        </div>

        <button
          className={`mobile-menu-toggle ${menuOpen ? 'mobile-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <ul className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ label, id, to }, i) => (
          <li key={label} style={{ 
            opacity: menuOpen ? 1 : 0, 
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', 
            transition: `all 0.4s ease ${0.1 + i * 0.05}s` 
          }}>
            {to ? (
              <Link to={to} onClick={closeMenu}>{label}</Link>
            ) : (
              <button onClick={() => scrollTo(id)}>{label}</button>
            )}
          </li>
        ))}
        <li style={{ marginTop: '30px' }}>
           <Link to="/rules" onClick={closeMenu} className="register-btn" style={{fontSize: '20px', padding: '15px 40px'}}>REGISTER NOW</Link>
        </li>
      </ul>
    </>
  )
}