"use client";

import { Box, Container, Typography } from "@mui/material";

type MegaMenuProps = {
  open: boolean;
  type: string | null;
};

export default function MegaMenu({ open, type }: MegaMenuProps) {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        width: "100%",
        bgcolor: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        borderRadius: "0 0 20px 20px",
        pt: 4,
        pb: 6,
        zIndex: 10,
        top: "100%",
        marginLeft: "16px",
        marginRight: "16px",
      }}
    >
      <Container maxWidth="xl">
        {type === "study-abroad" && (
          <Typography variant="heading14" color="text.primary">Study Abroad Mega Menu</Typography>
        )}

        {type === "testprep" && (
          <Typography variant="heading14" color="text.primary">TestPrep Mega Menu</Typography>
        )}

        {type === "explore" && (
          <Typography variant="heading14" color="text.primary">Explore Mega Menu</Typography>
        )}
      </Container>
    </Box>
  );
}