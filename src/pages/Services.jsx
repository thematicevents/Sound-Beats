import React, { useEffect } from 'react';
import { ArrowRight, Music, Lightbulb, TowerControl as Rigging } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  heroimg from "../assests/h2.png";
const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const primaryServices = [
    {
      title: "Professional Sound System",
      icon: <Music size={40} className="text-navy mb-3" />,
      features: ["Line Array Sound System", "Concert & DJ Setup", "Wireless Microphones"],
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400",
      linkText: "Explore Sound Solutions"
    },
    {
      title: "Event Lighting",
      icon: <Lightbulb size={40} className="text-navy mb-3" />,
      features: ["Stage Lighting Design", "Moving Heads", "LED Par & Uplights"],
      img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400",
      linkText: "Explore Lighting Designs"
    },
    {
      title: "Event Production",
      icon: <Rigging size={40} className="text-navy mb-3" />,
      features: ["Truss Structures", "Stage Design", "Pro Technical Crew"],
      img: "https://media.licdn.com/dms/image/v2/C5612AQEAvyQQkPe7BQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1650289904596?e=2147483647&v=beta&t=vKDfxrwdMlSUOtKoF64QynUbJTDD9KWAmxWCLqZFxMI",
      linkText: "Explore Event Solutions"
    }
  ];

  const eventSolutions = [
    {
      title: "Concerts & Festivals",
      desc: "High-quality sound & lighting setups for concerts, fests, and large public events.",
      img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400"
    },
    {
      title: "Weddings",
      desc: "Elegant and flawless sound and light setups for weddings and grand receptions.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400"
    },
    {
      title: "Corporate Events",
      desc: "Professional AV solutions for corporate conferences, ceremonies, and seminars.",
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400"
    }
  ];

  return (
    <div className="services-page">
      {/* --- HERO SECTION --- */}
      <section className="services-hero" style={{ backgroundImage: `url('${heroimg}')`, }}>
        <div className="services-hero-overlay"></div>
        <div className="container position-relative z-index-2 pt-5">
          <h1 className="display-4 fw-bold text-navy" data-aos="fade-right">
            OUR <span className="text-orange">SERVICES</span>
          </h1>
          <p className="lead text-navy opacity-75 fw-medium mb-4" data-aos="fade-right" data-aos-delay="100">
            Delivering Exceptional Sound & Light Experiences
          </p>
          <div className="d-flex gap-3" data-aos="fade-up" data-aos-delay="200">
            <button className="hifi-btn-blue px-4"><a href="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>VIEW OUR WORK</a><ArrowRight size={16} className="ms-2"/></button>
            <button className="hifi-btn-orange-embossed px-4"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>GET WHATSAPP QUOTE</a><ArrowRight size={16} className="ms-2"/></button>
          </div>
        </div>
      </section>

      {/* --- CATEGORY FILTER BAR --- */}
      <div className="category-bar shadow-sm">
        <div className="container d-flex justify-content-center gap-md-5 gap-3 flex-wrap py-3">
          {['Festivals', 'Weddings', 'Corporate', 'Garba', 'Political'].map((cat) => (
            <span key={cat} className="category-link">{cat}</span>
          ))}
        </div>
      </div>

      {/* --- PRIMARY SERVICES GRID --- */}
      <section className="container py-5 my-4">
        <div className="row g-4">
          {primaryServices.map((service, idx) => (
            <div className="col-lg-4" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="service-card border-0 shadow-sm overflow-hidden h-100">
                <img src={service.img} alt={service.title} className="service-card-img" />
                <div className="p-4">
                  <h4 className="fw-bold text-navy mb-3">{service.title}</h4>
                  <ul className="list-unstyled mb-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="text-muted mb-2">• {f}</li>
                    ))}
                  </ul>
                  <hr />
                  <a href="/" className="text-navy fw-bold text-decoration-none d-flex align-items-center">
                    {service.linkText} <ArrowRight size={16} className="ms-2 text-orange" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECONDARY SOLUTIONS SECTION --- */}
      <section className="bg-light-blue py-5">
        <div className="container text-center mb-5">
          <h2 className="section-title-navy" data-aos="fade-down">COMPLETE LIVE EVENT SOLUTIONS</h2>
          <p className="text-muted" data-aos="fade-up">From Weddings to Concerts, we've got you covered!</p>
        </div>
        <div className="container">
          <div className="row g-4">
            {eventSolutions.map((solution, idx) => (
              <div className="col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="solution-card bg-white shadow-sm rounded-3 overflow-hidden h-100">
                  <img src={solution.img} alt={solution.title} className="solution-img" />
                  <div className="p-4">
                    <h5 className="fw-bold text-navy">{solution.title}</h5>
                    <p className="text-muted small mb-4">{solution.desc}</p>
                    <hr />
                    <button className="hifi-btn-blue w-100 py-2">VIEW PORTFOLIO <ArrowRight size={14} className="ms-2"/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="container py-5 my-5 text-center" data-aos="zoom-in">
        <h2 className="cta-heading-navy">Need Sound & Lighting for Your Event?</h2>
        <p className="text-muted mb-5">Contact SoundBeats for a free consultation and quote.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="hifi-btn-blue px-5 py-3"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>CALL NOW</a></button>
          <button className="hifi-btn-orange-embossed px-5 py-3"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>GET QUOTE</a><ArrowRight size={18} className="ms-2" /></button>
        </div>
      </section>

      <style>{serviceStyles}</style>
    </div>
  );
};

const serviceStyles = `
  .services-page { background: #fdfdfe; font-family: 'Poppins', sans-serif; }
  .text-navy { color: #1a2a6c; }
  .text-orange { color: #e67e22; }
  .bg-light-blue { background-color: #f4f8fb; }
  
  /* HERO */
  .services-hero { height: 400px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; }
  .services-hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%); }

  /* FILTER BAR */
  .category-bar { background: #fff; position: sticky; top: 70px; z-index: 1000; border-bottom: 1px solid #eee; }
  .category-link { color: #666; font-weight: 500; cursor: pointer; transition: 0.3s; padding: 0 10px; border-right: 1px solid #ddd; }
  .category-link:last-child { border-right: none; }
  .category-link:hover { color: #1a2a6c; }

  /* CARDS */
  .service-card-img { width: 100%; height: 220px; object-fit: cover; }
  .service-card { transition: transform 0.3s; border-radius: 8px; background: #fff; }
  .service-card:hover { transform: translateY(-10px); }
  
  .solution-img { width: 100%; height: 200px; object-fit: cover; }
  .section-title-navy { font-size: 2rem; font-weight: 800; color: #1a2a6c; letter-spacing: 1px; }

  /* BUTTONS (EXACT EMBOSSED REFS) */
  .hifi-btn-blue {
    background: linear-gradient(to bottom, #1e88e5 0%, #1565c0 100%); border: none; color: white;
    font-weight: 700; border-radius: 6px; box-shadow: 0 4px 10px rgba(21, 101, 192, 0.3);
    transition: 0.3s;
  }
  .hifi-btn-orange-embossed {
    background: linear-gradient(to bottom, #f39c12 0%, #e67e22 100%); border: none; color: white;
    font-weight: 700; border-radius: 6px; box-shadow: 0 4px 10px rgba(230, 126, 34, 0.4);
    display: flex; align-items: center; justify-content: center;
    transition: 0.3s;
  }
  .hifi-btn-blue:hover, .hifi-btn-orange-embossed:hover { transform: scale(1.02); opacity: 0.95; }
`;

export default Services;