export type FooterLink = {
  id: number;
  name: string;
  url: string;
};

export type FooterSection = {
  id: number;
  title: string;
  links: FooterLink[];
};

export type DestinationItem = {
  id: number;
  name: string;
  url: string;
};

export type FooterData = {
  title: string;
  sections: FooterSection[];
  destinations: {
    title: string;
    items: DestinationItem[];
  };
};