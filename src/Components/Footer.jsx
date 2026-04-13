import React from 'react';
import { MapPin, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="soundbeats-footer">
      
      {/* --- TOP BRANDING LAYER --- */}
      <div className="footer-top-layer">
        <div className="container d-flex flex-wrap align-items-center justify-content-between py-4">
          
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <h2 className="footer-logo">SOUND<span className="text-orange">BEATS</span></h2>
            <p className="footer-tagline">Premium Sound & Lighting</p>
          </div>

          {/* Quick Links */}
          <nav className="footer-nav d-none d-md-flex align-items-center">
            <a href="#home" className="nav-item">Home</a>
            <span className="dot">•</span>
            <a href="#services" className="nav-item">Services</a>
            <span className="dot">•</span>
            <a href="#portfolio" className="nav-item">Portfolio</a>
            <span className="dot">•</span>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>

          {/* Social Media Icons */}
          <div className="footer-socials d-flex gap-3">
            <a href="/" className="social-icon insta"><Instagram size={20} /></a>
            <a href="/" className="social-icon yt"><Youtube size={20} /></a>
            <a href="/" className="social-icon fb"><Facebook size={20} /></a>
          </div>
        </div>
      </div>

      {/* --- BOTTOM CONTACT BAR --- */}
      <div className="footer-bottom-bar">
        <div className="container py-3">
          <div className="row g-3 align-items-center text-center text-md-start">
            
            {/* Location & Email */}
            <div className="col-lg-3 border-end-custom">
              <div className="d-flex align-items-center gap-2 mb-2">
                <MapPin size={16} className="text-muted-hifi" />
                <span className="info-text">Indore, Madhys. Pradesh</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Mail size={16} className="text-muted-hifi" />
                <span className="info-text">info@soundbeats.in</span>
              </div>
            </div>

            {/* Primary Phone */}
            <div className="col-lg-3 border-end-custom text-lg-center">
              <div className="d-flex align-items-center justify-content-lg-center gap-2">
                <Phone size={16} className="text-muted-hifi" />
                <span className="info-text">+91 XXXXX XXXXX</span>
              </div>
              <div className="d-flex align-items-center justify-content-lg-center gap-2 mt-2">
                <Phone size={16} className="text-muted-hifi" />
                <span className="info-text">+92XXX XXXXX</span>
              </div>
            </div>

            {/* Placeholder / Spacing */}
            <div className="col-lg-3 d-none d-lg-block"></div>

            {/* Secondary Contact Info */}
            <div className="col-lg-3 text-lg-end">
              <div className="d-flex align-items-center justify-content-lg-end gap-2 mb-2">
                <Phone size={16} className="text-muted-hifi" />
                <span className="info-text">+91 XXXXX XXXXX</span>
              </div>
              <div className="d-flex align-items-center justify-content-lg-end gap-2">
                <Mail size={16} className="text-muted-hifi" />
                <span className="info-text">info@soundbeats.in</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .soundbeats-footer {
          font-family: 'Poppins', sans-serif;
          background-color: #f8faff;
        }

        /* TOP LAYER */
        .footer-logo {
          font-weight: 900;
          font-size: 1.8rem;
          margin: 0;
          color: #1a2a6c;
          letter-spacing: 1px;
        }
        .text-orange { color: #e67e22; }
        .footer-tagline {
          font-size: 0.85rem;
          color: #666;
          margin: 0;
          font-weight: 500;
        }

        .footer-nav .nav-item {
          text-decoration: none;
          color: #1a2a6c;
          font-weight: 600;
          font-size: 0.95rem;
          transition: 0.3s;
        }
        .footer-nav .dot {
          margin: 0 12px;
          color: #ccc;
          font-size: 0.8rem;
        }
        .footer-nav .nav-item:hover { color: #e67e22; }

        /* SOCIAL ICONS */
        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: white;
          transition: 0.3s;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .insta { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
        .yt { background: #ff0000; }
        .fb { background: #3b5998; }
        .social-icon:hover { transform: translateY(-3px); box-shadow: 0 6px 15px rgba(0,0,0,0.2); }

        /* BOTTOM BAR */
        .footer-bottom-bar {
          background-color: #ffffff;
          border-top: 1px solid #eee;
          color: #1a2a6c;
        }
        .info-text {
          font-size: 0.9rem;
          font-weight: 500;
        }
        .text-muted-hifi { color: #1e88e5; }
        
        .border-end-custom {
          border-right: 1px solid #eee;
        }

        @media (max-width: 991px) {
          .border-end-custom { border-right: none; border-bottom: 1px solid #eee; padding-bottom: 15px; }
          .footer-top-layer { text-align: center; }
          .footer-socials { justify-content: center; margin-top: 20px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;