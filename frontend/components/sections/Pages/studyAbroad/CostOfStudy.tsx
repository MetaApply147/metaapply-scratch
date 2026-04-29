import InfoSectionCard from "./InfoSectionCard";
import CheckListContent from "./CheckListContent";

type Props = {
  data: any;
  countryName: string;
};

export default function CostOfStudy({ data, countryName }: Props) {
  const items =
    data?.costOfStudyDescription
      ?.split("\n")
      .filter((item: string) => item.trim() !== "") || [];

  return (
    <InfoSectionCard
      title="Cost of"
      highlight={`Study in ${countryName}`}
      image="/study-abroad/Inner-pages/Cost.svg"
      borderColor="#FFD537"
      shadowColor="#DFD7FF"
      innerBg="linear-gradient(348.34deg, #FFFCF3 3.13%, #FFFFFF 66.2%)"
    >
      <CheckListContent items={items} />
    </InfoSectionCard>
  );
}