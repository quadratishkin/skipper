import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { profileSchema, type ProfileForm } from "./profileSchema";
import { TitleElem } from "../../components/textElem/Title/TitleElem";
import DefaultAvatar from "../../images/accountImageZero.webp";
import "./ProfilePage.scss";

export const ProfilePage = () => {
  const [avatarPreview, setAvatarPreview] = useState<string>(DefaultAvatar);
  const [, setAvatarFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
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
    setAvatarPreview(DefaultAvatar);
    setAvatarFile(null);

    /* Сброс input[type=file] — чтобы можно было выбрать тот же файл */
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = (data: ProfileForm) => {
    return data;
    // todo: отправка на сервер
    // const formData = new FormData();
    // if (avatarFile) formData.append("avatar", avatarFile);
    // Object.entries(data).forEach(([k, v]) => formData.append(k, v));
    // await fetch("/api/account", { method: "POST", body: formData });
  };

  return (
    <section className="profile">
      <div className="container">
        <div className="profile__wrapper">
          <TitleElem align="center">Аккаунт</TitleElem>

          <form
            className="profile-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <fieldset className="profile-form__main-info">
              <div className="profile-form__img-block">
                <img
                  src={avatarPreview}
                  width="320"
                  height="320"
                  alt="фотография вашего профиля"
                  className="profile-form__img"
                />
                <div className="profile-form__upload">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="visually-hidden"
                  />
                  <button
                    type="button"
                    className="profile-form__upload-btn"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Загрузить фото
                  </button>
                </div>
              </div>

              <div className="profile-form__block">
                {/* Имя пользователя */}
                <div className="profile-form__input">
                  <input
                    type="text"
                    className="profile-form__field"
                    placeholder="AccountName"
                    id="profileUserName"
                    aria-invalid={!!errors.userName}
                    {...register("userName")}
                  />
                  <label
                    className="profile-form__label"
                    htmlFor="profileUserName"
                  >
                    <span className="profile-form__hint">Имя пользователя</span>
                  </label>
                  {errors.userName && (
                    <span className="profile-form__error">
                      {errors.userName.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="profile-form__input">
                  <input
                    type="email"
                    className="profile-form__field"
                    placeholder="skipper@yandex.ru"
                    id="profileEmail"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  <label className="profile-form__label" htmlFor="profileEmail">
                    <span className="profile-form__hint">
                      Электронная почта
                    </span>
                  </label>
                  {errors.email && (
                    <span className="profile-form__error">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Имя */}
                <div className="profile-form__input">
                  <input
                    type="text"
                    className="profile-form__field"
                    placeholder="Name"
                    id="profileName"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  <label className="profile-form__label" htmlFor="profileName">
                    <span className="profile-form__hint">Имя</span>
                  </label>
                  {errors.name && (
                    <span className="profile-form__error">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Дата рождения */}
                <div className="profile-form__input">
                  <input
                    type="date"
                    className="profile-form__field"
                    id="profileDate"
                    aria-invalid={!!errors.date}
                    {...register("date")}
                  />
                  <label className="profile-form__label" htmlFor="profileDate">
                    <span className="profile-form__hint">Дата рождения</span>
                  </label>
                  {errors.date && (
                    <span className="profile-form__error">
                      {errors.date.message}
                    </span>
                  )}
                </div>

                {/* Фамилия */}
                <div className="profile-form__input">
                  <input
                    type="text"
                    className="profile-form__field"
                    placeholder="Surname"
                    id="profileSurname"
                    aria-invalid={!!errors.surname}
                    {...register("surname")}
                  />
                  <label
                    className="profile-form__label"
                    htmlFor="profileSurname"
                  >
                    <span className="profile-form__hint">Фамилия</span>
                  </label>
                  {errors.surname && (
                    <span className="profile-form__error">
                      {errors.surname.message}
                    </span>
                  )}
                </div>

                {/* Телефон */}
                <div className="profile-form__input">
                  <input
                    type="tel"
                    className="profile-form__field"
                    placeholder="+79987654321"
                    id="profilePhone"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  <label className="profile-form__label" htmlFor="profilePhone">
                    <span className="profile-form__hint">Телефон</span>
                  </label>
                  {errors.phone && (
                    <span className="profile-form__error">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>
            </fieldset>

            <div className="profile-form__btns">
              <button
                className="profile-form__btn profile-form__btn--save"
                type="submit"
                aria-label="сохранить"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Сохранение..." : "сохранить"}
              </button>
              <button
                className="profile-form__btn profile-form__btn--cancel"
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
