import { useState, useEffect } from "react";
export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const top = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button onClick={top} style={{
      position: 'fixed', bottom: '30px', right: '30px',
      width: '50px', height: '50px', borderRadius: '50%',
      backgroundColor: '#d4af37', border: 'none', cursor: 'pointer',
      zIndex: 1000, display: show ? 'flex' : 'none',
      alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)', transition: '0.3s'
    }}>
      <span style={{ fontSize: '20px', color: '#000' }}>↑</span>
    </button>
  );
}