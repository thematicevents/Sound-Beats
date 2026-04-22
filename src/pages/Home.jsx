import React, { useEffect } from 'react';
import { MessageCircle, Phone, ChevronRight, CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroimg from "../assests/hero.png";

// Static data moved outside the component to prevent recreation on re-renders
const serviceList = [
  {
    title: "Professional Sound System",
    items: ["Line Array Sound System", "DJ Sound Setup", "Live Concert Sound"],
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
  },
  {
    title: "Event Lighting",
    items: ["Stage Lighting", "Moving Heads", "LED Uplights"],
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
  },
  {
    title: "Event Production",
    items: ["Truss Structures", "Stage Setup", "Technical Crew"],
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
  }
];

const recentEvents = [
  { name: "Wedding Setup", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600" },
  { name: "Garba Night", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600" },
  { name: "DJ Party", img: "https://img.freepik.com/free-photo/closeup-dj-working-blue-light_181624-18773.jpg?semt=ais_hybrid&w=740&q=80" }
];

const whyUsPoints = [
  { title: "10+ Years Experience" },
  { title: "Professional Technical Crew" },
  { title: "Clean Sound Engineering" },
  { title: "Reliable On-Time Setup" },
  { title: "Backup Systems Ready" },
  { title: "Dedicated Support Team" }
];

const Home = () => {
  useEffect(() => {
    // Initialize AOS once for the entire page
    AOS.init({ duration: 1000, once: true });

    // Inject combined CSS
    const styleSheet = document.createElement("style");
    styleSheet.innerText = combinedStyles;
    document.head.appendChild(styleSheet);

    return () => document.head.removeChild(styleSheet);
  }, []);

  const heroBg = {
    backgroundImage: `url('${heroimg}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="home-page-wrapper">
      
      {/* ================= HERO SECTION ================= */}
      <section className="hero-viewport" style={heroBg}>
        <div className="hero-overlay"></div>
        <div className="custom-container h-100 flex-center">
          <div className="text-center hero-z-index" data-aos="zoom-out-up">
            <h1 className="hero-brand">
              SOUND<span className="text-orange">BEATS</span>
            </h1>
            <p className="hero-tagline">Professional Sound & Light Experience</p>

            <div className="event-list flex-center flex-wrap">
              <span>Concerts</span>
              <div className="v-divider"></div>
              <span>Weddings</span>
              <div className="v-divider"></div>
              <span>Corporate</span>
              <div className="v-divider"></div>
              <span>Cultural Events</span>
            </div>

            <div className="flex-center flex-wrap gap-4 mt-5">
              <button className="btn-glass-blue">
                <Phone size={15} className="ms-2" /> 
                <a href="tel:+919977707007" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '8px' }}>CALL US</a>
              </button>
              
              <button className="btn-glow-orange">
                <MessageCircle size={20} className="me-2" />
                <a href="https://wa.me/919977707007" style={{ textDecoration: 'none', color: 'inherit' }}>GET WHATSAPP QUOTE</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="custom-container py-custom">
        <div className="section-header-block mb-5" data-aos="fade-up">
          <div className="h-line"></div>
          <h2 className="section-main-title">OUR SERVICES</h2>
          <div className="h-line"></div>
        </div>

        <div className="services-grid">
          {serviceList.map((service, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="service-glass-card" style={{backgroundImage: `url('${service.img}')`}}>
                <div className="glass-overlay"></div>
                <div className="card-inner-content">
                  <h3 className="card-title">{service.title}</h3>
                  <div className="card-divider"></div>
                  <ul className="list-unstyled">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="service-li">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn-soundbeats-blue">
            VIEW OUR EVENTS <ChevronRight size={18} className="ms-1" />
          </button>
        </div>
      </section>

      {/* ================= RECENT EVENTS SECTION ================= */}
      <section className="custom-container py-custom">
        <div className="section-header-block mb-5" data-aos="fade-up">
          <div className="h-line"></div>
          <h2 className="section-main-title">RECENT EVENTS</h2>
          <div className="h-line"></div>
        </div>

        <div className="recent-events-layout">
          {/* Featured Large Card */}
          <div data-aos="fade-right">
            <div className="portfolio-card featured" style={{backgroundImage: `url('https://cdn.sanity.io/images/4z8uxx4p/production/1756f373cfe6065a4b54b3cbf00782fd0f5eba20-3840x3840.jpg?w=782')`}}>
              <div className="portfolio-overlay"></div>
              <div className="portfolio-content text-white p-custom">
                <h3 className="fw-bold">RCF HDL Line Array</h3>
                <p className="small opacity-75 text-white">Professional concert sound system used for large scale events.</p>
              </div>
            </div>
          </div>

          {/* Grid of 3 Smaller Cards */}
          <div className="small-cards-grid">
            {recentEvents.map((event, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="portfolio-card small-card" style={{backgroundImage: `url('${event.img}')`}}>
                  <div className="portfolio-label">{event.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-5">
          <button className="btn-soundbeats-blue">
            VIEW OUR EVENTS <ChevronRight size={18} className="ms-1" />
          </button>
        </div>
      </section>

      {/* ================= WHY SOUNDBEATS SECTION ================= */}
      <section className="custom-container py-custom bg-light-blue">
        <div className="section-header-block mb-5" data-aos="fade-down">
          <div className="h-line"></div>
          <h2 className="section-main-title">WHY SOUNDBEATS</h2>
          <div className="h-line"></div>
        </div>

        <div className="why-us-layout">
          {/* Technician Image Side */}
          <div className="tech-img-wrapper" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800" 
              alt="Sound Technician" 
              className="tech-img"
            />
          </div>

          {/* Checklist Side */}
          <div className="why-us-content" data-aos="fade-left">
            <div className="why-points-grid">
              {whyUsPoints.map((point, idx) => (
                <div key={idx} className="flex-align-center gap-3">
                  <CheckCircle size={22} className="text-orange" />
                  <span className="fw-semibold text-navy">{point.title}</span>
                </div>
              ))}
            </div>

            <div className="signature-box mt-5" data-aos="zoom-in" data-aos-delay="800">
              <p className="small text-secondary fst-italic">"Delivering premium soundscapes for the most prestigious events."</p>
              <h6 className="mt-2 fw-bold text-navy signature-text">- Soundbeats Team</h6>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// ================= MERGED CSS =================
const combinedStyles = `
  /* Global & Typography */
  .home-page-wrapper { font-family: 'Poppins', sans-serif; background-color: #ffffff; }
  .text-orange { color: #ff8c00; }
  .text-navy { color: #1a2a6c; }
  .bg-light-blue { background: #f8faff; padding: 4rem 0; border-radius: 12px; }
  .list-unstyled { list-style: none; padding-left: 0; }
  .fw-bold { font-weight: 700; }
  .fw-semibold { font-weight: 600; }
  .text-white { color: #ffffff; }
  
  /* Custom Layout Utilities (Replacing external framework classes) */
  .custom-container { width: 100%; max-width: 1320px; margin: 0 auto; padding: 0 20px; }
  .h-100 { height: 100%; }
  .flex-center { display: flex; align-items: center; justify-content: center; }
  .flex-align-center { display: flex; align-items: center; }
  .flex-wrap { flex-wrap: wrap; }
  .text-center { text-align: center; }
  .text-end { text-align: right; }
  .gap-3 { gap: 1rem; }
  .gap-4 { gap: 1.5rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-5 { margin-top: 3rem; }
  .mb-5 { margin-bottom: 3rem; }
  .py-custom { padding: 4rem 0; }
  .p-custom { padding: 3rem; }
  .opacity-75 { opacity: 0.75; }

  /* Shared Header Block */
  .section-header-block { display: flex; align-items: center; justify-content: center; gap: 20px; }
  .section-main-title { color: #0d2137; font-weight: 800; letter-spacing: 2px; font-size: 1.8rem; margin: 0; }
  .h-line { flex-grow: 1; max-width: 100px; height: 1.5px; background: #e0e0e0; }

  /* --- HERO STYLES --- */
  .hero-viewport { position: relative; height: 85vh; width: 100%; background-color: #000; overflow: hidden; }
  .hero-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%);
    z-index: 1;
  }
  .hero-z-index { position: relative; z-index: 2; color: #ffffff; }
  .hero-brand {
    font-size: clamp(3rem, 10vw, 6.5rem); font-weight: 900; letter-spacing: 6px;
    margin-bottom: 0; text-shadow: 0 10px 30px rgba(0,0,0,0.8);
  }
  .hero-tagline {
    font-size: clamp(1rem, 3vw, 1.5rem); font-weight: 300; letter-spacing: 5px;
    text-transform: uppercase; margin-bottom: 2rem; opacity: 0.95;
  }
  .event-list span { font-size: 1.1rem; font-weight: 400; letter-spacing: 1px; color: rgba(255,255,255,0.9); }
  .v-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.4); margin: 0 15px; }

  /* Buttons */
  .btn-glass-blue {
    background: rgba(0, 150, 255, 0.1); border: 2px solid #0096ff; color: white;
    padding: 14px 35px; font-weight: 600; border-radius: 4px; backdrop-filter: blur(8px);
    transition: 0.4s all ease; display: flex; align-items: center; cursor: pointer;
  }
  .btn-glass-blue:hover {
    background: #0096ff; box-shadow: 0 0 25px rgba(0, 150, 255, 0.6); transform: translateY(-3px);
  }
  .btn-glow-orange {
    background: linear-gradient(45deg, #ff8c00, #ff5e3a); border: none; color: white;
    padding: 14px 35px; font-weight: 700; border-radius: 4px; box-shadow: 0 5px 20px rgba(255, 140, 0, 0.4);
    transition: 0.4s all ease; display: flex; align-items: center; cursor: pointer;
  }
  .btn-glow-orange:hover {
    box-shadow: 0 8px 30px rgba(255, 140, 0, 0.6); transform: translateY(-3px);
  }
  .btn-soundbeats-blue {
    background: linear-gradient(to bottom, #1e88e5, #1565c0); color: white; border: none;
    padding: 12px 35px; border-radius: 5px; font-weight: 600; text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(21, 101, 192, 0.3); display: inline-flex; align-items: center; cursor: pointer;
  }

  /* --- SERVICES STYLES --- */
  .services-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;
  }
  .service-glass-card {
    height: 240px; border-radius: 8px; background-size: cover; background-position: center;
    position: relative; overflow: hidden; transition: 0.4s ease-in-out;
  }
  .glass-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(90deg, rgba(13, 33, 55, 0.95) 45%, rgba(13, 33, 55, 0.4) 100%); z-index: 1;
  }
  .card-inner-content {
    position: relative; z-index: 2; padding: 30px; color: white; height: 100%;
    display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;
  }
  .card-title { font-size: 1.5rem; margin-bottom: 10px; }
  .card-divider { width: 50px; height: 3px; background: #ff8c00; margin-bottom: 15px; }
  .service-li { margin-bottom: 5px; font-size: 0.95rem; opacity: 0.9; }

  /* --- RECENT EVENTS STYLES --- */
  .recent-events-layout {
    display: grid; grid-template-columns: 1fr 2fr; gap: 1.5rem; align-items: stretch;
  }
  .small-cards-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;
  }
  .portfolio-card {
    border-radius: 12px; background-size: cover; background-position: center;
    position: relative; overflow: hidden; display: flex; align-items: flex-end;
    transition: 0.4s; min-height: 220px; width: 100%; box-sizing: border-box;
  }
  .portfolio-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%); z-index: 1;
  }
  .portfolio-content { position: relative; z-index: 2; margin-bottom: 1rem; }
  .featured { height: 100%; min-height: 400px; }
  .small-card { height: 100%; aspect-ratio: 4/5; }
  .portfolio-label {
    width: 100%; background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(5px);
    color: white; text-align: center; padding: 12px; font-size: 0.9rem; font-weight: 600; z-index: 2;
  }

  /* --- WHY SOUNDBEATS STYLES --- */
  .why-us-layout {
    display: grid; grid-template-columns: 1fr 1.2fr; background: #fff;
    border-radius: 12px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.06);
  }
  .tech-img-wrapper { height: 100%; }
  .tech-img { width: 100%; height: 100%; object-fit: cover; }
  .why-us-content { padding: 3rem; display: flex; flex-direction: column; justify-content: center; }
  .why-points-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .signature-box { position: relative; padding-top: 15px; border-top: 1px solid #eee; text-align: right; }
  .signature-text { font-family: 'Dancing Script', cursive; font-size: 1.2rem; margin-top: -5px; }

  /* --- RESPONSIVE MEDIA QUERIES --- */
  @media (max-width: 991px) {
    .recent-events-layout { grid-template-columns: 1fr; }
    .featured { min-height: 300px; }
    .small-card { aspect-ratio: 16/9; }
    .why-us-layout { grid-template-columns: 1fr; }
    .tech-img { height: 300px; }
  }
  
  @media (max-width: 768px) {
    .v-divider { display: none; }
    .event-list { flex-direction: column; gap: 10px; }
    .hero-viewport { height: 100vh; }
    .why-points-grid { grid-template-columns: 1fr; }
    .p-custom, .why-us-content { padding: 1.5rem; }
  }
`;

export default Home;