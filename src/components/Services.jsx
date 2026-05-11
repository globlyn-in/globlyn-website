import { useState } from 'react';

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
        <span className="subheading" style={{ fontSize: '12px', letterSpacing: '0.2em', marginBottom: '32px', display: 'block' }}>
          CORE SERVICES
        </span>
        <h2 className="section-title" style={{ maxWidth: '900px', marginBottom: '80px', fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 0.9, fontFamily: 'american-typewriter, serif', fontWeight: 250 }}>
          WE HELP BRANDS<br />DOMINATE DIGITAL.
        </h2>

        <div className="svc-list">
          {services.map((s, i) => (
            <div key={i} className={`svc-row ${active === i ? 'svc-row--open' : ''}`}>
              <button className="svc-header" onClick={() => setActive(active === i ? null : i)}>
                <span className="svc-num">0{i + 1}</span>
                <h3 className="svc-title">{s.title}</h3>
                <span className="svc-toggle">{active === i ? '−' : '+'}</span>
              </button>
              <div className="svc-body" style={{ maxHeight: active === i ? '200px' : '0' }}>
                <p className="svc-desc">{s.desc}</p>
              </div>
            </div>
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
        .svc-toggle { font-size: 32px; font-weight: 200; color: var(--white); }
        .svc-body { overflow: hidden; transition: max-height 0.5s var(--transition); }
        .svc-desc {
          padding-bottom: 40px; font-size: 18px; color: rgba(255, 255, 255, 0.6);
          max-width: 700px; padding-left: 60px;
        }
        @media (max-width: 768px) {
          .svc-header { gap: 20px; padding: 32px 0; }
          .svc-desc { padding-left: 0; }
        }
      `}</style>
    </section>
  );
}
