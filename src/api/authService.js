import api from './axios';

class AuthService {
  static async login(data) {
    const response = await api.post('/auth/login', data);
    const token = response.data.data?.auth_details?.access_token;
    console.log('Login token:', token); // Log the token
    if (token) {
      localStorage.setItem('accessToken', token);
    }
    return response;
  }

  static async logout() {
    return api.post('/auth/logout');
  }

  static async register(data) {
    const response = await api.post('/auth/register', data);
    const token = response.data.data?.auth_details?.access_token;
    console.log('Register token:', token); // Log the token
    if (token) {
      localStorage.setItem('accessToken', token);
    }
    return response;
  }

  static async forgotPassword(data) {
    return api.post('/auth/forgot-password', data);
  }

  static async verifyOtp(data) {
    return api.post('/auth/verify', data);
  }

  static async resendOtp(data) {
    return api.get('/auth/request-confirmation-otp', { params: data });
  }

  static async contactUs(data) {
    return api.post('/contact-us', data);
  }

  static async requestOtpForPasswordReset(data) {
    return api.post('/auth/password/request-otp', data);
  }

  static async resetPasswordWithOtp(data) {
    return api.post('/auth/password/reset', data);
  }

  // static getAllUsers() {
  //   return api.get('/auth/active-user');
  // }

  // static deleteUser(id) {
  //   return api.delete(`/users/${id}`);
  // }
}

export default AuthService;
