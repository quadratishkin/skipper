import type { AuthMode } from "./types";

export const DEFAULT_MODE: AuthMode = "login";

export const AUTH_TOGGLE_ITEMS: { mode: AuthMode; label: string }[] = [
  { mode: "login", label: "Войти" },
  { mode: "register", label: "Регистрация" },
];

export const EMPTY_FORM = {
  login: "",
  password: "",
  name: "",
  passwordRepeat: "",
};