"use client";

import { Tabs, Tab } from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { Tab as TabType } from "@/types/megamenu";
import palette from "@/theme/palette";

/* ---------------- TYPES ---------------- */

type LeftTabsProps = {
  tabs: TabType[];
  value: number;
  setValue: (value: number) => void;
};

/* ---------------- COMPONENT ---------------- */

export default function LeftTabs({
  tabs,
  value,
  setValue,
}: LeftTabsProps) {
  if (!tabs?.length) return null;

  return (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={(_, val) => setValue(val)}
      aria-label="Mega menu tabs"
      sx={{
        width: {
          xs: "100%",
          md: 242,
        },
        borderRight: "1px solid",
        borderColor: palette.neutralBlue[100],
        height: "fit-content",

        maxHeight: {
          xs: "none",
          md: 580,
        },

        "& .MuiTabs-scroller": {
          overflowY: "auto !important",
          maxHeight: {
            xs: "none",
            md: 580,
          },
          scrollbarWidth: "thin",
        },

        "& .MuiTabs-flexContainer": {
          flexDirection: "column",
        },

        "& .MuiTab-root": {
          minHeight: "unset",
          textAlign: "left",
          textTransform: "none",
          fontSize: "14px",
          fontFamily: "var(--font-heading)",
          color: "text.primary",
          px: 3,
          py: 2.25,
          justifyContent: "space-between",
          width: "100%",
          fontWeight: 400,
          // transition: "0.2s",
        },

        "& .MuiTab-root:hover": {
          backgroundColor: "pink.300",
          color: "background.default",
        },

        "& .MuiTab-root.Mui-selected": {
          color: "background.default",
          backgroundColor: "primary.main",
        },

        "& .MuiTabs-indicator": {
          display: "none",
        },
      }}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={tab.id ?? index}
          label={tab.title}
          icon={<ChevronRight fontSize="small" />}
          iconPosition="end"
          aria-label={tab.title}
        />
      ))}
    </Tabs>
  );
}