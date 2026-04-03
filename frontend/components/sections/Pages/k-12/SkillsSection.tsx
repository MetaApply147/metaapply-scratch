"use client";
import { Box, Typography } from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import TheaterComedyOutlinedIcon from "@mui/icons-material/TheaterComedyOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";

const skills = [
  { label: "Innovation\nManagement",      Icon: EmojiObjectsOutlinedIcon },
  { label: "AI-Enhanced\nLearning",       Icon: PsychologyOutlinedIcon },
  { label: "Drills\n& Yoga",             Icon: SelfImprovementOutlinedIcon },
  { label: "Music\n& Dance",             Icon: MusicNoteOutlinedIcon },
  { label: "Digital\nLiteracy",          Icon: ComputerOutlinedIcon },
  { label: "Tinkering\nLab",             Icon: BuildOutlinedIcon },
  { label: "General\nScience Lab",       Icon: ScienceOutlinedIcon },
  { label: "Drama\nArts & Crafts",       Icon: TheaterComedyOutlinedIcon },
  { label: "Global & Cultural\nAwareness", Icon: PublicOutlinedIcon },
  { label: "Sports\n& Athletics",        Icon: SportsSoccerOutlinedIcon },
];

export default function SkillsSection() {
  return (
    <Box sx={{ backgroundColor: "#0F1929", py: "64px" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: "16px", md: "24px" } }}>

        <Typography
          align="center"
          sx={{ color: "#fff", fontWeight: 700, mb: "40px", fontSize: "1.75rem" }}
        >
          21
          <Box component="sup" sx={{ fontSize: "0.55em", verticalAlign: "super" }}>st</Box>
          {" "}Century Skills Education
        </Typography>

        {/* 5-column CSS grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "16px",
          }}
        >
          {skills.map(({ label, Icon }, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
                padding: "20px 12px",
                textAlign: "center",
                backgroundColor: "rgba(255,255,255,0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                minHeight: "105px",
                boxSizing: "border-box",
                transition: "background 0.25s",
                cursor: "default",
              }}
            >
              <Icon sx={{ fontSize: "30px", color: "#7EC8E3" }} />
              <Typography
                sx={{
                  color: "#e0e0e0",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                  textAlign: "center",
                }}
              >
                {label}
              </Typography>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
}