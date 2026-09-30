import type { ComponentType, SVGProps } from "react";

export interface IAudience {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}