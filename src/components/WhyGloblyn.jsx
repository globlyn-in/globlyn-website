import { useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const cards = [
  { 
    title: 'SPEED', 
    index: '01',
    desc: 'We operate in 48-hour sprints. From discovery to deployment, our agile methodology ensures your project moves at the speed of your business, with zero bottleneck delays.', 
    symbol: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  { 
    title: 'AI-FIRST', 
    index: '02',
    desc: 'Artificial Intelligence isn\'t a feature—it\'s the foundation. We engineer custom LLM integrations and automated workflows that transform your operational efficiency.', 
    symbol: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
        <path d="M12 12l9-4.5M12 12v9M12 12L3 7.5" />
      </svg>
    )
  },
  { 
    title: 'RESULTS', 
    index: '03',
    desc: 'We deliver measurable impact. Every project comes with a performance audit, tracking clear KPIs from conversion rates to automated hours saved per week.', 
    symbol: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-2-2-4 4" />
      </svg>
    )
  },
  { 
    title: 'PARTNER', 
    index: '04',
    desc: 'Direct access to the engineers building your future. No middlemen, no outsourcing—just technical partnership and lifetime support for every system we deploy.', 
    symbol: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
];

function TiltCard({ card }) {
  const cardRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setSpotlightPos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div 
      className="why-card" 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="card-spotlight" 
        style={{ 
          background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(248, 69, 37, 0.08), transparent 80%)` 
        }} 
      />
      
      <div className="card-bg-index">{card.index}</div>
      
      <div className="card-inner-content">
        <div className="card-visual-header">
           <div className="card-symbol">{card.symbol}</div>
           <div className="symbol-line" />
        </div>
        
        <h3 className="card-title">{card.title}</h3>
        <p className="card-desc">{card.desc}</p>
        
        <div className="card-footer">
           <div className="footer-status">ACTIVE SYSTEM</div>
           <div className="footer-line" />
        </div>
      </div>
    </div>
  );
}

export default function WhyGloblyn() {
  return (
    <section className="section theme--dark why-section">
      <div className="container why-container">
        <ScrollReveal delay={100} className="why-header">
          <span className="why-sub">ENGINEERING PRINCIPLES</span>
          <h2 className="why-headline">WHY WORK WITH US?</h2>
        </ScrollReveal>

        <div className="why-grid">
          {cards.map((c, i) => (
            <ScrollReveal key={i} delay={100 * (i + 1)}>
              <TiltCard card={c} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .why-section { padding: 160px 0; background: var(--charcoal); overflow: hidden; }
        .why-container {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          align-items: flex-start;
        }

        .why-header { text-align: left; position: sticky; top: 160px; }
        .why-sub { font-size: 11px; font-weight: 900; color: var(--brand); letter-spacing: 0.4em; display: block; margin-bottom: 24px; }
        .why-headline { 
           font-family: 'american-typewriter', serif; 
           font-size: clamp(48px, 6vw, 100px); 
           line-height: 0.85; 
           font-weight: 250;
           color: var(--white);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .why-card {
          background: var(--charcoal);
          padding: 40px 30px;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: all 0.4s var(--transition);
          transform-style: preserve-3d;
          cursor: crosshair;
        }

        .why-card:hover {
          background: rgba(255,255,255,0.02);
          z-index: 10;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
        }

        .card-spotlight {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .why-card:hover .card-spotlight { opacity: 1; }

        .card-bg-index {
          position: absolute;
          top: -20px;
          right: -10px;
          font-size: 120px;
          font-weight: 900;
          color: rgba(255,255,255,0.02);
          line-height: 1;
          pointer-events: none;
          z-index: 0;
          transition: 0.5s;
        }
        .why-card:hover .card-bg-index { color: rgba(255,255,255,0.03); transform: scale(1.1); }

        .card-inner-content { position: relative; z-index: 2; transform: translateZ(40px); }

        .card-visual-header { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
        .card-symbol { color: var(--white); transition: 0.4s; }
        .why-card:hover .card-symbol { color: var(--brand); transform: scale(1.1); }
        .symbol-line { height: 1px; flex: 1; background: rgba(255,255,255,0.1); }
        .why-card:hover .symbol-line { background: rgba(248, 69, 37, 0.2); }

        .card-title {
          font-family: 'american-typewriter', serif;
          font-size: 28px;
          font-weight: 250;
          color: var(--white);
          margin-bottom: 16px;
          transition: 0.4s;
        }
        .why-card:hover .card-title { color: var(--brand); }

        .card-desc {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255,255,255,0.5);
          margin-bottom: 40px;
          transition: 0.4s;
          max-width: 90%;
        }
        .why-card:hover .card-desc { color: var(--white); opacity: 0.8; }

        .card-footer { display: flex; align-items: center; gap: 12px; }
        .footer-status { font-size: 9px; font-weight: 900; letter-spacing: 0.1em; color: var(--brand); }
        .footer-line { height: 2px; width: 20px; background: var(--brand); transition: 0.4s; }
        .why-card:hover .footer-line { width: 40px; }

        @media (max-width: 1100px) {
          .why-container { grid-template-columns: 1fr; gap: 60px; }
          .why-header { position: static; text-align: center; }
        }
        @media (max-width: 768px) {
          .why-section { padding: 80px 0; }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .why-card { padding: 24px 16px; }
          .card-title { font-size: 18px; margin-bottom: 8px; }
          .card-desc { font-size: 11px; margin-bottom: 24px; }
          .card-bg-index { font-size: 60px; }
          .card-symbol svg { width: 24px; height: 24px; }
          .card-visual-header { margin-bottom: 20px; }
          .footer-status { font-size: 7px; }
        }
        @media (max-width: 480px) {
           .why-card { padding: 16px 12px; }
           .card-title { font-size: 16px; }
           .card-desc { font-size: 10px; line-height: 1.4; }
        }
      `}</style>
    </section>
  );
}
