import ArrowIcon from "../../images/arrow.svg?react";
import "./StepsArrow.scss";
import type { IAlign } from "./types";

export const StepsArrow = ({ align }: IAlign) => {
  return (
    <li className={`steps-arrow steps-arrow--${align}`}>
      <ArrowIcon className="steps-arrow__icon" />
    </li>
  );
};
