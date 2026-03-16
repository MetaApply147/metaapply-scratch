"use client";

import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";

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

   const [activeTab, setActiveTab] = useState<number | null>(null);
   const filteredTabs = tabs?.filter((tab) => tab.menu?.Slug === type);
   const selectedTab = filteredTabs?.find((tab) => tab.id === activeTab);

  useEffect(() => {
    if (filteredTabs?.length) {
      setActiveTab(filteredTabs[0].id);
    }
  }, [type]);

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
        <Box sx={{ display: "flex", gap: 4 }}>
          {/* LEFT SIDE */}
          <Box sx={{ width: "260px" }}>
            {filteredTabs?.map((tab) => (
              <Typography
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant="heading14"
                sx={{
                  py: 1.5,
                  cursor: "pointer",
                  color: activeTab === tab.id ? "primary.main" : "text.primary",
                  fontWeight: activeTab === tab.id ? 600 : 400,
                }}
              >
                {tab.Title}
              </Typography>
            ))}
          </Box>

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
