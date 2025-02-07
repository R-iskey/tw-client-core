export interface LoginRequest {
  userName: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  active: boolean;
  id: number;
  notifyToken: string;
  token: string;
  userName: string;
}

export interface SignupRequest {
  phonenNumber: string;
  password: string;
  confirmPassword: string;

  email?: string;
  birthday?: string;
  promoCode?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  gender?: string;
  country?: string;
  cityRegion?: string;
  postalCode?: string;
  address?: string;
  referralCode?: string;
  locale?: string;
}

export interface SignupResponse {
  token: string;
}
