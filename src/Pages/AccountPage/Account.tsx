import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AccountZero from "../../images/accountImageZero.webp";
import { accountSchema, type AccountForm } from "./AccountSchema";
import "./Account.scss";

export const Account = () => {
  const [avatarPreview, setAvatarPreview] = useState<string>(AccountZero);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AccountForm>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      userName: "",
      email: "",
      name: "",
      date: "",
      surname: "",
      phone: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }

    setAvatarPreview(URL.createObjectURL(file));
    setAvatarFile(file);
  };

  const handleCancel = () => {
    /* Сброс формы до defaultValues */
    reset();

    /* Сброс аватара */
    if (avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }
    setAvatarPreview(AccountZero);
    setAvatarFile(null);

    /* Сброс input[type=file] — чтобы можно было выбрать тот же файл */
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = (data: AccountForm) => {
    console.log("Данные формы:", data);
    // todo: отправка на сервер
    // const formData = new FormData();
    // if (avatarFile) formData.append("avatar", avatarFile);
    // Object.entries(data).forEach(([k, v]) => formData.append(k, v));
    // await fetch("/api/account", { method: "POST", body: formData });
  };

  return (
    <section className="account">
      <div className="container">
        <div className="account__wrapper">
          <h1 className="account__title">Аккаунт</h1>

          <form
            className="account-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <fieldset className="account-form__main-info">
              <div className="account-form__img-block">
                <img
                  src={avatarPreview}
                  width="320"
                  height="320"
                  alt="фотография вашего профиля"
                  className="account-form__img"
                />
                <div className="account-form__upload">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="visually-hidden"
                  />
                  <button
                    type="button"
                    className="account-form__upload-btn"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Загрузить фото
                  </button>
                </div>
              </div>

              <div className="account-form__block">
                {/* Имя пользователя */}
                <div className="account-form__input">
                  <input
                    type="text"
                    className="account-form__field"
                    placeholder="AccountName"
                    id="accountUserName"
                    aria-invalid={!!errors.userName}
                    {...register("userName")}
                  />
                  <label
                    className="account-form__label"
                    htmlFor="accountUserName"
                  >
                    <span className="account-form__hint">Имя пользователя</span>
                  </label>
                  {errors.userName && (
                    <span className="account-form__error">
                      {errors.userName.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="account-form__input">
                  <input
                    type="email"
                    className="account-form__field"
                    placeholder="skipper@yandex.ru"
                    id="accountEmail"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  <label className="account-form__label" htmlFor="accountEmail">
                    <span className="account-form__hint">
                      Электронная почта
                    </span>
                  </label>
                  {errors.email && (
                    <span className="account-form__error">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Имя */}
                <div className="account-form__input">
                  <input
                    type="text"
                    className="account-form__field"
                    placeholder="Name"
                    id="accountName"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  <label className="account-form__label" htmlFor="accountName">
                    <span className="account-form__hint">Имя</span>
                  </label>
                  {errors.name && (
                    <span className="account-form__error">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Дата рождения */}
                <div className="account-form__input">
                  <input
                    type="date"
                    className="account-form__field"
                    id="accountDate"
                    aria-invalid={!!errors.date}
                    {...register("date")}
                  />
                  <label className="account-form__label" htmlFor="accountDate">
                    <span className="account-form__hint">Дата рождения</span>
                  </label>
                  {errors.date && (
                    <span className="account-form__error">
                      {errors.date.message}
                    </span>
                  )}
                </div>

                {/* Фамилия */}
                <div className="account-form__input">
                  <input
                    type="text"
                    className="account-form__field"
                    placeholder="Surname"
                    id="accountSurname"
                    aria-invalid={!!errors.surname}
                    {...register("surname")}
                  />
                  <label
                    className="account-form__label"
                    htmlFor="accountSurname"
                  >
                    <span className="account-form__hint">Фамилия</span>
                  </label>
                  {errors.surname && (
                    <span className="account-form__error">
                      {errors.surname.message}
                    </span>
                  )}
                </div>

                {/* Телефон */}
                <div className="account-form__input">
                  <input
                    type="tel"
                    className="account-form__field"
                    placeholder="+79987654321"
                    id="accountPhone"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  <label className="account-form__label" htmlFor="accountPhone">
                    <span className="account-form__hint">Телефон</span>
                  </label>
                  {errors.phone && (
                    <span className="account-form__error">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>
            </fieldset>

            <div className="account-form__btns">
              <button
                className="account-form__btn account-form__btn--save"
                type="submit"
                aria-label="сохранить"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Сохранение..." : "сохранить"}
              </button>
              <button
                className="account-form__btn account-form__btn--cancel"
                type="button"
                onClick={handleCancel}
                aria-label="отменить изменения"
              >
                отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
