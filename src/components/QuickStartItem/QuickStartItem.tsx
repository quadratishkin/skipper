import TitleElem from "../textElem/Title/TitleElem";
import DescriptionElem from "../textElem/Description/DescriptionElem";
import type { QuickStartItemI } from "../../data/QuickStartData";
import "./QuickStartItem.scss";

const QuickStartItem = ({ number, title, text }: QuickStartItemI) => {
  return (
    <li className="quick-start-item">
      <span className="quick-start-item__number">{number}</span>
      <div className="quick-start-item__body">
        <TitleElem level={3} fontSize={16} fontWeight={600} margin="0 0 4px">
          {title}
        </TitleElem>
        <DescriptionElem fontSize="14px" className="quick-start-item__description">
          {text}
        </DescriptionElem>
      </div>
    </li>
  );
};

export default QuickStartItem;
