import { z } from "zod";

export const authorizationSchema = z.object({
  login: z
    .string()
    .min(1, "Введите email или телефон")
    .refine(
      (value) => {
        const isEmail = /^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i.test(value);
        const isPhone = /^(\+7|8)\d{10}$/.test(value);
        return isEmail || isPhone;
      },
      "Введите email или телефон"
    ),

  password: z
    .string()
    .min(1, "Введите пароль")
    .min(8, "Минимум 8 символов"),
});

export type AuthorizationForm = z.infer<typeof authorizationSchema>;