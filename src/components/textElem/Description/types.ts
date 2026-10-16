import type { ReactNode } from "react";

import type { TextFont } from "../types";

export interface IDescriptionElem {
  children: ReactNode;
  align?: "left" | "center" | "right";
  fontWeight?: number;
  fontSize?: string | number;
  lineHeight?: string | number;
  font?: TextFont;
  letterSpacing?: string;
  className?: string;
}