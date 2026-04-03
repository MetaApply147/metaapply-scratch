"use client";
import Section from "@/components/common/Section";
import DynamicLeadForm from "@/components/forms/DynamicLeadForm";
import { baseFields } from "@/config/forms/base.fields";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
    const schema = {
        formId: "k-12",
        fields: baseFields,
        extraPayload: {
            mx_Program_Products: "",
            mx_Marketing_Pages: ""
        },
    };
  return (
    <Section spacing="lg"
      sx={{
        position: "relative",
        backgroundImage:
          "url('/k12/k12-banner.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        "&::before": {
        //   content: '""',
        //   position: "absolute",
        //   inset: 0,
        //   background:
        //     "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          mx: "auto",
        //   px: { xs: "16px", md: "24px" },
        //   py: "48px",
        }}
      >
        {/* ── Two-column layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "center",
          }}
        >
          {/* ── Left: Headline ── */}
          <div>
            <Typography
              variant="display02"
              component='h1'
              fontWeight={500}
              sx={{
                color: "common.white",
                mb: 3,
              }}
            >
              Experience 
              Premium
              <br />
              <Box component="span" sx={{ color: "#FFAD2B"}}>
                K-12 Education
              </Box>
            </Typography>
            <Typography
             variant="body03"
             component='p'
              sx={{
                color: "common.white",
                maxWidth: "74%",
                lineHeight: 'normal'
              }}
            >
              MetaApply connects your child to premier K-12 schools that foster
              academic excellence and holistic development, ensuring they thrive
              in a global environment.
            </Typography>
          </div>

          {/* ── Right: Enquire Now Form ── */}
          <Box sx={{display: 'flex', justifyContent: 'end'}}>
            <DynamicLeadForm schema={schema} Setwidth={'75%'}/>
          </Box>
        </div>
      </Box>
    </Section>
  );
}
