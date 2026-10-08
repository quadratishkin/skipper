import React from "react";
import "./TitleElem.scss";
import type { ITitleElem } from "./types";
import { FONT_FAMILY } from "./consts";

const TAGS: Record<1 | 2 | 3, "h1" | "h2" | "h3"> = {
  1: "h1",
  2: "h2",
  3: "h3",
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

  return (
    <Tag
      className={`titleElem titleElem--${level}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default TitleElem;
