import React from "react";
import "./TitleElem.scss";
import type { ITitleElem } from "./types";

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
  marginBottom,
}) => {
  const Tag = TAGS[level];
  
  const style: React.CSSProperties = {};
  if (align) style.textAlign = align;
  if (fontWeight) style.fontWeight = fontWeight;
  if (marginBottom) style.marginBottom = marginBottom;

  return (
    <Tag className={`titleElem--${level}`} style={style}>
      {children}
    </Tag>
  );
};

export default TitleElem;
