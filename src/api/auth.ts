import { isEmail, type LoginForm, type RegisterForm } from "./authSchema";
import { API_URL } from "./consts";
import { getAccessToken, setAccessToken } from "./token";
import { validateResponse } from "./validateResponse";

/* ============================================================
   ТИПЫ
   ============================================================ */

export type TokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type User = {
  id: number;
  name: string;
  last_name: string;
  date_of_birth?: string;
  email: string;
  phone_number?: string;
  avatar_url?: string;
};

/* ============================================================
   ВХОД
   ============================================================ */

export const login = async ({
  email,
  password,
}: LoginForm): Promise<void> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  await validateResponse(response);

  const data = (await response.json()) as TokenResponse;
  setAccessToken(data.access_token);
};

/* ============================================================
   РЕГИСТРАЦИЯ
   ============================================================ */

export const register = async ({
  email,
  password,
  name,
  last_name,
}: Omit<RegisterForm, "passwordRepeat">): Promise<void> => {
  const isEmailValue = isEmail(email);

  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      email: isEmailValue ? email : "",
      phone_number: isEmailValue ? "" : email,
      name,
      last_name,
      password,
    }),
  });

  await validateResponse(response);
};

/* ============================================================
   ОБНОВЛЕНИЕ ACCESS-ТОКЕНА
   ============================================================ */

export const refresh = async (): Promise<void> => {
  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });

  await validateResponse(response);

  const data = (await response.json()) as TokenResponse;
  setAccessToken(data.access_token);
};

/* ============================================================
   ТЕКУЩИЙ ПОЛЬЗОВАТЕЛЬ
   ============================================================ */

export const getMe = async (): Promise<User> => {
  const token = getAccessToken();

  const response = await fetch(`${API_URL}/user/me`, {
    method: "GET",
    credentials: "include",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  await validateResponse(response);
  return response.json();
};

/* ============================================================
   ВЫХОД
   ============================================================ */

export const logout = async (): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    await validateResponse(response);
  } finally {
    setAccessToken(null);
  }
};