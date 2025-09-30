export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user: User;
}

export interface ApiError {
  message: string;
  status?: number;
}
