import { isEmail, type LoginForm, type RegisterForm } from "./authSchema";
import { API_URL } from "./consts";
import { validateResponse } from "./validateResponse";

/* ============================================================
   ВХОД
   ============================================================ */

export const login = async ({
  email,
  password,
}: LoginForm): Promise<void> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  await validateResponse(response);
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
   ВЫХОД
   ============================================================ */

export const logout = async (): Promise<void> => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  await validateResponse(response);
};