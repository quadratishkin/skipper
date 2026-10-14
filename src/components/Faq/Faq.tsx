import { useState } from "react";

import { FaqItem } from "./FaqItem";
import { FAQ_ITEMS } from "../../data/FaqData";
import TitleElem from "../textElem/Title/TitleElem";
import "./Faq.scss";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__wrapper">
          <TitleElem level={2} className="faq__title">
            Часто задаваемые вопросы
          </TitleElem>

          <ul className="faq__list">
            {FAQ_ITEMS.map(({ question, answer }, index) => (
              <FaqItem
                key={question}
                question={question}
                answer={answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
