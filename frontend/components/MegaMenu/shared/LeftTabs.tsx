"use client";

import { Tabs, Tab } from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";
import palette from "@/theme/palette";

export default function LeftTabs({ tabs, value, setValue }: any) {
  return (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={(e, val) => setValue(val)}
      aria-label="Mega menu tabs"
      sx={{
        width: 242,
        borderRight: "1px solid",
        borderColor: palette.neutralBlue[100],

        "& .MuiTab-root": {
            minHeight: 'unset',
            textAlign: "left",
            textTransform: "none",
            fontSize: "14px",
            fontFamily: "var(--font-heading)",
            color: "text.primary",
            px: 3,
            py: 2,
            justifyContent: "space-between",
            width: "100%",
            fontWeight: 400
        },

        "& .MuiTab-root:hover": {
            backgroundColor: "primary.main",
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
      {tabs?.map((tab: any) => (
        <Tab
          key={tab.id}
          label={tab.title}
          icon={<ChevronRight />}
          iconPosition="end"
        />
      ))}
    </Tabs>
  );
}