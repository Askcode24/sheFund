import React from 'react';
export function Grid2({ Container2 }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl flex items-center justify-center bg-[#cce9ff]">
        <img src={Container2} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col p-4 flex-1">
        <div className="flex items-center gap-x-8 mb-6">
          <h5 className="font-semibold text-[12px] text-[#333333] font-['roboto']">
            DEVELOPMENT
          </h5>
          <p className="text-[12px] font-['roboto'] font-[500] text-[#999999]">
            11 March 2023
          </p>
        </div>
        <div className="text-[24px] leading-[32px] font-numeric font-[800] text-[#333333] mb-4 font-['raleway']">
          Best Website to research for your next project
        </div>
        <div className="text-[15px] font-[400] text-[#666666] mb-4 flex-1 font-['roboto']">
          Capitalize on low hanging fruit to identify a ballpark
          <br className="hidden md:block" /> value added activity to beta test.
          Override the digital
          <br className="hidden md:block" /> divide with additional
          clickthroughs
        </div>
        <a
          href=""
          className="text-[#ff6c20] font-bold text-[18px] font-['roboto'] "
        >
          Read More...
        </a>
      </div>
    </div>
  );
}
