import { useEffect, useRef, useState } from 'react';
import WireframeGlobe from './WireframeGlobe';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const ref = useRef(null);
  const slogans = [
    "grow your business",
    "run on automation",
    "drive real result"
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const sloganInterval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slogans.length);
        setFade(true); // Start fade in
      }, 500); // Wait for fade out to complete
    }, 3000); // Change every 3 seconds

    return () => clearInterval(sloganInterval);
  }, [slogans.length]);

  return (
    <section className="hero theme--dark">
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <WireframeGlobe />
      </div>
      <div className="container hero-inner" ref={ref}>
        <div className="hero-content">
          <ScrollReveal delay={100}>
            <span className="subheading" style={{ fontSize: '14px', letterSpacing: '0.2em', marginBottom: '24px', display: 'block', color: 'rgba(255,255,255,0.6)' }}>
              AI-POWERED DIGITAL SOLUTIONS
            </span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h1 className="hero-title">
              <span className={`slogan-fade ${fade ? 'fade-in' : 'fade-out'}`}>
                {slogans[index]}
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="hero-desc">
              Globlyn helps modern brands scale through high-performance engineering, 
              intelligent AI automation, and pixel-perfect design.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="hero-actions">
              <a href="#contact" className="btn">LET'S TALK</a>
              <a href="#portfolio" className="hero-secondary">VIEW OUR WORK</a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding-top: 100px;
          position: sticky;
          top: 0;
          z-index: 1;
          overflow: hidden;
          background: var(--charcoal);
        }
        .hero-inner { width: 100%; display: flex; flex-direction: column; align-items: center; position: relative; z-index: 10; }
        .hero-content { width: 100%; max-width: 1000px; text-align: center; }
        
        .hero-title { 
          font-family: 'american-typewriter', serif;
          font-size: clamp(48px, 10vw, 130px); 
          line-height: 0.85; 
          margin-bottom: 40px; 
          color: var(--white);
          min-height: 1.2em; /* Prevent layout jump */
          text-transform: uppercase;
          font-weight: 250;
        }

        .slogan-fade {
          display: inline-block;
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-out {
          opacity: 0;
          transform: translateY(10px);
        }

        .hero-desc { font-size: clamp(16px, 2vw, 20px); max-width: 600px; margin: 0 auto 56px; color: rgba(255, 255, 255, 0.6); }
        .hero-actions { display: flex; align-items: center; gap: 40px; justify-content: center; }
        .hero-secondary { font-size: 12px; font-weight: 800; color: var(--white); text-decoration: underline; letter-spacing: 0.1em; transition: opacity 0.3s; }
        .hero-secondary:hover { opacity: 0.5; }
        @media (max-width: 768px) { 
          .hero-actions { flex-direction: column; gap: 24px; } 
          .hero-title { font-size: 42px; }
        }
      `}</style>
    </section>
  );
}
