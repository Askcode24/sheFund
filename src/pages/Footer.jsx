import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Footer({ Logo, Facebook, Linkedin, Twitter }) {
  const location = useLocation();

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="container">
      <div className="footer-content">
        <div className="footer-company-info">
          <Link
            to="/"
            onClick={scrollToTop}
            className="logo-dark"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src={Logo} alt="logo" width={'15%'} />
            <h4>Shefund</h4>
          </Link>
          <p>
            SuperWallet is designed for individuals seeking a<br /> seamless and
            secure digital wallet experience.
          </p>
        </div>
        <div className="footer-navigation">
          <div className="col-menu-item">
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="col-menu-item2">
            <Link to="/careers">Careers</Link>
            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Contact Us
            </Link>
          </div>
          <div className="social-media">
            <div className="icon">
              <img src={Facebook} alt="Facebook" />
            </div>
            <div className="icon">
              <img src={Linkedin} alt="LinkedIn" />
            </div>
            <div className="icon">
              <img src={Twitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider">
        <span></span>
      </div>
      <div className="footer-footnote">
        <div className="links">
          <Link to="/privacy-policy">Privacy policy</Link>
          <Link to="/terms-of-service" className="a">
            Terms of service
          </Link>
        </div>
        <p>© 2025 Shefund</p>
      </div>
    </footer>
  );
}
