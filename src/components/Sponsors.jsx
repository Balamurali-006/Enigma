import React from 'react';

export function Sponsors() {
  const sponsorList = [
    { name: 'Trophy Sponsor', logo: '/images/logo1.png' },
    { name: 'Promotion Partner', logo: '/images/logo2.png' },
    { name: 'Food Sponsor', logo: '/images/logo3.png' },
    { name: 'Media Partner', logo: '/images/logo4.png' },
    { name: 'Marketing Partner', logo: '/images/logo5.png' },
  ];

  return (
    <section id="sponsors">
      <style>{`
        #sponsors {
          padding: 100px 20px;
          background: radial-gradient(circle at center, #1a0b2e 0%, #0a0014 100%);
          position: relative;
        }

        .sponsor-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .sponsor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 50px;
          justify-items: center;
        }

        /* Premium Card Design */
        .sponsor-card {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 16 / 10;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(212, 175, 55, 0.05));
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 25px;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        /* Hover Glow & Reflection */
        .sponsor-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: 0.5s;
        }

        .sponsor-card:hover {
          transform: translateY(-12px);
          border-color: #d4af37;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.15);
          background: rgba(212, 175, 55, 0.08);
        }

        .sponsor-card:hover::after {
          opacity: 1;
        }

        /* Logo Scaling */
        .sponsor-logo-wrap {
          width: 85%;
          height: 60%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .sponsor-logo-wrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 12px rgba(0,0,0,0.4));
          transition: transform 0.4s ease;
        }

        .sponsor-card:hover img {
          transform: scale(1.1);
          filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.3));
        }

        /* Premium Text Styling */
        .sponsor-name {
          font-family: 'Bebas Neue', sans-serif;
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.4rem;
          letter-spacing: 3px;
          margin-top: 15px;
          z-index: 2;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .sponsor-card:hover .sponsor-name {
          color: #d4af37;
          letter-spacing: 5px;
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 768px) {
          .sponsor-grid {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .sponsor-card {
            max-width: 100%;
            padding: 15px;
          }
          .sponsor-name {
            font-size: 1.1rem;
            letter-spacing: 2px;
          }
        }

        @media (max-width: 480px) {
          .sponsor-grid {
            grid-template-columns: 1fr;
          }
          #sponsors {
            padding: 60px 15px;
          }
        }
      `}</style>

      <div className="sponsor-container">
        <h2 className="section-title">OUR OFFICIAL PARTNERS</h2>
        
        <div className="sponsor-grid">
          {sponsorList.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <div className="sponsor-logo-wrap">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="sponsor-name">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}