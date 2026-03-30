import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";

const features = [
  "Vetted applications on MetaApplyApp",
  "Global university tie-ups",
  "Easy-to-access portal",
  "Timely commission payouts",
];

export default function HomeRecruitmentPartner() {
  return (
    <Box sx={{ 
        borderRadius: "24px",
        background: `url('/Home/RecruitmentPartnerHomeBg.webp')`,
        mx: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}>
        <Container>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    alignItems: "center",
                }}
                >
                {/* LEFT CONTENT */}
                <Box>
                    {/* TITLE */}
                    <Typography variant="heading07" component="h2" sx={{lineHeight: "normal"}} mb={4}>
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            Recruitment Partner
                        </Box>
                    </Typography>

                    {/* DESCRIPTION */}
                    <Typography
                        variant="body05"
                        sx={{ color: "text.secondary", mb: 4 }}
                        component='p'
                    >
                        For partners who are committed to student success beyond borders, MetaApply IE brings you a powerful platform to manage, track, and streamline every application with ease, so you can focus on whatmatters most: helping students achieve their study abroad goals.
                    </Typography>

                    {/* FEATURES */}
                    <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: '16px 20px',
                        mb: 8,
                    }}
                    >
                    {features.map((item, index) => (
                        <Box key={index} display="flex" alignItems="center" gap={1}>
                            <Image src='../green-circle-check.svg' height={20} width={20} alt="Check"/>
                            <Typography variant="body05" sx={{ color: "text.secondary" }} component='p'>{item}</Typography>
                        </Box>
                    ))}
                    </Box>

                    {/* BUTTON */}
                    <Button variant="contained" size="large" sx={{minWidth: "272px"}}>
                    Know More
                    </Button>
                </Box>

                {/* RIGHT IMAGE */}
                <Box
                    sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 300, md: 520 },
                    }}
                >
                    <Image
                    src="/Home/businessman.webp" 
                    alt="Recruitment Partner"
                    fill
                    style={{ objectFit: "contain" }}
                    />
                </Box>
            </Box>
        </Container>
    </Box>
    
  );
}