import React, { useState, useEffect } from 'react';
import OTPInput from 'otp-input-react';
import { Link, useLocation } from 'react-router-dom';
import AuthService from '../api/authService';
import Logo from '../images/logo/logo/dark.png';

const EmailVerification = ({ email, user }) => {
  const location = useLocation();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [form, setForm] = useState(user || location.state?.form || {});
  const userEmail = email || form.email || location.state?.form?.email || '';

  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    if (location.state?.form) {
      setForm(location.state.form);
    }
    if (location.state?.otpSent) {
      setOtpSent(true);
    }
  }, [location.state]);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value) => {
    setOtp(value);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError('Please enter the complete 6-digit code.');
      return;
    }
    setError('');
    setVerifyLoading(true);
    try {
      await AuthService.verifyOtp({ verification_code: otp });
      alert('Email verified!');
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Verification failed. Please check your code and try again.'
      );
    } finally {
      setVerifyLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    setError('');
    try {
      console.log('Resending OTP to:', userEmail);
      const response = await AuthService.resendOtp({ email: userEmail });
      console.log('OTP resend API response:', response);
      setTimer(60);
      setOtpSent(true);
      alert('OTP resent to your email!');
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Failed to resend OTP. Please try again later.'
      );
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full py-4 gap-4">
      <div className="mb-12 w-full flex justify-center lg:hidden">
        <img className="w-28 h-auto" src={Logo} alt="" />
      </div>
      <div className="lg:text-[55px] font-['inter'] text-left md:text-left lg:text-left text-[40px] font-semibold md:font-bold mb-6">
        Email Verification
      </div>
      <div className="mb-6 text-white font-['satoshi'] text-lg font-light w-full text-left md:text-left lg:text-left">
        Enter the code sent to{' '}
        <b>
          <a
            href={`mailto:${userEmail}`}
            className="underline font-semibold text-white break-all"
          >
            {userEmail}
          </a>
        </b>
      </div>
      {otpSent && (
        <div className="text-green-200 mb-4 text-center">
          OTP sent to your email!
        </div>
      )}
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
          <span className="text-red-200 text-sm block text-center mb-2">
            {error}
          </span>
        )}
        <div className="text-center text-medium text-white mb-8">
          {timer > 0 ? (
            <span>Resend code in 00:{timer < 10 ? `0${timer}` : timer}</span>
          ) : (
            <span
              className=" cursor-pointer"
              onClick={resendLoading ? undefined : handleResend}
            >
              {resendLoading ? 'Resending...' : 'Resend code'}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={verifyLoading}
          className="flex justify-center items-center mx-auto w-48 h-12 bg-white text-[#ff6c20] font-semibold rounded-full text-lg hover:opacity-90 disabled:bg-gray-300"
        >
          {verifyLoading ? 'Verifying...' : 'Verify'}
        </button>
      </form>
      <div className="mt-6 text-white text-center text-base">
        Email address not correct?{' '}
        <Link
          to="/register"
          state={{ form, otpSent }}
          className="underline font-semibold text-white"
        >
          Edit
        </Link>
      </div>
      <div className="block lg:hidden text-[17px] text-center font-poppins text-white mt-12 space-x-2">
        <a href="#">Terms and conditions</a>
        <span>|</span>
        <a href="#">FAQs</a>
        <span>|</span>
        <a href="#">Contact us</a>
      </div>
    </div>
  );
};

export default EmailVerification;
