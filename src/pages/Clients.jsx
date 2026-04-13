import React, { useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  heroimg from "../assests/h2.png";

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const weddingLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tesla_Motors.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  ];

  const corporateLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tesla_Motors.svg"
  ];

  const testimonials = [
    {
      name: "Pooja Sharma",
      role: "Wedding Planner",
      text: "SoundBeats provided amazing sound for our weddings. Truly impressed!",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    {
      name: "Amit Verma",
      role: "Event Organizer",
      text: "Professional setup and top-notch sound. Our event was a hit!",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
      name: "Rahul Mehta",
      role: "Corporate Client",
      text: "Exceptional service and clear sound. Highly recommended.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
    }
  ];

  return (
    <div className="clients-page">
      {/* --- HERO SECTION --- */}
      <section className="clients-hero" style={{ backgroundImage: `url('${heroimg}')`   }}>
        <div className="clients-hero-overlay"></div>
        <div className="container position-relative z-index-2 text-center pt-5">
          <h1 className="display-4 fw-bold text-navy" data-aos="fade-down">
            OUR <span className="text-orange">CLIENTS</span>
          </h1>
          <p className="lead text-navy opacity-75 fw-semibold" data-aos="fade-up">Trusted by Top Events & Brands</p>
        </div>
      </section>

      {/* --- CLIENT CATEGORIES SECTION --- */}
     <section className="container py-5">
        <div className="row g-3 justify-content-center">
          
          {/* 1. Wedding Planners (Smaller) */}
          <div className="col-6 col-md-3 col-lg-2" data-aos="fade-up">
            <div className="hifi-client-card compact shadow-sm border">
              <div className="card-header-hifi small">Wedding</div>
              <div className="card-body-hifi compact">
                <div className="logo-grid-2x2 gap-2">
                  {weddingLogos.map((logo, i) => (
                    <img key={i} src={logo} alt="logo" className="hifi-logo small grayscale" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Corporate Clients (Smaller) */}
          <div className="col-6 col-md-3 col-lg-2" data-aos="fade-up" data-aos-delay="100">
            <div className="hifi-client-card compact shadow-sm border">
              <div className="card-header-hifi small">Corporate</div>
              <div className="card-body-hifi compact">
                <div className="logo-grid-2x2 gap-2">
                  {corporateLogos.map((logo, i) => (
                    <img key={i} src={logo} alt="logo" className="hifi-logo small grayscale" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Political Events (Smaller) */}
          <div className="col-6 col-md-3 col-lg-2" data-aos="fade-up" data-aos-delay="200">
            <div className="hifi-client-card compact shadow-sm border overflow-hidden">
              <div className="card-header-hifi small">Political</div>
              <div className="card-body-hifi p-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=300" alt="Political" className="hifi-img-full" />
              </div>
            </div>
          </div>

          {/* 4. Cultural & Garba (Smaller) */}
          <div className="col-6 col-md-3 col-lg-2" data-aos="fade-up" data-aos-delay="300">
            <div className="hifi-client-card compact shadow-sm border overflow-hidden">
              <div className="card-header-hifi small">Cultural</div>
              <div className="card-body-hifi p-0 overflow-hidden">
                <img src="https://images.jdmagicbox.com/quickquotes/listicle/listicle_1686140315148_74ycs_1040x500.jpg" alt="Cultural" className="hifi-img-full" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="container py-5 ">
        <div className="text-center mb-5" data-aos="fade-down">
          <div className="d-flex align-items-center justify-content-center gap-3">
            <div className="navy-line"></div>
            <h2 className="section-title-navy">WHAT OUR CLIENTS SAY</h2>
            <div className="navy-line"></div>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((t, idx) => (
            <div className="col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="testimonial-card p-4 shadow-sm border h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src={t.img} alt={t.name} className="reviewer-img" />
                  <div>
                    <div className="d-flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#e67e22" color="#e67e22" />)}
                    </div>
                    <h6 className="mb-0 fw-bold">{t.name}</h6>
                    <small className="text-muted">{t.role}</small>
                  </div>
                </div>
                <hr />
                <p className="testimonial-text">"{t.text}"</p>
                {idx === 2 && <div className="signature-overlay text-end"><span className="signature">Rahul</span></div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="container-fluid py-5 footer-cta-banner">
        <div className="container text-center py-4">
          <h2 className="cta-heading-navy">Partner with SoundBeats for Your Next Big Event</h2>
          <p className="text-muted mb-4">Contact us to make your event unforgettable.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="hifi-btn-blue-embossed px-5"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>CONTACT US</a> <ArrowRight size={18} className="ms-2" /></button>
            <button className="hifi-btn-orange-embossed px-5"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>GET QUOTE</a>
                             <ArrowRight size={18} className="ms-2" /></button>
          </div>
        </div>
      </section>

      <style>{clientStyles}</style>
    </div>
  );
};

const clientStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

  .clients-page { background-color: #f8fbff; font-family: 'Poppins', sans-serif; }
  .text-navy { color: #1a2a6c; }
  .text-orange { color: #e67e22; }
  .section-title-navy { color: #1a2a6c; font-weight: 800; font-size: 1.5rem; text-transform: uppercase; }

  /* HERO */
 




  .clients-hero { 
    height: 400px; background-size: cover; background-position: center; 
    position: relative; display: flex; align-items: flex-start; justify-content: center;
  }
  .clients-hero-overlay { 
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
    background: linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.1) 100%); 
  }

  /* REPLICA CLIENT CARDS - HEIGHT FIXED TO 100% */
  
  .hifi-client-card {
    background: white;
    border-radius: 8px;
    height: 100%; 
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-in-out;
  }
  .hifi-client-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; border-color: #e67e22 !important; }

  .card-header-hifi {
    padding: 15px;
    font-size: 1rem;
    font-weight: 700;
    color: #1a2a6c;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
  }

  .card-body-hifi {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
  }

  .logo-grid-2x2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 100%;
  }

  .hifi-logo {
    width: 100%;
    height: 45px;
    object-fit: contain;
    transition: 0.3s;
  }


  .hifi-img-full {
    width: 100%;
    height: 80%;
    object-fit: cover;
    min-height: 200px;
  }

  /* TESTIMONIALS */
  .navy-line { flex-grow: 1; height: 1px; background: #1a2a6c; opacity: 0.2; max-width: 250px; }
  .testimonial-card { background: white; border-radius: 12px; transition: 0.3s; }
  .testimonial-card:hover { border-color: #e67e22 !important; }
  .reviewer-img { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 3px solid #f8fbff; }
  .testimonial-text { color: #444; font-size: 0.95rem; font-style: italic; }
  .signature { font-family: 'Dancing Script', cursive; font-size: 1.5rem; color: #1a2a6c; opacity: 0.3; }

  /* CTA BANNER */
  .footer-cta-banner { background: white; border-top: 1px solid #eef2f6; }
  .hifi-btn-blue-embossed {
    background: linear-gradient(to bottom, #1e88e5 0%, #1565c0 100%); border: none; color: #fff;
    padding: 12px 30px; font-weight: 700; border-radius: 6px; box-shadow: 0 4px 15px rgba(21,101,192,0.3);
  }
  .hifi-btn-orange-embossed {
    background: linear-gradient(to bottom, #f2c94c 0%, #e67e22 100%); border: none; color: #fff;
    padding: 12px 30px; font-weight: 700; border-radius: 6px; box-shadow: 0 4px 15px rgba(230,126,34,0.3);
    display: flex; align-items: center; justify-content: center;
  }
    
`;

export default Clients;