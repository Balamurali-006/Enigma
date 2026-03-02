import { useEffect, useRef } from 'react'

const cards = [
  { icon: '🎬', title: 'State-Level Festival', text: 'ENIGMA is a state-level short film festival by the Film Club of CIT, created for cinema patriots and aspiring filmmakers with dreams of the silver screen.' },
  { icon: '🏆', title: 'Top 7 Screening', text: 'The top 7 short films will be screened on the main stage, with the best three films winning prestigious awards, alongside 10+ special awards honoring excellence.' },
  { icon: '🌟', title: 'Platform for Talent', text: 'Open to filmmakers across Tamil Nadu, ENIGMA provides a powerful platform for emerging talents to showcase their vision and contribute to independent cinema.' },
]

export default function About() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('about-card-visible') }),
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )
    cardsRef.current.forEach(c => c && observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        #about-enigma {
          padding: 120px 20px;
          background: linear-gradient(180deg, #1a0b2e, #0f0520);
          position: relative; overflow: hidden;
        }
        .about-bg { position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at 20% 30%, rgba(212,175,55,0.15), transparent 40%),
                      radial-gradient(circle at 80% 70%, rgba(125,76,255,0.15), transparent 40%);
          animation: bgShift 10s ease-in-out infinite;
        }
        @keyframes bgShift { 0%,100%{opacity:0.5;} 50%{opacity:1;} }
        .about-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .section-title {
          font-family: 'Bebas Neue', sans-serif; color: #d4af37;
          letter-spacing: 5px; text-align: center; margin-bottom: 60px;
          font-size: 3rem; position: relative; display: block; width: 100%;
        }
        .section-title::after {
          content: ''; position: absolute; bottom: -15px; left: 50%;
          transform: translateX(-50%); width: 80px; height: 3px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent); display: block;
        }
        .about-content-wrapper {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center; margin-top: 40px;
        }
        .about-visual {
          position: relative; height: 500px;
          display: flex; align-items: center; justify-content: center;
        }
        .float-item {
          position: absolute; border-radius: 8px;
          background: linear-gradient(135deg, rgba(212,175,55,0.3), rgba(125,76,255,0.2));
          backdrop-filter: blur(5px); animation: floatItem 8s ease-in-out infinite;
        }
        @keyframes floatItem { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-30px) rotate(180deg);} }
        .film-reel {
          position: absolute; width: 300px; height: 300px;
          border: 8px solid rgba(212,175,55,0.3); border-radius: 50%;
          animation: rotateReel 20s linear infinite;
        }
        @keyframes rotateReel { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        .center-badge {
          width: 180px; height: 180px; position: relative; z-index: 2;
          background: linear-gradient(135deg, rgba(212,175,55,0.2), rgba(125,76,255,0.2));
          backdrop-filter: blur(20px); border: 3px solid rgba(212,175,55,0.5); border-radius: 50%;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          animation: badgePulse 3s ease-in-out infinite; box-shadow: 0 0 40px rgba(212,175,55,0.4);
        }
        @keyframes badgePulse { 0%,100%{transform:scale(1); box-shadow:0 0 40px rgba(212,175,55,0.4);} 50%{transform:scale(1.1); box-shadow:0 0 60px rgba(212,175,55,0.6);} }
        .badge-text { font-family:'Bebas Neue',sans-serif; font-size:3rem; color:#d4af37; letter-spacing:3px; text-shadow:0 0 20px rgba(212,175,55,0.6); }
        .badge-sub { font-size:0.9rem; color:#f1d77a; letter-spacing:2px; }
        .about-cards { display: flex; flex-direction: column; gap: 30px; }
        .about-card {
          background: linear-gradient(135deg, rgba(125,76,255,0.1), rgba(212,175,55,0.05));
          border-left: 4px solid #d4af37; border-radius: 12px; padding: 30px;
          backdrop-filter: blur(10px); opacity: 0; transform: translateX(-50px);
          transition: opacity 0.6s ease, transform 0.6s ease, background 0.3s, box-shadow 0.3s;
        }
        .about-card-visible { opacity: 1 !important; transform: translateX(0) !important; }
        .about-card:hover {
          transform: translateX(10px) !important;
          background: linear-gradient(135deg, rgba(125,76,255,0.15), rgba(212,175,55,0.1));
          box-shadow: 0 10px 40px rgba(212,175,55,0.3);
        }
        .about-card .card-icon { font-size: 2.5rem; margin-bottom: 15px; filter: drop-shadow(0 0 10px rgba(212,175,55,0.5)); }
        .about-card h3 { font-family:'Bebas Neue',sans-serif; color:#d4af37; font-size:1.5rem; letter-spacing:3px; margin-bottom:15px; }
        .about-card p { color:#e0d0e8; line-height:1.8; font-size:1rem; }
        @media (max-width: 768px) {
          #about-enigma { padding: 80px 20px; }
          .section-title { font-size: 2.5rem !important; letter-spacing: 3px; }
          .about-content-wrapper { grid-template-columns: 1fr !important; gap: 40px; }
          .about-visual { height: 400px !important; }
          .film-reel { width: 250px !important; height: 250px !important; }
          .center-badge { width: 150px !important; height: 150px !important; }
          .badge-text { font-size: 2.5rem !important; }
          .about-card { padding: 25px; }
          .about-card h3 { font-size: 1.3rem; }
          .about-card p { font-size: 0.95rem; }
        }
        @media (max-width: 480px) {
          .section-title { font-size: 2rem !important; }
          .about-card { padding: 20px; }
        }
      `}</style>

      <section id="about-enigma">
        <div className="about-bg" />
        <div className="about-inner">
          <h2 className="section-title">ABOUT ENIGMA</h2>
          <div className="about-content-wrapper">
            <div className="about-visual">
              {[
                { top: '10%', left: '10%', delay: '0s', size: 40 },
                { top: '60%', left: '5%', delay: '2s', size: 50 },
                { top: '30%', right: '15%', delay: '4s', size: 40 },
                { bottom: '20%', right: '10%', delay: '6s', size: 35 },
              ].map((s, i) => (
                <div key={i} className="float-item" style={{ ...s, width: s.size, height: s.size, animationDelay: s.delay }} />
              ))}
              <div className="film-reel" />
              <div className="center-badge">
                <span className="badge-text">7</span>
                <span className="badge-sub">TOP FILMS</span>
              </div>
            </div>
            <div className="about-cards">
              {cards.map((card, i) => (
                <div key={i} className="about-card" ref={el => cardsRef.current[i] = el} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
