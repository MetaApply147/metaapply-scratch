import ImportanceGridSection, { GridItem } from "../../ImportanceGridSection";

const insuranceData: GridItem[] = [
  {
    id: 1,
    title: "Expensive Healthcare Abroad",
    description: "Avoid unexpected medical expenses",
    icon: "/services-images/Fast-process.svg",
  },
  {
    id: 2,
    title: "Visa Requirement",
    description: "Insurance is mandatory for visa approval",
    icon: "/services-images/No-cost-guidance.svg",
  },
  {
    id: 3,
    title: "Travel Risks",
    description: "Covers delays, cancellations & lost baggage",
    icon: "/services-images/Best-loan-offers.svg",
  },
  {
    id: 4,
    title: "Access to Quality Care",
    description: "Get top medical facilities in emergencies",
    icon: "/services-images/Increase-Approval-chances.svg",
  },
  {
    id: 5,
    title: "Peace of Mind",
    description: "Stay stress-free during your journey",
    icon: "/services-images/Study-pay-after.svg",
  },
];

export default function MetaInsuranceImportance() {
  return (
    <ImportanceGridSection
      title="Importance of"
      highlightText="International Insurance"
      highlightPosition="end"
      data={insuranceData}
    />
  );
}