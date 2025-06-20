import { BloqText6 } from './BloqText6';
import React from 'react';
export function Grid6({ Container6 }) {
  return (
    <div className="bloq-grid6">
      <div className="bloq-img-container6">
        <span className="bloq-img6">
          <img src={Container6} alt="" />
        </span>
      </div>
      <BloqText6 />
    </div>
  );
}
