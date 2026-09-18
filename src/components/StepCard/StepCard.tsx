import "./StepCard.scss";
import type { StepCardI } from "./StepCardTypes";

export const StepCard = ({ title, text }: StepCardI) => {
  return (
    <li className="step-card">
      <h3 className="step-card__title">{title}</h3>
      <p className="step-card__descriprion">{text}</p>
    </li>
  );
};
