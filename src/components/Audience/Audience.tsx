import "./Audience.scss";
import type { AudienceI } from "./AudienceTypes";

export const Audience = ({ icon: Icon, title, text }: AudienceI) => {
  return (
    <li className="audience">
      <Icon className="audience__icon" />
      <div className="audience__block">
        <h3 className="audience__title">{title}</h3>
        <p className="audience__text">{text}</p>
      </div>
    </li>
  );
};
