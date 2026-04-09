import { useState, useEffect, useRef } from 'react';

const services = [
  { title: 'Web Development', desc: 'Custom websites built for speed, SEO, and conversion. From landing pages to full-stack web applications.', items: ['Landing Pages', 'E-commerce', 'Web Apps', 'Next.js', 'React'] },
  { title: 'AI Automation', desc: 'Automate repetitive tasks, build AI chatbots, and integrate intelligent workflows that run 24/7.', items: ['Chatbots', 'n8n Flows', 'OpenAI', 'CRM Sync', 'LangChain'] },
  { title: 'UI/UX Design', desc: 'Research-backed design that looks stunning and converts visitors into paying customers.', items: ['Figma', 'Prototyping', 'User Research', 'Design Systems'] },
  { title: 'E-Commerce Solutions', desc: 'High-converting online stores on Shopify or WooCommerce with full payment integration.', items: ['Shopify', 'WooCommerce', 'Stripe', 'Razorpay'] },
  { title: 'SEO & Performance', desc: 'Rank higher, load faster, and grow organically with technical SEO and core web vitals optimization.', items: ['Technical SEO', 'Core Web Vitals', 'Schema', 'Analytics'] },
  { title: 'Maintenance & Support', desc: 'Keep your site secure, updated, and always online with ongoing support plans.', items: ['Updates', 'Security', 'Uptime', 'Backups'] },
];

export default function Services() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // Scroll reveal observer
    const container = ref.current?.querySelector('.container');
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (container) obs.observe(container);

    // Scroll trigger for semicircle background
    const bgRefEl = document.getElementById('svc-bg-circle');
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (trackRef.current && bgRefEl) {
            const rect = trackRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            const maxScroll = rect.height - windowHeight; // Very short scroll phase
            let depth = -rect.top;
            
            if (depth < 0) {
              // Section entering bounds: stays purely white, circle sits perfectly small at bottom
              bgRefEl.style.transform = `translateX(-50%) scale(1)`;
              ref.current.classList.remove('svc-dark-mode');
            } else {
              // Section is now perfectly visible and sticky. Let's scrub!
              if (depth > maxScroll) depth = maxScroll; 
              
              const overallProgress = depth / maxScroll; // 0 to 1
              // Finish expansion at exactly 50% of the track.
              // The remaining 50% of sticky scroll acts as a solid ~0.5s visual pause
              const animationProgress = Math.min(1, overallProgress / 0.5);
              
              // Scale to completely eclipse screen limits
              let s = 1 + (animationProgress * 24); 
              bgRefEl.style.transform = `translateX(-50%) scale(${s})`;
              
              // Swap text colors slightly before it completely overtakes
              if (s > 5) {
                 ref.current.classList.add('svc-dark-mode');
              } else {
                 ref.current.classList.remove('svc-dark-mode');
              }
              
              // Perfectly solidify background to clear any gradient translucent edges
              if (animationProgress >= 1) {
                 ref.current.classList.add('svc-fully-blue');
              } else {
                 ref.current.classList.remove('svc-fully-blue');
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init

    return () => {
      if (container) obs.unobserve(container);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="svc-track" ref={trackRef}>
        <section id="services" className="svc-section" ref={ref}>
          <div id="svc-bg-circle" className="svc-bg-circle" />
          <div className="container reveal">
        <span className="eyebrow">What we do</span>
        <h2 style={{ maxWidth: '600px', marginBottom: '64px' }}>
          Everything your business needs to thrive digitally
        </h2>

        <div className="svc-list">
          {services.map((s, i) => (
            <div key={i} className={`svc-row ${active === i ? 'svc-row--open' : ''}`}>
              <button className="svc-header" onClick={() => setActive(active === i ? null : i)}>
                <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="svc-title">{s.title}</h3>
                <span className="svc-toggle">{active === i ? '−' : '+'}</span>
              </button>
              <div className="svc-body" style={{ maxHeight: active === i ? '300px' : '0' }}>
                <div className="svc-body-inner">
                  <p className="svc-desc">{s.desc}</p>
                  <div className="svc-items">
                    {s.items.map(item => (
                      <span key={item} className="svc-item">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </div>

      <style>{`
        .svc-track {
          height: 190vh; /* Smooth distance (approx 90vh track scroll) -> 50% anim / 50% pause */
          position: relative;
        }
        .svc-section {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: var(--bg);
          transition: background-color 0.5s ease;
          padding: 140px 0 60px; /* Big top margin clears the navbar perfectly */
        }
        .svc-bg-circle {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform-origin: bottom center;
          transform: translateX(-50%) scale(1);
          width: 400px;
          height: 200px;
          background: radial-gradient(200px 200px at 50% 100%, #0F35A9 70%, transparent 100%);
          border-radius: 200px 200px 0 0;
          border: none;
          box-shadow: none;
          z-index: 0;
          will-change: transform;
          pointer-events: none;
        }
        .svc-section.svc-fully-blue {
          background: #0F35A9 !important;
        }
        .svc-section .container {
          position: relative;
          z-index: 1;
        }
        
        .svc-list { border-top: 1px solid var(--border); transition: border-color 0.4s ease; }
        .svc-row { border-bottom: 1px solid var(--border); transition: border-color 0.4s ease; }
        .svc-header {
          width: 100%; display: flex; align-items: center; gap: 24px;
          padding: 28px 0; cursor: pointer;
          background: none; border: none; text-align: left;
          transition: all 0.2s;
        }
        .svc-header:hover { padding-left: 8px; }
        .svc-num {
          font-size: 13px; font-weight: 500; color: var(--text-muted);
          min-width: 28px; font-variant-numeric: tabular-nums;
        }
        .svc-title {
          flex: 1; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;
          transition: color 0.2s;
        }
        .svc-row--open .svc-title { color: var(--accent); }
        .svc-toggle {
          font-size: 24px; font-weight: 300; color: var(--text-muted);
          width: 32px; text-align: center;
          transition: transform 0.3s;
        }
        .svc-body {
          overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .svc-body-inner { padding: 0 0 28px 52px; }
        .svc-desc {
          font-size: 15px; color: var(--text-secondary); max-width: 520px;
          line-height: 1.7; margin-bottom: 16px;
        }
        .svc-items { display: flex; flex-wrap: wrap; gap: 8px; }
        .svc-item {
          font-size: 13px; font-weight: 500; color: var(--accent);
          background: var(--accent-subtle);
          padding: 6px 14px; border-radius: 6px;
          transition: background 0.4s ease, color 0.4s ease;
        }

        /* Elements transition to white when dark mode kicks in */
        .svc-section h2, .svc-section .eyebrow, .svc-section .svc-title, 
        .svc-section .svc-num, .svc-section .svc-desc, .svc-section .svc-toggle {
          transition: color 0.4s ease;
        }

        .svc-section.svc-dark-mode h2,
        .svc-section.svc-dark-mode .eyebrow,
        .svc-section.svc-dark-mode .svc-title,
        .svc-section.svc-dark-mode .svc-num,
        .svc-section.svc-dark-mode .svc-desc,
        .svc-section.svc-dark-mode .svc-toggle {
          color: #ffffff !important;
        }
        .svc-section.svc-dark-mode .svc-list,
        .svc-section.svc-dark-mode .svc-row {
          border-color: rgba(255,255,255,0.2) !important;
        }
        .svc-section.svc-dark-mode .svc-item {
          background: #ffffff !important;
          color: #0F35A9 !important;
        }
        @media (max-width: 768px) {
          .svc-title { font-size: 18px; }
          .svc-body-inner { padding-left: 0; }
        }
      `}</style>
    </>
  );
}
