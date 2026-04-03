import ImportanceGridSection, { GridItem } from "../../ImportanceGridSection";

const insuranceData: GridItem[] = [
  {
    id: 1,
    title: "Expensive Healthcare Abroad",
    description: "Avoid unexpected medical expenses",
    icon: "/services-images/healthcare-abroad.svg",
  },
  {
    id: 2,
    title: "Visa Requirement",
    description: "Insurance is mandatory for visa approval",
    icon: "/services-images/Visa-requirements.svg",
  },
  {
    id: 3,
    title: "Travel Risks",
    description: "Covers delays, cancellations & lost baggage",
    icon: "/services-images/Travel-risks.svg",
  },
  {
    id: 4,
    title: "Access to Quality Care",
    description: "Get top medical facilities in emergencies",
    icon: "/services-images/Acess-to-quality-care.svg",
  },
  {
    id: 5,
    title: "Peace of Mind",
    description: "Stay stress-free during your journey",
    icon: "/services-images/Peace-of-mind.svg",
  },
];

export default function MetaInsuranceImportance() {
  return (
    <ImportanceGridSection
      title="Importance of"
      highlightText="International Insurance"
      data={insuranceData}
    />
  );
}