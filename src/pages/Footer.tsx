import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
  Logo?: string;
  Facebook?: string;
  Linkedin?: string;
  Twitter?: string;
}

const Footer: React.FC<FooterProps> = ({
  Logo,
  Facebook,
  Linkedin,
  Twitter,
}) => {
  return <footer>{/* ...footer UI... */}</footer>;
};

export default Footer;
