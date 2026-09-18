import { Link, useLocation } from "react-router";
import "./Header.scss";
import { Pages } from "../../data/Pages";
import Logo from "../../images/Logo.svg?react";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="container">
        <nav className="navMenu">
          <Logo className="navMenu__logo" />

          <Link
            className={`navMenu__text${pathname === Pages.MAIN ? " navMenu__text--active" : ""}`}
            to="/"
          >
            Главная
          </Link>

          <Link
            className={`navMenu__text${pathname === Pages.USERS ? " navMenu__text--active" : ""}`}
            to="/users"
          >
            Пользователи
          </Link>

          <Link
            className={`navMenu__text${pathname === Pages.DEVELOPERS ? " navMenu__text--active" : ""}`}
            to="/developers"
          >
            Разработчики
          </Link>

          <Link
            className={`navMenu__text${pathname === Pages.PROFILE ? " navMenu__text--active" : ""}`}
            to="/profile"
          >
            Профиль
          </Link>
        </nav>
      </div>
    </header>
  );
};
