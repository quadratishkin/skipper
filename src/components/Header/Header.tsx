import { Link, useLocation } from "react-router";
import "./Header.scss";
import Logo from "../../images/Logo.svg?react";
import { NAV_ITEMS } from "../../data/Pages";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="container">
        <nav className="navMenu">
          <Link to="/" aria-label="На главную">
            <Logo className="navMenu__logo" />
          </Link>

          <ul className="navMenu__links">
            {NAV_ITEMS.map(({ page, to, label }) => {
              const isActive = pathname === page;
              const className = `navMenu__text${isActive ? " navMenu__text--active" : ""}`;

              return (
                <li key={page} className="navMenu__item">
                  <Link className={className} to={to}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link to="/profile" className="navMenu__button">
            Личный кабинет
          </Link>
        </nav>
      </div>
    </header>
  );
};
