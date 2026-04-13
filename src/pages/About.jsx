import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  heroimg from "../assests/h2.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-container" >
      
      {/* --- HERO SECTION --- */}
      <section className="about-hero-section" style={{ backgroundImage: `url('${heroimg}')` }}>
        <div className="about-hero-overlay"></div>
        <div className="container position-relative z-index-2 py-5">
          <div className="row align-items-center" style={{ minHeight: '400px' }}>
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="about-main-title">ABOUT <span className="text-orange">SOUNDBEATS</span></h1>
              <p className="about-hero-subtitle">Your Trusted Event Sound & Lighting Partner</p>
              <button className="hifi-btn-blue mt-4">
                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>GET QUOTE NOW</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO WE ARE SECTION --- */}
      <section className="container py-5 mt-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7" data-aos="fade-up">
            <h2 className="section-title-navy mb-4">WHO WE ARE</h2>
            <div className="content-text-block">
              <p>Welcome to <strong>SoundBeats</strong> – Indore's leading event sound and lighting company. For over 10+ years, we have been delivering exceptional sound and light services for concerts, weddings, corporate events, and cultural programs across Indore and Madhya Pradesh.</p>
              <p>Our mission is to elevate every event with premium audio and visual experiences.</p>
              <p className="fw-bold">With SoundBeats, you are assured of professional expertise, cutting edge equipment, and a dedicated team committed to making your event unforgettable.</p>
            </div>
          </div>
          <div className="col-lg-5" data-aos="zoom-in">
            <div className="hifi-image-frame">
              <img src="https://www.pixelstalk.net/wp-content/uploads/2025/08/DJ-Desktop-HD-Wallpaper-Free-Download.jpg" alt="Concert Crowd" className="rounded-3 w-100 shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* --- STATISTICS BAR --- */}
      <section className="stats-bar-section py-5 my-4">
        <div className="container">
          <div className="row text-center align-items-center justify-content-between">
            <div className="col-md-4 stats-item" data-aos="fade-up" data-aos-delay="100">
              <h3 className="stats-number">10<span className="stats-label">+Years in Business</span></h3>
            </div>
            <div className="col-md-4 stats-item border-start-hifi border-end-hifi" data-aos="fade-up" data-aos-delay="200">
               <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="stats-icon-bg">👥</div>
                  <h3 className="stats-number">500+ <span className="stats-label d-block">Events Completed</span></h3>
               </div>
            </div>
            <div className="col-md-4 stats-item" data-aos="fade-up" data-aos-delay="300">
               <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="stats-icon-bg">💡</div>
                  <h3 className="stats-number">100% <span className="stats-label d-block">Client Satisfaction</span></h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR MISSION SECTION --- */}
      <section className="container py-5 mb-5">
        <div className="mission-header mb-5 text-center" data-aos="fade-down">
          <div className="h-line-navy"></div>
          <h2 className="section-title-navy mx-3">OUR MISSION</h2>
          <div className="h-line-navy"></div>
        </div>
        
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <img src="https://media.istockphoto.com/id/1324006497/photo/music-controller-dj-mixer-in-a-nightclub-at-a-party.jpg?s=612x612&w=0&k=20&c=AyXSZEWy3lHb7hKUfh9FXAsZGAO_p838uVaAlFbWa9k=" alt="Mission Lighting" className="rounded-3 w-100 shadow-lg" />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <p className="mission-text-large">
              Our mission is simple: To provide <strong>exceptional sound</strong> and lighting setups that make every event <strong>memorable</strong>.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-center gap-3 mb-3">
                <CheckCircle size={20} className="text-orange" />
                <span className="info-text">Deliver crystal-clear sound</span>
              </li>
              <li className="d-flex align-items-center gap-3 mb-3">
                <CheckCircle size={20} className="text-orange" />
                <span className="info-text">Create stunning lighting visuals</span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <CheckCircle size={20} className="text-orange" />
                <span className="info-text">Ensure seamless and reliable setups</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="about-final-cta py-5 text-center" data-aos="zoom-in">
        <h2 className="cta-title-navy">Let’s Make Your Event Unforgettable!</h2>
        <p className="text-muted mb-5">Contact SoundBeats for a free consultation and quote.</p>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          <button className="hifi-btn-blue px-5"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>CALL NOW</a></button>
          <button className="hifi-btn-orange-embossed px-5"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>GET WHATSAPP QUOTE NOW</a><ArrowRight className="ms-2" /></button>
        </div>
      </section>

      <style>{aboutHifiStyles}</style>
    </div>
  );
};

const aboutHifiStyles = `
  .about-page-container { font-family: 'Poppins', sans-serif; background: #f4f8fb; }
  .text-orange { color: #e67e22; }
  .section-title-navy { color: #1a2a6c; font-weight: 800; letter-spacing: 1px; }
  
  /* HERO */
  .about-hero-section { position: relative; background-size: cover; background-position: center; padding: 60px 0; }
  .about-hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%); }
  .about-main-title { font-size: 3.5rem; font-weight: 900; color: #1a2a6c; z-index: 2; position: relative; }
  .about-hero-subtitle { font-size: 1.2rem; color: #141414; font-weight: 500; letter-spacing: 1px; z-index: 2; position: relative; }

  /* STATS BAR */
  .stats-bar-section { background: rgba(255,255,255,0.6); border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; }
  .stats-number { color: #1a2a6c; font-weight: 800; font-size: 2.2rem; margin: 0; }
  .stats-label { font-size: 1.5 rem; color: #2e2c2c; font-weight: 400; display: inline-block; py-5; }
  .stats-icon-bg { font-size: 2rem; }
  .border-start-hifi { border-left: 1px solid #ddd; }
  .border-end-hifi { border-right: 1px solid #ddd; }

  /* MISSION SECTION */
  .mission-header { display: flex; align-items: center; justify-content: center; }
  .h-line-navy { flex-grow: 1; max-width: 150px; height: 2px; background: #1a2a6c; opacity: 0.2; }
  .mission-text-large { font-size: 1.3rem; color: #333; line-height: 1.6; }

  /* CONTENT TEXT */
  .content-text-block p { color: #444; font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem; }

  /* BUTTONS (EXACT REFS) */
  .hifi-btn-blue {
    background: linear-gradient(to bottom, #1e88e5 0%, #1565c0 100%); border: none; color: white;
    padding: 12px 30px; font-weight: 700; border-radius: 5px; box-shadow: 0 4px 15px rgba(21, 101, 192, 0.3);
  }
  .hifi-btn-orange-embossed {
    background: linear-gradient(to bottom, #f39c12 0%, #e67e22 100%); border: none; color: white;
    padding: 12px 30px; font-weight: 700; border-radius: 5px; box-shadow: 0 4px 15px rgba(230, 126, 34, 0.4);
    display: flex; align-items: center;
  }
`;

export default About;