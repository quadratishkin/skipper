import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router";

import "./FindExpertCard.scss";
import type { IFindExpertCard } from "./types";

export const FindExpertCard = ({
  title,
  text,
  formType,
  placeholder,
  buttonText,
  to,
  paramName,
  accent = false,
  recommended = false,
}: IFindExpertCard) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const cardClassName = `find-expert-card${
    accent ? " find-expert-card--accent" : ""
  }`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    navigate(
      trimmed ? `${to}?${paramName}=${encodeURIComponent(trimmed)}` : to,
    );
  };

  return (
    <article className={cardClassName}>
      {recommended && (
        <span className="find-expert-card__badge">Рекомендуем</span>
      )}

      <h2 className="find-expert-card__title">{title}</h2>
      <p className="find-expert-card__text">{text}</p>

      <form className="find-expert-card__form" onSubmit={handleSubmit}>
        {formType === "textarea" ? (
          <textarea
            className="find-expert-card__textarea"
            placeholder={placeholder}
            rows={3}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <div className="find-expert-card__search">
            <RiSearchLine className="find-expert-card__search-icon" size={20} />
            <input
              type="text"
              className="find-expert-card__input"
              placeholder={placeholder}
              aria-label={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
