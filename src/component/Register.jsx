import { ForgetAside } from './ForgetAside';
import DarkLogo from '../images/Registers/Logo/dark.png';
import EmailImg from '../images/Registers/image1.png';
import PasswordImg from '../images/Registers/image2.png';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Register.css';
import { useState, useEffect } from 'react';
import EmailVerification from './EmailVerification';
import AuthService from '../api/authService';
import { withApi } from '../api/withApi';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/Logo/Logo/Dark.png';

const Register = () => {
  const location = useLocation();
  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };
  const [form, setForm] = useState(location.state?.form || initialForm);

  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otpEmail, setOtpEmail] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  useEffect(() => {
    if (location.state?.form) {
      setForm(location.state.form);
      setShowOtp(false);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);

    if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
      setConfirmPasswordError('');
    }
    if (e.target.name === 'phoneNumber') {
      setPhoneNumberError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmPasswordError('');
    setPhoneNumberError('');
    if (form.password !== form.confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      toast.error('Passwords do not match');
      setLoading(false);
      return;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      toast.error('Invalid email format');
      setLoading(false);
      return;
    }
    let phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(form.phoneNumber)) {
      setPhoneNumberError('Invalid phone number');
      toast.error('Invalid phone number');
      setLoading(false);
      return;
    }

    const apiForm = {
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim(),
      phone_number: form.phoneNumber.trim(),
      password: form.password.trim(),
      password_confirmation: form.confirmPassword.trim(),
    };

    console.log('Register payload:', apiForm);

    setLoading(true);
    const [data, errorObj] = await withApi(AuthService.register)(apiForm);
    setLoading(false);

    if (data) {
      setOtpEmail(form.email);
      setShowOtp(true);
      setConfirmPasswordError('');
      setPhoneNumberError('');
      setGeneralError('');
      return;
    } else {
      if (errorObj && typeof errorObj === 'string') {
        toast.error('Server error: ' + errorObj);
      } else if (errorObj && errorObj.status === 500) {
        toast.error('Internal server error. Please try again later.');
      }
      const err = errorObj?.data || {};
      let errorMsg = '';
      if (err.first_name) errorMsg = err.first_name[0];
      else if (err.last_name) errorMsg = err.last_name[0];
      else if (err.phone_number) {
        setPhoneNumberError(err.phone_number[0]);
        errorMsg = err.phone_number[0];
      } else if (err.email) errorMsg = err.email[0];
      else if (Array.isArray(err.password)) {
        const confirmMsg = err.password.find((msg) =>
          msg.toLowerCase().includes('confirmation does not match')
        );
        if (confirmMsg) setConfirmPasswordError(confirmMsg);
        const otherPwErrors = err.password.filter(
          (msg) => !msg.toLowerCase().includes('confirmation does not match')
        );
        if (otherPwErrors.length > 0) errorMsg = otherPwErrors.join(' ');
      } else if (err.password) errorMsg = err.password[0];
      else if (err.password_confirmation)
        setConfirmPasswordError(err.password_confirmation[0]);
      else if (err.detail || err.non_field_errors)
        errorMsg = err.detail || err.non_field_errors[0];
      else
        errorMsg =
          'Registration failed. Please check your details and try again.';
    }
  };

  return (
    <div className="create-account-container">
      <ForgetAside DarkLogo={DarkLogo} />
      <div className="create-account-inputs">
        {showOtp ? (
          <EmailVerification email={otpEmail} user={form} />
        ) : (
          <div className="create-account-info">
            <div className="account-form-container">
              <span
                className="logo"
                style={{ textAlign: 'center', margin: ' auto 100px ' }}
              >
                <img src={Logo} alt="" />
              </span>
              <div className="create-heading">Create Account</div>
              <div className="create-paragraph">Don't worry. We can help.</div>
              <form onSubmit={handleSubmit}>
                <div className="create-names-inputs-field">
                  <div className="input-name">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-name">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="account-authen">
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
                  <div className="login-input1">
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Please fill in your phone number"
                      value={form.phoneNumber}
                      onChange={handleChange}
                    />
                    <FontAwesomeIcon
                      className="icon"
                      icon={faSquarePhoneFlip}
                      style={{ color: '#bdbdbd' }}
                    />
                  </div>
                  {phoneNumberError && (
                    <div
                      className="error-message"
                      style={{
                        color: 'red',
                        fontSize: '13px',
                        marginTop: '8px',
                      }}
                    >
                      {phoneNumberError}
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
                  <div className="login-input3">
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Please confirm your password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />
                    <img src={PasswordImg} alt="" />
                  </div>
                  {confirmPasswordError && (
                    <div
                      className="error-message"
                      style={{
                        color: 'red',
                        fontSize: '13px',
                        marginTop: '8px',
                      }}
                    >
                      {confirmPasswordError}
                    </div>
                  )}
                  <div className="login-action-container">
                    <button
                      type="submit"
                      className="login-btn"
                      disabled={
                        !form.firstName ||
                        !form.lastName ||
                        !form.email ||
                        !form.password ||
                        !form.confirmPassword ||
                        !!confirmPasswordError ||
                        loading
                      }
                    >
                      {loading ? 'Creating...' : 'Create Account'}
                    </button>
                    <span className="back-to-login-link">
                      <Link className="link" to="/login">
                        Has account ? Login
                      </Link>
                    </span>
                  </div>
                  <div className="login-asides">
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
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
