export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Globlyn<span style={{ color: 'var(--accent-light)' }}>.</span></span>
            <p className="footer-tagline">Build. Automate. Grow.</p>
          </div>
          <div className="footer-cols">
            {[
              { title: 'Services', links: ['Web Development', 'AI Automation', 'UI/UX Design', 'E-Commerce', 'SEO', 'Maintenance'] },
              { title: 'Company', links: ['About Us', 'Portfolio', 'Case Studies', 'Blog', 'Careers', 'Contact'] },
              { title: 'Connect', links: ['hello@globlyn.com', 'LinkedIn', 'Twitter', 'GitHub'] },
            ].map((col, i) => (
              <div key={i} className="footer-col">
                <h4 className="footer-col-title">{col.title}</h4>
                <ul>
                  {col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Globlyn. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <style>{`
        .footer {
          background: var(--bg-dark); padding: 80px 0 32px;
          color: rgba(255,255,255,0.4); font-size: 14px;
        }
        .footer-top {
          display: flex; justify-content: space-between;
          padding-bottom: 64px; border-bottom: 1px solid rgba(255,255,255,0.06);
          gap: 64px; flex-wrap: wrap;
        }
        .footer-logo {
          font-size: 24px; font-weight: 800; color: #fff; letter-spacing: -1px;
          display: block; margin-bottom: 8px;
        }
        .footer-tagline { color: rgba(255,255,255,0.3); }
        .footer-cols { display: flex; gap: 64px; flex-wrap: wrap; }
        .footer-col-title {
          font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.6);
          text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;
        }
        .footer-col ul { display: flex; flex-direction: column; gap: 10px; }
        .footer-col a {
          color: rgba(255,255,255,0.4); transition: color 0.2s;
        }
        .footer-col a:hover { color: #fff; }
        .footer-bottom {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 32px; flex-wrap: wrap; gap: 16px;
        }
        .footer-legal { display: flex; gap: 24px; }
        .footer-legal a { color: rgba(255,255,255,0.3); }
        .footer-legal a:hover { color: rgba(255,255,255,0.6); }

        @media (max-width: 768px) {
          .footer-cols { gap: 32px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
