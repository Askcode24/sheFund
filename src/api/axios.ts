import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const publicEndpoints = ['/auth/register', '/auth/login'];
    const isPublic = config.url
      ? publicEndpoints.some((url) => config.url!.includes(url))
      : false;
    if (!isPublic) {
      const token =
        localStorage.getItem('accessToken') || import.meta.env.VITE_API_TOKEN;
      if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('accessToken');
        // window.location.href = '/login';
      }
      return Promise.reject(error);
    } else {
      return Promise.reject({
        message: 'Network error. Please check your connection.',
      });
    }
  }
);

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
