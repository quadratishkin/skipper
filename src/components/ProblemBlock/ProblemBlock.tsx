import TitleElem from "../textElem/Title/TitleElem";
import "./ProblemBlock.scss";
import type { ProblemBlockDataI } from "./ProblemBlockTypes";

export const ProblemBlock = ({ group, reasons }: ProblemBlockDataI) => {
  return (
    <li className="problem-block">
      <TitleElem level={3} marginBottom="20px">{group}</TitleElem>
      <ol className="problem-block__list">
        {reasons.map((item: string) => (
          <li className="problem-block__item" key={item}>
            {item}
          </li>
        ))}
      </ol>
    </li>
  );
};
