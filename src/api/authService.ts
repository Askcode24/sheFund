import api from './axios';

interface AuthData {
  [key: string]: any;
}

class AuthService {
  static async login(data: AuthData) {
    const response = await api.post('/auth/login', data);
    const token = response.data.data?.auth_details?.access_token;
    if (token) {
      localStorage.setItem('accessToken', token);
    }
    return response;
  }

  static async logout() {
    return api.post('/auth/logout');
  }

  static async register(data: AuthData) {
    const response = await api.post('/auth/register', data);
    const token = response.data.data?.auth_details?.access_token;
    if (token) {
      localStorage.setItem('accessToken', token);
    }
    return response;
  }

  static async forgotPassword(data: AuthData) {
    return api.post('/auth/forgot-password', data);
  }

  static async verifyOtp(data: AuthData) {
    return api.post('/auth/verify', data);
  }

  static async resendOtp(data: AuthData) {
    return api.get('/auth/request-confirmation-otp', { params: data });
  }

  static async contactUs(data: AuthData) {
    return api.post('/contact-us', data);
  }

  static async requestOtpForPasswordReset(data: AuthData) {
    return api.post('/auth/password/request-otp', data);
  }

  static async resetPasswordWithOtp(data: AuthData) {
    return api.post('/auth/password/reset', data);
  }

  static async getAllUsers(config?: any) {
    return api.get('/auth/active-user', config);
  }

  static async deleteUser(id: string, config?: any) {
    return api.delete(`/users/${id}`, config);
  }
}

export default AuthService;
