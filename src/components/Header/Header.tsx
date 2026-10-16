import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import "./Header.scss";
import { NAV_ITEMS } from "../../data/Pages";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../../images/Logo.svg?react";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleAuthClick = async () => {
    closeMenu();
    if (isAuthenticated) {
      await logout();
      navigate("/");
    } else {
      navigate("/auth");
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav-menu">
          <Link
            to="/"
            aria-label="На главную"
            className="nav-menu__logo-link"
            onClick={closeMenu}
          >
            <Logo className="nav-menu__logo" />
          </Link>

          <button
            type="button"
            className={`nav-menu__burger${isOpen ? " nav-menu__burger--open" : ""}`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            className={`nav-menu__mobile-wrapper${
              isOpen ? " nav-menu__mobile-wrapper--open" : ""
            }`}
          >
            <ul className="nav-menu__links">
              {NAV_ITEMS.map(({ page, to, label }) => {
                const isActive = pathname === to;
                const className = `nav-menu__text${
                  isActive ? " nav-menu__text--active" : ""
                }`;

                return (
                  <li key={page} className="nav-menu__item">
                    <Link className={className} to={to} onClick={closeMenu}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              className="nav-menu__button"
              onClick={handleAuthClick}
            >
              {isAuthenticated ? "Выход" : "Вход"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
