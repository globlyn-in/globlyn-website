import medeaseUI from '../assets/medease/Screenshot 2026-03-17 081641.png';
import ScrollReveal from './ScrollReveal';

const medEase = {
  title: 'MEDEASE',
  label: 'AI PHARMACY AUTOMATION',
  stat: 'GEMINI PRO VISION',
  description: 'Streamlining pharmacy workflows with LLM-powered prescription parsing and intelligent inventory management.',
  stack: ['React', 'FastAPI', 'Gemini', 'PostgreSQL'],
  link: 'https://med-ease-khaki-xi.vercel.app/'
};

const ExternalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 22 3 22 10" />
    <line x1="10" y1="14" x2="22" y2="2" />
  </svg>
);

export default function Portfolio() {
  return (
    <section id="portfolio" className="port-viewport theme--light">
      <div className="container port-container">
        <div className="port-content-wrapper">
          <ScrollReveal delay={100}>
            <span className="port-sub">CASE STUDY (01)</span>
          </ScrollReveal>
          
          <div className="port-main-card">
            <ScrollReveal delay={200} className="card-info">
              <div className="card-badge">{medEase.label}</div>
              <h2 className="card-headline">{medEase.title}</h2>
              <p className="card-summary">{medEase.description}</p>
              
              <div className="card-meta">
                <div className="meta-item">
                  <span className="meta-label">CORE ENGINE</span>
                  <span className="meta-value">{medEase.stat}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">TECH STACK</span>
                  <div className="stack-list">
                    {medEase.stack.map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                </div>
              </div>

              <a href={medEase.link} target="_blank" rel="noopener noreferrer" className="port-link">
                EXPLORE LIVE PROJECT <ExternalIcon />
              </a>
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="card-visual-simple">
               <div className="visual-inner">
                  <img 
                    src={medeaseUI} 
                    alt="MedEase Interface" 
                  />
                  <div className="visual-overlay" />
               </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        .port-viewport {
          height: 100vh;
          width: 100%;
          background: var(--white);
          display: flex;
          align-items: center;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }
        
        .port-container { width: 100%; }
        .port-content-wrapper { max-width: 1100px; margin: 0 auto; }
        
        .port-sub { font-size: 11px; letter-spacing: 0.3em; color: var(--charcoal); opacity: 0.3; display: block; margin-bottom: 40px; }

        .port-main-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
          background: #f8f8f8;
          border: 1px solid rgba(0,0,0,0.05);
          padding: 60px;
          position: relative;
        }

        .card-badge { 
          font-size: 10px; font-weight: 800; color: var(--brand); 
          letter-spacing: 0.1em; margin-bottom: 24px;
        }

        .card-headline { 
          font-family: 'american-typewriter', serif; 
          font-size: clamp(48px, 8vw, 110px); 
          line-height: 0.85; margin-bottom: 24px;
          font-weight: 250;
          color: var(--charcoal);
        }

        .card-summary { font-size: 18px; line-height: 1.5; color: var(--charcoal); opacity: 0.6; margin-bottom: 48px; max-width: 500px; }

        .card-meta { display: flex; gap: 48px; margin-bottom: 56px; }
        .meta-label { font-size: 10px; font-weight: 900; color: var(--charcoal); opacity: 0.3; display: block; margin-bottom: 8px; letter-spacing: 0.1em; }
        .meta-value { font-size: 14px; font-weight: 700; color: var(--charcoal); }
        .stack-list { display: flex; gap: 12px; font-size: 12px; font-weight: 700; color: var(--charcoal); opacity: 0.7; flex-wrap: wrap; }

        .port-link {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          color: var(--charcoal);
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          padding-bottom: 4px;
          border-bottom: 2px solid var(--brand);
          transition: 0.3s;
        }
        .port-link:hover { color: var(--brand); border-color: var(--charcoal); }

        .card-visual-simple { position: relative; width: 100%; aspect-ratio: 4/3; }
        .visual-inner { width: 100%; height: 100%; border-radius: 4px; overflow: hidden; position: relative; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        .visual-inner img { width: 100%; height: 100%; object-fit: cover; opacity: 1; }
        .visual-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(255,255,255,0.8), transparent 80%); }

        @media (max-width: 1024px) {
          .port-viewport { height: auto; padding: 100px 0; }
          .port-main-card { 
            grid-template-columns: 1fr; 
            padding: 24px; 
            gap: 24px; 
            margin: 0 10px;
          }
          .card-headline { font-size: 56px; margin-bottom: 16px; }
          .card-summary { display: none; }
          .card-meta { margin-bottom: 32px; gap: 20px; }
          .card-visual-simple { 
            display: block; 
            order: -1; 
            aspect-ratio: 2/1; 
          }
          .port-sub { margin-bottom: 24px; text-align: center; }
        }
        @media (max-width: 768px) {
          .card-headline { font-size: 42px; }
        }
      `}</style>
    </section>
  );
}
