import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AUTH_TOGGLE_ITEMS, DEFAULT_MODE, EMPTY_FORM } from "./consts";
import TitleElem from "../../components/textElem/Title/TitleElem";
import DescriptionElem from "../../components/textElem/Description/DescriptionElem";
import type { AuthFormData, AuthMode } from "./types";
import { loginSchema, registerSchema } from "./AuthPageSchema";
import {
  RiUser3Line,
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import "./AuthPage.scss";

export const AuthPage = () => {
  const [mode, setMode] = useState<AuthMode>(DEFAULT_MODE);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const isLogin = mode === "login";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormData>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
    defaultValues: EMPTY_FORM,
  });

  const handleModeChange = (newMode: AuthMode) => {
    if (newMode === mode) return;
    setMode(newMode);
    setShowPassword(false);
    setShowPasswordRepeat(false);
    reset(EMPTY_FORM);
  };

  const onSubmit = (data: AuthFormData) => {
    console.log(`Данные формы (${mode}):`, data);
  };

  return (
    <section className="auth">
      <div className="container">
        <div className="auth__wrapper">
          {/* Иконка профиля */}
          <div className="auth__icon">
            <RiUser3Line size={32} />
          </div>

          <TitleElem
            align="center"
            level={1}
            font="grotesk"
            fontWeight={700}
            fontSize={24}
          >
            Личный кабинет
          </TitleElem>

          <DescriptionElem margin="0 0 40px" align="center">
            Авторизуйтесь для управления анкетами, консультациями и
            персональными данными.
          </DescriptionElem>

          {/* Переключатель */}
          <div
            className="auth-toggle"
            role="tablist"
            aria-label="Переключение между входом и регистрацией"
          >
            <div
              className={`auth-toggle__slider${
                !isLogin ? " auth-toggle__slider--active-reg" : ""
              }`}
            />
            {AUTH_TOGGLE_ITEMS.map(({ mode: itemMode, label }) => {
              const isActive = mode === itemMode;
              return (
                <button
                  key={itemMode}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`auth-toggle__btn${
                    isActive ? " auth-toggle__btn--active" : ""
                  }`}
                  onClick={() => handleModeChange(itemMode)}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="auth-form__block">
              {/* Логин */}
              <div className="auth-form__input">
                <label className="auth-form__label" htmlFor="authLogin">
                  Логин или адрес почты
                </label>
                <div className="auth-form__field-wrapper">
                  <RiMailLine className="auth-form__icon" size={24} />
                  <input
                    type="text"
                    className="auth-form__field"
                    placeholder="name@example.ru"
                    id="authLogin"
                    aria-invalid={!!errors.login}
                    {...register("login")}
                  />
                </div>
                {errors.login && (
                  <span className="auth-form__error">
                    {errors.login.message}
                  </span>
                )}
              </div>

              {/* Имя и фамилия — только для регистрации */}
              {!isLogin && (
                <div className="auth-form__input">
                  <label className="auth-form__label" htmlFor="authName">
                    Имя и фамилия
                  </label>
                  <div className="auth-form__field-wrapper">
                    <RiUser3Line className="auth-form__icon" size={24} />
                    <input
                      type="text"
                      className="auth-form__field"
                      placeholder="Иван Иванов"
                      id="authName"
                      aria-invalid={"name" in errors && !!errors.name}
                      {...register("name")}
                    />
                  </div>
                  {"name" in errors && errors.name && (
                    <span className="auth-form__error">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              )}

              {/* Пароль */}
              <div className="auth-form__input">
                <label className="auth-form__label" htmlFor="authPassword">
                  Пароль
                </label>
                <div className="auth-form__field-wrapper">
                  <RiLockLine className="auth-form__icon" size={24} />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="auth-form__field auth-form__field--password"
                    placeholder="••••••••"
                    id="authPassword"
                    aria-invalid={!!errors.password}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    className="auth-form__eye"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Скрыть пароль" : "Показать пароль"
                    }
                  >
                    {showPassword ? (
                      <RiEyeOffLine size={20} />
                    ) : (
                      <RiEyeLine size={20} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className="auth-form__error">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Повтор пароля — только для регистрации */}
              {!isLogin && (
                <div className="auth-form__input">
                  <label
                    className="auth-form__label"
                    htmlFor="authPasswordRepeat"
                  >
                    Повторите пароль
                  </label>
                  <div className="auth-form__field-wrapper">
                    <RiLockLine className="auth-form__icon" size={24} />
                    <input
                      type={showPasswordRepeat ? "text" : "password"}
                      className="auth-form__field auth-form__field--password"
                      placeholder="••••••••"
                      id="authPasswordRepeat"
                      aria-invalid={
                        "passwordRepeat" in errors && !!errors.passwordRepeat
                      }
                      {...register("passwordRepeat")}
                    />
                    <button
                      type="button"
                      className="auth-form__eye"
                      onClick={() => setShowPasswordRepeat((prev) => !prev)}
                      aria-label={
                        showPasswordRepeat ? "Скрыть пароль" : "Показать пароль"
                      }
                    >
                      {showPasswordRepeat ? (
                        <RiEyeOffLine size={20} />
                      ) : (
                        <RiEyeLine size={20} />
                      )}
                    </button>
                  </div>
                  {"passwordRepeat" in errors && errors.passwordRepeat && (
                    <span className="auth-form__error">
                      {errors.passwordRepeat.message}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="auth-form__btns">
              <button
                className="auth-form__btn"
                type="submit"
                aria-label={isLogin ? "войти" : "зарегистрироваться"}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? isLogin
                    ? "Вход..."
                    : "Отправка..."
                  : isLogin
                    ? "Войти в систему"
                    : "Зарегистрироваться"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
