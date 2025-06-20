import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar({ Logo }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Get user info from localStorage
  const userData = JSON.parse(localStorage.getItem('shefund_user'));
  const firstName = userData;
  console.log('User First Name', firstName);

  const handleLogout = () => {
    localStorage.removeItem('shefund_token');
    localStorage.removeItem('shefund_user');
    navigate('/login');
  };

  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link
          to="/"
          onClick={scrollToTop}
          className="logo"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <img src={Logo} alt="logo" width={'15%'} />
          <h4>SheFund</h4>
        </Link>
        <ul className="nav-links">
          <li className="nav-home">
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link
              to={['/bloq'].includes(location.pathname) ? '/bloq/1' : '/bloq'}
            >
              Bloq
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={(e) => {
                if (location.pathname === '/contact') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="user-container">
        {firstName ? (
          <>
            <span
              style={{
                color: '#fff',
                alignItems: 'center',
                width: '200px',
                paddingTop: '5px',
                paddingLeft: '90px',
              }}
            >
              Hello, {firstName}
            </span>
            <button className="btn logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <div style={{ display: 'flex', gap: '30px', marginLeft: '60px' }}>
            <Link to="/register">
              <button className="btn resgister">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn login">Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
