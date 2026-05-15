import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const services = [
  { title: 'WEB DEVELOPMENT', desc: 'Custom websites built for speed, SEO, and conversion. From landing pages to full-stack web applications.' },
  { title: 'AI AUTOMATION', desc: 'Automate repetitive tasks, build AI chatbots, and integrate intelligent workflows that run 24/7.' },
  { title: 'UI/UX DESIGN', desc: 'Research-backed design that looks stunning and converts visitors into paying customers.' },
  { title: 'E-COMMERCE', desc: 'High-converting online stores on Shopify or WooCommerce with full payment integration.' },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="section theme--dark">
      <div className="container">
        <ScrollReveal delay={100}>
          <span className="subheading" style={{ fontSize: '12px', letterSpacing: '0.2em', marginBottom: '32px', display: 'block' }}>
            CORE SERVICES
          </span>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <h2 className="section-title" style={{ maxWidth: '900px', marginBottom: '80px', fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 0.9, fontFamily: 'american-typewriter, serif', fontWeight: 250 }}>
            WE HELP BRANDS<br />DOMINATE DIGITAL.
          </h2>
        </ScrollReveal>

        <div className="svc-list">
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={100 * (i + 1)}>
              <div className={`svc-row ${active === i ? 'svc-row--open' : ''}`}>
                <button className="svc-header" onClick={() => setActive(active === i ? null : i)}>
                  <span className="svc-num">0{i + 1}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <span className="svc-toggle">{active === i ? '−' : '+'}</span>
                </button>
                <div className={`svc-body ${active === i ? 'svc-body--open' : ''}`}>
                  <div className="svc-body-inner">
                    <p className="svc-desc">{s.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .svc-list { border-top: 2px solid var(--white); }
        .svc-row { border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .svc-header {
          width: 100%; display: flex; align-items: center; gap: 40px;
          padding: 40px 0; cursor: pointer;
          background: none; border: none; text-align: left;
          transition: all 0.3s;
          color: var(--white);
        }
        .svc-num {
          font-size: 14px; font-weight: 800; color: rgba(255, 255, 255, 0.3);
        }
        .svc-title {
          flex: 1; font-size: clamp(24px, 4vw, 40px); font-weight: 250;
          font-family: 'american-typewriter', serif;
        }
        .svc-toggle { font-size: 32px; font-weight: 200; color: var(--white); transition: transform 0.4s var(--transition); }
        .svc-row--open .svc-toggle { transform: rotate(45deg); color: var(--brand); }
        
        .svc-body { 
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden; 
        }
        .svc-body--open { grid-template-rows: 1fr; }
        
        .svc-body-inner { 
          min-height: 0; 
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.5s var(--transition);
        }
        .svc-body--open .svc-body-inner { opacity: 1; transform: translateY(0); }

        .svc-desc {
          padding-bottom: 40px; font-size: 18px; color: rgba(255, 255, 255, 0.6);
          max-width: 700px; padding-left: 60px;
        }
        @media (max-width: 768px) {
          .svc-header { gap: 20px; padding: 32px 0; }
          .svc-desc { padding-left: 0; font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
