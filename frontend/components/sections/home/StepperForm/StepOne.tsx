"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

type Props = {
  showMessage: boolean;
  selectedDegree: string | null;
  handleSelectDegree: (degree: any) => void;
  degrees: string[];
};

export default function StepOne({
  showMessage,
  selectedDegree,
  handleSelectDegree,
  degrees,
}: Props) {
  return (
    <>
      {showMessage && (
        <Typography
          variant="heading15"
          component="div"
          sx={{
            background: "#FFF0CD",
            color: "#BA7A00",
            borderRadius: "16px 16px 0 0",
            width: "calc(100% + 6px)",
            position: "absolute",
            left: "-3px",
            textAlign: "center",
            p: 0.75,
            top: "-36px",
          }}
        >
          Perfect👌 Let’s build your path forward.
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
        }}
        mb={2}
      >
        <Typography
          variant="heading12"
          component="h5"
          sx={{ color: "#161F9B", fontSize: {xs: 18, md: 20} }}
        >
          What degree are you planning to pursue?{" "}
          <span style={{ color: "#EE0004" }}>*</span>
        </Typography>

        <Image src="/Home/Degree.svg" alt="degree" height={52} width={52} />
      </Box>

      <Stack direction="row" spacing={{xs: 0, sm: 1.5}} gap={{xs: 1.5, sm: 1.5}} flexWrap="wrap">
        {degrees.map((degree) => (
          <Button
            key={degree}
            onClick={() => handleSelectDegree(degree)}
            variant="outlined"
            sx={{
              fontWeight: "500",
              borderRadius: "12px",
              fontSize: {xs: 14, sm: 16},
              px: {xs: 1.5, sm: 1.8},
              minWidth: {xs: '68px', sm: '98px'},
              py: {xs: 1.3, sm: 1.6},
              textTransform: "none",
              borderColor:
                selectedDegree === degree ? "primary.main" : "gray.800",
              color: selectedDegree === degree ? "common.white" : "gray.800",
              backgroundColor:
                selectedDegree === degree ? "primary.main" : "common.white",
              letterSpacing: "0.48px",
              transition: "0.3s all",
              "&:hover": {
                ...(selectedDegree !== degree && {
                  borderColor: "primary.main",
                  color: "primary.main",
                  backgroundColor: "common.white",
                }),
              },
            }}
          >
            {degree}
          </Button>
        ))}
      </Stack>
    </>
  );
}
