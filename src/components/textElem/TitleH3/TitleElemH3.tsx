import React from "react";
import "./TitleElemH3.scss";
import type { TitleElemH3I } from "./TitleElemH3Types";

const TitleElemH3: React.FC<TitleElemH3I> = ({
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
    <h3 className="titleElemH3" style={style}>
      {children}
    </h3>
  );
};

export default TitleElemH3;
