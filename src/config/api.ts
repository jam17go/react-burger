const BASE_API_URL = process.env.REACT_APP_BASE_API_URL || "https://norma.nomoreparties.space/api";

export const ENDPOINTS = {
  INGREDIENTS: `${BASE_API_URL}/ingredients`,
  ORDERS: `${BASE_API_URL}/orders`,
  PASSWORD_RESET: `${BASE_API_URL}/password-reset`,
  PASSWORD_RESET_RESET: `${BASE_API_URL}/password-reset/reset`,
  REGISTER: `${BASE_API_URL}/auth/register`,
  LOGIN: `${BASE_API_URL}/auth/login`,
  REFRESH_TOKEN: `${BASE_API_URL}/auth/token`,
  LOGOUT: `${BASE_API_URL}/auth/logout`,
  USER: `${BASE_API_URL}/auth/user`,
};