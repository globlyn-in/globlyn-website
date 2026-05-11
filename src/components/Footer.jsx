import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="footer theme--dark">
      <div className="container">
        <div className="footer-top">
          <ScrollReveal delay={100} className="footer-brand">
            <span className="footer-logo">GLOBLYN<span>.</span></span>
            <p className="footer-tagline">BUILD. AUTOMATE. GROW.</p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="footer-links">
            <div className="footer-col">
              <h4>SOCIALS</h4>
              <a href="#">LINKEDIN</a>
              <a href="#">TWITTER</a>
              <a href="#">GITHUB</a>
            </div>
            <div className="footer-col">
              <h4>LEGAL</h4>
              <a href="#">PRIVACY</a>
              <a href="#">TERMS</a>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={300} className="footer-bottom">
          <span>© 2026 GLOBLYN. ALL RIGHTS RESERVED.</span>
        </ScrollReveal>
      </div>
      <style>{`
        .footer { padding: 100px 0 40px; border-top: 1px solid rgba(255, 255, 255, 0.1); background: var(--charcoal); color: var(--white); }
        .footer-top { display: flex; justify-content: space-between; margin-bottom: 100px; }
        .footer-logo { font-weight: 900; font-size: 32px; letter-spacing: -0.05em; }
        .footer-logo span { color: var(--brand); }
        .footer-tagline { font-weight: 800; font-size: 12px; margin-top: 8px; opacity: 0.3; }
        
        .footer-links { display: flex; gap: 80px; }
        .footer-col { display: flex; flex-direction: column; gap: 16px; }
        .footer-col h4 { font-size: 11px; letter-spacing: 0.1em; opacity: 0.4; }
        .footer-col a { font-size: 12px; font-weight: 800; text-decoration: none; color: var(--white); transition: opacity 0.3s; }
        .footer-col a:hover { color: var(--brand); opacity: 1; }
        
        .footer-bottom { font-size: 10px; font-weight: 400; opacity: 0.4; letter-spacing: 0.05em; }
        
        @media (max-width: 768px) {
          .footer-top { flex-direction: column; gap: 60px; }
          .footer-links { gap: 40px; }
        }
      `}</style>
    </footer>
  );
}
