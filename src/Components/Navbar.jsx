import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Crucial for routing
import { Phone, Menu } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom py-2">
      <div className="container">
        
        {/* Brand Logo & Tagline - Matches Footer/About Ref */}
        <Link className="navbar-brand d-flex flex-column" to="/" style={{ textDecoration: 'none' }}>
          <div className="d-flex align-items-center">
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#1a2a6c', letterSpacing: '1px' }}>SOUND</span>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#e67e22' }}>BEATS</span>
          </div>
          {/* <span className="brand-tagline">Premium Sound & Lighting</span> */}
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#soundBeatsNav"
        >
          <Menu size={24} />
        </button>

        <div className="collapse navbar-collapse" id="soundBeatsNav">
          <ul className="navbar-nav ms-auto align-items-center">
            
            {/* NavLink adds an 'active' class automatically when on that page */}
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-3 fw-semibold ${isActive ? 'text-orange' : 'text-dark'}`} to="/">
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-3 fw-semibold ${isActive ? 'text-orange' : 'text-dark'}`} to="/about">
                About
              </NavLink>
            </li>

            {/* Other links - using standard Link for now */}
            {[ 'Portfolio',  'Clients'].map((item) => (
              <li className="nav-item" key={item}>
                <Link className="nav-link px-3 text-dark fw-semibold" to={`/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
            
            {/* Action Buttons */}
            <li className="nav-item ms-lg-3 d-flex gap-2 mt-3 mt-lg-0">
              <button className="btn call-btn shadow-sm">
                <Phone size={16} className="me-2" />
                <a href="tel:+919977707007" style={{ textDecoration: 'none', color: 'inherit' }}> CALL NOW</a>
              </button>
              <button className="btn quote-btn shadow-sm">
               <a href="https://wa.me/919977707007" style={{ textDecoration: 'none', color: 'inherit' }}> GET QUOTE</a>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .brand-tagline {
          font-size: 10px;
          text-transform: uppercase;
          color: #666;
          font-weight: 600;
          letter-spacing: 1px;
          margin-top: -5px;
        }
        .text-orange { color: #e67e22 !important; }
        .nav-link:hover { color: #e67e22 !important; }
        
        .call-btn {
          background-color: #e67e22;
          color: white;
          font-weight: 700;
          padding: 8px 20px;
          border-radius: 6px;
        }
        
        .quote-btn {
          background-color: #0061ff;
          color: white;
          font-weight: 700;
          padding: 8px 20px;
          border-radius: 6px;
          border: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;