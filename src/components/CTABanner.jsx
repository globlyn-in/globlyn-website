import ScrollReveal from './ScrollReveal';

const features = [
  'Free Strategy Consultation',
  'Custom AI Integration Roadmap',
  'Full-Stack Scalability Audit',
  '24/7 Technical Support'
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function CTABanner() {
  return (
    <section className="cta-section theme--dark" id="contact">
      <div className="container">
        <div className="cta-grid">
          
          <ScrollReveal delay={100} className="cta-content">
            <span className="cta-sub">NEXT STEPS</span>
            <h2 className="cta-headline">
              READY TO<br />
              <span className="text-brand">AUTOMATE</span><br />
              YOUR FUTURE?
            </h2>
            <p className="cta-description">
              Stop fighting with manual workflows. Let’s engineer an AI-powered ecosystem that grows with you.
            </p>
            
            <div className="cta-perks">
              {features.map((f, i) => (
                <div key={i} className="perk-item">
                  <CheckIcon />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="cta-portal">
            <div className="portal-box">
              <div className="portal-inner">
                <p className="portal-hint">HAVE A PROJECT IN MIND?</p>
                <a href="mailto:globlyn.in@gmail.com" className="portal-link">
                  LET'S TALK
                  <span className="portal-arrow">→</span>
                </a>
                <div className="portal-footer">
                  <span>AVERAGE RESPONSE TIME: 4 HOURS</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      <style>{`
        .cta-section {
          padding: 160px 0;
          background: var(--charcoal);
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .cta-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 100px;
          align-items: center;
        }

        .cta-sub { font-size: 12px; font-weight: 800; color: var(--brand); letter-spacing: 0.3em; display: block; margin-bottom: 32px; }
        
        .cta-headline {
          font-family: 'american-typewriter', serif;
          font-size: clamp(48px, 8vw, 110px);
          line-height: 0.85;
          font-weight: 250;
          margin-bottom: 40px;
        }
        .text-brand { color: var(--brand); }

        .cta-description {
          font-size: 20px;
          line-height: 1.5;
          max-width: 500px;
          opacity: 0.6;
          margin-bottom: 56px;
        }

        .cta-perks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .perk-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
          opacity: 0.8;
        }

        /* PORTAL STYLES */
        .cta-portal { position: relative; }
        .portal-box {
          background: var(--white);
          color: var(--charcoal);
          padding: 60px;
          border-radius: 4px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portal-box:hover { transform: translateY(-10px) rotate(1deg); }

        .portal-hint { font-size: 10px; font-weight: 900; letter-spacing: 0.1em; opacity: 0.4; margin-bottom: 12px; }
        
        .portal-link {
          font-family: 'american-typewriter', serif;
          font-size: clamp(40px, 5vw, 64px);
          text-decoration: none;
          color: var(--charcoal);
          display: flex;
          align-items: center;
          gap: 20px;
          line-height: 1;
          margin-bottom: 40px;
          transition: color 0.3s;
        }
        .portal-link:hover { color: var(--brand); }
        .portal-arrow { transition: transform 0.3s; }
        .portal-link:hover .portal-arrow { transform: translateX(10px); }

        .portal-footer {
          padding-top: 24px;
          border-top: 1px solid rgba(0,0,0,0.1);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.05em;
          opacity: 0.5;
        }

        @media (max-width: 1100px) {
          .cta-grid { grid-template-columns: 1fr; gap: 80px; }
          .cta-perks { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .cta-section { padding: 80px 0; }
          .cta-grid { 
            grid-template-columns: 1.1fr 0.9fr; 
            gap: 20px; 
          }
          .cta-headline { font-size: 28px; margin-bottom: 20px; }
          .cta-description { font-size: 14px; margin-bottom: 24px; max-width: 100%; }
          .cta-perks { display: none; } /* Hide perks on very small screens to maintain layout */
          .cta-sub { font-size: 10px; margin-bottom: 16px; }
          
          .portal-box { padding: 20px 15px; }
          .portal-link { font-size: 24px; gap: 10px; margin-bottom: 20px; }
          .portal-hint { font-size: 8px; }
          .portal-footer { font-size: 8px; padding-top: 16px; }
        }
        @media (max-width: 480px) {
          .cta-grid { gap: 15px; }
          .cta-headline { font-size: 22px; }
          .portal-link { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}
