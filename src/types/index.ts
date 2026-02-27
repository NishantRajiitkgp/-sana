export interface YogaClass {
  name: string;
  description: string;
  level: string;
  duration: string;
  frequency: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface InsightArticle {
  title: string;
  tag: string;
  date: string;
  image: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
