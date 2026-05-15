import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  { q: 'TIMELINE?', a: '7–14 days for landing pages, 3–5 weeks for websites.' },
  { q: 'GLOBAL?', a: 'Yes, we work with clients worldwide.' },
  { q: 'TECH STACK?', a: 'n8n, OpenAI, React, Next.js, and more.' },
  { q: 'POST-LAUNCH?', a: '30-day support included with all packages.' },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="section theme--light">
      <div className="container">
        <ScrollReveal delay={100}>
          <h2 className="section-title" style={{ marginBottom: '80px', fontSize: 'clamp(40px, 6vw, 80px)', fontFamily: 'american-typewriter, serif', fontWeight: 250, lineHeight: 0.9 }}>
            FAQ.
          </h2>
        </ScrollReveal>
        <div className="faq-grid">
          {faqs.map((f, i) => (
            <ScrollReveal key={i} delay={100 * (i + 1)}>
              <div className="faq-item">
                <button className="faq-btn" onClick={() => setActive(active === i ? null : i)}>
                  <span className="faq-q">{f.q}</span>
                  <span className={`faq-plus ${active === i ? 'faq-plus--active' : ''}`}>+</span>
                </button>
                <div className={`faq-body ${active === i ? 'faq-body--open' : ''}`}>
                  <div className="faq-body-inner">
                    <p className="faq-a">{f.a}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        .faq-grid { max-width: 900px; margin: 0 auto; border-top: 1px solid var(--charcoal); }
        .faq-item { border-bottom: 1px solid var(--charcoal); }
        .faq-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 32px 0; background: none; border: none; cursor: pointer;
        }
        .faq-q { 
          font-family: 'american-typewriter', serif;
          font-size: 24px; font-weight: 250; color: var(--charcoal); 
        }
        .faq-plus { font-size: 32px; font-weight: 200; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .faq-plus--active { transform: rotate(45deg); color: var(--brand); }
        
        .faq-body { 
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden; 
        }
        .faq-body--open { grid-template-rows: 1fr; }
        
        .faq-body-inner { 
          min-height: 0; 
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.5s var(--transition);
        }
        .faq-body--open .faq-body-inner { opacity: 1; transform: translateY(0); }

        .faq-a { padding-bottom: 32px; font-size: 16px; font-weight: 400; color: rgba(31, 30, 29, 0.6); }
      `}</style>
    </section>
  );
}
