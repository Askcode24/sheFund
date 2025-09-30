import React, { useState, useEffect } from 'react';
import OTPInput from 'otp-input-react';
import { Link, useLocation } from 'react-router-dom';
import AuthService from '../api/authService';
import Logo from '../images/logo/darklogo/dark.png';

interface EmailVerificationProps {
  email?: string;
  user?: any;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({
  email,
  user,
}) => {
  const location = useLocation();
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [form, setForm] = useState<any>(user || location.state?.form || {});
  const userEmail = email || form.email || location.state?.form?.email || '';

  const [timer, setTimer] = useState<number>(60);
  const [verifyLoading, setVerifyLoading] = useState<boolean>(false);
  const [resendLoading, setResendLoading] = useState<boolean>(false);

  useEffect(() => {
    if (location.state?.form) {
      setForm(location.state.form);
    }
  }, [location.state]);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string) => {
    setOtp(value);
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } catch (err: any) {
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
      await AuthService.resendOtp({ email: userEmail });
      setTimer(60);
    } catch (err: any) {
      setError('Failed to resend OTP. Try again later.');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={Logo} alt="logo" className="w-20 mb-4" />
      <h2 className="text-xl font-bold mb-2">Verify Your Email</h2>
      <p className="mb-4">
        Enter the 6-digit code sent to{' '}
        <span className="font-semibold">{userEmail}</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full max-w-xs"
      >
        <OTPInput
          value={otp}
          onChange={handleChange}
          OTPLength={6}
          inputType="number"
          disabled={verifyLoading}
          autoFocus
          className="otp-input"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="btn w-full" disabled={verifyLoading}>
          {verifyLoading ? 'Verifying...' : 'Verify'}
        </button>
      </form>
      <div className="mt-4 flex items-center gap-2">
        <span>Didn't get the code?</span>
        <button
          className="text-blue-500 hover:underline"
          onClick={handleResend}
          disabled={timer > 0 || resendLoading}
        >
          {resendLoading
            ? 'Resending...'
            : timer > 0
            ? `Resend in ${timer}s`
            : 'Resend OTP'}
        </button>
      </div>
      <Link to="/login" className="mt-6 text-blue-500 hover:underline">
        Back to Login
      </Link>
    </div>
  );
};

export default EmailVerification;
