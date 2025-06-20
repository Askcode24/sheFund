import { useState } from 'react';
import { AsideAll } from '../component/AsideAll';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import DarkLogo from '../images/Registers/Logo/dark.png';
import EmailImg from '../images/Registers/image1.png';
import PasswordImg from '../images/Registers/image2.png';
import AuthService from '../api/authService';
import { withApi } from '../api/withApi';
import { toast } from 'react-toastify';
import Logo from '../images/Logo/Logo/Dark.png';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setGeneralError('');
    setLoading(true);

    const [data, errorObj] = await withApi(AuthService.login)(form);
    console.log('Login response:', data);

    if (data) {
      const token =
        data.token ||
        data.access_token ||
        data.data?.token ||
        data.data?.access_token ||
        data.data?.auth_details?.access_token;
      if (token) {
        localStorage.setItem('shefund_token', token);
        localStorage.setItem(
          'shefund_user',
          JSON.stringify(data.data?.first_name)
        );
        navigate('/');
        toast.success(`Login successful!, ${data.data.first_name}`);
      } else {
        setGeneralError('Login failed: No token returned');
      }
    } else {
      const emailErr = errorObj?.data?.email?.[0];
      const passwordErr = errorObj?.data?.password?.[0];
      const nonFieldErr =
        errorObj?.data?.detail || errorObj?.data?.non_field_errors?.[0];

      if (emailErr) setEmailError(emailErr);
      if (passwordErr) setPasswordError(passwordErr);
      if (!emailErr && !passwordErr && nonFieldErr)
        setGeneralError(nonFieldErr);
      if (!emailErr && !passwordErr && !nonFieldErr)
        setGeneralError(
          'Login failed. Please check your credentials and try again.'
        );
    }
  };

  return (
    <div className="login-page-container">
      <AsideAll DarkLogo={DarkLogo} />
      <div className="login-container">
        <div className="login-content">
          <span
            className="logo"
            style={{ textAlign: 'center', margin: '10px auto  ' }}
          >
            <img src={Logo} alt="" />
          </span>
          <div className="login-form-container">
            <div className="login-heading">Login</div>
            <span className="login-para">Input your credentials</span>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                {generalError && (
                  <div style={{ color: '#fff', marginBottom: 8, fontSize: 13 }}>
                    {generalError}
                  </div>
                )}
                <div className="login-input1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Please fill in your email address"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <img src={EmailImg} alt="" />
                </div>
                {emailError && (
                  <div style={{ color: '#fff', marginTop: 5, fontSize: 13 }}>
                    {emailError}
                  </div>
                )}
                <div className="login-input2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Please fill in your password"
                    value={form.password}
                    onChange={handleChange}
                  />
                  <img src={PasswordImg} alt="" />
                </div>
                {passwordError && (
                  <div style={{ color: '#fff', marginTop: 5, fontSize: 13 }}>
                    {passwordError}
                  </div>
                )}
                <span className="forget-password">
                  <Link className="link" to="/forgetPassword">
                    Forgot Password?
                  </Link>
                </span>
                <div className="login-action-container">
                  <button
                    type="submit"
                    className="login-btn"
                    disabled={!form.email || !form.password || loading}
                  >
                    {loading ? 'Logging in...' : 'Login'}{' '}
                  </button>
                  <span className="register-link">
                    <Link className="link" to="/register">
                      Don’t have account ? Register
                    </Link>
                  </span>
                </div>
              </form>
            </div>
            <div className="login-asides">
              <span className="mobile">
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

export default Login;
