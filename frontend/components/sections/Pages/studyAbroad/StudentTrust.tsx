import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";

export default function StudentTrust() {
  return (
    <Box
    component='section'
      sx={{
        position: "relative",
        backgroundColor: "#FBEAFB",
        borderRadius: {xs: '24px',sm: '0 40px 0 40px', md: '0 40px 0 40px', lg: '0 50px 0 50px', xl: '0 80px 0 80px'},
        overflow: "hidden",
        mx: {xs: '16px',md: '30px'},
      }}
    >
      {/* LEFT CONTENT (INSIDE CONTAINER) */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          <Box></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              py: { xs: 6,sm: 7, md: 8, lg: 15 },
              zIndex: 2,
              pl: {xs: 0,md: 0,lg: 2,xl: 12.5},
              textAlign: {xs: 'center', md: 'left'},
              alignItems: {xs: 'center', md: 'start'}
            }}
          >
            <Typography variant="heading06" component="h2" lineHeight={{xs: 1.3, sm: 1.1}} sx={{maxWidth: "90%", fontSize: { xs: '24px',sm: '36px',md: '36px',lg: '42px', xl: '48px'}}}>
              <Box component="span" sx={{ color: "primary.main" }}>
                5000+
              </Box>{" "}
               students have trusted us
            </Typography>

            <Typography
              variant="body05"
              mt={2.5}
              mb={5}
            >
              Advance your career with our expert guidance & global programs.
            </Typography>

            <Button variant="contained" size="large" sx={{ width: "max-content" }}>
              Start your Journey Today
            </Button>
          </Box>
        </Box>
      </Container>

      {/* RIGHT IMAGE (FULL BLEED) */}
      <Box
        sx={{
          position: {xs: "relative",md:"absolute"},
          top: 0,
          left: 0,
          width: { xs: "100%", md: "50%" },
          height: {xs: "240px",sm: "330px", md: "100%"},
        }}
      >
        <Image
          src="/Home/student_with_degree.webp"
          alt="Study Abroad"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "0px",
          }}
        />
      </Box>
    </Box>
  );
}