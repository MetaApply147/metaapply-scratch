"use client";

import { Box, Container } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import LeftTabs from "./shared/LeftTabs";
import StudyMegaMenu from "./variants/StudyMegaMenu";
import TestPrepMegaMenu from "./variants/TestPrepMegaMenu";
import ExploreMegaMenu from "./variants/ExploreMegaMenu";
import { Tab } from "@/types/megamenu";

/* ---------------- TYPES ---------------- */

type MegaMenuProps = {
  open: boolean;
  type: "study-abroad" | "testprep" | "explore" | null;
  tabs: (Tab & {
    menu?: string;
    order?: number;
  })[];
};

/* ---------------- COMPONENT ---------------- */

export default function MegaMenu({
  open,
  type,
  tabs,
}: MegaMenuProps) {
  const [value, setValue] = useState(0);

  /* ---------------- FILTER TABS ---------------- */

  const filteredTabs = useMemo(() => {
    if (!tabs?.length || !type) return [];

    return tabs
      .filter((tab) => tab.menu === type)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }, [tabs, type]);

  const selectedTab = filteredTabs[value] ?? null;

  /* ---------------- RESET ON TYPE CHANGE ---------------- */

  useEffect(() => {
    setValue(0);
  }, [type]);

  /* ---------------- EARLY RETURN ---------------- */

  if (!open || !type || !filteredTabs.length) {
    return null;
  }

  /* ---------------- VARIANT MAP (SCALABLE) ---------------- */

  const variantMap = {
    "study-abroad": StudyMegaMenu,
    testprep: TestPrepMegaMenu,
    explore: ExploreMegaMenu,
  } as const;

  const VariantComponent = variantMap[type];
  // console.log(tabs.length);

  /* ---------------- RENDER ---------------- */

  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        bgcolor: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        borderRadius: "0 0 20px 20px",
        zIndex: 10,
      }}
    >
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Box
          display="flex"
          flexDirection={{
            xs: "column",
            md: "row",
          }}
        >
          {/* LEFT TABS */}
          <LeftTabs
            tabs={filteredTabs}
            value={value}
            setValue={setValue}
          />

          {/* CONTENT */}
          <Box flex={1}>
            {selectedTab && <VariantComponent tab={selectedTab} />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}