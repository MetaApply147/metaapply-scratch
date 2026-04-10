import BankingPartnerSlider from "@/components/sections/BankingPartnerSlider";

const bankingPartners = [
  { id: 1, name: "Axis Bank", logo: "/Services-images/Prodigy-finance.webp" },
  { id: 2, name: "IDFC First Bank", logo: "/Services-images/Credila.webp" },
  { id: 3, name: "Prodigy Finance", logo: "/Services-images/UNION-BANK.webp" },
  { id: 4, name: "Credila", logo: "/Services-images/Prodigy-finance.webp" },
  { id: 5, name: "Fincare Small Finance Bank", logo: "/Services-images/Credila.webp" },
];

export default function BankingPartners() {
  return (
    <BankingPartnerSlider
      title="Our"
      highlightText="Banking Partner"
      data={bankingPartners}
    />
  );
}