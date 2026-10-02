import React from "react";
import "./Textarea.scss";
import type { ITextArea } from "./types";

const TextArea: React.FC<ITextArea> = ({
  placeholder,
  color,
  height,
  fontSize,
  padding,
  onChange,
}) => {
  const style: React.CSSProperties = {};
  if (color) style.color = color;
  if (height) style.height = height;
  if (fontSize) style.fontSize = fontSize;
  if (padding) style.padding = padding;

  return (
    <textarea
      className="textArea"
      placeholder={placeholder}
      style={style}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};

export default TextArea;
