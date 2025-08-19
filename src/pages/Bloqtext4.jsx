import React from 'react';

export function Bloqtext4({}) {
  return (
    <div className="flex flex-col p-4 flex-1">
      <div className="flex items-center gap-x-8 mb-6">
        <h5 className="font-semibold text-[12px] text-[#333333] font-['roboto']">
          Travel
        </h5>
        <p className="text-[12px] font-['roboto'] font-[500] text-[#999999]">
          13 March 2023
        </p>
      </div>
      <div className="text-[24px] leading-[32px] font-numeric font-[800] text-[#333333] mb-4 font-['raleway']">
        Who is the best singer on chart? Know him?
      </div>
      <div className="text-[15px] font-[400] text-[#666666] mb-4 flex-1 font-['roboto']">
        The choice between a train or bus journey depends on
        <br className="hidden md:block" /> various factors such as the distance
        of the journey, the
        <br className="hidden md:block" /> time available, the cost, and person
      </div>
      <a
        href=""
        className="text-[#ff6c20] font-bold text-[18px] font-['roboto']"
      >
        Read More...
      </a>
    </div>
  );
}
