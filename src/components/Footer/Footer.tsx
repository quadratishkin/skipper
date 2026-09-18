import Logo from "../../images/Logo.svg?react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="contaier">
        <div className="footer__wrapper">
          <Logo className="footer__logo" />
        </div>
      </div>
    </footer>
  );
};
