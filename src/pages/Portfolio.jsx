import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  heroimg from "../assests/h2.png";
const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  // Initialize AOS and handle cleanup
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: false, // Set to false so animations re-run when filtering
      mirror: false 
    });
  }, []);

  // Refresh AOS animations whenever the filter changes
  useEffect(() => {
    AOS.refresh();
  }, [filter]);

  const categories = ['All', 'Concerts & Festivals', 'Weddings', 'Corporate Events', 'Cultural / Garba'];

  const projects = useMemo(() => [
    { 
      title: "Grand Concert", 
      location: "Indore Stadium", 
      desc: "Full concert sound and lighting setup for a packed crowd.", 
      cat: "Concerts & Festivals",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800"
    },
    { 
      title: "Luxury Wedding", 
      location: "Grand Heritage", 
      desc: "Elegant sound & lighting setup for a grand wedding reception.", 
      cat: "Weddings",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
    },
    { 
      title: "Corporate Annual Meet", 
      location: "Business Center", 
      desc: "Professional AV setup for a major corporate annual meeting.", 
      cat: "Corporate Events",
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800"
    },
    { 
      title: "Navratri Garba Festival", 
      location: "Indore Ground", 
      desc: "Vibrant sound and lighting for a lively Garba night event.", 
      cat: "Cultural / Garba",
      img: "https://images.news18.com/ibnlive/uploads/2025/09/Untitled-design-6-2025-09-87fde6cd821514b9f22c4fe0e99cdd8c-16x9.jpg?impolicy=website&width=400&height=225"
    },
    { 
      title: "Political Event & Rally", 
      location: "Public Square", 
      desc: "Full AV setup for a high-profile political rally and speeches.", 
      cat: "Corporate Events",
      img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=800"
    },
    { 
      title: "Theme Fest Lighting", 
      location: "City Park", 
      desc: "Custom lighting design for themed festival celebration.", 
      cat: "Cultural / Garba",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800"
    }
  ], []);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="portfolio-page">
      {/* --- HERO SECTION --- */}
      <section className="portfolio-hero" style={{ backgroundImage: `url('${heroimg}')` }}>
        <div className="portfolio-hero-overlay"></div>
        <div className="container position-relative z-index-2 pt-5">
          <div className="badge-premium mb-3" data-aos="fade-down">
            <Zap size={14} className="me-2 text-orange" /> PREMIUM PRODUCTIONS
          </div>
          <h1 className="display-4 fw-bold text-navy" data-aos="fade-right">
            OUR <span className="text-orange">PORTFOLIO</span>
          </h1>
          <p className="lead text-navy opacity-75 fw-medium mb-4" data-aos="fade-right" data-aos-delay="100">
            Showcasing Our Best Event Productions
          </p>
          <button className="hifi-btn-blue px-4 shadow-lg">
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>GET QUOTE NOW</a> <ArrowRight size={16} className="ms-2" />
          </button>
        </div>
      </section>

      {/* --- STICKY FILTER BAR --- */}
      <div className="filter-wrapper  shadow-sm">
        <div className="container py-3 d-flex justify-content-center gap-2 gap-md-4 flex-wrap">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- RECENT EVENTS GRID --- */}
      <section className="container py-5 mt-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title-navy">RECENT EVENTS</h2>
          <div className="title-underline mx-auto"></div>
          <p className="text-muted mt-3">Browse some of our latest work and successful events.</p>
        </div>

        <div className="row g-4">
          {filteredProjects.map((project, idx) => (
            <div className="col-lg-4 col-md-6" key={`${project.title}-${idx}`} data-aos="zoom-in-up">
              <div className="portfolio-card shadow-sm border-0 h-100 overflow-hidden bg-white">
                <div className="img-container">
                  <img src={project.img} alt={project.title} className="portfolio-img" loading="lazy" />
                  <div className="hover-overlay d-flex align-items-center justify-content-center">
                   
                  </div>
                  <div className="category-tag">{project.cat}</div>
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-navy mb-1">{project.title}</h5>
                  <p className="small text-muted mb-2 fw-semibold text-uppercase letter-spacing-1">{project.location}</p>
                  <p className="small text-secondary mb-0 line-height-base">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="container-fluid py-5 bg-white border-top">
        <div className="container text-center py-4">
          <h2 className="cta-heading-navy">Ready to Elevate Your Event Experience?</h2>
          <p className="text-muted mb-5">Contact SoundBeats for a free consultation and quote.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="hifi-btn-blue px-5 py-3"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>CALL NOW</a></button>
            <button className="hifi-btn-orange-embossed px-5 py-3"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>GET QUOTE</a><ArrowRight size={18} className="ms-2" /></button>
          </div>
        </div>
      </section>

      <style>{portfolioStyles}</style>
    </div>
  );
};

const portfolioStyles = `
  .portfolio-page { background: #fdfdfe; font-family: 'Poppins', sans-serif; }
  .text-navy { color: #1a2a6c; }
  .text-orange { color: #e67e22; }
  
  .badge-premium {
    display: inline-flex; align-items: center; background: rgba(26, 42, 108, 0.05);
    color: #1a2a6c; padding: 6px 16px; border-radius: 50px; font-size: 12px; font-weight: 700;
  }

  /* HERO */
  .portfolio-hero { height: 450px; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; }
  .portfolio-hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 100%); }

  /* STICKY BAR FIX */
  .filter-wrapper { background: #fff; z-index: 1020; top: 70px; border-bottom: 1px solid #eee; }
  .filter-btn { 
    background: none; border: none; padding: 10px 20px; font-weight: 600; color: #777; 
    transition: 0.3s; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;
  }
  .filter-btn.active { color: #e67e22; }
  .filter-btn:hover { color: #1a2a6c; }

  /* CARDS */
  .title-underline { width: 60px; height: 3px; background: #e67e22; border-radius: 2px; }
  .portfolio-card { border-radius: 12px; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
  .portfolio-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important; }
  
  .img-container { position: relative; height: 240px; overflow: hidden; }
  .portfolio-img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s; }
 .portfolio-card:hover .portfolio-img { transform: scale(1.1); }
  
  .category-tag {
    position: absolute; top: 15px; left: 15px; background: rgba(255,255,255,0.9);
    padding: 4px 12px; border-radius: 4px; font-size: 11px; font-weight: 700; color: #1a2a6c;
  }

  .hover-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(26, 42, 108, 0.7); opacity: 0; transition: 0.4s;
  }
  .portfolio-card:hover .hover-overlay { opacity: 1; }


  /* BUTTONS */
  .hifi-btn-blue {
    background: linear-gradient(135deg, #1a2a6c 0%, #2a48ad 100%); border: none; color: white;
    font-weight: 700; border-radius: 6px; padding: 12px 28px; transition: 0.3s;
  }
  .hifi-btn-orange-embossed {
    background: linear-gradient(to bottom, #f39c12 0%, #e67e22 100%); border: none; color: white;
    font-weight: 700; border-radius: 6px; display: flex; align-items: center; box-shadow: 0 4px 0 #b35d10;
  }
  .hifi-btn-orange-embossed:active { transform: translateY(2px); box-shadow: 0 2px 0 #b35d10; }
`;

export default Portfolio;