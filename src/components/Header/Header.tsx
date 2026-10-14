import { useState } from "react";
import { Link, useLocation } from "react-router";

import "./Header.scss";
import { NAV_ITEMS } from "../../data/Pages";
import Logo from "../../images/Logo.svg?react";

export const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navMenu">
          <Link
            to="/"
            aria-label="На главную"
            className="navMenu__logo-link"
            onClick={closeMenu}
          >
            <Logo className="navMenu__logo" />
          </Link>

          {/* Кнопка бургера */}
          <button
            type="button"
            className={`navMenu__burger${isOpen ? " navMenu__burger--open" : ""}`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Общий контейнер для ссылок и кнопки входа на мобилках */}
          <div
            className={`navMenu__mobile-wrapper${
              isOpen ? " navMenu__mobile-wrapper--open" : ""
            }`}
          >
            <ul className="navMenu__links">
              {NAV_ITEMS.map(({ page, to, label }) => {
                const isActive = pathname === page;
                const className = `navMenu__text${
                  isActive ? " navMenu__text--active" : ""
                }`;

                return (
                  <li key={page} className="navMenu__item">
                    <Link className={className} to={to} onClick={closeMenu}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link to="/profile" className="navMenu__button" onClick={closeMenu}>
              Вход
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
