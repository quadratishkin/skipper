import TitleElemH3 from "../textElem/TitleH3/TitleElemH3";
import "./ProblemBlock.scss";
import type { ProblemBlockDataI } from "./ProblemBlockTypes";

export const ProblemBlock = ({ group, reasons }: ProblemBlockDataI) => {
  return (
    <li className="problem-block">
      <TitleElemH3 marginBottom="20px">{group}</TitleElemH3>
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
