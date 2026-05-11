import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DotGrid from '../components/DotGrid';
import Marquee from '../components/Marquee';
import Revealer from '../components/Revealer';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyGloblyn from '../components/WhyGloblyn';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Hero />
        {/* <Marquee /> */}
        <Revealer />
        <div className="content-sections">
          <Services />
          <Portfolio />
          <WhyGloblyn />
          <Testimonials />
          <CTABanner />
          <FAQ />
        </div>
      </main>
      <Footer />

      <style>{`
        .main-content {
          position: relative;
        }
        .content-sections {
          position: relative;
          z-index: 10;
          background: var(--white); /* Ensure sections have a background to cover the Hero */
        }
        /* Ensure specific sections maintain their theme backgrounds if needed */
        .content-sections > * {
          position: relative;
          z-index: 10;
        }
      `}</style>
    </>
  );
}
