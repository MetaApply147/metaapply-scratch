
import ImportanceGridSection, { GridItem } from "../../ImportanceGridSection";

const metaFinanceData: GridItem[] = [
  {
    id: 1,
    title: "Fast Process",
    description: "Quick and hassle-free loan process",
    icon: "/services-images/Fast-process.svg",
  },
  {
    id: 2,
    title: "No-cost Guidance",
    description: "Expert consultation at zero cost",
    icon: "/services-images/No-cost-guidance.svg",
  },
  {
    id: 3,
    title: "Best Loan Offers",
    description: "Best deals on education loan",
    icon: "/services-images/Best-loan-offers.svg",
  },
  {
    id: 4,
    title: "Increase Approval Chance",
    description: "Better chances of loan approval",
    icon: "/services-images/Increase-Approval-chances.svg",
  },
  {
    id: 5,
    title: "Study & Pay-after",
    description: "Repayment after course completion",
    icon: "/services-images/Study-pay-after.svg",
  },
];

export default function MetaFinanceWhyChoose() {
  return (
    <ImportanceGridSection
      title="Why Choose"
      highlightText="MetaFinance"
      highlightPosition="end"
      data={metaFinanceData}
    />
  );
}
