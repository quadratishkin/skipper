import "./StepCard.scss";
import type { IStepCard } from "./types";
import DescriptionElem from "../textElem/Description/DescriptionElem";
import TitleElem from "../textElem/Title/TitleElem";

export const StepCard = ({ title, text }: IStepCard) => {
  return (
    <li className="step-card">
      <TitleElem level={3} align="center" margin="0" fontWeight={600}>
        {title}
      </TitleElem>
      <DescriptionElem fontWeight={500}>{text}</DescriptionElem>
    </li>
  );
};
