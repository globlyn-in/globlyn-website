import { useState, useEffect, useRef } from 'react';

const testimonials = [
  { quote: 'Globlyn transformed our outdated website into a conversion machine. Within 30 days of launch, our leads doubled. Their AI chatbot alone saves us 20+ hours a week in customer support.', name: 'Rahul K.', role: 'CEO, RetailEdge India' },
  { quote: 'From strategy to launch in 3 weeks. Globlyn understood our vision immediately. The AI automation they built cut our order processing time by 60%. Exceptional work.', name: 'Priya M.', role: 'Founder, StyleNest' },
  { quote: 'We needed a tech partner who could move fast and think big. Globlyn delivered a custom web app and AI workflow in under 4 weeks. Genuinely impressed.', name: 'Arjun J.', role: 'CTO, FinTrack Solutions' },
  { quote: 'Their attention to detail is extraordinary. Our website ranks on page 1 of Google for all main keywords. The SEO + design combo is brilliant and worth every rupee.', name: 'Sneha M.', role: 'Marketing Head, GrowthBase' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const ref = useRef(null);

  const goTo = (next) => {
    setFading(true);
    setTimeout(() => { setIdx(next); setFading(false); }, 300);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  const t = testimonials[idx];

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container reveal" ref={ref}>
        <span className="eyebrow">Testimonials</span>
        <h2 style={{ maxWidth: '500px', marginBottom: '64px' }}>Our clients say it best</h2>

        <div className="testi-wrap">
          <div className={`testi-content ${fading ? 'testi--fade' : ''}`}>
            <blockquote className="testi-quote">"{t.quote}"</blockquote>
            <div className="testi-author">
              <div className="testi-avatar">{t.name.split(' ').map(n => n[0]).join('')}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>

          <div className="testi-nav">
            <button onClick={() => goTo((idx - 1 + testimonials.length) % testimonials.length)} className="testi-arr">←</button>
            <span className="testi-count">{idx + 1} / {testimonials.length}</span>
            <button onClick={() => goTo((idx + 1) % testimonials.length)} className="testi-arr">→</button>
          </div>
        </div>
      </div>

      <style>{`
        .testi-wrap {
          max-width: 720px;
        }
        .testi-content {
          transition: opacity 0.3s, transform 0.3s;
        }
        .testi--fade { opacity: 0; transform: translateY(8px); }
        .testi-quote {
          font-size: 24px; font-weight: 400; line-height: 1.6;
          color: var(--text); letter-spacing: -0.3px;
          margin-bottom: 32px;
        }
        .testi-author { display: flex; align-items: center; gap: 16px; }
        .testi-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          background: var(--bg-dark); color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 14px;
        }
        .testi-name { font-weight: 600; font-size: 15px; }
        .testi-role { font-size: 13px; color: var(--text-muted); margin-top: 2px; }

        .testi-nav {
          display: flex; align-items: center; gap: 16px;
          margin-top: 48px; padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .testi-arr {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid var(--border); display: flex;
          align-items: center; justify-content: center;
          font-size: 16px; transition: all 0.2s;
          color: var(--text);
        }
        .testi-arr:hover { border-color: var(--text); background: var(--text); color: #fff; }
        .testi-count { font-size: 13px; color: var(--text-muted); font-variant-numeric: tabular-nums; }

        @media (max-width: 768px) { .testi-quote { font-size: 18px; } }
      `}</style>
    </section>
  );
}
