import { ComponentType, SVGAttributes } from "react";

export interface TopLevelLink {
  title: string;
  href: string;
}

export interface PageLinkGroup {
  title: string;
  links: { title: string; href: string }[];
}

export interface SocialLink {
  icon: ComponentType<SVGAttributes<SVGSVGElement>>;
  href: string;
  label: string;
}
