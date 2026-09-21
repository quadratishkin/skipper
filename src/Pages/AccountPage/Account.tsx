import "./Account.scss";
import AccountZero from "../../images/accountImageZero.webp";
import { useRef, useState } from "react";

export const Account = () => {
  const [avatarPreview, setAvatarPreview] = useState<string>(AccountZero);
  //   todo в дальнейшем выполнить отправку данного файта на сервер для замены
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }

    setAvatarPreview(URL.createObjectURL(file));

    setAvatarFile(file);
  };

  return (
    <section className="account">
      <div className="container">
        <div className="account__wrapper">
          <h1 className="account__header">Аккаунт</h1>
          <form action="#" className="account-form" method="POST">
            <fieldset className="account-form__main-info">
              <div className="account-form__img-block">
                <img
                  src={avatarPreview}
                  width="320px"
                  height="320px"
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
                <div className="account-form__input">
                  <input
                    type="text"
                    className="account-form__field"
                    placeholder="AccountName"
                    id="accountUserName"
                  />
                  <label
                    className="account-form__label"
                    htmlFor="accountUserName"
                  >
                    <span className="account-form__hint">Имя пользователя</span>
                  </label>
                </div>
                <div className="account-form__input">
                  <input
                    type="email"
                    className="account-form__field"
                    placeholder="skipper@yandex.ru"
                    id="accountEmail"
                  />
                  <label className="account-form__label" htmlFor="accountEmail">
                    <span className="account-form__hint">
                      Электронная почта
                    </span>
                  </label>
                </div>
                <div className="account-form__input">
                  <input
                    type="text"
                    className="account-form__field"
                    placeholder="Name"
                    id="accountName"
                  />
                  <label className="account-form__label" htmlFor="accountName">
                    <span className="account-form__hint">Имя</span>
                  </label>
                </div>
                <div className="account-form__input">
                  <input
                    type="date"
                    className="account-form__field"
                    id="accountDate"
                  />
                  <label className="account-form__label" htmlFor="accountDate">
                    <span className="account-form__hint">Дата рождения</span>
                  </label>
                </div>
                <div className="account-form__input">
                  <input
                    type="text"
                    className="account-form__field"
                    placeholder="Surname"
                    id="accountSurname"
                  />
                  <label
                    className="account-form__label"
                    htmlFor="accountSurname"
                  >
                    <span className="account-form__hint">Фамилия</span>
                  </label>
                </div>
                <div className="account-form__input">
                  <input
                    type="number"
                    className="account-form__field"
                    placeholder="89987654321"
                    id="accountPhone"
                  />
                  <label className="account-form__label" htmlFor="accountPhone">
                    <span className="account-form__hint">Телефон</span>
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="account-form__btns">
              <button
                className="account-form__btn account-form__btn--save"
                type="submit"
                aria-label="сохранить"
              >
                сохранить
              </button>
              <button
                className="account-form__btn account-form__btn--cancel"
                type="button"
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
