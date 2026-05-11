import { useState } from 'react';

const testimonials = [
  { quote: 'Globlyn transformed our outdated website into a conversion machine. Within 30 days of launch, our leads doubled.', name: 'RAHUL K.', role: 'CEO, RETAILEDGE' },
  { quote: 'From strategy to launch in 3 weeks. Globlyn understood our vision immediately. Exceptional work.', name: 'PRIYA M.', role: 'FOUNDER, STYLENEST' },
  { quote: 'We needed a partner who could move fast. Globlyn delivered a custom web app in under 4 weeks.', name: 'ARJUN J.', role: 'CTO, FINTRACK' },
  { quote: 'Their attention to detail is extraordinary. The SEO + design combo is brilliant.', name: 'SNEHA M.', role: 'MARKETING HEAD, GROWTHBASE' },
];

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section theme--light testi-viewport">
      <div className="container">
        <div className="testi-header">
          <span className="testi-sub">TESTIMONIALS</span>
          <h2 className="testi-title">Words from our clients</h2>
        </div>

        <div className="testi-slider">
          <div className="testi-content">
            <p className="testi-quote" key={index}>
              "{testimonials[index].quote}"
            </p>
            <div className="testi-meta">
              <span className="testi-name">{testimonials[index].name}</span>
              <span className="testi-role">{testimonials[index].role}</span>
            </div>
          </div>

          <div className="testi-nav">
            <button onClick={prev} className="nav-btn" aria-label="Previous testimonial">
              <ArrowLeft />
            </button>
            <div className="nav-dots">
              {testimonials.map((_, i) => (
                <span key={i} className={`nav-dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
              ))}
            </div>
            <button onClick={next} className="nav-btn" aria-label="Next testimonial">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testi-viewport {
          padding: 120px 0;
          background: var(--white);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .testi-header { margin-bottom: 80px; }
        .testi-sub { font-size: 11px; font-weight: 800; letter-spacing: 0.3em; color: var(--brand); display: block; margin-bottom: 16px; }
        .testi-title { 
          font-family: 'american-typewriter', serif;
          font-size: 56px; font-weight: 250; letter-spacing: -0.02em; 
          line-height: 0.9;
          color: var(--charcoal);
        }

        .testi-slider {
          max-width: 800px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testi-quote {
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 400;
          line-height: 1.4;
          margin-bottom: 40px;
          color: var(--charcoal);
          opacity: 0.9;
          animation: fadeSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .testi-meta { display: flex; flex-direction: column; gap: 4px; margin-bottom: 60px; }
        .testi-name { font-size: 16px; font-weight: 700; color: var(--charcoal); }
        .testi-role { font-size: 12px; font-weight: 400; color: var(--charcoal); opacity: 0.5; letter-spacing: 0.05em; }

        .testi-nav { display: flex; align-items: center; gap: 32px; }
        .nav-btn {
          background: none; border: 1px solid rgba(0,0,0,0.1); 
          color: var(--charcoal); width: 50px; height: 50px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s;
        }
        .nav-btn:hover { border-color: var(--brand); color: var(--brand); }
        
        .nav-dots { display: flex; gap: 12px; }
        .nav-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(0,0,0,0.1); cursor: pointer; transition: 0.3s;
        }
        .nav-dot.active { background: var(--brand); transform: scale(1.5); }

        @media (max-width: 768px) {
          .testi-title { font-size: 32px; }
          .testi-quote { font-size: 20px; }
          .testi-nav { gap: 24px; }
          .nav-btn { width: 44px; height: 44px; }
        }
      `}</style>
    </section>
  );
}
