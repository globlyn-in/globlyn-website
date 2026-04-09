import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <a href="#" className="nav-logo">
            Globlyn<span>.</span>
          </a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>
          <a href="#contact" className="btn btn-solid nav-cta">Send request</a>
          <button className="nav-toggle" onClick={() => setMenuOpen(true)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
          {links.map(l => (
            <a key={l.href} href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-solid" onClick={() => setMenuOpen(false)} style={{ marginTop: '16px' }}>Send request</a>
        </div>
      )}

      <style>{`
        .nav {
          position: fixed; top: 24px; left: 0; right: 0; z-index: 1000;
          height: 72px;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav--scrolled {
          top: 0;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-weight: 800; font-size: 22px; letter-spacing: -1px;
          color: #fff;
          transition: color 0.3s;
        }
        .nav--scrolled .nav-logo { color: var(--text); }
        .nav-logo span { color: var(--accent); }

        .nav-links { display: flex; gap: 36px; }
        .nav-link {
          font-size: 14px; font-weight: 500;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s;
        }
        .nav-link:hover { color: #fff; }
        .nav--scrolled .nav-link { color: var(--text-secondary); }
        .nav--scrolled .nav-link:hover { color: var(--text); }

        .nav-cta { padding: 10px 24px; font-size: 13px; }

        .nav-toggle {
          display: none; flex-direction: column; gap: 5px; padding: 4px;
        }
        .nav-toggle span {
          display: block; width: 24px; height: 2px;
          background: #fff; transition: background 0.3s;
        }
        .nav--scrolled .nav-toggle span { background: var(--text); }

        .mobile-menu {
          position: fixed; inset: 0; z-index: 2000;
          background: var(--bg-dark);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px;
        }
        .mobile-close {
          position: absolute; top: 24px; right: 24px;
          color: #fff; font-size: 28px; background: none; border: none;
        }
        .mobile-link {
          font-size: 28px; font-weight: 700; color: #fff; letter-spacing: -1px;
        }

        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none !important; }
          .nav-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
