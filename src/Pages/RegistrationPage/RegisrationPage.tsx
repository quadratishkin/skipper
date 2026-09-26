import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  type RegistrationForm,
} from "./RegistrationSchema";
import "./RegistrationPage.scss";

export const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      login: "",
      name: "",
      surname: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const onSubmit = (data: RegistrationForm) => {
    console.log("Данные формы:", data);
    // await fetch("/api/register", { method: "POST", body: JSON.stringify(data) });
  };

  return (
    <section className="registration">
      <div className="container">
        <div className="registration__wrapper">
          <h1 className="registration__header">Регистрация</h1>

          <form
            className="registration-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="registration-form__block">
              {/* Логин */}
              <div className="registration-form__input">
                <input
                  type="text"
                  className="registration-form__field"
                  placeholder="skipper@yandex.ru"
                  id="registrationLogin"
                  aria-invalid={!!errors.login}
                  {...register("login")}
                />
                <label
                  className="registration-form__label"
                  htmlFor="registrationLogin"
                >
                  <span className="registration-form__hint">
                    Email или телефон
                  </span>
                </label>
                {errors.login && (
                  <span className="registration-form__error">
                    {errors.login.message}
                  </span>
                )}
              </div>

              {/* Имя */}
              <div className="registration-form__input">
                <input
                  type="text"
                  className="registration-form__field"
                  placeholder="Name"
                  id="registrationName"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                <label
                  className="registration-form__label"
                  htmlFor="registrationName"
                >
                  <span className="registration-form__hint">Имя</span>
                </label>
                {errors.name && (
                  <span className="registration-form__error">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Фамилия */}
              <div className="registration-form__input">
                <input
                  type="text"
                  className="registration-form__field"
                  placeholder="Surname"
                  id="registrationSurname"
                  aria-invalid={!!errors.surname}
                  {...register("surname")}
                />
                <label
                  className="registration-form__label"
                  htmlFor="registrationSurname"
                >
                  <span className="registration-form__hint">Фамилия</span>
                </label>
                {errors.surname && (
                  <span className="registration-form__error">
                    {errors.surname.message}
                  </span>
                )}
              </div>

              {/* Пароль */}
              <div className="registration-form__input">
                <input
                  type="password"
                  className="registration-form__field"
                  placeholder="••••••••"
                  id="registrationPassword"
                  aria-invalid={!!errors.password}
                  {...register("password")}
                />
                <label
                  className="registration-form__label"
                  htmlFor="registrationPassword"
                >
                  <span className="registration-form__hint">Пароль</span>
                </label>
                {errors.password && (
                  <span className="registration-form__error">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Повтор пароля */}
              <div className="registration-form__input">
                <input
                  type="password"
                  className="registration-form__field"
                  placeholder="••••••••"
                  id="registrationPasswordRepeat"
                  aria-invalid={!!errors.passwordRepeat}
                  {...register("passwordRepeat")}
                />
                <label
                  className="registration-form__label"
                  htmlFor="registrationPasswordRepeat"
                >
                  <span className="registration-form__hint">
                    Повторите пароль
                  </span>
                </label>
                {errors.passwordRepeat && (
                  <span className="registration-form__error">
                    {errors.passwordRepeat.message}
                  </span>
                )}
              </div>
            </div>

            <div className="registration-form__btns">
              <button
                className="registration-form__btn registration-form__btn--save"
                type="submit"
                aria-label="зарегистрироваться"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "зарегистрироваться"}
              </button>

              <p className="registration-form__footer">
                Уже есть аккаунт?{" "}
                <Link className="registration-form__link" to="/authorization">
                  Войти
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
