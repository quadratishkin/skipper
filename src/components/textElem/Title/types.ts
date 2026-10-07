import type { ReactNode } from "react";

export type TitleFont = "inter" | "grotesk" | "mono";

export interface ITitleElem {
  children: ReactNode;
  level?: 1 | 2 | 3;
  align?: "left" | "center" | "right";
  fontWeight?: number;
  fontSize?: string | number;
  margin?: string;
  font?: TitleFont;
  letterSpacing?: string;
  className?: string;
}