"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

export default function BlogFaqs({ faqs }: Props) {
  const [expanded, setExpanded] = useState<number | false>(false);

  if (!faqs || faqs.length === 0) return null;

  const handleChange =
    (panel: number) =>
    (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Section spacing="lg" sx={{pt: '0 !important'}}>
      <SectionHeader title="Frequently Asked " highlight="Questions"/>

        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
            disableGutters
            elevation={0}
            sx={{
                mb: 2.5,
                borderRadius: "16px !important",
                boxShadow:
                  expanded === faq.id ? "0px 2px 2px 0px #48505814" : "0",
                background:
                  expanded === faq.id
                    ? "linear-gradient(90deg, #FFFDE7 0%, #FFE5F0 100%)"
                    : "linear-gradient(90.19deg, rgba(255, 229, 240, 0.5) 9.4%, #F8E7FF 94.98%)",
                "&:before": { display: "none" },
                transition: "all 0.3s ease",
              }}
          >
            <AccordionSummary
              sx={{
                  px: 3,
                  py: 1,
                  fontWeight: 500,
                  "& .MuiTypography-root": {
                    fontWeight: 500,
                  },
                  "& .addIcon": {
                    display: "block",
                  },
                  "& .removeIcon": {
                    display: "none",
                  },
                  "&.Mui-expanded .addIcon": {
                    display: "none",
                  },
                  "&.Mui-expanded .removeIcon": {
                    display: "block",
                  },
                }}
                expandIcon={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AddIcon className="addIcon" sx={{ fontSize: 24 }} />
                    <RemoveIcon className="removeIcon" sx={{ fontSize: 24 }} />
                  </Box>
                }
            >
              <Typography variant="heading12" component="p" sx={{fontSize: {xs: 16,sm: 18, lg: 20}}} pr={{sm: 2,md: 0}}>
                  {faq.question}
                </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography
                  color="text.secondary"
                  variant="body04"
                  component="p"
                  sx={{fontSize: {xs: 14, sm: 16,lg: 18}}}
                  pr={{sm: 2,md: 0}}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
          </Accordion>
        ))}
    </Section>
  );
}