"use client"

import { Box, Typography } from "@mui/material";
import InfoCards from "./InfoCards";
import StudyDescription from "./StudyDescription";
import NumberCards from "../../NumberCards";
import EligibilityCriteria from "./EligibilityCriteria";
import CostOfStudy from "./CostOfStudy";
import { useState } from "react";
import AdmissionChecklist from "./AdmissionChecklist";

type Props = {
  data: any;
  countryName: string;
  admissionTab: string;
  setAdmissionTab: (tab: string) => void;
};

export default function DestinationSections({ data, countryName, admissionTab, setAdmissionTab }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 7.5 }}>
      <Box id="life-in">
        <InfoCards data={data} />
      </Box>

      <Box
        sx={{
        background: "linear-gradient(274.23deg, #FFFDF8 3.81%, #FFFFFF 91.32%)",
          p: "32px 0px",
        }}
      >
        <Box id="why-study" mb={5} sx={{px: '10px'}}>
          <StudyDescription data={data} countryName={countryName} />
        </Box>

        <Box id="benefits">
          <Typography
            variant="heading09"
            component="h3"
            pb={1.5}
            sx={{px: '10px'}}
          >
            Why{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Benefits
            </Box>
          </Typography>
          <NumberCards
            cards={data.benefits}
            disableSectionPadding
            gridTemplateColumns={{
              xs: "1fr",
              sm: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            numberFontSize={40}
            gap="20px"
          />
        </Box>
      </Box>

      <Box id="eligibility">
        <EligibilityCriteria data={data}/>
      </Box>

      <Box id="admission-checklist">
        <AdmissionChecklist
          data={data}
          activeTab={admissionTab}
          setActiveTab={setAdmissionTab}
        />
      </Box>

      <Box id="cost-of-study">
        <CostOfStudy data={data} countryName={countryName}/>
      </Box>
    </Box>
  );
}
