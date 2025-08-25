import OTPInput from 'otp-input-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../images/logo/logo/dark.png';
import { useState, useEffect } from 'react';
import AuthLayout from '../component/AuthLayout';
import AuthService from '../api/authService';
import { withApi } from '../api/withApi';

const OtpComponent = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { email, formPassword, confirmPassword } = location.state || {};

  useEffect(() => {
    () => {
      console.log(email);
      console.log(formPassword);
      console.log(confirmPassword);
    };
  }, []);
  const handleChange = (value) => {
    setOtp(value);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error('Please enter the complete 6-digit code.');
      setError('Please enter the complete 6-digit code.');
      return;
    }
    setLoading(true);
    const [data, apiError] = await withApi(AuthService.resetPasswordWithOtp)({
      email,
      otp,
      password: formPassword,
      password_confirmation: confirmPassword,
    });
    setLoading(false);
    if (data) {
      toast.success('Password reset successful! You can now log in.');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }
    if (apiError) {
      setError(apiError.message || 'Failed to reset password.');
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center w-full py-12 gap-8">
        <div className="mb-4 w-full flex justify-center lg:hidden">
          <img className="w-28 h-auto" src={Logo} alt="" />
        </div>
        <h2 className="lg:text-[55px] font-['inter'] text-left md:text-left lg:text-left text-[45px] font-semibold md:font-bold mb-2">
          OTP
        </h2>
        <p className="mb-6 text-white font-['inter'] text-lg font-light w-full text-left md:text-left lg:text-left">
          please enter the six digit code that was sent to your email
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="flex justify-start items-start mb-12 flex-wrap gap-2 sm:gap-3">
            <OTPInput
              value={otp}
              onChange={handleChange}
              OTPLength={6}
              otpType="number"
              autoFocus
              inputClassName="!w-10 !h-10 sm:!w-12 sm:!h-12 md:!w-[50px] md:!h-[50px] !box-border !bg-white !text-[#333] !border !border-[#ff6c20] !rounded-[8px] !text-lg sm:!text-xl md:!text-2xl !text-center !focus:outline-none"
            />
          </div>
          {error && (
            <p className="text-red-200 text-xs mt-1 text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex justify-center items-center mx-auto w-48 h-12 bg-white text-[#ff6c20] font-semibold rounded-full text-lg hover:opacity-90 disabled:bg-gray-300"
          >
            {loading ? 'Processing...' : 'Continue'}
          </button>
        </form>
        <div className="block lg:hidden text-[17px] text-center font-poppins text-white mt-12 space-x-2">
          <a href="#">Terms and conditions</a>
          <span>|</span>
          <a href="#">FAQs</a>
          <span>|</span>
          <a href="#">Contact us</a>
        </div>
      </div>
    </AuthLayout>
  );
};
export default OtpComponent;
