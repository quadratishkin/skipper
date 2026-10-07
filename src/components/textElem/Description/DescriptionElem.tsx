import React from "react";
import "./DescriptionElem.scss";
import type { IDescriptionElem } from "./types";
import { FONT_FAMILY } from "./consts";

const DescriptionElem: React.FC<IDescriptionElem> = ({
  children,
  align,
  fontWeight,
  fontSize,
  lineHeight,
  font = "inter",
  letterSpacing,
  className,
}) => {
  const style: React.CSSProperties = {
    fontFamily: FONT_FAMILY[font],
  };
  if (align) style.textAlign = align;
  if (fontWeight) style.fontWeight = fontWeight;
  if (fontSize) style.fontSize = fontSize;
  if (lineHeight) style.lineHeight = lineHeight;
  if (letterSpacing) style.letterSpacing = letterSpacing;

  const classNames = ["descriptionElem", className].filter(Boolean).join(" ");

  return (
    <p className={classNames} style={style}>
      {children}
    </p>
  );
};

export default DescriptionElem;
