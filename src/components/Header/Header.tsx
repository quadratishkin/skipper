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
          <Logo className="navMenu__logo" />
          <div className="navMenu__links">
            {NAV_ITEMS.map(({ page, to, label }) => {
              const isActive = pathname === page;
              const className = `navMenu__text${isActive ? " navMenu__text--active" : ""}`;

              return (
                <Link key={page} className={className} to={to}>
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};
