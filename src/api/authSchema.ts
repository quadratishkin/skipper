import { z } from "zod";

/* ============================================================
   ПРОВЕРКИ
   ============================================================ */

export const isEmail = (value: string) =>
  /^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i.test(value);

export const isPhone = (value: string) => /^(\+7|8)\d{10}$/.test(value);

export const isEmailOrPhone = (value: string) => isEmail(value) || isPhone(value);

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

    name: z.string().trim().min(1, "Введите имя"),

    last_name: z.string().trim().min(1, "Введите фамилию"),

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