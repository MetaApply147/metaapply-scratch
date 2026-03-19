"use client";

import { Box, Typography, Divider } from "@mui/material";
import SectionColumn from "../shared/SectionColumn";

export default function StudyMegaMenu({ tab }: any) {
  const country = tab?.title?.replace("Study in ", "");
  console.log("country", country);
  return (
    <Box display="grid" gridTemplateColumns="2fr 1fr" gap={2}>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        <Box mb={2}>
          <Typography
            variant="body1"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            Explore Studying in {country} →
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        {tab?.sections?.map((section: any) => (
          <SectionColumn key={section.id} section={section} />
        ))}
      </Box>
      <Box>
        {/* Top Cards */}
        <Box display="flex" gap={2} mb={3}>
          <Box
            sx={{
              flex: 1,
              p: 2,
              borderRadius: 3,
              background: "linear-gradient(135deg,#B2F5EA,#81E6D9)",
            }}
          >
            <Typography fontWeight={600}>MBBS Abroad</Typography>
            <Typography variant="body2">Know More →</Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 2,
              borderRadius: 3,
              background: "linear-gradient(135deg,#FBCFE8,#F9A8D4)",
            }}
          >
            <Typography fontWeight={600}>Premium Counselling</Typography>
            <Typography variant="body2">Know More →</Typography>
          </Box>
        </Box>

        {/* Services */}
        <Typography fontWeight={600} mb={2}>
          Services
        </Typography>

        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
          {["MetaFinance", "MetaFly", "MetaStay", "MetaInsure"].map(
            (service) => (
              <Box
                key={service}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 1,
                  cursor: "pointer",
                }}
              >
                <Typography fontWeight={500} sx={{ color: "text.primary" }}>
                  {service}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  Know More →
                </Typography>
              </Box>
            ),
          )}
        </Box>
      </Box>
    </Box>
  );
}
