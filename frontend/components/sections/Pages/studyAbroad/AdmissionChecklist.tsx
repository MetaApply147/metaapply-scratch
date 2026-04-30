"use client";

import { Box, Button, Typography } from "@mui/material";
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
  const documents = data?.requiredDocuments?.split("\n").filter(Boolean) || [];

  const visa = data?.visaRequirements?.split("\n").filter(Boolean) || [];

  return (
    <InfoSectionCard
      title="Admission"
      highlight="Checklist"
      image="/study-abroad/Inner-pages/Admission-checklist.svg"
      borderColor="#AF8DCC"
      shadowColor="#DFD7FF"
      innerBg="linear-gradient(348.34deg, #F9F8FF 3.13%, #F7F6FF 66.2%)"
      Imagewidth="115px"
      topContent={
        <Box
          sx={{
            display: "inline-flex",
            border: "1px solid #FF3185",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#fff",
            mb: 3.5
          }}
        >
          <Box
            onClick={() => setActiveTab("documents")}
            sx={{
              minWidth: "148px",
              py: 1.25,
              px: 4,
              cursor: "pointer",
              textAlign: "center",
              background:
                activeTab === "documents"
                  ? "linear-gradient(3.52deg, #FF3185 2.88%, #FF7CB1 97.51%)"
                  : "transparent",
              color: activeTab === "documents" ? "#fff" : "#0B1B2B",
              borderRadius: "0 10px 10px 0",
              transition: "all 0.3s ease",
            }}
          >
            <Typography variant="heading14">Documents</Typography>
          </Box>

          <Box
            onClick={() => setActiveTab("visa")}
            sx={{
              minWidth: "115px",
              py: 1.25,
              px: 4,
              cursor: "pointer",
              textAlign: "center",
              background:
                activeTab === "visa"
                  ? "linear-gradient(3.52deg, #FF3185 2.88%, #FF7CB1 97.51%)"
                  : "transparent",
              color: activeTab === "visa" ? "#fff" : "#0B1B2B",
              borderRadius: "10px 0 0 10px",
              transition: "all 0.3s ease",
            }}
          >
            <Typography variant="heading14">Visa</Typography>
          </Box>
        </Box>
      }
    >
      <CheckListContent items={activeTab === "documents" ? documents : visa} />
    </InfoSectionCard>
  );
}
