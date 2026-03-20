"use client";

import { Box, Typography, Divider  } from "@mui/material";
import SectionColumn from "../shared/SectionColumn";
import { Tab } from "@/types/megamenu";
import Link from "next/link";
import ChevronRight from "@mui/icons-material/ChevronRight";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

/* ---------------- COMPONENT ---------------- */

export default function TestPrepMegaMenu({ tab }: { tab: Tab }) {
  if (!tab) return null;

  const exam = tab?.title || "IELTS";
  
  {/* Variables for section columns */}
  const sections = tab.sections ?? [];
  const visibleSections = sections.slice(0, 3);
  const lastIndex = visibleSections.length - 1;

  if (!visibleSections.length) {
    return (
      <Typography variant="body2" color="text.secondary">
        No data available
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: "25px 0 0 32px", height: "100%", display: "flex", flexDirection: "column" }}>
      <Box mb={2}>
        <Link href={`/testprep/${exam.toLowerCase()}`}>
          <Typography
            variant="heading15"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Know More About {exam} <ChevronRight fontSize="small" sx={{marginLeft: 3}} />
          </Typography>
        </Link>
      </Box>

      <Divider sx={{ mb: 2.5 }} />
      
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1.52fr",
        }}
        gap={3}
        pl= {2}
        sx={{height: "100%"}}
        >
        {visibleSections.map((section, index) => {
          const isLastColumn = index === lastIndex;

          return (
            <Box
              key={section.id}
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="space-between"
            >
              <SectionColumn section={section} />

              {isLastColumn && (
                <Box mt="auto">
                  <NextStepCard />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

    </Box>
    
  );
}

function NextStepCard() {
  return (
    <Box
      sx={{
        borderRadius: "0 0 16px 24px",
        pl: 2,
        pt: 2.5,
        background: "linear-gradient(311.71deg, #FFC9CA 7.96%, #FFDFEB 61.1%, #FFE5E6 95.44%)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <Box>
        <Typography fontWeight={600} mb={1} variant="heading15" component="h6" sx={{
          background: "linear-gradient(90deg, #FF3185, #D80027)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          NextStep
        </Typography>

        <Typography variant="body07" component="p" color="text.secondary" mb={1} sx={{fontFamily: "var(--font-heading)", color: "#505050"}}>
          Bridge the Gap Between Learning and Earning.A guided path for students to become industry-ready with confidence.
        </Typography>

        <Typography
          variant="body07"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            cursor: "pointer",
            color: "text.primary",
          }}
        >
          Know More <EastIcon sx={{ fontSize: 14 }} />
        </Typography>
      </Box>

      <Image
        src="/Header/nextstep.svg"
        alt="students"
        width={186}
        height={164}
        style={{marginTop: "auto"}}
      />
    </Box>
  );
}