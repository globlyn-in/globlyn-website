import { useEffect, useRef } from 'react';

const cards = [
  { title: 'Speed Without Compromise', desc: '14-day landing page delivery. Agile sprints with daily updates. No scope creep, no delays.' },
  { title: 'AI-First Thinking', desc: 'We evaluate every project for automation opportunities. AI is built into your workflow, not layered on top.' },
  { title: 'Measurable Results', desc: 'ROI-tracked deliverables from day one. Monthly analytics reports. Clear KPIs before writing a single line of code.' },
  { title: 'True Partnership', desc: "No outsourcing — your project stays in our team. Single point of contact. Post-launch support as standard." },
];

export default function WhyGloblyn() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  return (
    <section id="about" className="section">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">Why Globlyn</span>
        <h2 style={{ maxWidth: '600px', marginBottom: '64px' }}>
          Why businesses choose us over the rest
        </h2>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div key={i} className="why-card">
              <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{c.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px 64px; }
        .why-card { padding-top: 24px; border-top: 1px solid var(--border); }
        .why-num { font-size: 12px; font-weight: 600; color: var(--accent); display: block; margin-bottom: 16px; }
        @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>
    </section>
  );
}
