import { BloqText5 } from './BloqText5';
import React from 'react';
export function Grid5({ Container5 }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl flex items-center justify-center bg-[#cce9ff]">
        <img src={Container5} alt="" className="object-cover w-full h-full" />
      </div>
      <BloqText5 />
    </div>
  );
}
