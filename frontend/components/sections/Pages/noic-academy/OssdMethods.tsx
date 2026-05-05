"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";

const pointsSync = [
  {
    title: "Mode of Learning:",
    desc: "Live online teaching with direct interaction with NOIC teachers.",
  },
  {
    title: "Course Duration:",
    desc: "32+ hours of live teaching to be completed within 2 months.",
  },
  {
    title: "Doubt Clearance:",
    desc: "Students connect with mentors for doubt clearing session.",
  },
  {
    title: "Learning Materials:",
    desc: "Available in the online course shells.",
  },
  {
    title: "Communication Channels:",
    desc: "Students connect with a mentor for progress and concerns; Relevant training will be provided to all mentors by NOIC Academy.",
  },
  {
    title: "Progress Monitoring:",
    desc: "The course Mentor connects with parents to discuss student learning, progress, concerns, and suggestions.",
  },
];

const pointsAsync = [
  {
    title: "Mode of Learning:",
    desc: "Self-learning with no live teaching.",
  },
  {
    title: "Course Duration:",
    desc: "The course needs to be completed by self-learning in 3 months.",
  },
  {
    title: "Doubt Clearance:",
    desc: "Students connect with mentors for doubt-clearing sessions.",
  },
  {
    title: "Learning Materials:",
    desc: "Available in the online course shells.",
  },
  {
    title: "Communication Channels:",
    desc: "Students connect with a mentor for progress and concerns; Relevant training will be provided to all mentors by NOIC Academy.",
  },
  {
    title: "Progress Monitoring:",
    desc: "The mentor provides feedback on the student performance and shares it with parents.",
  },
];

function Card({ titlePink, titleBlack, points }: any) {
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "16px",
        p: "24px",
        width: "100%",
        maxWidth: "560px",
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "48px",
          textAlign: "center",
          mb: "20px",
        }}
      >
        <Box component="span" sx={{ color: "#FF3185" }}>
          {titlePink} </Box>{" "}
        <Box component="span" sx={{ color: "#000" }}>
          {titleBlack} </Box> </Typography>

      {/* POINTS */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {points.map((item: any, i: number) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            {/* ICON */}
            <Box sx={{ mt: "3px", flexShrink: 0 }}>
              <Image
                src="/noic/star.svg"
                alt="star"
                width={22}
                height={22}
              />
            </Box>

            {/* TEXT */}
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "14px",
                lineHeight: "24px",
                color: "#636363",
              }}
            >
              <Box component="span" sx={{ fontWeight: 700 }}>
                {item.title}
              </Box>{" "}
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>

  );
}

export default function OSSDMethods() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, md: 0 },
        py: { xs: 6, md: 10 },
        background: "url(/noic/OSSD-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ maxWidth: "1320px", width: "100%" }}>

        <SectionHeader
          title="The"
          highlight="OSSD Learning Methods"
          mb="20px"
        />

        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontSize: "20px",
            lineHeight: "30px",
            color: "#000",
            mb: 3,
            fontWeight: 400,
          }}
        >
          Experience the flexibility of the OSSD Curriculum, which seamlessly blends synchronous and asynchronous learning methods. This globally recognised program empowers students to:
        </Typography>

        {/* BULLETS */}
        <Box sx={{ mb: 3 }}>
          {[
            "Learn at their own pace",
            "Choose courses that spark their passion",
            "Pursue extracurricular activities that fuel their interests",
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mb: "6px",
              }}
            >
              <Image src="/noic/star.svg" alt="star" width={22} height={22} />
              <Typography sx={{ fontSize: "20px", fontFamily: "Open Sans", fontWeight: 400,}}>{item}</Typography>
            </Box>
          ))}
        </Box>

        <Typography sx={{ mb: 6, fontSize: "20px", fontFamily: "Open Sans", fontWeight: 400, }}>
          Unlock a world of possibilities with the OSSD Curriculum, where flexibility meets academic excellence.
        </Typography>

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "32px",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Card
            titlePink="Synchronous"
            titleBlack="Learning Method"
            points={pointsSync}
          />

          <Card
            titlePink="Asynchronous"
            titleBlack="Learning Method"
            points={pointsAsync}
          />
        </Box>
      </Box>
    </Box>

  );
}
