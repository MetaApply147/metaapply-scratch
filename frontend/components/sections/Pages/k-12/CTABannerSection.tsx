"use client";
import { Box, Typography, Button } from "@mui/material";

export default function CTABannerSection() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #1C1B3A 0%, #2D1B5E 35%, #4A1878 60%, #6B2090 100%)",
        py: "56px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative circle top-left */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          top: "-100px",
          left: "-100px",
          pointerEvents: "none",
        }}
      />
      {/* Decorative circle bottom-center */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          bottom: "-60px",
          right: "38%",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: "16px", md: "24px" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {/* ── Left ── */}
          <div style={{ flex: "0 0 58%" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "5px 14px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #E91E8C, #FF6B35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Typography sx={{ color: "#fff", fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.5px" }}>
                  MA
                </Typography>
              </div>
              <Typography sx={{ color: "#fff", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.5px" }}>
                DEAR PARENT
              </Typography>
            </div>

            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "2rem",
                lineHeight: 1.35,
                mb: "24px",
              }}
            >
              Your child's future deserves the
              <br />
              right direction. Get clarity today!
            </Typography>

            <Button
              variant="contained"
              disableElevation
              sx={{
                background: "linear-gradient(90deg, #E05A9B 0%, #E8753A 100%)",
                color: "#fff",
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "22px",
                px: "28px",
                py: "10px",
                fontSize: "0.88rem",
                boxShadow: "0 4px 20px rgba(224,90,155,0.35)",
                "&:hover": {
                  background: "linear-gradient(90deg, #c94d8a 0%, #d4622a 100%)",
                },
              }}
            >
              Talk to Our Counsellors Today
            </Button>
          </div>

          {/* ── Right: Illustration ── */}
          <div style={{ flex: "0 0 42%", display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src="https://illustrations.popsy.co/amber/woman-meditating.svg"
              alt="Counsellor illustration"
              sx={{
                width: "100%",
                maxWidth: "300px",
                filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.4))",
              }}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
}