import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailImg from '../images/Registers/image1.png';
import PasswordImg from '../images/Registers/image2.png';
import AuthService from '../api/authService';
import { withApi } from '../api/withApi';
import { toast } from 'react-toastify';
import Logo from '../images/Logo/Logo/Dark.png';
import AuthLayout from '../component/AuthLayout';

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
    <AuthLayout>
      <>
        <div className="align-center justify-center mb-6 lg:hidden text-white flex flex-cols md:mb-15">
          <img className="w-32 md:w-44 md:h-18 h-12" src={Logo} alt="" />
        </div>

        <h2 className="lg:text-[55px] font-['inter'] md:font-bold font-semibold mb-2 text-[40px]">
          Login
        </h2>
        <p className="text-white mb-5 font-['inter'] text-[14px] lg:text-[22px] font-normal">
          Input your credentials
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-7 sm:space-y-6 lg:space-y-5"
        >
          {generalError && (
            <div className="text-white relative mb-2 text-[13px]">
              {generalError}
            </div>
          )}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Please fill in your email address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-4 pr-12 h-[55px] rounded-lg leading-[18px] bg-white text-[20px] text-[#222222] placeholder-[#00000040] text-start font-[400] font-['gotham']"
            />
            <img
              src={EmailImg}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 w-9 h-6"
              alt="email"
            />
          </div>
          {emailError && (
            <div className="text-white relative mt-1 text-[13px]">
              {emailError}
            </div>
          )}
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Please fill in your password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-4 pr-12 h-[55px] rounded-lg leading-[18px] bg-white text-[20px] text-[#222222] placeholder-[#00000040] text-start font-[400] font-['gotham']"
            />
            <img
              src={PasswordImg}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 w-9 h-6"
              alt="password"
            />
          </div>
          {passwordError && (
            <div className="text-white relative mt-1 text-[13px]">
              {passwordError}
            </div>
          )}
          <span className="text-white mt-3 justify-end  text-right flex-cols flex">
            <Link
              className="text-white text-right font-['inter'] text-[19px] underline font-normal"
              to="/forgetPassword"
            >
              Forgot Password?
            </Link>
          </span>
          <div className="flex justify-center mt-16">
            <button
              type="submit"
              className="w-48 py-3 bg-white text-[#FF6C20] font-medium rounded-full text-center hover:opacity-90 text-[23px] font-['inter'] disabled:bg-[#ccc] disabled:text-[#888] disabled:cursor-not-allowed disabled:opacity-[0.7]"
              disabled={!form.email || !form.password || loading}
            >
              {loading ? 'Logging in...' : 'Login'}{' '}
            </button>
          </div>
          <span className="flex justify-center">
            <Link
              className="text-white text-right font-['inter'] text-[19px] underline font-normal"
              to="/register"
            >
              Don’t have account ? Register
            </Link>
          </span>
        </form>
        <div className="block lg:hidden text-[17px] text-center font-['poppins'] text-white mt-6 mb-4 space-x-2">
          <a href="#">Terms and conditions</a>
          <span>|</span>
          <a href="#">FAQs</a>
          <span>|</span>
          <a href="#">Contact us</a>
        </div>
      </>
    </AuthLayout>
  );
};

export default Login;
