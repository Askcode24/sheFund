import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  Logo?: string;
}

const Navbar: React.FC<NavbarProps> = ({ Logo }) => {
  // ...existing code from Navbar.jsx...
  return <nav>{/* ...navbar UI... */}</nav>;
};

export default Navbar;
