import React, { useEffect } from 'react';
import { MessageCircle,Phone} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "./Services";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => document.head.removeChild(styleSheet);
  }, []);

  // Pro-Tip: Setting the background image in a style object ensures it hits the Public folder correctly
  const heroBg = {
    backgroundImage: `url('./assests/hero.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section className="hero-viewport" style={heroBg}>
      <div className="hero-overlay"></div>
      
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="text-center hero-z-index" data-aos="zoom-out-up">
          
          <h1 className="hero-brand">
            SOUND<span className="text-orange">BEATS</span>
          </h1>
          
          <p className="hero-tagline">Professional Sound & Light Experience</p>

          <div className="event-list d-flex justify-content-center align-items-center flex-wrap">
            <span>Concerts</span>
            <div className="v-divider"></div>
            <span>Weddings</span>
            <div className="v-divider"></div>
            <span>Corporate</span>
            <div className="v-divider"></div>
            <span>Cultural Events</span>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
            <button className="btn-glass-blue">
               <Phone size={15} className="ms-2" /> <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}> CALL US</a>
            </button>
            
            <button className="btn-glow-orange">
              <MessageCircle size={20} className="me-2" />
              <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}> GET WHATSAPP QUOTE</a>
             
            </button>
          </div>

        </div>
      </div>
    </section>
   
  );
};
<Services />

const styles = `
  .hero-viewport {
    position: relative;
    height: 85vh;
    width: 100%;
    background-color: #000; /* Fallback */
    overflow: hidden;
  }

  .hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%);
    z-index: 1;
  }

  .hero-z-index {
    position: relative;
    z-index: 2;
    color: #ffffff;
  }

  .hero-brand {
    font-size: clamp(3rem, 10vw, 6.5rem);
    font-weight: 900;
    letter-spacing: 6px;
    margin-bottom: 0;
    text-shadow: 0 10px 30px rgba(0,0,0,0.8);
  }

  .text-orange { color: #ff8c00; }

  .hero-tagline {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    opacity: 0.95;
  }

  .event-list span {
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: rgba(255,255,255,0.9);
  }

  .v-divider {
    width: 1px;
    height: 20px;
    background: rgba(255,255,255,0.4);
    margin: 0 15px;
  }

  .btn-glass-blue {
    background: rgba(0, 150, 255, 0.1);
    border: 2px solid #0096ff;
    color: white;
    padding: 14px 35px;
    font-weight: 600;
    border-radius: 4px;
    backdrop-filter: blur(8px);
    transition: 0.4s all ease;
    display: flex;
    align-items: center;
  }

  .btn-glass-blue:hover {
    background: #0096ff;
    box-shadow: 0 0 25px rgba(0, 150, 255, 0.6);
    transform: translateY(-3px);
  }

  .btn-glow-orange {
    background: linear-gradient(45deg, #ff8c00, #ff5e3a);
    border: none;
    color: white;
    padding: 14px 35px;
    font-weight: 700;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(255, 140, 0, 0.4);
    transition: 0.4s all ease;
    display: flex;
    align-items: center;
  }

  .btn-glow-orange:hover {
    box-shadow: 0 8px 30px rgba(255, 140, 0, 0.6);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .v-divider { display: none; }
    .event-list { flex-direction: column; gap: 10px; }
    .hero-viewport { height: 100vh; }
  }
`;

export default Hero;