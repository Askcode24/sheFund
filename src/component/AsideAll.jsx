import { FooterLink } from './FooterLink';
import React from 'react';
export function AsideAll({ DarkLogo }) {
  return (
    <div className="login-aside">
      <span className="dark-logo">
        <img src={DarkLogo} alt="darklogo" width={'100%'} />
      </span>
      <div className="login-info">
        <span className="info-heading">
          <p>
            Important Information
            <br /> Please read the information below and then kindly share the
            <br /> requested information.
          </p>
        </span>
        <ul className="info-lists">
          <li>Do not reveal your password to anybody</li>
          <li>Do not reuse passwords</li>
          <li>Use Alphanumeric passwords</li>
          <li>Login IDs are case sensitive</li>
        </ul>
      </div>
      <FooterLink />
    </div>
  );
}
