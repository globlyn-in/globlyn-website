import { useEffect, useRef } from 'react';

const plans = [
  { name: 'Starter', price: '₹24,999', per: 'one-time', features: ['5-page business website', 'Mobile responsive design', 'Basic SEO setup', 'Contact form integration', '30-day support', '2 revision rounds'] },
  { name: 'Growth', price: '₹59,999', per: 'one-time', featured: true, features: ['10-page custom website', 'UI/UX design included', '1 AI chatbot / automation', 'Full SEO optimization', 'CMS / blog integration', 'Analytics dashboard', '60-day support', 'Unlimited revisions'] },
  { name: 'Enterprise', price: 'Custom', per: 'scoped', features: ['Full web app / SaaS build', 'Advanced AI automation suite', 'Custom integrations (CRM/ERP)', 'Dedicated project manager', 'Ongoing retainer available', 'Priority support 24/7'] },
];

export default function Pricing() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  return (
    <section id="pricing" className="section section-muted">
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">Pricing</span>
        <h2 style={{ maxWidth: '500px', marginBottom: '64px' }}>Transparent pricing, no surprises</h2>

        <div className="price-grid">
          {plans.map((p, i) => (
            <div key={i} className={`price-card ${p.featured ? 'price-card--feat' : ''}`}>
              {p.featured && <div className="price-badge">Most popular</div>}
              <h3 style={{ marginBottom: '16px' }}>{p.name}</h3>
              <div className="price-amount">{p.price}</div>
              <div className="price-per">{p.per}</div>
              <ul className="price-features">
                {p.features.map((f, j) => (
                  <li key={j}><span className="price-check">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${p.featured ? 'btn-solid' : 'btn-ghost'}`} style={{ width: '100%', justifyContent: 'center' }}>
                {p.featured ? 'Get started' : i === 0 ? 'Get started' : 'Talk to us'}
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .price-card {
          background: #fff; border-radius: var(--radius); padding: 40px 32px;
          border: 1px solid var(--border); position: relative;
          transition: transform 0.3s;
        }
        .price-card:hover { transform: translateY(-4px); }
        .price-card--feat { border-color: var(--accent); border-width: 2px; }
        .price-badge {
          position: absolute; top: -12px; left: 32px;
          background: var(--accent); color: #fff;
          font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          padding: 4px 14px; border-radius: 4px;
        }
        .price-amount { font-size: 40px; font-weight: 800; letter-spacing: -2px; color: var(--text); }
        .price-per { font-size: 13px; color: var(--text-muted); margin-bottom: 32px; }
        .price-features { margin-bottom: 32px; }
        .price-features li {
          display: flex; gap: 10px; align-items: flex-start;
          padding: 10px 0; font-size: 14px; color: var(--text-secondary);
          border-bottom: 1px solid var(--border-light);
        }
        .price-features li:last-child { border-bottom: none; }
        .price-check { color: var(--green); font-weight: 700; flex-shrink: 0; }
        @media (max-width: 1024px) { .price-grid { grid-template-columns: 1fr; max-width: 480px; } }
      `}</style>
    </section>
  );
}
