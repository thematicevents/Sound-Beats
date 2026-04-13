import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhySoundbeats = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Injecting CSS into the document head to avoid inline-style errors
    const styleSheet = document.createElement("style");
    styleSheet.innerText = soundbeatsStyles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const whyUsPoints = [
    { title: "10+ Years Experience", delay: "200" },
    { title: "Professional Technical Crew", delay: "300" },
    { title: "Clean Sound Engineering", delay: "400" },
    { title: "Reliable On-Time Setup", delay: "500" },
    { title: "Backup Systems Ready", delay: "600" },
    { title: "Dedicated Support Team", delay: "700" }
  ];

  return (
    <div className="main-soundbeats-container">
      
      {/* --- WHY SOUNDBEATS SECTION --- */}
      <section className="container py-5">
        <div className="section-header-block mb-5" data-aos="fade-down">
          <div className="h-line"></div>
          <h2 className="section-main-title">WHY SOUNDBEATS</h2>
          <div className="h-line"></div>
        </div>

        <div className="why-us-box row align-items-center g-0">
          
          {/* Technician Image Side */}
          <div className="col-lg-5 p-0" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800" 
              alt="Sound Technician" 
              className="tech-img"
            />
          </div>

          {/* Checklist Side */}
          <div className="col-lg-7 p-4 p-md-5 bg-white rounded-end" data-aos="fade-left">
            <div className="row g-3">
              {whyUsPoints.map((point, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="d-flex align-items-center gap-3">
                    <CheckCircle size={22} className="text-orange" />
                    <span className="fw-semibold text-navy">{point.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-end mt-4 signature-box" data-aos="zoom-in" data-aos-delay="800">
              <p className="small text-secondary fst-italic">"Delivering premium soundscapes for the most prestigious events."</p>
              <h6 className="mt-2 fw-bold text-navy signature-text">- Soundbeats Team</h6>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// --- SENIOR UI/UX STYLES ---
const soundbeatsStyles = `
  .main-soundbeats-container { font-family: 'Poppins', sans-serif; background: #f8faff; }
  .text-navy { color: #1a2a6c; }
  .text-orange { color: #e67e22; }

  /* HEADER */
  .section-header-block {
    display: flex; align-items: center; justify-content: center; gap: 20px;
  }
  .section-main-title {
    color: #1a2a6c; font-weight: 800; letter-spacing: 2px; font-size: 1.8rem; margin: 0;
  }
  .h-line { flex-grow: 1; max-width: 100px; height: 1.5px; background: #e0e0e0; }

  /* WHY US BOX */
  .why-us-box {
    border-radius: 12px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.06);
  }
  .tech-img { width: 100%; height: 100%; object-fit: cover; border-top-left-radius: 12px; border-bottom-left-radius: 12px; }
  
  .signature-box { position: relative; padding-top: 15px; border-top: 1px solid #eee; }
  .signature-text { font-family: 'Dancing Script', cursive; font-size: 1.2rem; margin-top: -5px;}

 

  @media (max-width: 991px) {
    .tech-img { border-top-right-radius: 12px; border-bottom-left-radius: 0; }
  }
`;

export default WhySoundbeats;