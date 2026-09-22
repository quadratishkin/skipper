import { z } from "zod";

export const accountSchema = z.object({
  userName: z
    .string()
    .min(3, "Минимум 3 символа")
    .max(30, "Максимум 30 символов")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Только латиница, цифры и знак подчёркивания"
    ),

  email: z.string().min(1, "Введите email").email("Некорректный email"),

  name: z.string().min(2, "Минимум 2 символа"),

  surname: z.string().min(2, "Минимум 2 символа"),

  date: z
    .string()
    .min(1, "Укажите дату рождения")
    .refine((value) => {
      const birth = new Date(value);
      const today = new Date();
      const age =
        today.getFullYear() -
        birth.getFullYear() -
        (today <
        new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
          ? 1
          : 0);
      return age >= 14;
    }, "Возраст должен быть не меньше 14 лет"),

  phone: z
    .string()
    .min(1, "Введите телефон")
    .regex(/^(\+7|8)\d{10}$/, "Формат: +7XXXXXXXXXX или 8XXXXXXXXXX"),
});

export type AccountForm = z.infer<typeof accountSchema>;