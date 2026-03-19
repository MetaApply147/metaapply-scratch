"use client";

import { Box, Container } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import LeftTabs from "./shared/LeftTabs";
import StudyMegaMenu from "./variants/StudyMegaMenu";
import TestPrepMegaMenu from "./variants/TestPrepMegaMenu";
import ExploreMegaMenu from "./variants/ExploreMegaMenu";

export default function MegaMenu({ open, type, tabs }: any) {
  const [value, setValue] = useState(0);

  const filteredTabs = useMemo(() => {
    if (!tabs || !type) return [];
    return tabs
      .filter((tab: any) => tab.menu === type)
      .sort((a: any, b: any) => a.order - b.order);
  }, [tabs, type]);

  const selectedTab = filteredTabs?.[value] || null;

  useEffect(() => {
    setValue(0);
  }, [type]);

  if (!open || !type || filteredTabs.length === 0) {
    return null;
    }

  const renderVariant = () => {
    if (type === "study-abroad") return <StudyMegaMenu tab={selectedTab} />;
    if (type === "testprep") return <TestPrepMegaMenu tab={selectedTab} />;
    if (type === "explore") return <ExploreMegaMenu tab={selectedTab} />;
    return null;
  };

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
        <Box display="flex">
          <LeftTabs tabs={filteredTabs} value={value} setValue={setValue} />
          <Box flex={1} p={4}>
            {renderVariant()}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}