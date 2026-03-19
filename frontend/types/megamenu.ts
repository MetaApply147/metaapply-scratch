/* ---------------- ITEM ---------------- */

export type Item = {
  id: number;
  label: string;
  url?: string | null;
  order?: number; // useful for sorting (Strapi)
};

/* ---------------- SECTION ---------------- */

export type Section = {
  id: number;
  title: string;
  items?: Item[];
  order?: number; // future sorting support
};

/* ---------------- TAB ---------------- */

export type Tab = {
  id?: number;
  title: string;
  slug?: string; // useful for routing / API mapping
  sections?: Section[];
};

/* ---------------- MEGA MENU ROOT ---------------- */

export type MegaMenuData = {
  tabs: Tab[];
};