import "./Account.scss";
import AccountZero from "../../images/accountImageZero.webp";

export const Account = () => {
  return (
    <section className="account">
      <div className="container">
        <div className="account__wrapper">
          <h1 className="account__header">Аккаунт</h1>
          <form action="#" className="account-form" method="POST">
            <fieldset className="account-form__main-info">
              <img
                src={AccountZero}
                width="320px"
                height="320px"
                alt="фотография вашего профиля"
                className="account-form__img"
              />
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
