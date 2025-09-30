import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';
import EmailVerification from './EmailVerification';
import AuthService from '../api/authService';
import { withApi } from '../api/withApi';
import { toast } from 'react-toastify';

import EmailImg from '../images/registers/image1.png';
import PasswordImg from '../images/registers/image2.png';

import Logo from '../images/logo/darklogo/dark.png';
import AuthLayout from './AuthLayout';

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const location = useLocation();

  const initialForm: RegisterForm = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const [form, setForm] = useState<RegisterForm>(
    location.state?.form || initialForm
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [showOtp, setShowOtp] = useState<boolean>(false);
  const [otpEmail, setOtpEmail] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');
  const [apiError, setApiError] = useState<string>('');

  useEffect(() => {
    if (location.state?.form) {
      setForm(location.state.form);
      setShowOtp(false);
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);

    if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
      setConfirmPasswordError('');
    }
    if (e.target.name === 'phoneNumber') {
      setPhoneNumberError('');
    }
    setApiError('');
  };

  const validateForm = (): boolean => {
    let valid = true;
    if (form.password !== form.confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    }
    if (!form.phoneNumber.match(/^\d{10,}$/)) {
      setPhoneNumberError('Enter a valid phone number');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirmPasswordError('');
    setPhoneNumberError('');
    setApiError('');

    if (!validateForm()) return;

    setLoading(true);
    const [data, error] = await withApi(AuthService.register)(form);
    setLoading(false);
    if (data) {
      setShowOtp(true);
      setOtpEmail(form.email);
      toast.success('Registration successful! Please verify OTP.');
    } else if (error) {
      setApiError(error.message || 'Registration failed');
    }
  };

  if (showOtp) {
    return <EmailVerification email={otpEmail} user={form} />;
  }

  return (
    <AuthLayout>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="logo" className="w-20 mb-4" />
          <h2 className="text-2xl font-bold">Create Account</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="input"
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="input"
          />
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="input"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="input"
            />
            <img
              src={PasswordImg}
              alt="password"
              className="absolute right-2 top-2 w-6"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="input"
            />
            <img
              src={PasswordImg}
              alt="confirm"
              className="absolute right-2 top-2 w-6"
            />
          </div>
        </div>
        {confirmPasswordError && (
          <div className="text-red-500">{confirmPasswordError}</div>
        )}
        {phoneNumberError && (
          <div className="text-red-500">{phoneNumberError}</div>
        )}
        {apiError && <div className="text-red-500">{apiError}</div>}
        <button type="submit" className="btn w-full mt-4" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
