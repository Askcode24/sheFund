import DackLogo from '../images/Registers/Logo/Dark.png';
import { ForgetAside } from './ForgetAside';
import OTPInput from 'otp-input-react';
import '../styles/OtpComponent.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../images/Logo/Logo/Dark.png';
import { useState, useEffect } from 'react';
import { FooterLink } from './FooterLink';
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
    const [data, error] = await withApi(AuthService.resetPasswordWithOtp)({
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
    if (error) {
      setError(error.message || 'Failed to reset password.');
    }
  };

  return (
    <div className="otp-verify-container">
      <div className="forAside">
        <ForgetAside DarkLogo={DackLogo} />
      </div>
      <div className="otp-verify-div">
        <div className="otp-verify-inputs">
          <span className="logo">
            <img src={Logo} alt="" />
          </span>
          <div className="otp-verify">
            <div className="otp-heading">
              <h3>OTP</h3>
            </div>
            <div className="otp-input">
              <span>
                please enter the six digit code that was sent to
                <br />
                your email
              </span>
              <div className="otp-Input">
                <OTPInput
                  value={otp}
                  onChange={handleChange}
                  OTPLength={6}
                  otpType="number"
                  className="otp-field"
                  autoFocus
                />
              </div>
            </div>
            <div className="otp-action">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn"
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Continue'}
              </button>
            </div>
          </div>
          <div className="login-asides">
            <span className=" mobile">
              <a href="">Terms and conditions</a>
              <a href="">| FAQs</a>
              <a href="">| Contact us</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtpComponent;
