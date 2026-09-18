import ArrowIcon from "../../images/arrow.svg?react";
import "./StepsArrow.scss";
import type { AlignI } from "./StepsArrowTypes";

export const StepsArrow = ({ align }: AlignI) => {
  return (
    <li className={`steps-arrow steps-arrow--${align}`}>
      <ArrowIcon className="steps-arrow__icon" />
    </li>
  );
};
