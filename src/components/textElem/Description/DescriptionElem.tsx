import type { CSSProperties } from "react";

import "./DescriptionElem.scss";
import { FONT_FAMILY } from "../consts";
import type { IDescriptionElem } from "./types";

export const DescriptionElem = ({
  children,
  align,
  fontWeight,
  fontSize,
  lineHeight,
  font = "inter",
  letterSpacing,
  className,
}: IDescriptionElem) => {
  const style: CSSProperties = {
    fontFamily: FONT_FAMILY[font],
  };
  if (align) style.textAlign = align;
  if (fontWeight) style.fontWeight = fontWeight;
  if (fontSize) style.fontSize = fontSize;
  if (lineHeight) style.lineHeight = lineHeight;
  if (letterSpacing) style.letterSpacing = letterSpacing;

  const classNames = ["description-elem", className].filter(Boolean).join(" ");

  return (
    <p className={classNames} style={style}>
      {children}
    </p>
  );
};
