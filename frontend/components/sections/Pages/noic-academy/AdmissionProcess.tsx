"use client";

import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const steps = [
{ title: "Register for Course", bg: "/noic/icon-bg.svg", icon: "/noic/icon-1.svg" },
{ title: "Make Payment", bg: "/noic/icon-bg.svg", icon: "/noic/icon-2.svg" },
{ title: "Submit Details", bg: "/noic/icon-bg.svg", icon: "/noic/icon-3.svg" },
{ title: "Receive Confirmation", bg: "/noic/icon-bg.svg", icon: "/noic/icon-4.svg" },
{ title: "Create Account", bg: "/noic/icon-bg.svg", icon: "/noic/icon-5.svg" },
{ title: "Get Course Credentials", bg: "/noic/icon-bg.svg", icon: "/noic/icon-6.svg" },
{ title: "Extra Step One", bg: "/noic/icon-bg.svg", icon: "/noic/icon-1.svg" },
{ title: "Extra Step Two", bg: "/noic/icon-bg.svg", icon: "/noic/icon-2.svg" },
];

const BLOB_W = 127;
const BLOB_H = 114;
const VISIBLE_COUNT = 6;

export default function AdmissionProcess() {
const [startIndex, setStartIndex] = useState(0);

const maxStart = steps.length - VISIBLE_COUNT;
const canScrollLeft = startIndex > 0;
const canScrollRight = startIndex < maxStart;

const handleLeft = () => setStartIndex((i) => Math.max(0, i - 1));
const handleRight = () => setStartIndex((i) => Math.min(maxStart, i + 1));

const translateX = (startIndex * 100) / steps.length;
return (
<Box
sx={{
width: "100%",
display: "flex",
justifyContent: "center",
px: { xs: 2, md: 0 },
py: { xs: 6, md: 10 },
background: "#fff",
}}
>
<Box sx={{ width: "100%", maxWidth: "1320px" }}> <SectionHeader title="The" highlight="Admission Process" mb="40px" />

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: "12px", md: "36px" },
      }}
    >
      {/* LEFT ARROW */}
      <IconButton
        onClick={handleLeft}
        disabled={!canScrollLeft}
        sx={{
          width: 28,
          height: 28,
          p: 0,
          color: canScrollLeft ? "#333" : "#ccc",
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
      </IconButton>

      {/* VIEWPORT */}
      <Box sx={{ flex: 1, overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            width: `${(steps.length * 100) / VISIBLE_COUNT}%`,
            transform: `translateX(-${translateX}%)`,
            transition: "transform 0.4s ease",
          }}
        >
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;

            return (
              <Box
                key={i}
                sx={{
                  flex: `0 0 ${100 / steps.length}%`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  py: "20px",
                }}
              >
                {/* DASHED LINE */}
                {!isLast && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: `${20 + BLOB_H / 2}px`,
                      left: `calc(50% + ${BLOB_W / 2}px)`,
                      right: `calc(-100% + 50% + ${BLOB_W / 2}px)`,
                      borderTop: "2px dashed #D9D9D9",
                      zIndex: 1,
                    }}
                  />
                )}

                {/* ICON */}
                <Box
                  sx={{
                    width: `${BLOB_W}px`,
                    height: `${BLOB_H}px`,
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image src={step.bg} alt="" fill style={{ objectFit: "contain" }} />
                  <Box sx={{ width: 42, height: 42, position: "relative", zIndex: 2 }}>
                    <Image src={step.icon} alt={step.title} fill />
                  </Box>
                </Box>

                {/* TEXT */}
                <Typography
                  sx={{
                    mt: 1.5,
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: 600,
                    maxWidth: "110px",
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* RIGHT ARROW */}
      <IconButton
        onClick={handleRight}
        disabled={!canScrollRight}
        sx={{
          width: 28,
          height: 28,
          p: 0,
          color: canScrollRight ? "#333" : "#ccc",
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </Box>
  </Box>
</Box>

);
}
