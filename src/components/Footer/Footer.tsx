import { Link } from "react-router";

import Logo from "../../images/Logo.svg?react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Link to="/" className="footer__logo-link" aria-label="На главную">
            <Logo className="footer__logo" />
          </Link>

          <span className="footer__copyright">© 2026 Skipper</span>

          <span className="footer__description">
            Платформа консультаций с экспертами
          </span>
        </div>
      </div>
    </footer>
  );
};
