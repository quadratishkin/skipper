import "./Audience.scss";
import type { AudienceI } from "./AudienceTypes";
import DescriptionElem from "../textElem/Description/DescriptionElem";
import TitleElemH3 from "../textElem/TitleH3/TitleElemH3";

export const Audience = ({ icon: Icon, title, text }: AudienceI) => {
  return (
    <li className="audience">
      <Icon className="audience__icon" />
      <div className="audience__block">
        <TitleElemH3 fontWeight={600}>{title}</TitleElemH3>
        <DescriptionElem>{text}</DescriptionElem>
      </div>
    </li>
  );
};
