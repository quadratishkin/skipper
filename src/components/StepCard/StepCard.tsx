import "./StepCard.scss";
import type { StepCardI } from "./StepCardTypes";
import DescriptionElem from "../textElem/Description/DescriptionElem";
import TitleElemH3 from "../textElem/TitleH3/TitleElemH3";

export const StepCard = ({ title, text }: StepCardI) => {
  return (
    <li className="step-card">
      <TitleElemH3 align="center">{title}</TitleElemH3>
      <DescriptionElem fontWeight={400}>{text}</DescriptionElem>
    </li>
  );
};
