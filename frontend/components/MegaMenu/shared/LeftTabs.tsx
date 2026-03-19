"use client";

import { Tabs, Tab } from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";

export default function LeftTabs({ tabs, value, setValue }: any) {
  return (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={(e, val) => setValue(val)}
      sx={{
        width: 260,
        borderRight: "1px solid #eee",
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