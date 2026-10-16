import type { ReactNode } from "react";

import type { TextFont } from "../types";

export interface ITitleElem {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
  fontWeight?: number;
  fontSize?: string | number;
  font?: TextFont;
  letterSpacing?: string;
  className?: string;
}