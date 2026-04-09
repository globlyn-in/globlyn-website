import { useEffect, useRef } from 'react';

const posts = [
  { cat: 'AI Automation', title: '5 AI Automations Every SMB Should Deploy in 2025' },
  { cat: 'Web Dev', title: "Why Your Site's Load Speed Is Killing Your Revenue" },
  { cat: 'Case Study', title: 'How We Built a Chatbot That Saved a Client 40hrs/Week' },
];

export default function Blog() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  return (
    <section id="blog" className="section">
      <div className="container reveal" ref={ref}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <span className="eyebrow">Insights</span>
            <h2>Latest from the blog</h2>
          </div>
          <a href="#" className="btn-link">View all articles</a>
        </div>

        <div className="blog-grid">
          {posts.map((p, i) => (
            <a key={i} href="#" className="blog-card">
              <span className="blog-cat">{p.cat}</span>
              <h3 className="blog-title">{p.title}</h3>
              <span className="blog-read">Read article →</span>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .blog-card {
          display: flex; flex-direction: column;
          padding: 32px 0; border-top: 1px solid var(--border);
          transition: all 0.3s;
        }
        .blog-card:hover .blog-title { color: var(--accent); }
        .blog-cat {
          font-size: 12px; font-weight: 600; color: var(--accent);
          letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px;
        }
        .blog-title {
          font-size: 20px; font-weight: 700; letter-spacing: -0.3px; line-height: 1.4;
          margin-bottom: 24px; flex: 1; transition: color 0.2s;
        }
        .blog-read { font-size: 14px; font-weight: 600; color: var(--text-secondary); }
        @media (max-width: 768px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
