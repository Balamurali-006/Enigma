import React from 'react';

export default function Sponsors() {
  const sponsorList = [
    { name: 'Trophy Sponsor', logo: '/images/logo1.png' },
    { name: 'Sound System', logo: '/images/logo6.png' },
    { name: 'Media Partner', logo: '/images/logo4.png' },
    { name: 'Food Sponsor', logo: '/images/logo3.png' },
    { name: 'Promotion Partner', logo: '/images/logo2.png' },
    { name: 'Marketing Partner', logo: '/images/logo5.png' },
    { name: 'SSS Media Production', logo: '/images/logo7.png' },
  ];

  return (
    <section id="sponsors">
      <style>{`
        #sponsors {
          padding: 80px 20px;
          background: radial-gradient(circle at center, #1a0b2e 0%, #05000a 100%);
          color: #ffffff;
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        .sponsor-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          text-align: center;
          letter-spacing: 3px;
          margin-bottom: 50px;
          color: #d4af37; /* Premium Gold color */
        }

        /* FLEXBOX CENTER ALIGNMENT */
        /* This handles the 7th item by centering it on the last row */
        .sponsor-flex-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center; 
          gap: 25px;
        }

        .sponsor-card {
          flex: 0 1 250px; /* Base width for each card */
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 12px;
          padding: 25px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 180px;
        }

        /* Logo Container: Ensuring all logos have the same workspace */
        .logo-container {
          width: 100%;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .logo-container img {
          max-width: 85%;
          max-height: 100%;
          object-fit: contain;
          /* Removed B&W filters - showing original colors */
        }

        .sponsor-label {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #ffffff;
          text-align: center;
          margin: 0;
          opacity: 0.9;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .sponsor-flex-wrapper {
            gap: 15px;
          }
          .sponsor-card {
            flex: 0 1 calc(48% - 10px); /* 2 items per row */
            min-height: 150px;
            padding: 15px 10px;
          }
          .logo-container {
            height: 70px;
          }
          .sponsor-label {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .sponsor-card {
            flex: 0 1 100%; /* 1 item per row on very small screens */
          }
        }
      `}</style>

      <div className="sponsor-container">
        <h2 className="section-title">OFFICIAL PARTNERS</h2>
        
        <div className="sponsor-flex-wrapper">
          {sponsorList.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <div className="logo-container">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <p className="sponsor-label">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}