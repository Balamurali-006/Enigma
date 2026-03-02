import React from 'react'

export default function Dignitaries() {
  // Updated data structures to include names and roles
  const chiefGuests = [
    {
      image: '/images/Chief_Guest_2.png',
      name: 'Mr. Vikranan Ashok',
      role: 'Director of Mask'
    },
    {
      image: '/images/Chief_Guest_1.png',
      name: 'Mr. Vivek R venkataraman',
      role: 'Actor/Model'
    }
  ]
  
  const juryMembers = [
    {
      image: '/images/Jury_3.png',
      name: 'Mr. R. Guru Karthikeyan',
      role: 'Director of Blood and Black'
    },
    {
      image: '/images/Jury_2.png',
      name: 'Mr. Kindsely',
      role: 'Assistant director of Kottukaali'
    },
    {
      image: '/images/Jury_1.png',
      name: 'Mr. Dhaneesh',
      role: 'Movie Consultant/Actor'
    }
  ]

  return (
    <section id="dignitaries">
      <style>{`
        #dignitaries {
          padding: 120px 20px;
          background: #0a0516;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        #dignitaries::before {
          content: '';
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .welcome-text {
          font-family: serif;
          font-style: italic;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 4px;
          font-size: 1rem;
          margin-bottom: 10px;
          text-transform: uppercase;
          display: block;
        }

        .section-header {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          background: linear-gradient(to bottom, #fff 30%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 6px;
          margin-bottom: 60px;
          text-transform: uppercase;
        }

        .poster-grid {
          display: flex;
          justify-content: center;
          align-items: stretch; /* Ensures cards in a row have same height */
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 100px;
        }

        /* --- THE CARD --- */
        .dignitary-card {
          position: relative;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.03);
          padding: 15px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          width: 320px; /* Standardized width */
          display: flex;
          flex-direction: column;
        }

        .dignitary-card:hover {
          transform: translateY(-15px);
          border-color: #d4af37;
          box-shadow: 0 30px 60px rgba(212, 175, 55, 0.15);
          background: rgba(255, 255, 255, 0.06);
        }

        .image-container {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .image-container img {
          width: 100%;
          height: auto;
          display: block;
          filter: grayscale(30%);
          transition: filter 0.5s ease;
        }

        .dignitary-card:hover img {
          filter: grayscale(0%);
        }

        /* --- INFO TEXT --- */
        .info-container {
          padding-bottom: 10px;
        }

        .dignitary-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          color: #fff;
          margin: 0;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .dignitary-card:hover .dignitary-name {
          color: #d4af37;
        }

        .dignitary-role {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 5px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Divider Decoration */
        .divider-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px 0 80px;
          gap: 20px;
        }
        .line { height: 1px; width: 100px; background: linear-gradient(90deg, transparent, #d4af37); }
        .line.right { background: linear-gradient(-90deg, transparent, #d4af37); }
        .diamond { width: 10px; height: 10px; border: 1px solid #d4af37; transform: rotate(45deg); }

        @media (max-width: 768px) {
          .dignitary-card { width: 100%; max-width: 320px; }
          #dignitaries { padding: 60px 15px; }
          .section-header { font-size: 2.2rem; }
        }
      `}</style>

      <div className="container">
        {/* --- CHIEF GUESTS --- */}
        <span className="welcome-text">Distinguished</span>
        <h2 className="section-header">Chief Guests</h2>
        <div className="poster-grid">
          {chiefGuests.map((person, index) => (
            <div key={index} className="dignitary-card">
              <div className="image-container">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="info-container">
                <h3 className="dignitary-name">{person.name}</h3>
                <p className="dignitary-role">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- ORNAMENTAL DIVIDER --- */}
        <div className="divider-container">
          <div className="line" />
          <div className="diamond" />
          <div className="line right" />
        </div>

        {/* --- JURY --- */}
        <span className="welcome-text">Honorable</span>
        <h2 className="section-header">The Jury</h2>
        <div className="poster-grid">
          {juryMembers.map((person, index) => (
            <div key={index} className="dignitary-card">
              <div className="image-container">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="info-container">
                <h3 className="dignitary-name">{person.name}</h3>
                <p className="dignitary-role">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}