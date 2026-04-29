"use client";

import Section from "@/components/common/Section";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type SectionItem = {
  id: string;
  label: string;
};

type Props = {
  sections: SectionItem[];
  children: React.ReactNode;
  setAdmissionTab?: (tab: string) => void;
};

export default function StudyAbroadContent({
  sections,
  children,
  setAdmissionTab,
}: Props) {
  const [active, setActive] = useState(sections[0]?.id);

  const handleClick = (id: string) => {
    setActive(id);

    let scrollId = id;

    if (id === "documents") {
      setAdmissionTab?.("documents");
      scrollId = "admission-checklist";
    }

    if (id === "visa") {
      setAdmissionTab?.("visa");
      scrollId = "admission-checklist";
    }

    const el = document.getElementById(scrollId);

    if (el) {
      const headerOffset = 150;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section spacing="lg">
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "399px 1fr" }}
        gap={4}
      >
        {/* Left Sidebar */}
        <Box
          sx={{
            position: "sticky",
            top: 150,
            height: "fit-content",
          }}
        >
          {sections.map((item, index) => {
            const isActive = active === item.id;
            const isBeforeActive = sections[index + 1]?.id === active;

            return (
              <Box
                key={item.id}
                onClick={() => handleClick(item.id)}
                sx={{
                  cursor: "pointer",
                  py: 2.5,
                  px: 2.8,
                  borderBottom: "1px solid",
                  borderColor:
                    isActive || isBeforeActive ? "transparent" : "#CBD5E1",
                  borderLeft: isActive
                    ? "2px solid #FF3185"
                    : "2px solid transparent",
                  bgcolor: active === item.id ? "#FFF5F8" : "transparent",
                  borderRadius: isActive ? "12px" : "0px",
                  transition: "all 0.3s ease",
                }}
              >
                <Typography
                  variant="heading13"
                  component="h6"
                  fontWeight={500}
                  sx={{
                    color: active === item.id ? "primary.main" : "text.primary",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Right Content */}
        <Box>{children}</Box>
      </Box>
    </Section>
  );
}
