import { RiSearchLine } from "react-icons/ri";

import "./FindExpertCard.scss";
import type { IFindExpertCard } from "./types";

export const FindExpertCard = ({
  label,
  title,
  text,
  formType,
  placeholder,
  buttonText,
  accent = false,
  onSubmit,
}: IFindExpertCard) => {
  const cardClassName = `find-expert-card${
    accent ? " find-expert-card--accent" : ""
  }`;

  return (
    <article className={cardClassName}>
      <span className="find-expert-card__label">{label}</span>

      <h2 className="find-expert-card__title">{title}</h2>
      <p className="find-expert-card__text">{text}</p>

      <form
        className="find-expert-card__form"
        onSubmit={onSubmit ?? ((e) => e.preventDefault())}
      >
        {formType === "textarea" ? (
          <textarea
            className="find-expert-card__textarea"
            placeholder={placeholder}
            rows={3}
          />
        ) : (
          <div className="find-expert-card__search">
            <RiSearchLine className="find-expert-card__search-icon" size={20} />
            <input
              type="text"
              className="find-expert-card__input"
              placeholder={placeholder}
              aria-label={placeholder}
            />
          </div>
        )}

        <button type="submit" className="find-expert-card__btn">
          {buttonText}
        </button>
      </form>
    </article>
  );
};
