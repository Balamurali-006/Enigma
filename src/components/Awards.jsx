const grandPrizes = [
  { emoji: '👑', rank: 'WINNER', title: 'Best Film', cls: 'winner', delay: '0s' },
  { emoji: '🥈', rank: 'RUNNER-UP', title: 'Best Film', cls: 'runner', delay: '0.5s' },
  { emoji: '⭐', rank: 'SPECIAL', title: 'Best Film', cls: 'special', delay: '1s' },
]

const categoryAwards = [
  { icon: '🎭', title: 'Best Actor' },
  { icon: '🎭', title: 'Best Actress' },
  { icon: '🎬', title: 'Best Director' },
  { icon: '✍️', title: 'Best Writer' },
  { icon: '📖', title: 'Best Story' },
  { icon: '🎥', title: 'Best Cinematographer' },
  { icon: '🎵', title: 'Best Music' },
  { icon: '✂️', title: 'Best Editor' },
  { icon: '🌟', title: 'Supporting Character' },
]

export default function Awards() {
  return (
    <>
      <style>{`
        #awards {
          padding: 100px 20px;
          background: radial-gradient(circle at top, #2b050a, #0a0004 70%);
          position: relative; overflow: hidden;
        }
        .awards-bg { position:absolute; inset:0; pointer-events:none;
          background: radial-gradient(circle at 30% 20%, rgba(212,175,55,0.15), transparent 40%),
                      radial-gradient(circle at 70% 80%, rgba(125,76,255,0.15), transparent 40%);
          animation: bgPulse 6s ease-in-out infinite;
        }
        @keyframes bgPulse { 0%,100%{opacity:0.5;} 50%{opacity:1;} }
        .awards-inner { max-width:1200px; margin:0 auto; position:relative; z-index:1; padding:0 20px; }
        .tier-label {
          text-align:center; margin-bottom:60px;
          font-family:'Bebas Neue',sans-serif; font-size:2.2rem; letter-spacing:4px;
          color:#d4af37; text-shadow:0 0 25px rgba(212,175,55,0.6);
        }
        .top-tier { margin-bottom: 80px; }
        .top-tier .tier-cards {
          display:flex; flex-direction:column; align-items:center; gap:40px;
        }
        .grand-runner-row { display:flex; justify-content:center; gap:40px; flex-wrap:wrap; }
        .award-card {
          position:relative; border-radius:22px; padding:40px 25px; text-align:center;
          color:#fff; overflow:hidden; box-shadow:0 25px 70px rgba(0,0,0,0.65);
          transition:transform 0.6s ease, box-shadow 0.6s ease; cursor:pointer;
          -webkit-tap-highlight-color:rgba(212,175,55,0.3);
        }
        .award-card:hover { transform:translateY(-12px) scale(1.05) !important; box-shadow:0 40px 100px rgba(212,175,55,0.7) !important; }
        .award-card.winner {
          width:320px; min-height:400px;
          background: linear-gradient(135deg,rgba(212,175,55,0.2),rgba(255,215,0,0.1)),linear-gradient(to bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.95));
        }
        .award-card.runner {
          width:280px; min-height:360px;
          background: linear-gradient(135deg,rgba(192,192,192,0.15),rgba(125,76,255,0.1)),linear-gradient(to bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.95));
        }
        .award-card.special {
          width:280px; min-height:360px;
          background: linear-gradient(135deg,rgba(125,76,255,0.2),rgba(212,175,55,0.08)),linear-gradient(to bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.95));
        }
        .award-radial { position:absolute; inset:0; background:radial-gradient(circle at top,rgba(212,175,55,0.3),transparent 60%); z-index:1; }
        .award-shine {
          position:absolute; inset:0; overflow:hidden; z-index:1;
          background:linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent);
          transform:rotate(25deg); animation:shineMove 6s linear infinite;
        }
        @keyframes shineMove { 0%{transform:translateX(-100%) rotate(25deg);} 100%{transform:translateX(200%) rotate(25deg);} }
        .award-trophy { position:relative; z-index:2; font-size:5rem; margin-bottom:15px; filter:drop-shadow(0 0 20px rgba(212,175,55,0.8)); animation:awardFloat 3s ease-in-out infinite; }
        @keyframes awardFloat { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-15px);} }
        .award-rank { position:relative; z-index:2; font-family:'Bebas Neue',sans-serif; font-size:1.8rem; letter-spacing:3px; color:#d4af37; margin-bottom:10px; text-shadow:0 0 15px rgba(212,175,55,0.6); }
        .award-card.runner .award-rank, .award-card.special .award-rank { font-size:1.3rem; }
        .award-card h3 { position:relative; z-index:2; font-family:'Bebas Neue',sans-serif; font-size:2rem; margin-top:20px; color:#fff; letter-spacing:2px; }
        .award-card.runner h3, .award-card.special h3 { font-size:1.8rem; }
        .category-tier .tier-cards {
          display:flex; justify-content:center; flex-wrap:wrap;
          gap:25px; max-width:1400px; margin:0 auto;
        }
        .award-card.category {
          width:200px; padding:30px 20px; border-radius:22px; cursor:pointer;
          border:2px solid rgba(125,76,255,0.3); transition:all 0.3s;
          background:linear-gradient(135deg,rgba(125,76,255,0.08),rgba(212,175,55,0.05));
        }
        .award-card.category:hover { border-color:#d4af37; box-shadow:0 10px 40px rgba(212,175,55,0.3); background:linear-gradient(135deg,rgba(125,76,255,0.15),rgba(212,175,55,0.1)); transform:translateY(-8px); }
        .award-icon { font-size:3rem; margin-bottom:15px; transition:all 0.4s; display:block; }
        .award-card.category h4 { font-family:'Bebas Neue',sans-serif; font-size:1.3rem; color:#f5e9ff; margin:0; letter-spacing:2px; }
        @media (max-width: 768px) {
          #awards { padding: 80px 20px; }
          .tier-label { font-size: 1.8rem !important; letter-spacing: 3px; }
          .top-tier .tier-cards { gap: 30px; }
          .award-card.winner { width: 100% !important; max-width: 320px; height: auto; min-height: 380px; }
          .award-card.runner, .award-card.special { width: 100% !important; max-width: 280px; height: auto; min-height: 340px; }
          .category-tier .tier-cards { gap: 15px; }
          .award-card.category { width: calc(50% - 10px) !important; min-width: 150px; padding: 25px 15px !important; }
          .award-icon { font-size: 2.5rem !important; }
          .award-card.category h4 { font-size: 1.1rem !important; }
        }
        @media (max-width: 480px) {
          .award-card.category { width: 100% !important; }
          .section-title { font-size: 2rem !important; }
        }
      `}</style>

      <section id="awards">
        <div className="awards-bg" />
        <div className="awards-inner">
          <h2 className="section-title">AWARDS & RECOGNITION</h2>

          {/* Grand Prizes */}
          <div className="top-tier">
            <div className="tier-label">GRAND PRIZES</div>
            <div className="tier-cards">
              {/* Winner card */}
              <div className="award-card winner">
                <div className="award-radial" />
                <div className="award-shine" />
                <div className="award-trophy">👑</div>
                <div className="award-rank">WINNER</div>
                <h3>Best Film</h3>
              </div>
              {/* Runner-up + Special row */}
              <div className="grand-runner-row">
                {[
                  { emoji: '🥈', rank: 'RUNNER-UP', cls: 'runner', delay: '0.5s' },
                  { emoji: '⭐', rank: 'SPECIAL', cls: 'special', delay: '1s' },
                ].map(({ emoji, rank, cls, delay }) => (
                  <div key={rank} className={`award-card ${cls}`}>
                    <div className="award-radial" />
                    <div className="award-shine" />
                    <div className="award-trophy" style={{ animationDelay: delay, fontSize: '4.5rem' }}>{emoji}</div>
                    <div className="award-rank">{rank}</div>
                    <h3>Best Film</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Awards */}
          <div className="category-tier">
            <div className="tier-label">CATEGORY EXCELLENCE</div>
            <div className="tier-cards">
              {categoryAwards.map((award, i) => (
                <div key={i} className="award-card category">
                  <span className="award-icon">{award.icon}</span>
                  <h4>{award.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
