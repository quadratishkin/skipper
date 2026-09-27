import "./StepCard.scss";
import type { StepCardI } from "./StepCardTypes";
import DescriptionElem from "../textElem/Description/DescriptionElem";
import TitleElem from "../textElem/Title/TitleElem";

export const StepCard = ({ title, text }: StepCardI) => {
  return (
    <li className="step-card">
      <TitleElem level={3} align="center" marginBottom="0" fontWeight={600}>
        {title}
      </TitleElem>
      <DescriptionElem fontWeight={500}>{text}</DescriptionElem>
    </li>
  );
};
