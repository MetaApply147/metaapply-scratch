import { Box, Typography, Container, Divider } from "@mui/material";
import Link from "next/link";
import { FooterData } from "@/types/footer";
import palette from "@/theme/palette";
import Image from "next/image";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

type FooterProps = {
  footer: FooterData | null;
};

/* ---------------- SMALL REUSABLE COMPONENTS ---------------- */

const FooterLinkItem = ({ name, url }: { name: string; url: string }) => (
  <Link href={url || "#"} aria-label={name}>
    <Typography
        variant="body06"
        fontWeight={600}
        sx={{
            color: palette.gray[200],
            mb: 1.75,
            display: "block",
            transition: "0.2s",
            "&:hover": {
            opacity: 1,
            transform: "translateX(2px)",
            },
        }}
    >
      {name}
    </Typography>
  </Link>
);

const FooterSectionColumn = ({ section }: any) => (
  <Box>
    <Typography fontWeight={600} mb={2} component="h6" variant="heading12">
      {section.title}
    </Typography>

    {section.links?.map((link: any) => (
      <FooterLinkItem
        key={link.id}
        name={link.name}
        url={link.url}
      />
    ))}
  </Box>
);

/* ---------------- MAIN FOOTER ---------------- */

export default function Footer({ footer }: FooterProps) {
  if (!footer) {
    return (
      <Box p={4} textAlign="center">
        <Typography>Footer not available</Typography>
      </Box>
    );
  }

  return (
    <Box component="footer" sx={{ color: "#fff", background: "#040437"}}>
      <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Box
            sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            }}
        >

            {/* LEFT */}
            <Box
                sx={{
                    width: { xs: "100%", md: "30%" },
                    position: "relative",
                    zIndex: 0,
                    py: 11.2,
                    pr: 5.25,
                    
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: "-100vw", 
                        right: 0,
                        background: palette.navyBlue[800],
                        zIndex: -1,
                    },
                }}
                >
                <Link href="/">
                    <Image
                        src="/metaapply_white_logo.svg"
                        alt="MetaApply Logo"
                        width={193}
                        height={62}
                    />
                </Link>

                <Box sx={{display: "flex", gap: 2.5, mt: 2.2, mb: 3}}>
                    <Link href="#"><InstagramIcon sx={{fontSize: 20}}/></Link>
                    <Link href="#"><LinkedInIcon sx={{fontSize: 20}}/></Link>
                    <Link href="#"><FacebookIcon sx={{fontSize: 20}}/></Link>
                    <Link href="#"><XIcon sx={{fontSize: 20}}/></Link>
                    <Link href="#"><YouTubeIcon sx={{fontSize: 20}}/></Link>
                </Box>

                <Divider sx={{ borderStyle: 'dashed', borderColor: "background.default", borderBottomWidth: "2px", opacity: 0.7, my: 2.5 }} />

                <Typography component="p" variant="body05" fontWeight={600}>
                    © {new Date().getFullYear()} All Rights Reserved
                </Typography>

                <Box sx={{display: "flex", gap: 5, mt: 5.75}}>
                    <Box>
                        <Typography fontWeight={600} component="p" variant="body06" mb={1.25}>For Students</Typography>
                        <Typography fontWeight={700} component="p" variant="body06">
                            <PhoneIcon sx={{fontSize: 15, mr: 1}}/><Link href="tel: +91-9560708184" style={{textDecoration: "none", opacity: 0.7}}>+91-9560708184</Link>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography fontWeight={600} component="p" variant="body06" mb={1.25}>For Partner Queries</Typography>
                        <Typography fontWeight={700} component="p" variant="body06">
                            <PhoneIcon sx={{fontSize: 15, mr: 1}}/><Link href="tel: +91-8448876123" style={{textDecoration: "none", opacity: 0.7}}>+91-8448876123</Link>
                        </Typography>
                    </Box>
                </Box>

                <Box mt={4.25} mb={1.75}>
                    <Typography fontWeight={700} component="p" variant="body03" mb={1.75}>Head Office</Typography>
                    <Typography fontWeight={600} component="p" variant="body05">MetaApply L.L.C-FZ, Business Center 1, <br/>M Floor, The Meydan Hotel Nad Al <br/>Sheba, Dubai, U.A.E.</Typography>
                    <Box sx={{display: "flex", gap: 3, mt: 1.5}}>
                        <Typography fontWeight={700} component="p" variant="body06" mb={1.75}>
                            <PhoneIcon sx={{fontSize: 15, mr: 1}}/><Link href="tel:+971-56-202-2750" style={{textDecoration: "none", opacity: 0.7}}>+971-56-202-2750</Link>
                        </Typography>
                        <Typography fontWeight={700} component="p" variant="body06" mb={1.75}>
                            <EmailIcon sx={{fontSize: 15, mr: 1}}/><Link href="mailto:info@metaapply.io" style={{textDecoration: "none", opacity: 0.7}}>info@metaapply.io</Link>
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ borderStyle: 'dashed', borderColor: "#707070", borderBottomWidth: "2px", opacity: 0.5 }} />

                <Box mt={3.5} mb={3.5}>
                    <Typography fontWeight={700} component="p" variant="body03" mb={1.75}>Global Excellence Centre</Typography>
                    <Typography fontWeight={600} component="p" variant="body05">MAPPLY EDUCATION PRIVATE LIMITED <br/>3rd Floor, Plot No.- A-67, Sector-64 <br/>Noida, Gautam Buddh Nagar, <br/>Uttar Pradesh- 201301, India</Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed', borderColor: "#707070", borderBottomWidth: "2px", opacity: 0.5 }} />

                <Box mt={3.5}>
                    <Typography fontWeight={700} component="p" variant="body03" mb={1.75}>IE LATAM Experience Centre</Typography>
                    <Typography fontWeight={600} component="p" variant="body05">Rua Helena, 170 - Vila Olimpia <br/>Sao Paulo - SP - Brazil </Typography>
                    <Box sx={{display: "flex", gap: 3, mt: 1.5}}>
                        <Typography fontWeight={700} component="p" variant="body06">
                            <PhoneIcon sx={{fontSize: 15, mr: 1}}/><Link href="tel:+971-56-202-2750" style={{textDecoration: "none", opacity: 0.7}}>+971-56-202-2750</Link>
                        </Typography>
                        <Typography fontWeight={700} component="p" variant="body06">
                            <EmailIcon sx={{fontSize: 15, mr: 1}}/><Link href="mailto:info@metaapply.io" style={{textDecoration: "none", opacity: 0.7}}>info@metaapply.io</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* RIGHT */}
            <Box sx={{ width: { xs: "100%", md: "70%" }, py: 11.2, pl: 10.5 }}>
            
                {/* DESTINATIONS */}
                {footer.destinations && (
                    <Box mb={7.75}>
                        <Typography fontWeight={600} mb={1.5} variant="body03" component="p">
                            {footer.destinations.title}
                        </Typography>

                        <Box
                            sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "2.5px 0px"
                            }}
                        >
                            {footer.destinations.items?.map((item, index) => (
                                <Box key={item.id} sx={{display: "flex", alignItems: "center"}}>
                                    <Link href={item.url || "#"}>
                                        <Typography variant="body06" component="span" sx={{color: palette.gray[200], fontWeight: 600, whiteSpace: "nowrap",}}>{item.name}</Typography>
                                    </Link>
                                    {index !== footer.destinations.items.length - 1 && (
                                    <Box
                                        sx={{
                                        mx: "11px",
                                        height: "16px",
                                        borderRight: `1px solid ${palette.gray[500]}`,
                                        mt: "2px",
                                        }}
                                    />
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                {/* SECTIONS */}
                <Box
                    sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)",
                    },
                    gap: { xs: 3, md: 5 },
                    }}
                >
                    {footer.sections?.map((section) => (
                    <FooterSectionColumn key={section.id} section={section} />
                    ))}
                </Box>

                <Divider sx={{ borderStyle: 'dashed', borderColor: "#707070", borderBottomWidth: "2px", opacity: 0.5 }} />

                {/* BOTTOM */}
                <Box
                    pt={4}
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={3}
                >
                    <Link href="#"><Typography variant="body05" fontWeight={600} sx={{color: "#E2E8F0"}}>Privacy Policy</Typography></Link>
                    <Link href="#"><Typography variant="body05" fontWeight={600} sx={{color: "#E2E8F0"}}>Terms & Conditions</Typography></Link>
                    <Link href="#"><Typography variant="body05" fontWeight={600} sx={{color: "#E2E8F0"}}>Payment & Refund Policy</Typography></Link>
                </Box>

            </Box>
        </Box>
      </Container>
    </Box>
  );
}