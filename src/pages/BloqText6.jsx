import React from 'react';
export function BloqText6({}) {
  return (
    <div className="flex flex-col p-4 flex-1">
      <div className="flex items-center gap-x-8 mb-6">
        <h5 className="font-semibold text-[12px] text-[#333333] font-['roboto']">
          Sport
        </h5>
        <p className="text-[12px] font-['roboto'] font-[500] text-[#999999]">
          10 March 2023
        </p>
      </div>
      <div
        className="text-[24px] leading-[32px] font-numeric font-[800] text-[#333333] mb-4 font-['raleway']
        "
      >
        Make some drinks with chocolates chocolates and milk
      </div>
      <div className="text-[15px] font-[400] text-[#666666] mb-4 flex-1 font-['roboto']">
        Organically grow the holistic world view of disruptive
        <br className="hidden md:block" />
        innovation via workplace diversity and empowerment.
        <br className="hidden md:block" /> survival strategies to ensure
        proactive
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
