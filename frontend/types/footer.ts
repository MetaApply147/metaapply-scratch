export type FooterLink = {
  id: number;
  name: string;
  url: string;
};

export type FooterSection = {
  id: number;
  title: string;
  key?: string;
  links: FooterLink[];
};

export type DestinationItem = {
  id: number;
  name: string;
  url: string;
};

export type FooterData = {
  sections?: FooterSection[];
  destinations?: {
    title: string;
    items: DestinationItem[];
  };
};