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

        setGrouped(groupedData);
        setActiveTab(Object.keys(groupedData)[0]);
      }
    };

    fetchData();
  }, [page]);

  const categories = Object.keys(grouped);
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
    
        {/* <Typography variant="h4" fontWeight={600} mb={2}>
            Frequently Asked{" "}
            <span style={{ color: "#ff4081" }}>Questions</span>
        </Typography> */}

        {/* ================= TABS ================= */}
        {isTabView && (
            <Box
            display="flex"
            gap={1}
            sx={{
                background: "#f3f3f3",
                p: "6px",
                borderRadius: "30px",
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
                sx={{
                    borderRadius: "30px",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    fontWeight: 500,
                    background:
                    activeTab === cat
                        ? "linear-gradient(90deg, #ff4081, #ff1a75)"
                        : "transparent",
                    color: activeTab === cat ? "#fff" : "#000",
                    transition: "0.3s",
                }}
                >
                {cat}
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
                mb: 2,
                borderRadius: "12px !important",
                background: "linear-gradient(90deg, #f5e6ff, #e6ccff)",
                "&:before": { display: "none" },
                transition: "all 0.3s ease",
                }}
            >
                <AccordionSummary
                expandIcon={
                    <ExpandMoreIcon
                    sx={{
                        transform:
                        expanded === faq.id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "0.3s",
                    }}
                    />
                }
                >
                <Typography fontWeight={500}>
                    {faq.question}
                </Typography>
                </AccordionSummary>

                <AccordionDetails>
                <Typography color="text.secondary">
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