import { Bloqtext4 } from './Bloqtext4';
import React from 'react';
import '../styles/Bloq.css';

export function Grid4({ Container4 }) {
  return (
    <div className="bloq-grid4">
      <div className="bloq-img-container4">
        <span className="bloq-img4">
          <img src={Container4} alt="" />
        </span>
      </div>
      <Bloqtext4 />
    </div>
  );
}
