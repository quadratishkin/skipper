import React from "react";
import "./DescriptionElem.scss";
import type { DescriptionElemI } from "./DescriptionElemTypes";

const DescriptionElem: React.FC<DescriptionElemI> = ({
  children,
  align,
  fontWeight,
  fontSize,
  marginBottom,
}) => {
  const style: React.CSSProperties = {};
  if (align) style.textAlign = align;
  if (fontSize) style.fontSize = fontSize;
  if (fontWeight) style.fontWeight = fontWeight;
  if (marginBottom) style.marginBottom = marginBottom;

  return (
    <p className="descriptionElem" style={style}>
      {children}
    </p>
  );
};

export default DescriptionElem;
