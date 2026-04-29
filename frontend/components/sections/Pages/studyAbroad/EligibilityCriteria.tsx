import InfoSectionCard from "./InfoSectionCard";
import CheckListContent from "./CheckListContent";

type Props = {
  data: any;
};

export default function EligibilityCriteria({ data }: Props) {
  const items =
    data?.eligibilityCriteria
      ?.split("\n")
      .filter((item: string) => item.trim() !== "") || [];

  return (
    <InfoSectionCard
      title="Criteria"
      highlight="Eligibility"
      image="/study-abroad/Inner-pages/Eligibility-Criteria.svg"
      borderColor="#FF8EBC"
      shadowColor="#FFDDEA"
      innerBg="linear-gradient(350.61deg, #FFF1F7 7.37%, #FFFCFD 66.84%)"
      highlightPosition="start"
    >
      <CheckListContent items={items} />
    </InfoSectionCard>
  );
}