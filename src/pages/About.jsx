import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="theme--light" style={{ paddingTop: '100px' }}>
        <section className="section">
          <ScrollReveal className="container">
            <span className="subheading" style={{ fontSize: '14px', letterSpacing: '0.2em', marginBottom: '32px', display: 'block' }}>
              WHO WE ARE
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 100px)', lineHeight: 0.9, marginBottom: '60px' }}>
              ENGINEERING<br />THE FUTURE OF<br />BUSINESS.
            </h1>
            
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Globlyn was founded on a simple premise: technology should be a multiplier, not a bottleneck. 
                  We saw too many businesses struggling with fragmented systems and outdated workflows, 
                  and we decided to build a bridge to the future.
                </p>
                <p>
                  Today, we are a high-performance team of engineers, designers, and AI specialists 
                  dedicated to helping brands scale. We don't just build websites; we build 
                  intelligent digital ecosystems that drive growth, automate complexity, and 
                  deliver measurable results.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-num">08+</span>
                  <span className="stat-label">YEARS EXP.</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">120+</span>
                  <span className="stat-label">PROJECTS DONE.</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">99%</span>
                  <span className="stat-label">HAPPY CLIENTS.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="section theme--dark">
          <div className="container">
            <ScrollReveal delay={100}>
              <h2 style={{ marginBottom: '60px', fontSize: 'clamp(32px, 5vw, 64px)' }}>OUR VALUES.</h2>
            </ScrollReveal>
            <div className="values-grid">
              {[
                { t: 'PRECISION', d: 'We believe in clean code, perfect pixels, and flawless execution.' },
                { t: 'AUTOMATION', d: 'If a task is repetitive, it belongs to the machine. We free humans for high-value work.' },
                { t: 'PARTNERSHIP', d: 'We are not a vendor; we are an extension of your team.' }
              ].map((v, i) => (
                <ScrollReveal key={i} delay={100 * (i + 1)} className="value-item">
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .about-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 80px; align-items: flex-start; }
        .about-text p { font-size: 20px; font-weight: 400; line-height: 1.8; margin-bottom: 32px; color: rgba(31, 30, 29, 0.7); }
        .about-stats { display: flex; flex-direction: column; gap: 40px; border-left: 2px solid var(--charcoal); padding-left: 40px; }
        .stat-item { display: flex; flex-direction: column; }
        .stat-num { font-size: 48px; font-weight: 800; color: var(--charcoal); line-height: 1; }
        .stat-label { font-size: 11px; font-weight: 400; letter-spacing: 0.1em; opacity: 0.5; }
        
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .value-item h3 { font-size: 20px; margin-bottom: 16px; color: var(--white); }
        .value-item p { font-size: 14px; font-weight: 250; color: rgba(255, 255, 255, 0.6); line-height: 1.6; }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-stats { border-left: none; padding-left: 0; flex-direction: row; justify-content: space-between; }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
