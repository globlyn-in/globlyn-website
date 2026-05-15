import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import GraphAnimation from '../components/GraphAnimation';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION - Dark Theme, 100vh, 3D Canvas */}
        <section className="section theme--dark hero-about-3d">
          <div className="hero-3d-bg">
            <GraphAnimation />
          </div>
          <div className="container hero-content-overlay">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1 variants={fadeUp} className="about-hero-title">
                ENGINEERING<br/>DIGITAL EXCELLENCE
              </motion.h1>
              <motion.p variants={fadeUp} className="about-hero-sub">
                Globlyn is a web development and AI automation agency dedicated to building high-performance digital products. We work directly with founders and decision-makers to deliver measurable outcomes — on time, without compromise.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* WHO WE ARE - Light Theme */}
        <section className="section about-who theme--light border-top">
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="about-split"
            >
              <motion.div variants={fadeUp} className="split-label">
                <span className="eyebrow">WHO WE ARE</span>
              </motion.div>
              <div className="split-content">
                <motion.p variants={fadeUp}>
                  Globlyn was founded by a team of engineers and technologists who share a single conviction: that quality engineering is the most reliable path to business growth.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We specialize in two disciplines — precision web development and intelligent process automation. Every engagement is handled by our core team. We do not outsource, subcontract, or delegate client work to third parties.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Our approach is straightforward. We understand your objectives, define clear deliverables, and execute with technical rigor. The result is a digital product that performs — not just on launch day, but long after.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHAT WE DELIVER (SERVICES) - Dark Theme */}
        <section className="section theme--dark border-top-dark">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="eyebrow brand-text-dark">OUR SERVICES</motion.span>
              <motion.h2 variants={fadeUp} className="section-title-large">WHAT WE DELIVER</motion.h2>
              
              <div className="services-grid-pro">
                {[
                  {
                    title: 'WEB DEVELOPMENT',
                    desc: 'We design and develop custom websites and web applications built for speed, search visibility, and conversion. Every project is engineered from the ground up — optimized for Core Web Vitals, structured for SEO, and built to scale with your business.'
                  },
                  {
                    title: 'AI AUTOMATION',
                    desc: 'We design and deploy intelligent automation workflows that eliminate repetitive operational tasks. From CRM synchronization and lead management to document processing and support automation — our systems run continuously, reducing overhead and improving operational efficiency.'
                  }
                ].map((s, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeUp}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.06)' }}
                    transition={{ type: "tween", ease: "easeOut" }}
                    className="service-card-pro"
                  >
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY GLOBLYN - Light Theme */}
        <section className="section theme--light border-top">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="eyebrow brand-text-light">WHY GLOBLYN</motion.span>
              
              <div className="reasons-list">
                {[
                  {
                    title: 'DIRECT ENGAGEMENT',
                    desc: 'Every project is managed and executed by our core engineering team. Clients have direct access to the people building their product throughout the engagement — not through intermediaries or account management layers.'
                  },
                  {
                    title: 'DELIVERY-FOCUSED',
                    desc: 'We operate on defined timelines with clear milestones. Our standard delivery window is 14 days from project kickoff. Scope, timeline, and cost are agreed upon upfront — no surprises, no scope creep.'
                  },
                  {
                    title: 'OUTCOME ACCOUNTABILITY',
                    desc: 'We define success through your business objectives, not internal metrics. Projects are scoped around measurable KPIs, and we remain accountable to those targets from kickoff through delivery.'
                  }
                ].map((r, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeUp}
                    className="reason-item light-reason"
                  >
                    <div className="reason-header">
                      <span className="reason-num">0{i+1}</span>
                      <h3 className="reason-title-light">{r.title}</h3>
                    </div>
                    <p className="reason-desc-light">{r.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .text-center { text-align: center; }
        .eyebrow { font-size: 11px; font-weight: 900; letter-spacing: 0.3em; text-transform: uppercase; display: block; margin-bottom: 24px; }
        
        /* Theming utilities for About page specifics */
        .theme--light .eyebrow { color: rgba(0,0,0,0.4); }
        .theme--dark .eyebrow { color: rgba(255,255,255,0.4); }
        .brand-text-dark { color: #ffffff; opacity: 1; }
        .brand-text-light { color: #000000; opacity: 1; }
        .border-top { border-top: 1px solid rgba(0,0,0,0.1); }
        .border-top-dark { border-top: 1px solid rgba(255,255,255,0.1); }

        /* HERO 3D */
        .hero-about-3d {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 0; 
        }
        .hero-3d-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.9;
        }
        .hero-content-overlay {
          position: relative;
          z-index: 1;
          pointer-events: none; 
        }
        .hero-content-overlay * {
          pointer-events: auto;
        }
        
        .about-hero-title { 
          font-family: 'american-typewriter', serif; 
          font-size: clamp(40px, 8vw, 100px); 
          line-height: 0.95; 
          margin-bottom: 40px; 
          font-weight: 250;
          color: #ffffff;
        }
        .about-hero-sub { 
          font-size: 20px; 
          line-height: 1.6; 
          max-width: 800px; 
          margin: 0 auto; 
          color: rgba(255,255,255,0.8); 
        }

        /* SPLIT LAYOUT */
        .about-split { display: grid; grid-template-columns: 1fr 2fr; gap: 60px; }
        .split-content p { font-size: 18px; line-height: 1.8; margin-bottom: 32px; color: rgba(0,0,0,0.8); }

        /* SERVICES GRID */
        .section-title-large { font-family: 'american-typewriter', serif; font-size: clamp(32px, 5vw, 64px); margin-bottom: 80px; font-weight: 250; color: #fff;}
        .services-grid-pro { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .service-card-pro { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 48px; cursor: pointer; }
        .service-card-pro h3 { font-size: 24px; font-family: 'american-typewriter', serif; margin-bottom: 24px; color: #ffffff; font-weight: 250; }
        .service-card-pro p { font-size: 16px; line-height: 1.7; color: rgba(255,255,255,0.6); }

        /* REASONS */
        .reasons-list { display: flex; flex-direction: column; gap: 60px; }
        .reason-item { border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 40px; }
        .light-reason { border-bottom: 1px solid rgba(0,0,0,0.1); }
        .reason-header { display: flex; align-items: center; gap: 24px; margin-bottom: 16px; }
        .reason-num { font-size: 14px; font-weight: 900; color: #000; font-family: monospace; }
        .reason-title-light { font-family: 'american-typewriter', serif; font-size: 28px; font-weight: 250; word-spacing: 0.04em; color: #000; }
        .reason-desc-light { font-size: 16px; line-height: 1.7; color: rgba(0,0,0,0.7); max-width: 800px; }

        @media (max-width: 900px) {
          .about-split { grid-template-columns: 1fr; gap: 24px; }
          .services-grid-pro { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
