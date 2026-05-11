import { useEffect, useRef, useState } from 'react';
import heroImage from '../assets/software-professional.jpeg';

export default function Revealer() {
  const wrapperRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fullText = "WE TRANSFORM IDEAS INTO HIGH-PERFORMANCE DIGITAL ECOSYSTEMS WITH PRECISION AND PURPOSE.";
  const words = fullText.split(' ');
  const focusWords = ["IDEAS", "PRECISION"];

  // Timelines
  const textP = Math.min(Math.max(scrollProgress / 0.35, 0), 1);
  const mediaP = Math.min(Math.max((scrollProgress - 0.35) / 0.65, 0), 1);
  const ratioP = Math.min(Math.max((mediaP - 0.4) / 0.6, 0), 1);

  const navbarHeight = 90;
  const centerY = 50 + (navbarHeight / 2 / window.innerHeight * 100);
  const endTop = (navbarHeight / window.innerHeight) * 100;
  const startTop = 130;

  let currentTop, currentTranslateY;
  if (mediaP < 0.4) {
    const p = mediaP / 0.4;
    currentTop = startTop - (p * (startTop - centerY));
    currentTranslateY = -50;
  } else {
    const p = (mediaP - 0.4) / 0.6;
    currentTop = centerY - (p * (centerY - endTop));
    currentTranslateY = -50 + (p * 50);
  }

  const width = 35 + (ratioP * 65);
  const height = 50 + (ratioP * 20);

  return (
    <div className="revealer-wrapper" ref={wrapperRef}>
      <section className="revealer-sticky theme--light">

        {/* Layer 1: Text Reveal */}
        <div
          className="container text-layer"
          style={{
            opacity: 1 - ratioP * 1.5,
            filter: `blur(${ratioP * 8}px)`,
            top: `${centerY}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <h2 className="revealer-text">
            {words.map((word, i) => {
              const wordP = Math.min(Math.max((textP - (i / words.length)) / (1 / words.length), 0), 1);
              return (
                <span key={i} className="word-wrapper">
                  <span className="word-base">{word} </span>
                  <span
                    className={`word-overlay ${focusWords.includes(word) ? 'focus' : ''}`}
                    style={{ clipPath: `inset(0 ${100 - wordP * 100}% 0 0)` }}
                  >
                    {word}{' '}
                  </span>
                </span>
              );
            })}
          </h2>
        </div>

        {/* Layer 2: Image Component */}
        <div
          className="media-layer"
          style={{
            opacity: mediaP > 0 ? 1 : 0,
            top: `${currentTop}%`,
            left: '50%',
            transform: `translate(-50%, ${currentTranslateY}%)`,
            width: `${width}%`,
            height: `${height}vh`,
            borderRadius: `${(1 - ratioP) * 30}px`,
            transition: 'none'
          }}
        >
          <img src={heroImage} alt="Professional Showcase" className="revealer-img" />
        </div>

        {/* Layer 3: Bottom Content Area */}
        <div
          className="bottom-content"
          style={{
            opacity: ratioP > 0.9 ? (ratioP - 0.9) * 10 : 0,
            transform: `translateY(${(1 - ratioP) * 30}px)`
          }}
        >
          <div className="container bottom-inner">
            <div className="stat-group">
              <div className="stat-box"><span className="stat-label">SUCCESS</span><span className="stat-value">99%</span></div>
              <div className="stat-box"><span className="stat-label">INDUSTRIES</span><span className="stat-value">25+</span></div>
              <div className="stat-box"><span className="stat-label">QUALITY</span><span className="stat-value">A+</span></div>
            </div>
            <div className="content-reveal-group">
              <p className="bottom-desc">
                Our engineering team combines technical rigor with creative strategy to deliver solutions that redefine standards.
              </p>
            </div>
          </div>
        </div>

      </section>

      <style>{`
        .revealer-wrapper {
          height: 600vh;
          background: var(--white);
          position: relative;
          z-index: 2;
        }
        .revealer-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .text-layer {
          position: absolute;
          left: 50%;
          z-index: 5;
          text-align: center;
          width: 60vw;
        }
        .revealer-text {
          font-family: 'american-typewriter', serif;
          font-size: clamp(28px, 5.5vw, 90px);
          line-height: 1.1;
          font-weight: 200;
          margin: 0 auto;
          word-spacing: 0.4em;
        }
        .word-wrapper { position: relative; display: inline-block; margin-right: 0.4em; }
        .word-base { color: rgba(0, 0, 0, 0.05); }
        .word-overlay { position: absolute; top: 0; left: 0; color: var(--charcoal); white-space: nowrap; }
        .word-overlay.focus { color: var(--brand); }

        .media-layer {
          position: absolute;
          z-index: 10;
          overflow: hidden;
          background: #000;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
        }
        .revealer-img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .bottom-content {
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: calc(30vh - 45px);
          z-index: 15;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          border-top: 1px solid rgba(0,0,0,0.1);
        }
        .bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
          width: 100%;
        }
        .stat-group { display: flex; gap: 40px; }
        .stat-box { display: flex; flex-direction: column; }
        .stat-label { font-size: 10px; opacity: 0.5; letter-spacing: 0.1em; }
        .stat-value { font-size: 32px; font-weight: 800; color: var(--brand); }
        .bottom-desc { font-size: 16px; max-width: 500px; opacity: 0.7; font-weight: 300; }

        @media (max-width: 1024px) {
          .text-layer { width: 85vw; }
          .bottom-inner { flex-direction: column; text-align: center; gap: 30px; }
        }
        @media (max-width: 768px) {
          .revealer-text { font-size: 32px; word-spacing: 0.2em; }
        }
      `}</style>
    </div>
  );
}
