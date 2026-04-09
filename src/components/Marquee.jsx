export default function Marquee() {
  const logos = ['RetailEdge', 'StyleNest', 'FinTrack', 'GrowthBase', 'TechCore', 'SwiftBuild', 'NovaMart', 'DigitalFirst'];

  return (
    <section style={{ padding: '48px 0', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Trusted by businesses across industries
        </p>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...logos, ...logos].map((name, i) => (
            <span key={i} className="marquee-item">{name}</span>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track {
          display: flex; gap: 48px; width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-item {
          font-size: 16px; font-weight: 600; color: var(--text-muted);
          white-space: nowrap; letter-spacing: -0.3px;
        }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>
    </section>
  );
}
