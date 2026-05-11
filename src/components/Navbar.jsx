import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ themeOverride }) {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect theme of current section
      const sections = document.querySelectorAll('section, .theme--light, .theme--dark, .marquee, .slogan-outer-wrapper');
      let currentTheme = 'light';

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // If section is covering the top part of the viewport
        if (rect.top <= 90 && rect.bottom >= 90) {
          if (section.classList.contains('theme--dark') || section.classList.contains('slogan-outer-wrapper') || section.classList.contains('cta-box')) {
            currentTheme = 'dark';
          } else if (section.classList.contains('marquee')) {
            currentTheme = 'brand'; // Special brand theme for marquee
          } else {
            currentTheme = 'light';
          }
        }
      });
      setTheme(currentTheme);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  return (
    <nav className={`nav nav--${themeOverride || theme} ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          GLOBLYN<span>.</span>
        </Link>

        <div className="nav-links">
          <Link to="/#services" className="nav-link">WHAT WE DO</Link>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <a href="#contact" className="nav-cta">SEND REQUEST</a>
        </div>
      </div>

      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          height: 90px; display: flex; align-items: center;
          transition: all 0.4s var(--transition);
          background: transparent;
        }
        .nav--scrolled {
          height: 70px;
          background: var(--nav-bg, transparent);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--nav-border, rgba(0, 0, 0, 0));
        }

        /* Dynamic Theme Colors */
        .nav--light { --nav-bg: rgba(255, 255, 255, 0.8); --nav-border: rgba(31, 30, 29, 0.05); --nav-text: var(--charcoal); }
        .nav--dark { --nav-bg: rgba(0, 0, 0, 0); --nav-border: rgba(255, 255, 255, 0.1); --nav-text: var(--white); }
        .nav--brand { --nav-bg: rgba(248, 69, 37, 0.8); --nav-border: rgba(255, 255, 255, 0.2); --nav-text: var(--white); }

        .nav-container { width: 100%; padding: 0 60px; display: flex; justify-content: space-between; align-items: center; }
        
        .nav-logo {
          font-weight: 900; font-size: 24px; letter-spacing: -0.05em;
          color: var(--nav-text); text-decoration: none; transition: color 0.3s;
        }
        .nav-logo span { color: var(--brand); }
        .nav--brand .nav-logo span { color: var(--white); }

        .nav-links { display: flex; gap: 48px; align-items: center; }
        .nav-link {
          font-size: 12px; font-weight: 400; color: var(--nav-text);
          text-decoration: none; letter-spacing: 0.1em;
          transition: all 0.3s;
        }
        .nav-link:hover { opacity: 0.5; }
        
        .nav-cta {
          font-size: 12px; font-weight: 800; color: var(--white);
          background: var(--brand); border: 1.5px solid var(--brand); padding: 10px 24px;
          text-decoration: none; letter-spacing: 0.05em;
          transition: all 0.3s;
        }
        .nav-cta:hover { background: transparent; color: var(--nav-text); }
        .nav--brand .nav-cta { background: var(--white); color: var(--brand); border-color: var(--white); }

        @media (max-width: 1024px) {
          .nav-container { padding: 0 30px; }
          .nav-links { gap: 24px; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  );
}
