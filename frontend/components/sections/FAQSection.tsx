'use client';

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getServices } from "@/services/httpServices";
import SectionHeader from "../common/SectionHeader";
import Section from "../common/Section";
import { FAQ_CATEGORY_MAP } from "@/constants/faqCategories";

/* ================= TYPES ================= */

type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: string | null;
  order: number;
};

type Props = {
  page: string;
};

/* ================= COMPONENT ================= */

export default function FAQSection({ page }: Props) {
  const [data, setData] = useState<FAQ[]>([]);
  const [grouped, setGrouped] = useState<Record<string, FAQ[]>>({});
  const [activeTab, setActiveTab] = useState("");
  const [expanded, setExpanded] = useState<number | false>(false);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getServices("/faqs", {
        filters: { page },
        sort: ["order:asc"],
      });

      if (!res.isSuccess) return;

      const faqs: FAQ[] = res.data.data;
      setData(faqs);

      // check if category exists (for tabs)
      const hasCategory = faqs.some((f) => f.category);

      if (hasCategory) {
        const groupedData: Record<string, FAQ[]> = {};

        faqs.forEach((item) => {
          if (!item.category) return;

          if (!groupedData[item.category]) {
            groupedData[item.category] = [];
          }

          groupedData[item.category].push(item);
        });

        // sort inside each category
        Object.keys(groupedData).forEach((key) => {
          groupedData[key].sort((a, b) => a.order - b.order);
        });

        const categoryOrder =
          FAQ_CATEGORY_MAP[page as keyof typeof FAQ_CATEGORY_MAP];

        const orderedCategories = (categoryOrder || []).filter(
          (cat) => groupedData[cat]
        );

        setGrouped(groupedData);
        setActiveTab(orderedCategories[0] || "");
        setCategories(orderedCategories);
      }
    };

    fetchData();
  }, [page]);

  const isTabView = categories.length > 0;

  const currentFaqs = isTabView ? grouped[activeTab] : data;

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Section spacing="lg">
        <Box>
        {/* ================= HEADING ================= */}
        <SectionHeader
            title="Frequently Asked"
            highlight="Questions"
        />

        {/* ================= TABS ================= */}
        {isTabView && (
            <Box
            display="flex"
            gap={1}
            sx={{
                background: "#FFF0F6",
                border: '1px solid #FFBDD8',
                p: "12px",
                borderRadius: "51px",
                width: "fit-content",
            }}
            >
            {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => {
                      setActiveTab(cat);
                      setExpanded(false); // close accordion on tab change
                  }}
                  disableRipple
                  disableTouchRipple
                  sx={{
                      borderRadius: "30px",
                      px: 4.5,
                      py: 1.5,
                      background:
                      activeTab === cat
                          ? 'linear-gradient(90deg, #BF0E2E 0%, #EE0081 100%)'
                          : "#FFF0F6",
                      color: activeTab === cat ? "common.white" : "text.primary",
                      boxShadow: activeTab === cat ? '0px 4px 19px 0px #FF99CE' : 'none',
                      // transition: "0.3s",
                      "&:hover": {
                          boxShadow: activeTab === cat ? '0px 4px 19px 0px #FF99CE' : 'none',
                      },
                      
                  }}
                >
                
                <Typography variant="heading12" component='h6' fontWeight={500}>{cat}</Typography>
                </Button>
            ))}
            </Box>
        )}

        {/* ================= FAQ LIST ================= */}
        <Box mt={4}>
            {currentFaqs?.map((faq) => (
            <Accordion
                key={faq.id}
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                disableGutters
                elevation={0}
                sx={{
                mb: 2.5,
                borderRadius: "16px !important",
                background: "linear-gradient(90.19deg, rgba(255, 229, 240, 0.5) 9.4%, #F8E7FF 94.98%)",
                "&:before": { display: "none" },
                transition: "all 0.3s ease",
                }}
            >
                <AccordionSummary sx={{
                    px: 3, py: 1.3,
                    fontWeight: 500,
                    '&.Mui-expanded .MuiTypography-root': {
                      fontWeight: 600,
                    },

                  }}
                  expandIcon={
                      <ExpandMoreIcon />
                  }
                  >
                  <Typography variant="body03" component='p'>
                      {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{px: 3, pb: 3, pt: 0}}>
                <Typography color="text.secondary" variant="body04" component='p'>
                    {faq.answer}
                </Typography>
                </AccordionDetails>
            </Accordion>
            ))}
        </Box>
        </Box>
    </Section>
  );
}