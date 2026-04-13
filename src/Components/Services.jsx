import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const styleSheet = document.createElement("style");
    styleSheet.innerText = combinedStyles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

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
    { name: "DJ Party", img: "https://img.freepik.com/free-photo/closeup-dj-working-blue-light_181624-18773.jpg?semt=ais_hybrid&w=740&q=80" } // Fixed loading link
  ];

  return (
    <div className="services-page-wrapper">
      
      {/* --- SECTION 1: OUR SERVICES --- */}
      <section className="container py-5">
        <div className="section-header-block mb-5" data-aos="fade-up">
          <div className="h-line"></div>
          <h2 className="section-main-title">OUR SERVICES</h2>
          <div className="h-line"></div>
        </div>

        <div className="row g-4">
          {serviceList.map((service, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
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

      {/* --- SECTION 2: RECENT EVENTS --- */}
      <section className="container py-5 mt-4">
        <div className="section-header-block mb-5" data-aos="fade-up">
          <div className="h-line"></div>
          <h2 className="section-main-title">RECENT EVENTS</h2>
          <div className="h-line"></div>
        </div>

        <div className="row g-3 align-items-stretch">
          {/* Featured Large Card */}
          <div className="col-lg-4" data-aos="fade-right">
            <div className="portfolio-card featured" style={{backgroundImage: `url('https://cdn.sanity.io/images/4z8uxx4p/production/1756f373cfe6065a4b54b3cbf00782fd0f5eba20-3840x3840.jpg?w=782')`}}>
              <div className="portfolio-overlay"></div>
              <div className="portfolio-content text-white p-5 mb-5">
                <h3 className="fw-bold ">RCF HDL Line Array</h3>
                <p className="small opacity-75 text-white">Professional concert sound system used for large scale events.</p>
              </div>
            </div>
          </div>

          {/* Grid of 3 Smaller Cards */}
          <div className="col-lg-8">
            <div className="row g-3 h-100">
              {recentEvents.map((event, idx) => (
                <div className="col-md-4" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                  <div className="portfolio-card small-card" style={{backgroundImage: `url('${event.img}')`}}>
                    <div className="portfolio-label">{event.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
                <center><div className="text-center mt-5">
          <button className="btn-soundbeats-blue">
            VIEW OUR EVENTS <ChevronRight size={18} className="ms-1" />
          </button>
        </div></center>
      </section>

    </div>
  );
};

const combinedStyles = `
  .services-page-wrapper { background-color: #ffffff; font-family: 'Poppins', sans-serif; }
  .section-header-block { display: flex; align-items: center; justify-content: center; gap: 20px; }
  .section-main-title { color: #0d2137; font-weight: 800; letter-spacing: 2px; font-size: 1.8rem; margin: 0; }
  .h-line { flex-grow: 1; max-width: 100px; height: 1.5px; background: #e0e0e0; }

  .service-glass-card {
    height: 240px;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    transition: 0.4s ease-in-out;
  }

  .glass-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(90deg, rgba(13, 33, 55, 0.95) 45%, rgba(13, 33, 55, 0.4) 100%);
    z-index: 1;
  }

  .card-inner-content {
    position: relative;
    z-index: 2;
    padding: 30px;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }

  .portfolio-card {
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    transition: 0.4s;
    /* This ensures cards don't collapse if the image fails */
    min-height: 220px; 
    width: 100%;
  }

  .featured { height: 100%; }
  
  .small-card { 
    height: 100%; 
    aspect-ratio: 4/5; /* Forces consistent vertical sizing */
  }

  .portfolio-label {
    width: 100%;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(5px);
    color: white;
    text-align: center;
    padding: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 2;
  }

  .btn-soundbeats-blue {
    background: linear-gradient(to bottom, #1e88e5, #1565c0);
    color: white;
    border: none;
    padding: 12px 35px;
    border-radius: 5px;
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(21, 101, 192, 0.3);
  }

  @media (max-width: 991px) {
    .featured { min-height: 300px; margin-bottom: 1rem; }
    .small-card { aspect-ratio: 16/9; }
  }
`;

export default Services;