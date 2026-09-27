import React from "react";
import "./TitleElem.scss";
import type { TitleElemI } from "./TitleElemTypes";

const TitleElem: React.FC<TitleElemI> = ({
  children,
  align,
  fontWeight,
  marginBottom,
}) => {
  const style: React.CSSProperties = {};
  if (align) style.textAlign = align;
  if (fontWeight) style.fontWeight = fontWeight;
  if (marginBottom) style.marginBottom = marginBottom;

  return (
    <h1 className="titleElemH1" style={style}>
      {children}
    </h1>
  );
};

export default TitleElem;
