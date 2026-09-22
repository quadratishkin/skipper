import { z } from "zod";

export const registrationSchema = z
  .object({
    login: z
      .string()
      .min(1, "Введите email или телефон")
      .regex(
        /^([\w.%+-]+@[\w.-]+\.[a-z]{2,}|(\+7|8)\d{10})$/i,
        "Некорректный email или телефон"
      ),
    name: z.string().min(2, "Минимум 2 символа"),
    surname: z.string().min(2, "Минимум 2 символа"),
    password: z.string().min(8, "Минимум 8 символов"),
    passwordRepeat: z.string(),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Пароли не совпадают",
    path: ["passwordRepeat"],
  });

export type RegistrationForm = z.infer<typeof registrationSchema>;