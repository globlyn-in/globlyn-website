import { useState, useEffect } from 'react';

const phrases = ['Grow your business.', 'Drive real results.', 'Run on automation.'];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(prev => (prev + 1) % phrases.length);
        setVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-bg-video">
        <source src="/landingpage-bg.mp4" type="video/mp4" />
      </video>
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{ fontSize: '24px', fontWeight: 500, marginBottom: '12px', display: 'block', color: 'rgba(255,255,255,1)', letterSpacing: '4px', textTransform: 'uppercase' }}>We build digital experiences that</span>
            <span style={{ display: 'block', minHeight: '80px' }}>
              <span className={`hero-phrase ${visible ? 'hero-phrase--in' : 'hero-phrase--out'}`}>
                {phrases[idx]}
              </span>
            </span>
          </h1>
          <p className="hero-sub">
            Globlyn helps businesses transform digitally — through blazing-fast websites,
            intelligent AI automation, and performance-driven strategies that turn visitors
            into customers.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-white">Let's talk</a>
            <a href="#portfolio" className="btn-link" style={{ color: 'rgba(255,255,255,0.6)' }}>
              View our work
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          background: var(--bg-dark);
          display: flex; align-items: center; justify-content: center;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg-video {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover; z-index: 0; opacity: 0.7;
        }
        .hero::before {
          content: '';
          position: absolute; top: -50%; right: -20%;
          width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(22,86,213,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; gap: 80px;
          align-items: center;
        }
        .hero-content { width: 100%; max-width: 800px; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .hero h1 { color: #fff; margin-bottom: 28px; text-shadow: 0 4px 24px rgba(0,0,0,0.6); }
        .hero-phrase {
          color: var(--accent-light);
          display: inline-block;
          transition: opacity 0.4s, transform 0.4s;
          text-shadow: 0 4px 24px rgba(0,0,0,0.6);
        }
        .hero-phrase--in { opacity: 1; transform: translateY(0); }
        .hero-phrase--out { opacity: 0; transform: translateY(12px); }
        .hero-sub {
          font-size: 18px; color: rgba(255,255,255,0.85);
          max-width: 560px; line-height: 1.8;
          margin-bottom: 40px; font-weight: 400;
          text-shadow: 0 2px 12px rgba(0,0,0,0.8);
        }
        .hero-actions { display: flex; align-items: center; gap: 32px; justify-content: center; }

        @media (max-width: 768px) {
          .hero { padding: 100px 0 60px; }
          .hero-actions { flex-direction: column; align-items: center; gap: 20px; }
        }
      `}</style>
    </section>
  );
}
