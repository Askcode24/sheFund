import { Link, useNavigate } from 'react-router-dom';
import EmailImg from '../images/registers/image1.png';
import PasswordImg from '../images/registers/image2.png';
import Logo from '../images/logo/darklogo/dark.png';
import AuthLayout from '../component/AuthLayout';
import { useState } from 'react';
import { withApi } from '../api/withApi';
import AuthService from '../api/authService';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setError('');
  };
  const handleChangePassword = (e) => {
    setFormPassword(e.target.value);
    setError('');
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    const [data, apiError] = await withApi(
      AuthService.requestOtpForPasswordReset
    )({ email });
    setLoading(false);
    if (data) {
      navigate('/otp', { state: { email, formPassword, confirmPassword } });
    }
    if (apiError) {
      setError('Failed to send OTP. Please try again.');
    }
  };

  return (
    <AuthLayout>
      <div className="mb-12 w-full flex justify-center lg:hidden">
        <img className="w-28 h-auto" src={Logo} alt="Shefund logo" />
      </div>
      <h2 className="lg:text-[55px] font-['inter'] text-left md:text-left lg:text-left text-[40px] font-semibold md:font-bold mb-6 leading-tight lg:leading-[1.05]">
        Forgot <br className="block lg:hidden" /> password?
      </h2>
      <p className="mb-6 text-white font-['satoshi'] text-lg font-light w-full text-left md:text-left lg:text-left">
        Dont wory. We can help.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Please fill in your email address"
            value={email}
            onChange={handleChangeEmail}
            className="w-full px-4 py-3 pr-12 h-12 rounded-lg bg-white text-gray-700 placeholder-gray-400 font-light font-['inter']"
          />
          <img
            src={EmailImg}
            alt="email"
            className="absolute right-5 top-1/2 transform -translate-y-1/2 w-9 h-6"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="New password"
            value={formPassword}
            onChange={handleChangePassword}
            className="w-full px-4 py-3 pr-12 h-12 rounded-lg bg-white text-gray-700 placeholder-gray-400 font-['inter'] font-light"
          />
          <img
            src={PasswordImg}
            alt="password"
            className="absolute right-5 top-1/2 transform -translate-y-1/2 w-9 h-6"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            className="w-full px-4 py-3 pr-12 h-12 rounded-lg font-['inter'] font-light bg-white text-gray-700 placeholder-gray-400"
          />
          <img
            src={PasswordImg}
            alt="password"
            className="absolute right-5 top-1/2 transform -translate-y-1/2 w-9 h-6"
          />
        </div>
        {error && <p className="text-red-200 text-xs mt-1">{error}</p>}
        <div className="flex flex-col items-center gap-3 mt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-48 py-3 bg-white text-[#FF6C20] font-semibold rounded-full text-center hover:opacity-90 disabled:bg-gray-300 text-[20px] font-['inter']"
          >
            {loading ? 'Processing...' : 'Continue'}
          </button>
          <div className="text-white text-center mt-2">
            <p className="text-base">Rememberd your password?</p>
            <Link
              className="underline  text-lg font-['outfit'] font-extralight"
              to="/login"
            >
              Back to login
            </Link>
          </div>
        </div>
      </form>
      <div className="block lg:hidden text-[17px] text-center font-poppins text-white mt-22 space-x-2">
        <a href="#">Terms and conditions</a>
        <span>|</span>
        <a href="#">FAQs</a>
        <span>|</span>
        <a href="#">Contact us</a>
      </div>
    </AuthLayout>
  );
};
export default ForgetPassword;
