import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 40, suffix: 'hrs', label: 'Average Weekly Time Saved' },
  { value: 98, suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 3, suffix: '×', label: 'Average Business Growth' },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !triggered) { setTriggered(true); obs.unobserve(e.target); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const dur = 2000, start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    const animate = now => {
      const p = Math.min((now - start) / dur, 1);
      setCounts(stats.map(s => Math.round(ease(p) * s.value)));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [triggered]);

  return (
    <section ref={ref} className="section-dark section">
      <div className="container">
        <span className="eyebrow">Numbers</span>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{counts[i]}{s.suffix}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 48px; }
        .stat-item { padding: 32px 0; border-right: 1px solid rgba(255,255,255,0.06); }
        .stat-item:last-child { border-right: none; }
        .stat-num { font-size: 56px; font-weight: 800; color: #fff; letter-spacing: -2px; line-height: 1; margin-bottom: 8px; }
        .stat-label { font-size: 14px; color: rgba(255,255,255,0.35); font-weight: 400; }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 0; }
          .stat-num { font-size: 40px; }
          .stat-item { border-right: none; }
        }
      `}</style>
    </section>
  );
}
