export default function PrizePool() {
  const prizeSplit = [
    { rank: 'Winner', amount: '₹14,000', icon: '🥇' },
    { rank: 'Runner Up', amount: '₹10,000', icon: '🥈' },
    { rank: 'Special Mention', amount: '₹6,000', icon: '🥉' },
  ];

  return (
    <section id="prizes">
      <style>{`
        .prize-pool-container {
          padding: 100px 20px;
          background: linear-gradient(180deg, #0f0520, #0a0014);
          text-align: center;
        }
        .total-pool-card {
          background: linear-gradient(135deg, rgba(212,175,55,0.2), rgba(125,76,255,0.1));
          border: 2px solid #d4af37;
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          margin: 0 auto 50px;
          box-shadow: 0 0 50px rgba(212,175,55,0.2);
        }
        .pool-amount {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 10vw, 5rem);
          color: #d4af37;
          display: block;
          line-height: 1;
        }
        .split-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .split-card {
          background: rgba(255,255,255,0.05);
          padding: 30px;
          border-radius: 15px;
          border-bottom: 3px solid #7d4cff;
          transition: 0.3s;
        }
        .split-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.08); }
        .split-card h4 { color: #d4af37; font-family: 'Bebas Neue'; font-size: 1.5rem; margin: 10px 0; }
        .split-card .amt { font-size: 2rem; font-weight: bold; color: #fff; }
      `}</style>
      <div className="prize-pool-container">
        <h2 className="section-title">PRIZE POOL</h2>
        <div className="total-pool-card">
          <p style={{color: '#f1d77a', letterSpacing: '3px'}}>TOTAL CASH PRIZES WORTH</p>
          <span className="pool-amount">₹30,000+</span>
          <p style={{color: '#b89fc5', marginTop: '10px'}}>Plus exciting goodies & certificates for all finalists</p>
        </div>
        <div className="split-grid">
          {prizeSplit.map((p, i) => (
            <div key={i} className="split-card">
              <span style={{fontSize: '2rem'}}>{p.icon}</span>
              <h4>{p.rank}</h4>
              <div className="amt">{p.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}