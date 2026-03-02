const staffAdvisors = [
  { name: 'Dr. V. G. Kalpana', role: 'Staff Advisor', img: '/images/staffadvisor.jpg' },
  { name: 'Dr. M. Murugan', role: 'Staff Advisor', img: '/images/Murugan.jpg' },
  { name: 'Mr. B. Vasanthan', role: 'Staff Advisor', img: '/images/Vasanthan.jpg' },
]

// Leadership split
const chairman = { name: 'Sachin J', role: 'Event Chairman | Treasurer', img: '/images/sachin.png' }
const secretaries = [
  { name: 'Shanthosh Kumar S', role: 'Event Secretary', img: '/images/sk.jpeg' },
  { name: 'Akshatha Rupa B', role: 'Event Secretary', img: '/images/ar.png' },
]

// Coordinators split
const leadCoordinators = [
  { name: 'Kawin Raj PG', role: 'Event Coordinator', img: '/images/kawin.png' },
  { name: 'Dhivyaabharathi S', role: 'Event Coordinator', img: '/images/DB.png' },
]
const generalCoordinators = [
  { name: 'Shuriya T', role: 'Event Coordinator', img: '/images/Shuriya.png' },
  { name: 'Nandhini V', role: 'Event Coordinator', img: '/images/nandhini.png' },
  { name: 'Ilakkia T', role: 'Event Coordinator', img: '/images/ilakkia.png' },
  { name: 'Sangeeth Manoj Kumar R', role: 'Event Coordinator', img: '/images/sangeeth.png' },
]

function TeamCard({ member }) {
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1a0b2e&color=d4af37&size=280`
  return (
    <div className="team-card">
      <div className="team-img-wrap">
        <img src={member.img} alt={member.name} onError={e => e.target.src = fallback} />
      </div>
      <div className="team-card-content">
        <h4>{member.name}</h4>
        {member.role.split(' | ').map((r, i) => <p key={i}>{r}</p>)}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <>
      <style>{`
        #about-us {
          padding: 100px 20px;
          background: linear-gradient(180deg, #0f0a1f, #1a0b2e);
          position: relative; overflow: hidden;
        }
        .team-bg { position:absolute; inset:0; pointer-events:none;
          background: radial-gradient(circle at 50% 30%, rgba(212,175,55,0.1), transparent 50%);
        }
        .team-inner { max-width:1200px; margin:0 auto; position:relative; z-index:1; }
        .team-subtitle {
          text-align:center; color:#b89fc5; font-size:1.1rem; margin-bottom:60px; letter-spacing:2px;
        }
        .team-category-title {
          font-family:'Bebas Neue',sans-serif; font-size:1.5rem; letter-spacing:4px;
          color:#d4af37; text-align:center; margin-bottom:40px; padding:8px 30px;
          border-top:1px solid rgba(212,175,55,0.3); border-bottom:1px solid rgba(212,175,55,0.3);
          display:inline-block; width:100%; box-sizing:border-box;
        }
        .team-section { margin-bottom: 60px; text-align: center; }
        .team-row {
          display:flex; justify-content:center; flex-wrap:wrap;
          gap:40px; padding:0 20px;
          margin-bottom: 30px; /* Space between the rows */
        }
        .team-card {
          width:250px; border-radius:16px; overflow:hidden; cursor:pointer;
          background:linear-gradient(135deg,rgba(125,76,255,0.12),rgba(212,175,55,0.06));
          border:2px solid rgba(125,76,255,0.3); transition:all 0.4s ease;
        }
        .team-card:hover { transform:translateY(-10px) scale(1.02); border-color:#d4af37; box-shadow:0 15px 50px rgba(212,175,55,0.3); }
        .team-img-wrap { width:100%; height:280px; overflow:hidden; }
        .team-img-wrap img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; }
        .team-card-content { padding:20px; text-align:center; }
        .team-card-content h4 { font-family:'Bebas Neue',sans-serif; font-size:1.2rem; color:#d4af37; letter-spacing:2px; margin:0 0 8px; }
        .team-card-content p { font-size:0.85rem; color:#b89fc5; margin:2px 0; }
        @media (max-width: 768px) {
          .team-card { width: 100%; max-width: 250px; }
          .team-row { gap: 20px; }
        }
      `}</style>

      <section id="about-us">
        <div className="team-bg" />
        <div className="team-inner">
          <h2 className="section-title" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#d4af37', letterSpacing: 5, textAlign: 'center', marginBottom: 20, fontSize: '3rem' }}>
            TEAM LUMORA
          </h2>
          <p className="team-subtitle">The minds behind ENIGMA</p>

          {/* STAFF ADVISORS */}
          <div className="team-section">
            <div className="team-category-title">Staff Advisors</div>
            <div className="team-row">
              {staffAdvisors.map(m => <TeamCard key={m.name} member={m} />)}
            </div>
          </div>

          {/* LEADERSHIP */}
          <div className="team-section">
            <div className="team-category-title">Leadership</div>
            {/* Top Row: Sachin */}
            <div className="team-row">
              <TeamCard member={chairman} />
            </div>
            {/* Bottom Row: Shanthosh and Akshatha */}
            <div className="team-row">
              {secretaries.map(m => <TeamCard key={m.name} member={m} />)}
            </div>
          </div>

          {/* COORDINATORS */}
          <div className="team-section">
            <div className="team-category-title">Event Coordinators</div>
            {/* Row 1: Kawin and Deva */}
            <div className="team-row">
              {leadCoordinators.map(m => <TeamCard key={m.name} member={m} />)}
            </div>
            {/* Row 2: The rest */}
            <div className="team-row">
              {generalCoordinators.map(m => <TeamCard key={m.name} member={m} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}