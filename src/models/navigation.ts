export interface TopLevelNavigationItem {
  title: string;
  href: string;
}

export interface NavigationGroup {
  title: string;
  links: { title: string; href: string }[];
}
