"use client";
import { Box, Typography, Button } from "@mui/material";

export default function PartnerSchoolSection() {
  return (
    <div style={{ display: "flex", minHeight: "340px" }}>

      {/* ── Left: pink panel ── */}
      <div
        style={{
          flex: "0 0 42%",
          backgroundColor: "#FDF0F5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 40px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            color: "#E05A9B",
            mb: "28px",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Our Partner School
        </Typography>

        {/* Logo circle — replace src with your actual logo */}
        <div
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            border: "2px solid #e8d0dc",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <Box
            component="img"
            src="/images/partner-school-logo.png"
            alt="Partner School Logo"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = "https://placehold.co/130x130/ffffff/E05A9B?text=Logo";
            }}
            sx={{ width: "80%", height: "80%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* ── Right: image overlay ── */}
      <div
        style={{
          flex: "0 0 58%",
          position: "relative",
          minHeight: "340px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.65))",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 40px" }}>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.55rem",
              lineHeight: 1.45,
              mb: "20px",
            }}
          >
            Explore Opportunities to
            <br />
            Elevate Your Child's Education
            <br />
            at Premier Schools
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#E05A9B",
              color: "#fff",
              textTransform: "none",
              fontWeight: 700,
              borderRadius: "20px",
              px: "28px",
              py: "8px",
              fontSize: "0.82rem",
              "&:hover": { backgroundColor: "#c94d8a" },
            }}
          >
            Get In Touch With Us
          </Button>
        </div>
      </div>
    </div>
  );
}