import "./ProblemBlock.scss";
import type { ProblemBlockDataI } from "./ProblemBlockTypes";

export const ProblemBlock = ({ group, reasons }: ProblemBlockDataI) => {
  return (
    <li className="problem-block">
      <h3 className="problem-block__title">{group}</h3>
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
