import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Footer({ Logo, Facebook, Linkedin, Twitter }) {
  const location = useLocation();

  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0d0d0d] text-white font-outfit px-6 sm:px-10 lg:px-[130px] pt-20 pb-10 w-full">
      {/* Top Footer Content */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-start max-w-[1180px] mx-auto">
        {/* Left: Company Info */}
        <div className="font-['poppins'] flex flex-col gap-3 w-full lg:max-w-[580px]">
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-3"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />
            <h4 className="text-[17.5px] font-extrabold font-['poppins']">
              Shefund
            </h4>
          </Link>
          <p className="text-sm sm:text-base leading-[22px] font-['poppins'] max-w-[411px]">
            SuperWallet is designed for individuals seeking a seamless and
            secure digital wallet experience.
          </p>
        </div>

        {/* Right: Navigation and Social */}
        <div className="flex flex-col sm:flex-row gap-10 w-full lg:max-w-[580px] justify-between">
          <div className="flex flex-col gap-6 w-full sm:w-[180px]">
            <Link className="font-['poppins']" to="/" onClick={scrollToTop}>
              Home
            </Link>
            <Link className="font-['poppins']" to="/product">
              Products
            </Link>
            <Link className="font-['poppins']" to="/about">
              About
            </Link>
          </div>
          <div className="flex flex-col gap-6 w-full sm:w-[180px]">
            <Link className="font-['poppins']" to="/career">
              Careers
            </Link>
            <Link
              className="font-['poppins']"
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-row gap-4 items-start w-full sm:w-[180px]">
            {[Facebook, Linkedin, Twitter].map((icon, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-[#ff6c20] flex items-center justify-center"
              >
                <img src={icon} alt="icon" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#cdd5e0] opacity-30 my-8 max-w-[1180px] mx-auto" />

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs max-w-[1180px] mx-auto">
        <div className="flex gap-6">
          <Link className="font-['poppins'] underline" to="/privacy-policy">
            Privacy policy
          </Link>
          <Link className="font-['poppins'] underline" to="/terms-of-service">
            Terms of service
          </Link>
        </div>
        <p>© 2025 Shefund</p>
      </div>
    </footer>
  );
}
