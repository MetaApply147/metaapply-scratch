"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function SectionColumn({ section }: any) {
  return (
    <Box>
      <Typography variant="heading14" component="h6" mb={2} sx={{color: "text.primary"}}>
        {section.title}
      </Typography>

      {(section?.items || []).map((item: any) => (
        <Box key={item.id} mb={1}>
          <Link href={item.url || "#"} style={{ textDecoration: "none" }}>
            <Typography variant="heading15" fontWeight={400} sx={{ color: "text.primary" }}>
              {item.label}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}