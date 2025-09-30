import OTPInput from 'otp-input-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Logo from '../images/logo/darklogo/dark.png';
import AuthLayout from '../component/AuthLayout';
import AuthService from '../api/authService';
import { withApi } from '../api/withApi';

const OtpComponent: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const { email, formPassword, confirmPassword } = location.state || {};

  useEffect(() => {
    // Debug info
    console.log(email);
    console.log(formPassword);
    console.log(confirmPassword);
  }, []);

  const handleChange = (value: string) => {
    setOtp(value);
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error('Please enter the complete 6-digit code.');
      setError('Please enter the complete 6-digit code.');
      return;
    }
    setLoading(true);
    const [data, apiError] = await withApi(AuthService.resetPasswordWithOtp)({
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
    if (apiError) {
      setError(apiError.message || 'Failed to reset password.');
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center w-full py-12 gap-8">
        <div className="mb-4 w-full flex justify-center lg:hidden">
          <img className="w-28 h-auto" src={Logo} alt="" />
        </div>
        {/* ...rest of the component... */}
      </div>
    </AuthLayout>
  );
};

export default OtpComponent;
