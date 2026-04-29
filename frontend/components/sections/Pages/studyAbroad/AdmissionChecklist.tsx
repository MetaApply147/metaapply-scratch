"use client";

import { Box, Button } from "@mui/material";
import InfoSectionCard from "./InfoSectionCard";
import CheckListContent from "./CheckListContent";

type Props = {
  data: any;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function AdmissionChecklist({
  data,
  activeTab,
  setActiveTab,
}: Props) {
  const documents =
    data?.requiredDocuments?.split("\n").filter(Boolean) || [];

  const visa =
    data?.visaRequirements?.split("\n").filter(Boolean) || [];

  return (
    <InfoSectionCard
      title="Admission"
      highlight="Checklist"
      image="/study-abroad/Inner-pages/Admission-checklist.svg"
      borderColor="#AF8DCC"
      shadowColor="#DFD7FF"
      innerBg="linear-gradient(348.34deg, #F9F8FF 3.13%, #F7F6FF 66.2%)"
    >
      <Box display="flex" gap={1} mb={3}>
        <Button
          variant={activeTab === "documents" ? "contained" : "outlined"}
          onClick={() => setActiveTab("documents")}
        >
          Documents
        </Button>

        <Button
          variant={activeTab === "visa" ? "contained" : "outlined"}
          onClick={() => setActiveTab("visa")}
        >
          Visa
        </Button>
      </Box>

      <CheckListContent
        items={activeTab === "documents" ? documents : visa}
      />
    </InfoSectionCard>
  );
}