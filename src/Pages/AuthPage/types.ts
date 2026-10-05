import type { LoginForm, RegisterForm } from "./AuthPageSchema";

export type AuthMode = "login" | "register";

export type AuthFormByMode = {
  login: LoginForm;
  register: RegisterForm;
};

export type AuthFormData = LoginForm | RegisterForm;