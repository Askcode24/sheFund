import React, { useState, useEffect } from 'react';
import '../styles/Register.css';
import OTPInput from 'otp-input-react';
import { Link, useLocation } from 'react-router-dom';
import AuthService from '../api/authService';
import Logo from '../images/Logo/Logo/Dark.png';

const EmailVerification = ({ email, user }) => {
  const location = useLocation();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [form, setForm] = useState(user || location.state?.form || {});
  const userEmail = email || form.email || location.state?.form?.email || '';

  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // New state variable
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    if (location.state?.form) {
      setForm(location.state.form);
    }
    if (location.state?.otpSent) {
      setOtpSent(true); // Set otpSent if navigation state contains otpSent
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
      // You can navigate or update state here
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
      setOtpSent(true); // <-- Add this line
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
    <div className="create-account-info">
      <div
        className="account-form-container"
        style={{
          height: '400px',
          marginTop: '30px',
        }}
      >
        <span
          className="logo"
          style={{ textAlign: 'center', margin: ' auto 100px ' }}
        >
          <img src={Logo} alt="" />
        </span>
        <div className="create-heading mobile-view">Email Verification</div>
        <div className="Otp-container">
          <p
            className="otparagraph"
            style={{ marginBottom: 24, fontSize: 16, color: '#fff' }}
          >
            Enter the code sent to{' '}
            <b>
              <a
                href={`mailto:${userEmail}`}
                style={{ color: '#fff', textDecoration: 'underline' }}
              >
                {userEmail}
              </a>
            </b>
          </p>
          {otpSent && (
            <div style={{ color: 'green', marginBottom: 16 }}>
              OTP sent to your email!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              <OTPInput
                value={otp}
                onChange={handleChange}
                OTPLength={6}
                otpType="number"
                className="otp-field register-opt"
                autoFocus
                inputStyles={{
                  boxSizing: 'border-box',
                  width: '60px',
                  height: '60px',
                  background: '#FFFFFF',
                  color: '#333',
                  border: '0.792683px solid #FF6C20',
                  borderRadius: '7.92683px',
                  fontSize: '30px',
                  textAlign: 'center',
                  position: 'abosolute',
                }}
              />
            </div>
            {error && (
              <span style={{ color: 'red', fontSize: 14 }}>{error}</span>
            )}
            <div
              style={{ textAlign: 'center', color: '#fff', marginBottom: 16 }}
            >
              {timer > 0 ? (
                <span>
                  Resend code in 00:{timer < 10 ? `0${timer}` : timer}
                </span>
              ) : (
                <span
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={resendLoading ? undefined : handleResend}
                >
                  {resendLoading ? 'Resending...' : 'Resend code'}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={verifyLoading}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '22px',
                cursor: 'pointer',
                lineHeight: '30px',
                textAlign: 'center',
                letterSpacing: '-0.05em',
                color: '#ff6c20',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                width: '185px',
                height: '50px',
                border: 'none',
                background: '#ffffff',
                borderRadius: '40px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                margin: '50px auto',
              }}
            >
              {verifyLoading ? 'Verifying...' : 'Verify'}
            </button>
          </form>
          <div
            style={{
              marginTop: 24,
              fontSize: 15,
              color: '#fff',
              textAlign: 'center',
            }}
          >
            Email address not correct?{' '}
            <Link
              to="/register"
              state={{ form, otpSent }}
              style={{
                color: '#fff',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Edit
            </Link>
          </div>
          <div className="login-asides footer-note">
            <span className=" mobile" style={{ textAlign: 'center' }}>
              <a style={{ fontSize: '1rem' }} href="">
                Terms and conditions
              </a>
              <a style={{ fontSize: '1rem' }} href="">
                | FAQs
              </a>
              <a style={{ fontSize: '1rem' }} href="">
                | Contact us
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
