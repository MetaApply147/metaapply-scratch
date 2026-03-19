"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function SectionColumn({ section }: any) {
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        {section.title}
      </Typography>

      {(section?.items || []).map((item: any) => (
        <Box key={item.id} mb={1}>
          <Link href={item.url || "#"} style={{ textDecoration: "none" }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.label}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}