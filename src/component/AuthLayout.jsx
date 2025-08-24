import DarkLogo from '../images/registers/Logo/Dark.png';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Aside */}
      <div className="hidden lg:flex flex-col justify-between w-full lg:w-1/2 px-10 py-10 overflow-y-auto">
        <div>
          <img src={DarkLogo} alt="logo" className="w-28 mb-10" />
          <div className="text-[#727272] ml-16 mt-20 text-sm leading-relaxed space-y-2">
            <p className="text-[#727272] text-lg font-['inter']">
              Important Information
            </p>
            <p className="font-['inter'] text-[#727272] text-lg">
              Please read the information below and then kindly share the{' '}
              <br className="hidden md:block" />
              requested information.
            </p>
            <ul className="list-disc list-inside space-y-2 font-['inter'] text-lg pt-8 pl-4 text-[#727272]">
              <li>Do not reveal your password to anybody</li>
              <li>Do not reuse passwords</li>
              <li>Use Alphanumeric passwords</li>
              <li>Login IDs are case sensitive</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block text-xs text-[#727272] mt-10 space-x-1 font-['inter'] text-[20px]">
          <a href="#">Terms and conditions</a>
          <span>|</span>
          <a href="#">FAQs</a>
          <span>|</span>
          <a href="#">Contact us</a>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 bg-[#FF6C20] text-white lg:rounded-tl-[80px] lg:rounded-l-[80px] flex items-center justify-center px-5 sm:px-8 py-14 sm:py-16 min-h-screen lg:min-h-0">
        <div className="w-full max-w-[100%] sm:max-w-sm md:max-w-md lg:max-w-md mx-auto flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
