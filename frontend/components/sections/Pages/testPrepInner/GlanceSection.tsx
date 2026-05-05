"use client";

import { useState, useMemo, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

type Props = {
  examName?: string;
  format?: string;
  scoringPattern?: string;
  examDates?: string;
};

export default function GlanceSection({
  examName = "Exam",
  format,
  scoringPattern,
  examDates,
}: Props) {
  const tabs = useMemo(() => {
    const arr = [];

    if (format) {
      arr.push({ key: "format", label: "Format", content: format });
    }

    if (scoringPattern) {
      arr.push({
        key: "scoring",
        label: "Scoring Pattern",
        content: scoringPattern,
      });
    }

    if (examDates) {
      arr.push({
        key: "dates",
        label: "Upcoming Exam Dates",
        content: examDates,
      });
    }

    return arr;
  }, [format, scoringPattern, examDates]);

  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  /* Fix: set first tab dynamically AFTER render */
  useEffect(() => {
    if (tabs.length && !activeTab) {
      setActiveTab(tabs[0].key);
    }
  }, [tabs, activeTab]);

  const activeContent = tabs.find((t) => t.key === activeTab)?.content;

  return (
    <Section
      spacing="lg"
      sx={{
        background:
          "url(/test-prep/Innerpages/glance-bg.webp) no-repeat center",
        backgroundSize: "cover",
      }}
    >
      {/* TITLE ALWAYS SHOWS */}
      <SectionHeader title={examName} highlight="at a Glance" />

      {/* SHOW TABS ONLY IF DATA EXISTS */}
      {tabs.length > 0 && (
        <>
          {/* TABS */}
          <Box
            sx={{
              display: "inline-flex",
              background: "#FFF0F6",
              borderRadius: "51px",
              padding: "12px",
              border: "1px solid #FFBDD8",
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <Box
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    background: isActive
                      ? "linear-gradient(90deg, #BF0E2E, #EE0081)"
                      : "transparent",
                    color: isActive ? "#fff" : "#031621",
                    boxShadow: isActive ? "0 4px 19px 0 #FF99CE" : "none",
                    minWidth: "220px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    component="p"
                    variant="heading12"
                    fontWeight={400}
                  >
                    {tab.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* CONTENT */}
          <Box
            mt={6}
            sx={{
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                "& table": {
                  width: "100%",
                  borderCollapse: "collapse",
                  borderRadius: "16px",
                  overflow: "hidden",
                },
                "& th": {
                  background: "#0b0f5b",
                  color: "common.white",
                  borderRight: "1px solid #C0C0C0",
                  padding: "23.5px 26px",
                  textAlign: "left",
                  fontFamily: "var(--font-heading)",
                  fontSize: "22px",
                  fontWeight: 500,
                },
                "& thead th:last-child": {
                  borderRight: "none",
                },
                "& thead th:first-of-type": {
                  borderTopLeftRadius: "16px",
                },
                "& thead th:last-of-type": {
                  borderTopRightRadius: "16px",
                },
                "& td": {
                  padding: "16px",
                  fontFamily: "var(--font-body)",
                  fontSize: "18px",
                  color: "text.secondary",
                  borderBottom: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
                  height: '80px'
                },
                "& tbody td:last-child": {
                  borderRight: "none",
                },
                "& tbody td:first-of-type": {
                  fontWeight: 500,
                  width: "20%",
                },
                "& tbody tr:last-child td": {
                  borderBottom: "none",
                },
                "& tr": {
                  background: "#FFF8ED",
                },
                "& tr:nth-of-type(even)": {
                  background: "#fff",
                },
                "& ul": {
                  paddingLeft: "2rem",
                  mb: '1rem',
                  listStyle: 'disc'
                },
                "& li": {
                  marginBottom: "6px",
                },
                "&": {
                    fontFamily: "var(--font-body)",
                    fontSize: '20px',
                    color: 'text.secondary',
                },
                "& p": {
                    marginBottom: '16px',
                }
              }}
              dangerouslySetInnerHTML={{ __html: activeContent || "" }}
            />
          </Box>
        </>
      )}

      {/* Optional fallback (nice UX) */}
      {tabs.length === 0 && (
        <Typography variant="body05" component="p" color="text.secondary">
          No details available right now.
        </Typography>
      )}
    </Section>
  );
}
