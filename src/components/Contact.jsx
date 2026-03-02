const contactItems = [
  {
    icon: '📧',
    title: 'Email',
    lines: ['thecitfilmclub@gmail.com'],
  },
  {
    icon: '📞',
    title: 'Phone',
    lines: ['+91 82209 97164', '+91 94458 49106'],
  },
  {
    icon: '📍',
    title: 'Location',
    lines: ['Coimbatore Institute of Technology', 'Coimbatore - 641014','Tamil Nadu'],
  },
]

export default function Contact() {
  return (
    <>
      <style>{`
        #contact {
          padding: 100px 20px;
          background: radial-gradient(ellipse at center, #1a0b2e 0%, #0a0014 70%);
          position: relative; overflow: hidden;
        }
        .contact-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(0deg, transparent 0px, transparent 38px, rgba(212,175,55,0.05) 39px, rgba(212,175,55,0.05) 40px),
                      repeating-linear-gradient(90deg, transparent 0px, transparent 38px, rgba(212,175,55,0.05) 39px, rgba(212,175,55,0.05) 40px);
        }
        .contact-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .contact-header { text-align: center; margin-bottom: 60px; }
        .contact-header h2 {
          font-family: 'Bebas Neue', sans-serif; font-size: 3rem;
          color: #d4af37; letter-spacing: 5px; margin-bottom: 15px;
        }
        .contact-header p { color: #b89fc5; font-size: 1.1rem; }
        .contact-content {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: start;
        }
        .contact-info { display: flex; flex-direction: column; gap: 30px; }
        .contact-item {
          display: flex; gap: 20px; align-items: flex-start;
          padding: 25px; border-radius: 12px;
          background: rgba(125,76,255,0.08); border-left: 4px solid #d4af37;
          transition: all 0.3s; cursor: default;
        }
        .contact-item:hover { background: rgba(125,76,255,0.15); transform: translateX(8px); box-shadow: 0 8px 30px rgba(212,175,55,0.2); }
        .contact-item-icon { font-size: 2rem; flex-shrink: 0; filter: drop-shadow(0 0 8px rgba(212,175,55,0.5)); }
        .contact-item-text h4 { font-family: 'Bebas Neue', sans-serif; color: #d4af37; font-size: 1.3rem; letter-spacing: 2px; margin: 0 0 8px; }
        .contact-item-text p { color: #b89fc5; font-size: 0.9rem; line-height: 1.8; margin: 0; }
        .contact-social { padding: 30px; border-radius: 16px; background: rgba(125,76,255,0.08); border: 1px solid rgba(212,175,55,0.2); }
        .contact-social h4 { font-family: 'Bebas Neue', sans-serif; color: #d4af37; font-size: 1.5rem; letter-spacing: 3px; margin: 0 0 20px; }
        .social-links { display: flex; gap: 20px; flex-wrap: wrap; }
        .social-link {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 25px; border-radius: 50px;
          background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.3);
          color: #d4af37; text-decoration: none; font-weight: 600; font-size: 1rem;
          transition: all 0.3s; -webkit-tap-highlight-color: rgba(212,175,55,0.3);
        }
        .social-link:hover { background: #d4af37; color: #0a0014; transform: translateY(-3px); box-shadow: 0 8px 25px rgba(212,175,55,0.4); }
        .social-link i { font-size: 1.2rem; }
        .contact-footer {
          text-align: center; margin-top: 80px; padding: 20px;
          border-top: 1px solid rgba(212,175,55,0.2); color: #b89fc5; font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          #contact { padding: 80px 20px; }
          .contact-header h2 { font-size: 2.5rem !important; }
          .contact-content { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-info { padding: 0 !important; }
          .social-link { padding: 12px 30px !important; font-size: 1rem !important; }
          .contact-footer { font-size: 0.95rem !important; padding: 15px !important; }
        }
        @media (max-width: 480px) {
          .contact-header h2 { font-size: 2rem !important; }
        }
      `}</style>

      <section id="contact">
        <div className="contact-grid-bg" />
        <div className="contact-inner">
          <div className="contact-header">
            <h2>GET IN TOUCH</h2>
            <p>Reach out for submissions, sponsorships, or any queries</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              {contactItems.map(item => (
                <div key={item.title} className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <h4>{item.title}</h4>
                    {item.lines.map(line => <p key={line}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://www.instagram.com/cit_film_club?igsh=NDZwM2hqczZ3ZHUx&utm_source=qr" target="_blank" rel="noreferrer" className="social-link">
                    <i className="bi bi-instagram" /> Instagram
                  </a>
                  <a href="https://www.youtube.com/@CITFilmClub" target="_blank" rel="noreferrer" className="social-link">
                    <i className="bi bi-youtube" /> YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-footer">
            <p>© 2026 ENIGMA | Film Club of CIT — An Echo of Cinema</p>
          </div>
        </div>
      </section>
    </>
  )
}
