import type { ReactNode } from "react";
export type DescriptionFont = "inter" | "grotesk" | "mono";

export interface IDescriptionElem {
  children: ReactNode;
  align?: "left" | "center" | "right";
  fontWeight?: number;
  fontSize?: string | number;
  lineHeight?: string | number;
  font?: DescriptionFont;
  letterSpacing?: string;
  className?: string;
}