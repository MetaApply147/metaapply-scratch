"use client";

import { Box, Typography, Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Section } from "@/types/megamenu";

/* ---------------- COMPONENT ---------------- */

export default function SectionColumn({ section }: { section: Section }) {
  const pathname = usePathname();

  if (!section) return null;

  return (
    <Box>
      {/* TITLE */}
      <Typography
        variant="heading14"
        component="h6"
        mb={2}
        sx={{ color: "text.primary" }}
      >
        {section.title}
      </Typography>

      {/* ITEMS */}
      <Box display="flex" flexDirection="column" gap={1}>
        {section.items?.map((item) => {
          if (!item?.label) return null;

          const href = item.url ?? "";

          // ACTIVE CHECK
          const isActive =
            href && pathname.toLowerCase() === href.toLowerCase();

          return (
            <MuiLink
              key={item.id}
              component={NextLink}
              href={href}
              underline="none"
              sx={{
                color: isActive ? "primary.main" : "text.primary",
                cursor: href ? "pointer" : "default",
                transition: "0.2s",
                "&:hover": {
                  color: "primary.main",
                },
                width: "max-content"
              }}
            >
              <Typography variant="heading15" fontWeight={400}>
                {item.label}
              </Typography>
            </MuiLink>
          );
        })}
      </Box>
    </Box>
  );
}