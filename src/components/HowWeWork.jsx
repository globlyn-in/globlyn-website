import { useEffect, useRef, useState } from 'react';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Free strategy call to understand your goals, audience, and competitors.' },
  { num: '02', title: 'Strategy', desc: 'Tech stack selection, design direction, and full automation opportunity mapping.' },
  { num: '03', title: 'Design', desc: 'Figma wireframes and live prototype ready for your approval in 5 days.' },
  { num: '04', title: 'Build', desc: 'Agile development with weekly demos. You own 100% of the code, always.' },
  { num: '05', title: 'Launch & Grow', desc: 'Go live confidently. We monitor, optimize, and scale alongside you.' },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  // Rotation angles for a 140-degree tachometer sweep (-70 to +70)
  const angles = [-70, -35, 0, 35, 70];

  return (
    <section className="section section-muted" style={{ padding: '120px 0', overflow: 'hidden' }}>
      <div className="container" ref={containerRef}>
        <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '16px' }}>How we work</span>
        <h2 style={{ maxWidth: '600px', margin: '0 auto 80px auto', textAlign: 'center' }}>
          Our proven path to digital success
        </h2>

        {/* Dashboard Container (Desktop only display) */}
        <div className="dashboard-container">
          {/* Faint dashed arc background */}
          <div className="dashboard-arc" />

          {/* The Glowing Speedometer Dial Needle */}
          <div className="dashboard-needle" style={{ transform: `rotate(${angles[activeStep]}deg)` }}>
            <div className="needle-glow" />
          </div>

          {/* Semicircle Target Nodes */}
          {steps.map((s, i) => {
            const isActive = activeStep === i;
            // The un-rotate reverses the parent arm's rotation so text remains upright
            const targetRotation = -angles[i]; 
            
            return (
              <div className="node-arm" style={{ transform: `rotate(${angles[i]}deg)` }} key={i}>
                <div 
                  className={`node-target ${isActive ? 'active' : ''}`}
                  style={{ transform: `rotate(${targetRotation}deg) ${isActive ? 'scale(1.15)' : 'scale(1)'}` }}
                  onClick={() => setActiveStep(i)}
                  onMouseEnter={() => setActiveStep(i)}
                >
                   <span className="node-target-num">{s.num}</span>
                </div>
              </div>
            );
          })}

          {/* Center Cluster Crossfading Display */}
          <div className="dashboard-content-layer">
            {steps.map((s, i) => (
              <div key={i} className={`dashboard-content-card ${activeStep === i ? 'visible' : ''}`}>
                 <span className="eyebrow" style={{ marginBottom: '8px', display: 'inline-block' }}>Step {s.num}</span>
                 <h4 className="dashboard-title">{s.title}</h4>
                 <p className="dashboard-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Linear Fallback */}
        <div className="mobile-dashboard-list">
          {steps.map((s, i) => (
             <div key={i} className="mobile-step-card">
               <span className="mobile-step-num">{s.num}</span>
               <div>
                  <h4 style={{ marginBottom: '8px' }}>{s.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{s.desc}</p>
               </div>
             </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Core Dashboard Architecture */
        .dashboard-container {
          position: relative;
          width: 700px;
          height: 380px; /* Slightly taller than 350 to fit top cards comfortably */
          margin: 0 auto;
        }

        .dashboard-arc {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 350px;
          border-radius: 350px 350px 0 0;
          border: 4px dashed rgba(0,0,0,0.1);
          border-bottom: none;
        }

        /* Laser Sweep Needle */
        .dashboard-needle {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 4px;
          height: 350px;
          margin-left: -2px; 
          transform-origin: bottom center;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); /* Springy dash mechanics */
          z-index: 5;
          pointer-events: none;
        }
        .needle-glow {
          position: absolute;
          top: 0; left: 0; 
          width: 100%; height: 100%;
          background: linear-gradient(to bottom, var(--accent) 0%, transparent 35%);
          border-radius: 4px;
          box-shadow: 0 0 25px var(--accent);
        }

        /* Node Positioning Arms */
        .node-arm {
          position: absolute;
          bottom: 0; left: 50%;
          width: 2px; height: 350px;
          margin-left: -1px;
          transform-origin: bottom center;
          z-index: 10;
          pointer-events: none; /* Passes clicks through arm so it doesn't block center content */
        }
        .node-target {
          position: absolute;
          top: -24px; left: -24px; /* Centers the 48x48 block exactly at the top crest */
          width: 48px; height: 48px;
          background: #ffffff;
          border-radius: 50%;
          border: 2px solid #e0e0e0;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          pointer-events: auto; /* Restores clickability exclusively to the node ring */
        }
        
        .node-target:hover { box-shadow: 0 8px 15px rgba(0,0,0,0.08); }
        .node-target.active {
          border-color: var(--accent);
          background: var(--accent);
          box-shadow: 0 4px 20px rgba(22, 86, 213, 0.4);
        }

        .node-target-num {
          font-size: 15px; font-weight: 700;
          transition: color 0.3s ease;
        }
        .node-target.active .node-target-num { color: #ffffff; }
        .node-target:not(.active) .node-target-num { color: var(--accent); }

        /* Dynamic Center Module */
        .dashboard-content-layer {
          position: absolute;
          bottom: -40px; /* Drops perfectly into the bottom anchor hub of the dashboard */
          left: 50%;
          transform: translateX(-50%);
          width: 440px;
          height: 180px; 
          z-index: 20;
        }
        .dashboard-content-card {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          text-align: center;
          padding: 32px 24px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.04);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .dashboard-content-card.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        
        .dashboard-title { font-size: 22px; margin-bottom: 12px; }
        .dashboard-desc { font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin: 0; }

        /* Responsive Flow */
        .mobile-dashboard-list { display: none; }
        
        @media (max-width: 768px) {
          .dashboard-container { display: none; }
          .mobile-dashboard-list {
             display: flex; flex-direction: column; gap: 20px;
          }
          .mobile-step-card {
             display: flex; gap: 24px; align-items: flex-start;
             background: #fff; border: 1px solid rgba(0,0,0,0.05);
             padding: 24px; border-radius: 12px;
             box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          }
          .mobile-step-num {
             font-size: 20px; font-weight: 800; color: var(--accent);
             padding-top: 2px; line-height: 1;
          }
        }
      `}</style>
    </section>
  );
}
