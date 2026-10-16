export const AUTH_ERROR_MESSAGES: Record<string, string> = {
  invalid_refresh_token: "Такого пользователя не существует",
  account_already_exists:
    "Пользователь с таким email или телефоном уже зарегистрирован",
  too_many_requests: "Слишком много попыток. Попробуйте позже",
  internal_error: "Сервер не отвечает. Попробуйте позже",
};
