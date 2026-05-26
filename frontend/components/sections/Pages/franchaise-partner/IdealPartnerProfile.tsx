"use client";
import FeatureCardsSection from "../../FeatureCardsSection";

const partners = [
  {
    id: 1,
    title: "Passion",
    description:
      "Possess a genuine passion for the educational profession.",
    icon: "/franchise-partner/passion.svg",
  },

  {
    id: 2,
    title: "Integrity",
    description:
      "Exemplify moral principles and integrity; and display superior commercial and managerial abilities.",
    icon: "/franchise-partner/integrity.svg",
  },

  {
    id: 3,
    title: "Leadership",
    description:
      "Demonstrate leadership and people management skills.",
    icon: "/franchise-partner/leadership.svg",
  },

  {
    id: 4,
    title: "Dedication",
    description:
      "Are dedicated to crafting a lasting alliance.",
    icon: "/franchise-partner/dedication.svg",
  },

  {
    id: 5,
    title: "Independence",
    description:
      "Have an urge to become financially independent.",
    icon: "/franchise-partner/independence.svg",
  },

  {
    id: 6,
    title: "Tenacity",
    description:
      "Possess the resources and tenacity required to create a successful learning centre.",
    icon: "/franchise-partner/tenacity.svg",
  },
];

export default function IdealPartnerProfile() {
  return (
    <FeatureCardsSection
      title="Ideal"
      highlight="Partner Profile"
      items={partners}
    />
  );
}