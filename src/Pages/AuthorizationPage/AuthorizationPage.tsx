import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  authorizationSchema,
  type AuthorizationForm,
} from "./AuthorizationSchema";
import "./AuthorizationPage.scss";

export const AuthorizationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthorizationForm>({
    resolver: zodResolver(authorizationSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = (data: AuthorizationForm) => {
    console.log("Данные формы:", data);
    // await fetch("/api/login", { method: "POST", body: JSON.stringify(data) });
  };

  return (
    <section className="authorization">
      <div className="container">
        <div className="authorization__wrapper">
          <h1 className="authorization__title">Вход</h1>

          <form
            className="authorization-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="authorization-form__block">
              {/* Логин */}
              <div className="authorization-form__input">
                <input
                  type="text"
                  className="authorization-form__field"
                  placeholder="skipper@yandex.ru или +79987654321"
                  id="authorizationLogin"
                  aria-invalid={!!errors.login}
                  {...register("login")}
                />
                <label
                  className="authorization-form__label"
                  htmlFor="authorizationLogin"
                >
                  <span className="authorization-form__hint">
                    Email или телефон
                  </span>
                </label>
                {errors.login && (
                  <span className="authorization-form__error">
                    {errors.login.message}
                  </span>
                )}
              </div>

              {/* Пароль */}
              <div className="authorization-form__input">
                <input
                  type="password"
                  className="authorization-form__field"
                  placeholder="••••••••"
                  id="authorizationPassword"
                  aria-invalid={!!errors.password}
                  {...register("password")}
                />
                <label
                  className="authorization-form__label"
                  htmlFor="authorizationPassword"
                >
                  <span className="authorization-form__hint">Пароль</span>
                </label>
                {errors.password && (
                  <span className="authorization-form__error">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className="authorization-form__btns">
              <button
                className="authorization-form__btn authorization-form__btn--submit"
                type="submit"
                aria-label="войти"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Вход..." : "войти"}
              </button>

              <p className="authorization-form__footer">
                Нет аккаунта?{" "}
                <Link className="authorization-form__link" to="/registration">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
