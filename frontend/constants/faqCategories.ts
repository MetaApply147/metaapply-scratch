export const FAQ_CATEGORY_MAP = {
  home: ["Study Abroad", "TestPrep", "University Partner"],
//   testPrepPage: ["IELTS", "TOEFL"],
//   otherPage: ["A", "B", "C"],
} as const;

export type FAQPageKey = keyof typeof FAQ_CATEGORY_MAP;