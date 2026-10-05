import type { ReactNode } from "react";

export type TitleFont = "inter" | "grotesk" | "mono";

export interface ITitleElem {
  children: ReactNode;
  level?: 1 | 2 | 3;
  align?: "left" | "center" | "right";
  fontWeight?: 400 | 500 | 600 | 700;
  fontSize?: string | number;
  margin?: string;
  font?: TitleFont;
}