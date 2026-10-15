import { ApiError } from "./ApiError";

export const validateResponse = async (
  response: Response,
): Promise<Response> => {
  if (!response.ok) {
    let code = "unknown";
    let message = "Произошла ошибка";

    try {
      const data = await response.json();
      if (data?.error?.code) code = data.error.code;
      if (data?.error?.message) message = data.error.message;
    } catch {
      /* оставляем дефолт */
    }

    throw new ApiError(code, message);
  }
  return response;
};