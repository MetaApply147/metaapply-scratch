"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const steps = [
  {
    title: "Profile\nAssessment",
    icon: "/premium-counselling/definition-search-book.svg",
  },
  {
    title: "University\nShortlisting",
    icon: "/premium-counselling/bank--institution-saving-bank-payment-finance.svg",
  },
  {
    title: "Documents\nAlignment",
    icon: "/premium-counselling/task-list--task-list-work.svg",
  },
  {
    title: "SOP/LOR\nResume Preparation",
    icon: "/premium-counselling/business-user-curriculum.svg",
  },
  {
    title: "Application\nSubmission Report",
    icon: "/premium-counselling/copy-paste--clipboard-copy-cut-paste.svg",
  },
  {
    title: "Offer Acceptance\nGuidance",
    icon: "/premium-counselling/check-square--check-form-validation-checkmark-success-add-addition-box-square-tick.svg",
  },

  // ✅ FIXED VISA TEXT
  {
    title: "Visa\nPreparation & Mock\nInterview",
    icon: "/premium-counselling/group-meeting-call--group-meeting-call-work.svg",
  },

  {
    title: "Pre-Departure\nOrientation",
    icon: "/premium-counselling/airport-plane.svg",
  },
];

export default function CounsellingProcessSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1320px",
          height: "583px",
          borderRadius: "60px",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* MAIN CARD */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "60px",
            overflow: "hidden",
            position: "relative",

            background:
              "linear-gradient(90deg, #8547A1 0%, #320B44 100%)",

            px: "60px",
            pt: "48px",
          }}
        >
          {/* HEADING */}
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
              zIndex: 5,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "48px",
                color: "#FFFFFF",
              }}
            >
              MetaApply Premium Counselling Process
            </Typography>

            <Typography
              sx={{
                mt: "10px",
                fontFamily: "Open Sans",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#FFFFFF",
              }}
            >
              Expertly crafting every step towards elite education.
            </Typography>
          </Box>

          {/* STEPS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              position: "relative",
              mt: "48px",
              zIndex: 5,
            }}
          >
            {/* DASHED LINE */}
            <Box
              sx={{
                position: "absolute",
                top: "42px",
                left: "52px",
                right: "52px",
                borderTop: "1.5px dashed rgba(255,255,255,0.35)",
                zIndex: 0,
              }}
            />

            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  width: "128px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: "84px",
                    height: "84px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.28), rgba(255,255,255,0.08))",

                    backdropFilter: "blur(10px)",

                    border: "1px solid rgba(255,255,255,0.14)",

                    boxShadow:
                      "inset 0 1px 2px rgba(255,255,255,0.22), 0 10px 24px rgba(0,0,0,0.22)",
                  }}
                >
                  <Image
                    src={step.icon}
                    alt=""
                    width={34}
                    height={34}
                  />
                </Box>

                {/* TEXT */}
                <Typography
                  sx={{
                    mt: "14px",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textAlign: "center",
                    whiteSpace: "pre-line",
                    width: "128px",
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* ✅ ONLY PURPLE GLASS PART BLUR */}
          <Box
            sx={{
              position: "absolute",
              bottom: "-35%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "860px",
              height: "420px",
              zIndex: 1,
              opacity: 0.95,
            }}
          >
            {/* BLURRED PURPLE GLASS */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
              }}
            >
              <Image
                src="/premium-counselling/div.integ-graphic_orb-wrapper.svg"
                alt=""
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* ✅ SHARP ORANGE GLOW */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
              }}
            >
              <Image
                src="/premium-counselling/div.integ-graphic_glow.svg"
                alt=""
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* PEOPLE IMAGE */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-82px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "540px",
            height: "300px",
            zIndex: 6,
          }}
        >
          <Image
            src="/premium-counselling/process-img.svg"
            alt="counselling process"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}