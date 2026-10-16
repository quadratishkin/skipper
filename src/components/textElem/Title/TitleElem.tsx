import React from "react";

import "./TitleElem.scss";
import { FONT_FAMILY } from "./consts";
import type { ITitleElem } from "./types";

const TAGS: Record<
  1 | 2 | 3 | 4 | 5 | 6,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const TitleElem: React.FC<ITitleElem> = ({
  children,
  level = 1,
  align,
  fontWeight,
  fontSize,
  font = "grotesk",
  letterSpacing,
  className,
}) => {
  const Tag = TAGS[level];

  const style: React.CSSProperties = {
    fontFamily: FONT_FAMILY[font],
  };
  if (align) style.textAlign = align;
  if (fontWeight) style.fontWeight = fontWeight;
  if (fontSize) style.fontSize = fontSize;
  if (letterSpacing) style.letterSpacing = letterSpacing;

  const classNames = ["titleElem", `titleElem--${level}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classNames} style={style}>
      {children}
    </Tag>
  );
};

export default TitleElem;
