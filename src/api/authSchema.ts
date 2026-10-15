import { z } from "zod";

/* ============================================================
   ПРОВЕРКИ
   ============================================================ */

/* Email или телефон */
const isEmailOrPhone = (value: string) => {
  const isEmail = /^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i.test(value);
  const isPhone = /^(\+7|8)\d{10}$/.test(value);
  return isEmail || isPhone;
};

/* Минимум 2 слова (имя + фамилия) */
const isFullName = (value: string) => {
  const words = value.trim().split(/\s+/).filter(Boolean);
  return words.length >= 2;
};

/* ============================================================
   ВХОД
   ============================================================ */

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Введите email или телефон")
    .refine(isEmailOrPhone, "Некорректный email или телефон"),

  password: z.string().min(1, "Введите пароль").min(8, "Минимум 8 символов"),
});

export type LoginForm = z.infer<typeof loginSchema>;

/* ============================================================
   РЕГИСТРАЦИЯ
   ============================================================ */

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, "Введите email или телефон")
      .refine(isEmailOrPhone, "Некорректный email или телефон"),

    name: z
      .string()
      .trim()
      .min(1, "Введите имя и фамилию")
      .refine(
        isFullName,
        "Укажите имя и фамилию через пробел (минимум 2 слова)",
      ),

    password: z
      .string()
      .min(1, "Введите пароль")
      .min(8, "Минимум 8 символов"),

    passwordRepeat: z.string().min(1, "Повторите пароль"),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Пароли не совпадают",
    path: ["passwordRepeat"],
  });

export type RegisterForm = z.infer<typeof registerSchema>;

/* ============================================================
   ОБЩИЙ ТИП
   ============================================================ */

export type AuthFormData = LoginForm | RegisterForm;