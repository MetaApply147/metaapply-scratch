import { Box, Card, Chip, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import palette from "@/theme/palette";

type AchievementCardProps = {
  name: string;
  title: string;
  beforeValue: string;
  afterValue: string;
  improvement: string;
};

export default function AchievementCard({
  name,
  title,
  beforeValue,
  afterValue,
  improvement,
}: AchievementCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: "360px",
          md: "400px",
          lg: "424px",
        },
        minHeight: { xs: "200px", md: "228px" },
        borderRadius: { xs: "24px", md: "32px" },
        border: `1px solid ${palette.warning?.main || "#F7BE33"}`,
        backgroundColor: palette.common.white,
        boxShadow: "none",
        p: { xs: "18px", md: 3 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, md: "20px" },
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "24px" },
          fontWeight: 600,
          color: "#031621",
          lineHeight: 1.3,
        }}
      >
        {name}
      </Typography>

      <Box
        sx={{
          width: "100%",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg, #FFF9DD 0%, #FEFEFD 50%, #FFF2D0 100%)",
          p: {
            xs: "14px 14px",
            sm: "16px 18px",
            md: "16px 24px",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "14px",
          flex: 1,
        }}
      >
        {/* Top */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 500,
              color: "#662D90",
              lineHeight: "22px",
              flex: 1,
              wordBreak: "break-word",
            }}
          >
            {title}
          </Typography>

          <Chip
            icon={
              <ArrowUpwardIcon
                sx={{
                  fontSize: 16,
                  color: "#fff !important",
                }}
              />
            }
            label={`+${improvement}`}
            sx={{
              backgroundColor: "#3C0F72",
              color: palette.common.white,
              fontWeight: 600,
              borderRadius: "2px",
              height: "28px",
              fontSize: { xs: "13px", md: "16px" },
              flexShrink: 0,

              "& .MuiChip-label": {
                px: 1,
              },
            }}
          />
        </Box>

        {/* Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "11px",
                textTransform: "uppercase",
                color: "#554E4E",
                fontWeight: 500,
              }}
            >
              BEFORE
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                color: "#4E4E4E",
              }}
            >
              {beforeValue}
            </Typography>
          </Box>

          <ArrowForwardIcon
            sx={{
              fontSize: { xs: "18px", md: "21px" },
              color: "#5A189A",
            }}
          />

          <Box textAlign="right">
            <Typography
              sx={{
                fontSize: "11px",
                textTransform: "uppercase",
                color: "#554E4E",
                fontWeight: 500,
              }}
            >
              AFTER
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 700,
                color: "#3C0F72",
              }}
            >
              {afterValue}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}