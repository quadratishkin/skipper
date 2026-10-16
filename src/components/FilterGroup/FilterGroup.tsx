import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import "./FilterGroup.scss";
import type { IFilterGroup } from "./types";

export const FilterGroup = ({
  title,
  options,
  selected,
  onChange,
}: IFilterGroup) => {
  const [isOpen, setIsOpen] = useState(true);

  // Все ли выбраны?
  const isAnySelected = options.some((o) => selected.includes(o.value));

  // Клик по чекбоксу у заголовка — выбрать/снять все
  const handleToggleAll = () => {
    if (isAnySelected) {
      onChange(selected.filter((v) => !options.some((o) => o.value === v)));
    } else {
      const newSelected = new Set(selected);
      options.forEach((o) => newSelected.add(o.value));
      onChange(Array.from(newSelected));
    }
  };

  const handleToggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="filter-group">
      <div className="filter-group__header">
        <label className="filter-group__select-all">
          <input
            type="checkbox"
            checked={isAnySelected}
            onChange={handleToggleAll}
            className="filter-group__checkbox"
          />
          <span className="filter-group__title">{title}</span>
        </label>

        <button
          type="button"
          className="filter-group__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Свернуть раздел" : "Развернуть раздел"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <RiArrowUpSLine size={20} />
          ) : (
            <RiArrowDownSLine size={20} />
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="filter-group__list">
          {options.map((option) => {
            const isChecked = selected.includes(option.value);
            return (
              <li key={option.value} className="filter-group__item">
                <label className="filter-group__option">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleToggleOption(option.value)}
                    className="filter-group__checkbox"
                  />
                  <span className="filter-group__label">{option.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
