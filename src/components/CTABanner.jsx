import { useEffect, useRef } from 'react';

export default function CTABanner() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  return (
    <section id="contact" className="section-dark" style={{ padding: '120px 0' }}>
      <div className="container reveal" ref={ref}>
        <div className="cta-layout">
          <div className="cta-left">
            <h2 style={{ color: '#fff', maxWidth: '480px' }}>
              Ready to build something amazing?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '480px', marginTop: '20px', lineHeight: 1.7 }}>
              Book a free 30-minute strategy call. No pressure, no pitch — just clarity on how Globlyn can help your business thrive online.
            </p>
          </div>
          <div className="cta-right">
            <a href="#" className="btn btn-white">Let's talk</a>
            <a href="mailto:hello@globlyn.com" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '16px', display: 'block' }}>
              or email hello@globlyn.com
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .cta-layout {
          display: flex; justify-content: space-between; align-items: center;
          gap: 64px; flex-wrap: wrap;
        }
        .cta-right { display: flex; flex-direction: column; align-items: flex-start; }
        @media (max-width: 768px) {
          .cta-layout { flex-direction: column; align-items: flex-start; gap: 32px; }
        }
      `}</style>
    </section>
  );
}
