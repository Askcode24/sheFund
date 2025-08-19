import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar({ Logo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem('shefund_user'));
  const firstName = userData;

  const handleLogout = () => {
    localStorage.removeItem('shefund_token');
    localStorage.removeItem('shefund_user');
    navigate('/login');
  };

  const isSingleBloqPage = /^\/bloq\/\d+/.test(location.pathname);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    !isSingleBloqPage && {
      name: 'Home',
      to: '/',
      onClick: () => {
        if (location.pathname === '/') scrollToTop();
        setMenuOpen(false);
      },
    },
    {
      name: 'About us',
      to: '/about',
      onClick: () => {
        if (location.pathname === '/about') scrollToTop();
        setMenuOpen(false);
      },
    },
    {
      name: 'Bloq',
      to: ['/bloq'].includes(location.pathname) ? '/bloq/1' : '/bloq',
      onClick: () => {
        if (
          location.pathname === '/bloq' ||
          location.pathname.startsWith('/bloq/')
        )
          scrollToTop();
        setMenuOpen(false);
      },
    },
    {
      name: 'Contact',
      to: '/contact',
      onClick: () => {
        if (location.pathname === '/contact') scrollToTop();
        setMenuOpen(false);
      },
    },
  ].filter(Boolean); // remove falsey (null or false) items

  return (
    <nav className="shadow-lg bg-[#ff6c20] fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 md:px-12 h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center "
          onClick={() => setMenuOpen(false)}
        >
          <img src={Logo} alt="logo" className="h-8 md:h-10" />
          <h4 className="text-white font-extrabold text-lg md:text-xl font-['Outfit']">
            SheFund
          </h4>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={typeof link.to === 'function' ? link.to() : link.to}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(typeof link.to === 'function' ? link.to() : link.to);
                  link.onClick();
                }}
                className="text-white capitalize font-['Outfit'] "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User/Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {firstName ? (
            <>
              <span className="text-white">Hello, {firstName}</span>
              <button
                className="px-8 py-2 bg-white text-[#ff6c20] border border-white rounded-full font-outfit text-sm tracking-wide capitalize font-light shadow-md transition hover:bg-orange-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="px-8 py-2 text-white bg-[#ff6c20] border border-white rounded-full font-outfit text-sm tracking-wide capitalize font-light shadow-md transition hover:bg-white hover:text-[#ff6c20]">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="px-10 py-2 bg-white text-[#ff6c20] border border-[#ff6c20] rounded-full font-outfit text-sm tracking-wide capitalize font-light shadow-md transition hover:bg-orange-100">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/5 max-w-xs bg-white/80 backdrop-blur-xl shadow-2xl z-50 rounded-l-3xl border-l border-[#ff6c20]/20 transform transition-transform duration-300 ease-in-out
    ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <button
          className="absolute top-5 right-6 text-3xl text-[#ff6c20] hover:text-orange-400 transition"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          {/* Modern close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col mt-24 gap-8 px-8">
          {navLinks.map((link, idx) => (
            <li
              key={link.name}
              className={`transition-all duration-300 ease-in-out transform ${
                menuOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              } delay-${idx * 100}`}
            >
              <Link
                to={link.to}
                onClick={link.onClick}
                className={`block text-lg font-['Outfit'] rounded-lg px-2 py-1 transition hover:bg-[#ff6c20]/10 hover:text-[#ff6c20] ${
                  location.pathname === link.to
                    ? 'text-[#ff6c20] font-semibold'
                    : 'text-[#ff6c20]'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {firstName ? (
            <li>
              <button
                className="w-full px-4 py-2 mt-4 bg-[#ff6c20] text-white rounded-full font-outfit text-base shadow-lg transition hover:bg-orange-500"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/register">
                  <button className="w-full px-4 py-2 mt-4 bg-[#ff6c20] text-white rounded-full font-outfit text-base shadow-lg transition hover:bg-orange-500">
                    Register
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button className="w-full px-4 py-2 bg-white text-[#ff6c20] border border-[#ff6c20] rounded-full font-outfit text-base shadow-lg transition hover:bg-orange-50 hover:border-orange-300">
                    Login
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-10 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
