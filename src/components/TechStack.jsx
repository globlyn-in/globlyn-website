import { useEffect, useRef } from 'react';

const groups = [
  { label: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'Django', 'Express'] },
  { label: 'AI & Automation', items: ['OpenAI GPT-4', 'LangChain', 'n8n', 'Make', 'Zapier'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'Vercel', 'Google Cloud', 'Supabase', 'Firebase'] },
  { label: 'E-Commerce', items: ['Shopify', 'WooCommerce', 'Stripe', 'Razorpay', 'Medusa'] },
];

export default function TechStack() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  return (
    <section className="section">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">Technical expertise</span>
        <h2 style={{ maxWidth: '550px', marginBottom: '64px' }}>Powered by the best technology stack</h2>
        <div className="tech-list">
          {groups.map((g, i) => (
            <div key={i} className="tech-row">
              <span className="tech-label">{g.label}</span>
              <div className="tech-items">
                {g.items.map(t => <span key={t} className="tech-item">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .tech-list { border-top: 1px solid var(--border); }
        .tech-row {
          display: flex; align-items: center; gap: 40px;
          padding: 24px 0; border-bottom: 1px solid var(--border);
        }
        .tech-label {
          min-width: 160px; font-size: 14px; font-weight: 600; color: var(--text-muted);
        }
        .tech-items { display: flex; flex-wrap: wrap; gap: 10px; }
        .tech-item {
          font-size: 14px; font-weight: 500; color: var(--text);
          padding: 6px 16px; border-radius: 6px;
          border: 1px solid var(--border); transition: all 0.2s;
        }
        .tech-item:hover { border-color: var(--accent); color: var(--accent); }
        @media (max-width: 768px) {
          .tech-row { flex-direction: column; align-items: flex-start; gap: 12px; }
          .tech-label { min-width: auto; }
        }
      `}</style>
    </section>
  );
}
