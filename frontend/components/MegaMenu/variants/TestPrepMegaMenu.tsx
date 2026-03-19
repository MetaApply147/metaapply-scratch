"use client";

import { Box } from "@mui/material";
import SectionColumn from "../shared/SectionColumn";

export default function TestPrepMegaMenu({ tab }: any) {
  return (
    <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={4}>
      {tab?.sections?.map((section: any) => (
        <SectionColumn key={section.id} section={section} />
      ))}
    </Box>
  );
}