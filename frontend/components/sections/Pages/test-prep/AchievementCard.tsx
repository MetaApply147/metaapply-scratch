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
        width: "424px",
        height: "228px",
        borderRadius: "32px",
        border: `1px solid ${palette.warning?.main || "#F7BE33"}`,
        backgroundColor: palette.common.white,
        boxShadow: "none",
        p: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        boxSizing: "border-box",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#031621",
          lineHeight: "30px",
        }}
      >
        {name}
      </Typography>

      <Box
        sx={{
          width: "384px",
          height: "130px",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg, #FFF9DD 0%, #FEFEFD 50%, #FFF2D0 100%)",
          p: "16px 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#662D90",
              lineHeight: "24px",
            }}
          >
            {title}
          </Typography>

          <Chip
            icon={
              <ArrowUpwardIcon
                sx={{
                  fontSize: 18,
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
              fontSize: "16px",

              "& .MuiChip-label": {
                px: 1,
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                textTransform: "uppercase",
                color: "#554E4E",
                fontWeight: 500,
                lineHeight: "18px",
              }}
            >
              BEFORE
            </Typography>

            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 400,
                color: "#4E4E4E",
                lineHeight: "32px",
              }}
            >
              {beforeValue}
            </Typography>
          </Box>

          {/* Arrow */}
          <ArrowForwardIcon
            sx={{
              fontSize: "21px",
              color: "#5A189A",
            }}
          />

          <Box textAlign="right">
            <Typography
              sx={{
                fontSize: "12px",
                textTransform: "uppercase",
                color: "#554E4E",
                fontWeight: 500,
                lineHeight: "18px",
              }}
            >
              AFTER
            </Typography>

            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#3C0F72",
                lineHeight: "32px",
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