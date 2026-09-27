import "./Audience.scss";
import type { AudienceI } from "./AudienceTypes";
import DescriptionElem from "../textElem/Description/DescriptionElem";
import TitleElem from "../textElem/Title/TitleElem";

export const Audience = ({ icon: Icon, title, text }: AudienceI) => {
  return (
    <li className="audience">
      <Icon className="audience__icon" />
      <div className="audience__block">
        <TitleElem level={3} fontWeight={600}>
          {title}
        </TitleElem>
        <DescriptionElem>{text}</DescriptionElem>
      </div>
    </li>
  );
};
