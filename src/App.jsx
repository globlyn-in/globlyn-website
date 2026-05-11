import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Cursor from './components/Cursor';
import './index.css';

function App() {
  const [cursorColor, setCursorColor] = useState('var(--charcoal)');

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
      
      // Dynamic cursor color detection
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const isDark = element.closest('.theme--dark, .marquee, .btn, .nav-cta, .cta-box');
        setCursorColor(isDark ? 'var(--white)' : 'var(--charcoal)');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <Cursor color={cursorColor} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
