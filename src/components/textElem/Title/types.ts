import type { ReactNode } from "react";

export type TitleFont = "inter" | "grotesk" | "mono";

export interface ITitleElem {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
  fontWeight?: number;
  fontSize?: string | number;
  font?: TitleFont;
  letterSpacing?: string;
  className?: string;
}