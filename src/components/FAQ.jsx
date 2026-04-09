import { useState, useEffect, useRef } from 'react';

const faqs = [
  { q: 'How long does it take to build a website?', a: 'A landing page takes 7–14 days. A full website takes 3–5 weeks. Custom web apps take 6–12 weeks depending on scope.' },
  { q: 'Do you work with businesses outside India?', a: 'Absolutely. We work with clients globally and align with any time zone for calls and weekly demos.' },
  { q: 'What AI automation tools do you use?', a: 'n8n, Make, Zapier, OpenAI APIs, LangChain, and custom Python scripts tailored to your workflow.' },
  { q: 'Do I need technical knowledge to work with you?', a: 'None at all. We translate business goals into technical solutions and explain everything in plain language.' },
  { q: 'What happens after the website launches?', a: 'All packages include 30-day post-launch support. We offer ongoing maintenance retainers for continued growth.' },
  { q: 'Can you help with SEO and digital marketing?', a: 'Yes. Every website ships with SEO fundamentals built in. We offer add-ons for content strategy and growth marketing.' },
];

export default function FAQ() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  return (
    <section id="faq" className="section section-muted">
      <div className="container reveal" ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }} className="faq-layout">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginTop: '20px', lineHeight: 1.7 }}>
              Can't find what you're looking for? Feel free to reach out — we'd love to help.
            </p>
            <a href="#contact" className="btn btn-solid" style={{ marginTop: '32px' }}>Ask us anything</a>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item" style={{ borderBottom: '1px solid var(--border)' }}>
                <button className="faq-q" onClick={() => setActive(active === i ? null : i)}>
                  <span style={{ flex: 1, textAlign: 'left' }}>{f.q}</span>
                  <span className="faq-icon" style={{ transform: active === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div className="faq-a" style={{ maxHeight: active === i ? '200px' : '0' }}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .faq-list { border-top: 1px solid var(--border); }
        .faq-q {
          width: 100%; display: flex; align-items: center; gap: 16px;
          padding: 24px 0; font-size: 16px; font-weight: 600;
          color: var(--text); background: none; border: none; cursor: pointer;
        }
        .faq-icon {
          font-size: 20px; font-weight: 300; color: var(--text-muted);
          transition: transform 0.3s;
        }
        .faq-a {
          overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-a p { padding-bottom: 24px; font-size: 14px; color: var(--text-secondary); line-height: 1.7; }
        @media (max-width: 900px) { .faq-layout { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
