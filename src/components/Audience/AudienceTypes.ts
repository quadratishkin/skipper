import type { ComponentType, SVGProps } from "react";

export interface AudienceI {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}