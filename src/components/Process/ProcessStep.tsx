import "./ProcessStep.scss";
import type { IProcessStep } from "./types";

export const ProcessStep = ({ number, title, text }: IProcessStep) => {
  return (
    <li className="process-step">
      <span className="process-step__number">{number}</span>
      <h3 className="process-step__title">{title}</h3>
      <p className="process-step__text">{text}</p>
    </li>
  );
};
