import type { CSSProperties } from "react";

import "./Textarea.scss";
import type { ITextArea } from "./types";

export const TextArea = ({
  placeholder,
  color,
  height,
  fontSize,
  padding,
  onChange,
}: ITextArea) => {
  const style: CSSProperties = {};
  if (color) style.color = color;
  if (height) style.height = height;
  if (fontSize) style.fontSize = fontSize;
  if (padding) style.padding = padding;

  return (
    <textarea
      className="text-area"
      placeholder={placeholder}
      style={style}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
