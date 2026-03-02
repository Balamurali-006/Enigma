const filmPosters = [
  { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop', title: 'கதை 01' },
  { src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop', title: 'கதை 02' },
  { src: 'https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=600&fit=crop', title: 'கதை 03' },
  { src: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop', title: 'கதை 04' },
  { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop', title: 'கதை 05' },
  { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop', title: 'கதை 06' },
  { src: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=600&fit=crop', title: 'கதை 07' },
]

const features = [
  { num: '01', icon: '🎬', title: 'Grand Screening Open', desc: 'The festival begins with the live screening of the Top 7 shortlisted short films on the main stage' },
  { num: '02', icon: '🏆', title: 'Official Top 7 Selection', desc: 'Seven outstanding short films carefully selected by the jury for their storytelling and cinematic quality' },
  { num: '03', icon: '🎤', title: 'Director Introductions', desc: 'Each filmmaker introduces their short film, sharing insights before the screening begins' },
  { num: '04', icon: '👥', title: 'Jury & Audience Viewing', desc: 'Experience the films together with jury members and a live, engaged audience' },
  { num: '05', icon: '🎭', title: 'Cinematic Storytelling', desc: 'A showcase of emotion, craft, and authentic Kollywood-inspired narratives in short-film format' },
  { num: '06', icon: '⭐', title: 'Final Spotlight Screening', desc: 'The most anticipated screening moment before awards and recognitions are announced' },
]

const seats = [false, false, false, true, true, true, false, false, false]
const allPosters = [...filmPosters, ...filmPosters]

export default function Streaming() {
  return (
    <>
      <style>{`
        #streaming {
          padding: 120px 20px;
          background: linear-gradient(180deg, #0a0014, #1a0020);
          position: relative; overflow: hidden;
        }
        .streaming-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(0deg, rgba(220,20,20,0.03) 0px, transparent 2px, transparent 40px, rgba(220,20,20,0.03) 42px),
                      repeating-linear-gradient(90deg, rgba(212,175,55,0.03) 0px, transparent 2px, transparent 40px, rgba(212,175,55,0.03) 42px);
          animation: gridMove 20s linear infinite;
        }
        @keyframes gridMove { 0%{transform:translate(0,0);} 100%{transform:translate(40px,40px);} }
        .streaming-spotlight {
          position: absolute; top: -100px; width: 300px; height: 500px; pointer-events: none;
          background: radial-gradient(ellipse at center, rgba(255,255,100,0.15) 0%, rgba(255,255,100,0.05) 40%, transparent 70%);
          filter: blur(20px); animation: spotlightSweep 8s ease-in-out infinite;
        }
        @keyframes spotlightSweep { 0%,100%{transform:translateX(0) rotate(-5deg); opacity:0.3;} 50%{transform:translateX(100px) rotate(5deg); opacity:0.6;} }
        .streaming-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .clapper-header { max-width: 800px; margin: 0 auto 40px; }
        .clapper-top {
          height: 40px; border-radius: 8px 8px 0 0; overflow: hidden;
          border: 3px solid #d4af37; border-bottom: none;
          background: repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 10px, #d4af37 10px, #d4af37 20px);
        }
        .clapper-body {
          background: linear-gradient(135deg, rgba(26,26,26,0.95), rgba(42,42,42,0.95));
          padding: 30px; border: 3px solid #d4af37; border-top: none;
          border-radius: 0 0 12px 12px; backdrop-filter: blur(10px);
          box-shadow: 0 10px 40px rgba(220,20,20,0.3);
        }
        .tamil-title {
          font-family:'Bebas Neue',sans-serif; font-size:2.5rem; color:#d4af37;
          text-align:center; margin:0 0 10px; letter-spacing:3px; text-shadow:0 0 20px rgba(212,175,55,0.6);
        }
        .english-subtitle {
          font-family:'Bebas Neue',sans-serif; font-size:1.8rem; color:#f1d77a;
          text-align:center; margin:0 0 20px; letter-spacing:4px;
        }
        .film-details {
          display:flex; justify-content:space-around; flex-wrap:wrap;
          gap:15px; font-size:0.9rem; color:#f5e9ff; text-align:center;
        }
        .film-detail-badge {
          background:rgba(212,175,55,0.1); padding:8px 15px;
          border-radius:20px; border:1px solid rgba(212,175,55,0.3);
        }
        .streaming-text {
          max-width:900px; margin:48px auto 0; font-size:1.15rem; line-height:2;
          color:#f0e6f5; font-weight:300; text-align:center;
        }
        .kollywood-tagline {
          display:block; font-family:'Bebas Neue',sans-serif; font-size:2rem;
          color:#d4af37; letter-spacing:4px;
          animation:neonFlicker 3s ease-in-out infinite;
        }
        @keyframes neonFlicker { 0%,100%{text-shadow:0 0 10px rgba(212,175,55,0.5),0 0 20px rgba(212,175,55,0.3);} 50%{text-shadow:0 0 20px rgba(212,175,55,0.8),0 0 40px rgba(212,175,55,0.6),0 0 60px rgba(212,175,55,0.4);} }
        .reel-row {
          position:relative; height:80px; margin:40px 0;
          display:flex; justify-content:space-between; align-items:center;
        }
        .reel-circle {
          width:60px; height:60px; border:4px solid #d4af37; border-radius:50%; position:relative;
          animation:reelSpin 4s linear infinite;
        }
        .reel-circle.rev { animation-direction: reverse; }
        @keyframes reelSpin { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        .reel-center { position:absolute; width:20px; height:20px; background:#d4af37; border-radius:50%; top:50%; left:50%; transform:translate(-50%,-50%); }
        .cinema-features-grid {
          display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:30px; max-width:1200px; margin:0 auto; padding:20px;
        }
        .feature-card {
          background:linear-gradient(135deg,rgba(125,76,255,0.15),rgba(212,175,55,0.08));
          border:2px solid rgba(212,175,55,0.3); border-radius:20px; padding:35px 25px;
          position:relative; overflow:hidden; transition:all 0.5s; cursor:pointer;
          backdrop-filter:blur(10px); box-shadow:0 10px 40px rgba(125,76,255,0.2);
          -webkit-tap-highlight-color:rgba(212,175,55,0.3);
        }
        .feature-card:hover { transform:translateY(-15px) scale(1.05); border-color:#f1d77a; box-shadow:0 20px 60px rgba(212,175,55,0.5); }
        .feature-number { position:absolute; top:15px; right:20px; font-family:'Bebas Neue',sans-serif; font-size:4rem; color:rgba(212,175,55,0.15); line-height:1; }
        .feature-icon { display:block; margin-bottom:20px; font-size:3.5rem; animation:iconFloat 3s ease-in-out infinite; filter:drop-shadow(0 0 15px rgba(212,175,55,0.5)); }
        @keyframes iconFloat { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-10px) rotate(5deg);} }
        .feature-content h3 { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; color:#d4af37; margin-bottom:12px; letter-spacing:2px; line-height:1.3; }
        .feature-content p { font-size:0.95rem; color:#d0c0d8; line-height:1.7; }
        .theater-seats { max-width:600px; margin:60px auto 40px; display:flex; justify-content:center; gap:15px; perspective:800px; }
        .seat {
          width:50px; height:50px;
          border-radius:8px 8px 0 0; transition:all 0.3s; cursor:pointer;
          animation:seatFloat 3s ease-in-out infinite;
        }
        .seat.occupied { background:linear-gradient(135deg,#d4af37,#c49f2f); border:2px solid #f1d77a; box-shadow:0 0 20px rgba(212,175,55,0.6); }
        .seat.empty { background:linear-gradient(135deg,#2a2a2a,#1a1a1a); border:2px solid #444; }
        @keyframes seatFloat { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-5px);} }
        .streaming-note { text-align:center; margin-top:48px; color:#b89fc5; font-size:1rem; }
        .streaming-note-title { display:block; font-family:'Bebas Neue',sans-serif; font-size:1.3rem; color:#d4af37; letter-spacing:2px; }
        .dynamic-film-strip {
          width:100%; background:#0a0a0a; padding:40px 0; overflow:hidden;
          position:relative; margin-top:60px; border-top:4px solid #d4af37; border-bottom:4px solid #d4af37;
        }
        .strip-fade-left { position:absolute; left:0; top:0; height:100%; width:200px; background:linear-gradient(90deg,#0a0a0a 0%,transparent 100%); z-index:10; pointer-events:none; }
        .strip-fade-right { position:absolute; right:0; top:0; height:100%; width:200px; background:linear-gradient(270deg,#0a0a0a 0%,transparent 100%); z-index:10; pointer-events:none; }
        .film-strip-track {
          display:flex; gap:15px; width:fit-content;
          animation:filmScroll 40s linear infinite;
        }
        .film-strip-track:hover { animation-play-state:paused; }
        @keyframes filmScroll { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
        .film-poster-wrap { position:relative; display:flex; align-items:center; gap:8px; flex-shrink:0; }
        .film-perforation { width:12px; height:250px; background:repeating-linear-gradient(0deg,#d4af37 0px,#d4af37 4px,transparent 4px,transparent 12px); border:2px solid #d4af37; border-radius:3px; }
        .film-poster {
          width:180px; height:250px; position:relative; overflow:hidden;
          border:3px solid #1a1a1a; border-radius:8px;
          box-shadow:0 8px 30px rgba(0,0,0,0.8); transition:all 0.4s ease; cursor:pointer;
        }
        .film-poster:hover { transform:scale(1.1) translateY(-10px); box-shadow:0 15px 50px rgba(212,175,55,0.6); border-color:#d4af37; }
        .film-poster img { width:100%; height:100%; object-fit:cover; display:block; filter:brightness(0.85) contrast(1.1); }
        .film-poster-label {
          position:absolute; bottom:0; left:0; width:100%; padding:15px 10px;
          background:linear-gradient(to top,rgba(0,0,0,0.95),transparent);
        }
        .film-poster-label span { font-family:'Bebas Neue',sans-serif; font-size:1.3rem; color:#d4af37; letter-spacing:2px; display:block; text-align:center; text-shadow:0 0 10px rgba(212,175,55,0.8); }
        @media (max-width: 768px) {
          #streaming { padding: 80px 20px; }
          .clapperboard-header { padding: 0 10px; }
          .tamil-title { font-size: 2rem !important; letter-spacing: 2px; }
          .english-subtitle { font-size: 1.4rem !important; }
          .film-details { flex-direction: column; gap: 10px; }
          .streaming-text { font-size: 1rem; padding: 0 10px; }
          .kollywood-tagline { font-size: 1.6rem !important; }
          .cinema-features-grid { grid-template-columns: 1fr !important; gap: 20px; padding: 10px; }
          .feature-card { padding: 30px 20px !important; }
          .feature-number { font-size: 3rem !important; }
          .feature-icon { font-size: 3rem !important; }
          .feature-content h3 { font-size: 1.4rem !important; }
          .feature-content p { font-size: 0.9rem; }
          .theater-seats { max-width: 100%; overflow-x: auto; padding: 0 10px; gap: 10px; }
          .seat { width: 40px !important; height: 40px !important; }
          .dynamic-film-strip { padding: 30px 0; }
          .film-poster { width: 140px !important; height: 200px !important; }
          .film-perforation { width: 10px !important; height: 200px !important; }
          .strip-fade-left, .strip-fade-right { width: 60px; }
        }
        @media (max-width: 480px) {
          .tamil-title { font-size: 1.6rem !important; }
          .english-subtitle { font-size: 1.2rem !important; }
          .kollywood-tagline { font-size: 1.3rem !important; }
          .feature-card { padding: 25px 15px !important; }
        }
      `}</style>

      <section id="streaming">
        <div className="streaming-grid-bg" />
        <div className="streaming-spotlight" style={{ left: '10%' }} />
        <div className="streaming-spotlight" style={{ right: '10%', animationDelay: '4s' }} />

        <div className="streaming-inner">
          <h2 className="section-title">ONE SCREEN. SEVEN STORIES.</h2>

          {/* Clapper header */}
          <div className="clapper-header">
            <div className="clapper-top" />
            <div className="clapper-body">
              <div className="tamil-title">ஒரு Screen. 7 கதை.</div>
              <div className="english-subtitle">ONE SCREEN. SEVEN STORIES.</div>
              <div className="film-details">
                {['🎬 ENIGMA TAKE: III', '📍 CIT AUDITORIUM', '🎭 LIVE EVENT'].map(d => (
                  <span key={d} className="film-detail-badge">{d}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="streaming-text">
            <span className="kollywood-tagline">"LIGHTS, CAMERA, ACTION!"</span>
            The top <strong>7 exceptional short films</strong> selected by our esteemed jury will be{' '}
            <span style={{ color: '#d4af37', fontWeight: 600, textShadow: '0 0 20px rgba(212,175,55,0.6)' }}>screened live on the silver screen</span>{' '}
            during the ENIGMA festival. Experience the magic of independent cinema on one stage, seven compelling stories!
          </div>

          {/* Reel decoration */}
          <div className="reel-row">
            <div className="reel-circle"><div className="reel-center" /></div>
            <div className="reel-circle rev"><div className="reel-center" /></div>
          </div>

          {/* Features grid */}
          <div className="cinema-features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <span className="feature-number">{f.num}</span>
                <span className="feature-icon" style={{ animationDelay: `${i * 0.5}s` }}>{f.icon}</span>
                <div className="feature-content">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Theater seats */}
          <div className="theater-seats">
            {seats.map((occupied, i) => (
              <div key={i} className={`seat ${occupied ? 'occupied' : 'empty'}`} style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>

          <div className="streaming-note">
            <span className="streaming-note-title">🎞️ வெற்றி திரைப்படங்கள் மட்டும் திரையிடப்படும் 🎞️</span>
            <em>*Only the top 7 shortlisted films will be screened during the event</em>
          </div>

          {/* Film strip */}
          <div className="dynamic-film-strip">
            <div className="strip-fade-left" />
            <div className="strip-fade-right" />
            <div className="film-strip-track">
              {allPosters.map((poster, i) => (
                <div key={i} className="film-poster-wrap">
                  <div className="film-perforation" />
                  <div className="film-poster">
                    <img src={poster.src} alt={poster.title} />
                    <div className="film-poster-label"><span>{poster.title}</span></div>
                  </div>
                  <div className="film-perforation" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
