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
import DarkLogo from '../images/registers/logo/Dark.png';
import Logo from '../images/logo/logo/dark.png';
import AuthLayout from './AuthLayout';

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
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      toast.error('Invalid email format');
      return;
    }

    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(form.phoneNumber)) {
      setPhoneNumberError('Invalid phone number');
      toast.error('Invalid phone number');
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

    setLoading(true);
    const [data, errorObj] = await withApi(AuthService.register)(apiForm);
    setLoading(false);

    if (data) {
      setOtpEmail(form.email);
      setShowOtp(true);
      setConfirmPasswordError('');
      setPhoneNumberError('');
      return;
    }

    const err = errorObj?.data || {};
    if (err.phone_number) {
      setPhoneNumberError(err.phone_number[0]);
    } else if (err.password_confirmation) {
      setConfirmPasswordError(err.password_confirmation[0]);
    }
  };

  return (
    <AuthLayout>
      {showOtp ? (
        <EmailVerification email={otpEmail} user={form} />
      ) : (
        <>
          <div className="align-center justify-center mb-6 lg:hidden text-white flex flex-cols md:mb-15">
            <img className="w-32 md:w-44 md:h-18 h-12" src={Logo} alt="" />
          </div>
          <h2 className="lg:text-[55px] font-['inter']  text-[34px] font-semibold md:font-bold mb-2">
            Create Account
          </h2>
          <p className="text-white lg:text-[22px] text-[14px] mb-3 font-['inter'] font-normal">
            Don’t worry. <span className="font-semibold">We can help.</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 ">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full sm:w-1/2 px-4 py-3 h-12 rounded-lg bg-white text-gray-700 placeholder-gray-400 font-light font-['inter']"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full sm:w-1/2 px-4 py-3 h-12 rounded-lg bg-white text-gray-700 placeholder-gray-400 font-light font-['inter']"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Please fill in your email address"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 h-12 rounded-lg bg-white text-gray-700 placeholder-gray-400 font-light font-['inter']"
              />
              <img
                src={EmailImg}
                alt="email"
                className="absolute right-5 top-1/2 transform -translate-y-1/2 w-9 h-6"
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Please fill in your phone number"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 h-12 rounded-lg bg-white text-gray-700 placeholder-gray-400 font-light font-['inter']"
              />
              <FontAwesomeIcon
                icon={faSquarePhoneFlip}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-4xl"
              />
              {phoneNumberError && (
                <p className="text-red-200 text-xs mt-1">{phoneNumberError}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Please fill in your password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 h-12 rounded-lg bg-white text-gray-700 placeholder-gray-400 font-['inter'] font-light"
              />
              <img
                src={PasswordImg}
                alt="password"
                className="absolute right-5 top-1/2 transform -translate-y-1/2 w-9 h-6"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 h-12 rounded-lg font-['inter'] font-light bg-white text-gray-700 placeholder-gray-400"
              />
              <img
                src={PasswordImg}
                alt="password"
                className="absolute right-5 top-1/2 transform -translate-y-1/2 w-9 h-6"
              />
              {confirmPasswordError && (
                <p className="text-red-200 text-xs mt-1">
                  {confirmPasswordError}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-48 py-3 bg-white text-[#FF6C20] font-semibold rounded-full text-center hover:opacity-90 disabled:bg-gray-300 text-[20px] font-['inter']"
              >
                {loading ? (
                  <>
                    <span className="hidden sm:inline">Creating...</span>
                    <span className="inline sm:hidden">Registering...</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Create Account</span>
                    <span className="inline sm:hidden">Register</span>
                  </>
                )}
              </button>
            </div>

            <div className=" text-white text-center text-[19px] font-['inter'] underline">
              <Link to="/login">Have an account? Login</Link>
            </div>
          </form>

          {/* Mobile footer */}
          <div className="block lg:hidden text-[17px] text-center font-['poppins'] text-white mt-6 space-x-2">
            <a href="#">Terms and conditions</a>
            <span>|</span>
            <a href="#">FAQs</a>
            <span>|</span>
            <a href="#">Contact us</a>
          </div>
        </>
      )}
    </AuthLayout>
  );
};

export default Register;
