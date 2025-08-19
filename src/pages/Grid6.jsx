import { BloqText6 } from './BloqText6';
import React from 'react';
export function Grid6({ Container6 }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl flex items-center justify-center bg-[#cce9ff]">
        <img src={Container6} alt="" className="object-cover w-full h-full" />
      </div>
      <BloqText6 />
    </div>
  );
}
