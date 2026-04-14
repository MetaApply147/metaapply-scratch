import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import { relative } from "path";

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
        mx: {xs: '16px',md:4},
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        px: {xs: 1, sm: 2 ,md: 0},
        pt: {xs: 3 ,md: 0}
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
                    <Typography variant="heading07" component="h2" sx={{lineHeight: "normal"}} mb={{xs: 3,lg: 4}}>
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            Recruitment Partner
                        </Box>
                    </Typography>

                    {/* DESCRIPTION */}
                    <Typography
                        variant="body05"
                        sx={{ color: "text.secondary", mb: 4, fontSize: {xs: 14,sm: 16,lg: 16} }}
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
                        mb: {xs: 4,sm: 6, lg: 8},
                    }}
                    >
                    {features.map((item, index) => (
                        <Box key={index} display="flex" alignItems="start" gap={1}>
                            <Box sx={{height: {xs: 18, sm: 20}, width: {xs: 18, sm: 20}, position: 'relative'}}>
                                <Image src='../green-circle-check.svg' fill alt="Check" style={{objectFit: 'cover'}}/>
                            </Box>
                            <Typography variant="body05" sx={{ color: "text.secondary", fontSize: {xs: 14,md: 14,lg: 16}, objectPosition: 'bottom' }} component='p'>{item}</Typography>
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
                    height: { xs: 280, sm: 450, md: 520 },
                    }}
                >
                    <Image
                    src="/Home/businessman.webp" 
                    alt="Recruitment Partner"
                    fill
                    style={{ objectFit: "contain", objectPosition: 'bottom' }}
                    />
                </Box>
            </Box>
        </Container>
    </Box>
    
  );
}