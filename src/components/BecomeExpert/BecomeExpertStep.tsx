import "./BecomeExpertStep.scss";
import type { IBecomeExpertStep } from "./types";

export const BecomeExpertStep = ({
  number,
  title,
  text,
}: IBecomeExpertStep) => {
  return (
    <li className="become-expert-step">
      <span className="become-expert-step__number">{number}</span>
      <div className="become-expert-step__body">
        <h3 className="become-expert-step__title">{title}</h3>
        <p className="become-expert-step__text">{text}</p>
      </div>
    </li>
  );
};
