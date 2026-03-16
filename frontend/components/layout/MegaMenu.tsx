"use client";

import { Box, Container, Typography, Tabs, Tab } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type MegaMenuTab = {
  id: number;
  Title: string;
  Slug: string;
  Order: number;
  menu: {
    Slug: string;
  };
};

type MegaMenuProps = {
  open: boolean;
  type: string | null;
  tabs: MegaMenuTab[];
};

export default function MegaMenu({ open, type, tabs }: MegaMenuProps) {

   const [value, setValue] = useState(0);

   const filteredTabs = tabs
    ?.filter((tab) => tab.menu?.Slug === type)
    ?.sort((a, b) => a.Order - b.Order) || [];

  const selectedTab = filteredTabs[value];

  useEffect(() => {
    setValue(0);
  }, [type]);

  if (!open) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: "100%",
        width: "100%",
        bgcolor: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        borderRadius: "0 0 20px 20px",
        pt: 4,
        pb: 6,
        zIndex: 10,
        mx: "16px",
      }}
    >
      <Container maxWidth="xl" sx={{p: 0}}>
        <Box sx={{ display: "flex", gap: 4 }}>
          {/* LEFT SIDE */}
          <Tabs
            orientation="vertical"
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            sx={{
              width: "240px",
              minWidth: "240px",

              "& .MuiTab-root": {
                alignItems: "flex-start",
                textAlign: "left",
                textTransform: "none",
                fontSize: "14px",
                fontFamily: "var(--font-heading)",
                color: "text.primary",
                px: 3,
                py: 2.41,
                justifyContent: "flex-start",
                width: "100%",
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
            {filteredTabs.map((tab) => (
              <Tab key={tab.id} label={tab.Title} icon={<KeyboardArrowRightIcon />} iconPosition="end"/>
            ))}
            
          </Tabs>

          {/* RIGHT SIDE */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="heading14" color="text.primary">
              {selectedTab?.Title}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
