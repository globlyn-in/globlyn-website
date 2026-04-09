import { useState, useEffect, useRef } from 'react';

const projects = [
  { title: 'RetailEdge Store', cat: 'web', label: 'E-Commerce', stat: '300% organic traffic in 60 days', bg: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' },
  { title: 'FinTrack Dashboard', cat: 'ai', label: 'SaaS + AI', stat: 'AI saves 20hrs/week for their team', bg: 'linear-gradient(135deg, #0c0f17, #334155)' },
  { title: 'StyleNest Rebrand', cat: 'web', label: 'Web Dev', stat: '4.8s → 0.9s load time achieved', bg: 'linear-gradient(135deg, #4c1d95, #7c3aed)' },
  { title: 'GrowthBase CRM', cat: 'ai', label: 'AI Automation', stat: '60% task reduction via n8n flows', bg: 'linear-gradient(135deg, #065f46, #10b981)' },
  { title: 'SwiftBuild Portal', cat: 'web', label: 'Web App', stat: 'Full web app built in 3 weeks', bg: 'linear-gradient(135deg, #78350f, #d97706)' },
  { title: 'NovaMart Launch', cat: 'ecommerce', label: 'E-Commerce', stat: '₹2Cr revenue in first quarter', bg: 'linear-gradient(135deg, #0f172a, #475569)' },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Dev' },
  { id: 'ai', label: 'AI Automation' },
  { id: 'ecommerce', label: 'E-Commerce' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);

  return (
    <section id="portfolio" className="section section-muted">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">Our work</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
          <h2 style={{ maxWidth: '500px' }}>Work that speaks for itself</h2>
          <div className="port-filters">
            {filters.map(f => (
              <button key={f.id} className={`port-filter ${filter === f.id ? 'port-filter--active' : ''}`} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="port-grid">
          {filtered.map((p, i) => (
            <a key={i} href="#" className="port-card">
              <div className="port-img" style={{ background: p.bg }} />
              <div className="port-info">
                <span className="port-label">{p.label}</span>
                <h3 className="port-title">{p.title}</h3>
                <p className="port-stat">{p.stat}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .port-filters { display: flex; gap: 4px; }
        .port-filter {
          padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: 500;
          color: var(--text-secondary); background: transparent; border: none;
          transition: all 0.2s; cursor: pointer;
        }
        .port-filter:hover { color: var(--text); }
        .port-filter--active { background: var(--text); color: #fff; }

        .port-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;
        }
        .port-card {
          display: block; border-radius: var(--radius); overflow: hidden;
          background: #fff; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .port-card:hover { transform: translateY(-6px); }
        .port-img { aspect-ratio: 16/10; }
        .port-info { padding: 28px 28px 32px; }
        .port-label {
          font-size: 12px; font-weight: 600; color: var(--accent);
          letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 8px;
        }
        .port-title { font-size: 22px; margin-bottom: 8px; }
        .port-stat { font-size: 14px; color: var(--text-secondary); }

        @media (max-width: 768px) { .port-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
