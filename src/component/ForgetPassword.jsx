import DarkLogo from '../images/Registers/Logo/Dark.png';
import '../styles/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { ForgetAside } from './ForgetAside';
import EmailImg from '../images/Registers/image1.png';
import '../styles/ForgetPassword.css';
import { useState } from 'react';
import { withApi } from '../api/withApi';
import PasswordImg from '../images/Registers/image2.png';
import AuthService from '../api/authService';
import { toast } from 'react-toastify';
import Logo from '../images/Logo/Logo/Dark.png';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (formPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    setLoading(true);
    const [data, error] = await withApi(AuthService.requestOtpForPasswordReset)(
      { email }
    );
    setLoading(false);
    if (data) {
      navigate('/otp', { state: { email, formPassword, confirmPassword } });
    }
    if (error) {
      toast.error('Failed to send OTP. Please try again.');
    }
  };

  return (
    <div className="forget-password-container">
      <div className="forAside">
        <ForgetAside DarkLogo={DarkLogo} />
      </div>
      <div className="forget-account-inputs">
        <div className="forget-account-info">
          <span
            className="logo"
            style={{ textAlign: 'center', margin: '10px auto  ' }}
          >
            <img src={Logo} alt="" />
          </span>
          <div className="forget-password-div">
            <span className="forget-heading">Forget password?</span>
            <span className="forget-para">Dont wory. We can help.</span>
            <div className="login-input1">
              <input
                type="email"
                id="email"
                placeholder="Please fill in your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
              <img src={EmailImg} alt="" />
            </div>
            <div className="login-input2">
              <input
                type="password"
                id="formPassword"
                placeholder="Please fill in your password"
                value={formPassword}
                onChange={(e) => setFormPassword(e.target.value)}
              />
              <img src={PasswordImg} alt="" />
            </div>
            <div className="login-input3">
              <input
                type="password"
                id="confirmPassword"
                placeholder="Please confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img src={PasswordImg} alt="" />
            </div>
            <div className="forget-action-div">
              <div className="forget-action-btn">
                <button type="button" onClick={handleSubmit} disabled={loading}>
                  {loading ? 'Processing...' : 'Continue'}
                </button>
              </div>
              <div className="forget-action-link">
                <p>Remembered your password?</p>
                <Link className="link" to="/login">
                  Back to login
                </Link>
              </div>
            </div>
            <div className="login-asides">
              <span className=" mobile">
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
    </div>
  );
};
export default ForgetPassword;
