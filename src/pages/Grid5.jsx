import { BloqText5 } from './BloqText5';
import React from 'react';
export function Grid5({ Container5 }) {
  return (
    <div className="bloq-grid5">
      <div className="bloq-img-container5">
        <span className="bloq-img5">
          <img src={Container5} alt="" />
        </span>
      </div>
      <BloqText5 />
    </div>
  );
}
