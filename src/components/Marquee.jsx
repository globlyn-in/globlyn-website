export default function Marquee() {
  const logos = ['RETAILEDGE', 'STYLENEST', 'FINTRACK', 'GROWTHBASE', 'TECHCORE', 'SWIFTBUILD', 'NOVAMART', 'DIGITALFIRST'];

  return (
    <section className="marquee">
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...logos, ...logos, ...logos].map((name, i) => (
            <span key={i} className="marquee-item">{name}</span>
          ))}
        </div>
      </div>
      <style>{`
        .marquee {
          padding: 60px 0;
          background: #F84525;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .marquee-track {
          display: flex; gap: 100px; width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-item {
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 800; color: var(--white);
          white-space: nowrap; letter-spacing: -0.02em;
          opacity: 0.3; transition: opacity 0.3s;
        }
        .marquee-item:hover { opacity: 1; }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }
      `}</style>
    </section>
  );
}
