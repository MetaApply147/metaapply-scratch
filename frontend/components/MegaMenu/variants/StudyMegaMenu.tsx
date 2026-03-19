"use client";

import { Box } from "@mui/material";
import SectionColumn from "../shared/SectionColumn";

export default function StudyMegaMenu({ tab }: any) {
  return (
    <Box display="grid" gridTemplateColumns="repeat(3,1fr)" gap={4}>
      {tab?.sections?.map((section: any) => (
        <SectionColumn key={section.id} section={section} />
      ))}
    </Box>
  );
}