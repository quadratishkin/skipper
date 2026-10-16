import type { IFaqItem } from "./types";
import "./FaqItem.scss";

interface Props extends IFaqItem {
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqItem = ({ question, answer, isOpen, onToggle }: Props) => {
  return (
    <li className={`faq__item${isOpen ? " faq__item--open" : ""}`}>
      <button
        type="button"
        className="faq__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq__question-text">{question}</span>
        <span className="faq__icon" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="faq__answer">
          <p className="faq__answer-text">{answer}</p>
        </div>
      )}
    </li>
  );
};
