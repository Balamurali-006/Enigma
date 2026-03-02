import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3000)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <>
      <style>{`
        .loading-screen {
          position: fixed; inset: 0; z-index: 99999;
          background: radial-gradient(ellipse at center, #1a0b2e 0%, #0a0014 60%, #000 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .film-strip-border {
          position: absolute; top: 0; left: 0; width: 100%; height: 20px;
          background: repeating-linear-gradient(90deg, #d4af37 0px, #d4af37 20px, #1a1a1a 20px, #1a1a1a 40px);
          animation: film-roll 1s linear infinite;
        }
        @keyframes film-roll { from { background-position: 0 0; } to { background-position: 40px 0; } }
        .loading-particle {
          position: absolute; border-radius: 50%; pointer-events: none;
          animation: loading-float linear infinite;
        }
        @keyframes loading-float { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; } }
        .light-ray {
          position: absolute; width: 2px; height: 60vh; top: 0;
          background: linear-gradient(to bottom, rgba(212,175,55,0.4), transparent);
          transform-origin: top center; animation: ray-sweep 4s ease-in-out infinite;
        }
        @keyframes ray-sweep { 0%,100%{opacity:0.3;transform:rotate(-10deg);} 50%{opacity:0.7;transform:rotate(10deg);} }
        .trophy-container {
          position: relative; width: 320px; height: 450px;
          display: flex; align-items: center; justify-content: center;
        }
        .trophy-spotlight {
          position: absolute; width: 100%; height: 100%;
          background: radial-gradient(ellipse at 50% 30%, rgba(255,220,100,0.4) 0%, rgba(212,175,55,0.2) 30%, transparent 70%);
          animation: spotlight-pulse 2s ease-in-out infinite;
        }
        @keyframes spotlight-pulse { 0%,100%{opacity:0.6;transform:scale(1);} 50%{opacity:1;transform:scale(1.1);} }
        .trophy-image-wrap {
          position: relative; z-index: 2;
          animation: trophy-reveal 1.5s cubic-bezier(0.4,0,0.2,1) forwards;
          clip-path: inset(100% 0 0 0);
        }
        @keyframes trophy-reveal { 0%{clip-path:inset(100% 0 0 0);} 100%{clip-path:inset(0% 0 0 0);} }
        .trophy-image { width: 240px; filter: drop-shadow(0 0 40px rgba(212,175,55,0.8)); }
        .trophy-glow {
          position: absolute; bottom: 0; width: 80%; height: 40%;
          background: radial-gradient(ellipse at center bottom, rgba(212,175,55,0.5) 0%, transparent 70%);
          filter: blur(20px);
        }
        .festival-name {
          font-family: 'Bebas Neue', sans-serif; font-size: 4rem;
          letter-spacing: 10px; color: transparent;
          background: linear-gradient(135deg, #d4af37, #f1d77a, #d4af37);
          -webkit-background-clip: text; background-clip: text;
          text-shadow: none; margin: 20px 0 10px;
          animation: title-glow 2s ease-in-out infinite alternate;
        }
        @keyframes title-glow { from{filter:drop-shadow(0 0 20px rgba(212,175,55,0.4));} to{filter:drop-shadow(0 0 40px rgba(212,175,55,0.8));} }
        .festival-tagline {
          font-size: 1.4rem; color: #f1d77a; letter-spacing: 3px;
          font-family: 'Bebas Neue', sans-serif;
        }
        @media (max-width: 768px) {
          .festival-name { font-size: 2.5rem !important; letter-spacing: 4px !important; }
          .festival-tagline { font-size: 1.2rem !important; }
          .trophy-container { width: 280px !important; height: 400px !important; }
          .trophy-image { width: 220px !important; }
        }
        @media (max-width: 480px) {
          .festival-name { font-size: 2rem !important; }
          .festival-tagline { font-size: 1rem !important; }
        }
      `}</style>

      <div className="loading-screen">
        <div className="film-strip-border" />

        {/* Light rays */}
        {[-20, 0, 20].map((deg, i) => (
          <div key={i} className="light-ray" style={{ left: `${30 + i * 20}%`, transform: `rotate(${deg}deg)`, animationDelay: `${i * 1.3}s` }} />
        ))}

        {/* Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="loading-particle"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background: Math.random() > 0.5 ? '#d4af37' : '#7d4cff',
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        <div className="trophy-container">
          <div className="trophy-spotlight" />
          <div className="trophy-image-wrap">
            <img src="/images/TROPHY.png" alt="Trophy" className="trophy-image" onError={e => e.target.style.display = 'none'} />
          </div>
          <div className="trophy-glow" />
        </div>

        <div className="festival-name">ENIGMA</div>
        <div className="festival-tagline"># TAKE - III</div>
      </div>
    </>
  )
}
