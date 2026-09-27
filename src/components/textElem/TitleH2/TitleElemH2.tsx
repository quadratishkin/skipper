import React from "react";
import "./TitleElemH2.scss";
import type { TitleElemH2I } from "./TitleElemH2Types";

const TitleElemH2: React.FC<TitleElemH2I> = ({
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
    <h2 className="titleElemH2" style={style}>
      {children}
    </h2>
  );
};

export default TitleElemH2;
