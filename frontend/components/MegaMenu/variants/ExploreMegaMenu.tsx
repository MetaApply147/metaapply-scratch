"use client";

import { Box, Typography } from "@mui/material";
import SectionColumn from "../shared/SectionColumn";
import { Tab } from "@/types/megamenu";

/* ---------------- COMPONENT ---------------- */

export default function ExploreMegaMenu({ tab }: { tab: Tab }) {
  if (!tab) return null;

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr 1fr",
        lg: "1fr 1fr 1fr 1fr",
      }}
      gap={{ xs: 2, md: 4 }}
    >
      {tab?.sections?.length ? (
        tab.sections.map((section) => (
          <SectionColumn key={section.id} section={section} />
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          No data available
        </Typography>
      )}
    </Box>
  );
}