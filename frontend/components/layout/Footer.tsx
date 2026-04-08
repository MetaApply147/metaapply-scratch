"use client";

import { Box, Typography, Container, Divider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import palette from "@/theme/palette";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Instagram,
  LinkedIn,
  Facebook,
  X,
  YouTube,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FooterData, FooterSection } from "@/types/footer";
import { useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";

/* ---------------- CONSTANTS ---------------- */

const linkStyle = {
  textDecoration: "none",
  opacity: 0.7,
};

const STATIC_TOP_LINKS = [
  { name: "Career Counselling", url: "#" },
  { name: "Be a Doctor", url: "#" },
  { name: "Premium Counselling", url: "#" },
];


/* ---------------- SMALL COMPONENTS ---------------- */
const AccordionFooter = ({ groupedSections }: any) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      {groupedSections.map((column: any, colIndex: number) => (
        <Box key={colIndex}>
          {colIndex === 0 && (
            <Box mb={{xs: 3, md: 2}}>
              <StaticTopLinks />
            </Box>
          )}

          {column.map((section: any, index: number) => {
            if (!section) return null;

            const isLast = index === column.length - 1;

            return (
              <Accordion
                key={section.id}
                expanded={expanded === section.id}
                onChange={handleChange(section.id)} // ✅ NOW WORKS
                disableGutters
                elevation={0}
                sx={{
                  background: "transparent",
                  color: "#fff",
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  sx={{
                    px: 0,
                    py: 1,
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                    },
                  }}
                >
                  <Typography variant="heading14" fontWeight={600} sx={{
                    fontSize: {xs: 14, sm: 16}
                  }}>
                    {section.title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ px: 0, pb: 2, }}>
                  {section.links?.map((link: any) => (
                    <FooterLinkItem
                      key={link.id}
                      name={link.name}
                      url={link.url}
                    />
                  ))}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};

const FooterLinkItem = ({ name, url }: { name: string; url: string }) => (
  <Link href={url || "#"} aria-label={name} style={{ width: "fit-content", display: "block", wordWrap: 'break-word' }}>
    <Typography
      variant="body06"
      fontWeight={600}
      sx={{
        fontSize: {xs: 12, sm: 14},
        color: palette.gray[200],
        mb: {xs: 1, sm: 1.75},
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

const FooterSectionColumn = ({ section }: { section?: FooterSection }) => {
  if (!section) return null;

  return (
    <Box>
      <Typography fontWeight={600} mb={2} component="h6" variant="heading12">
        {section.title}
      </Typography>

      {section.links?.map((link) => (
        <FooterLinkItem key={link.id} name={link.name} url={link.url} />
      ))}
    </Box>
  );
};

const StaticTopLinks = () => (
  <Box>
    {STATIC_TOP_LINKS.map((item) => (
      <FooterLinkItem key={item.name} name={item.name} url={item.url} />
    ))}
  </Box>
);

/* ---------------- HELPERS ---------------- */
const footerDownLg = (styles: any) => (theme: any) => ({
  [theme.breakpoints.down("lg")]: styles,
});

const footerDownSm = (styles: any) => (theme: any) => ({
  [theme.breakpoints.down("sm")]: styles,
});

// ✅ PRODUCTION SAFE (key + fallback title)
const getSection = (sections: FooterSection[] = [], key: string, title: string) =>
  sections.find(
    (s) =>
      (s.key && s.key === key) ||
      s.title.toLowerCase().replace(/\s/g, "") === title
  );

const createGroupedSections = (sections: FooterSection[] = []) => [
  [getSection(sections, "testprep", "testprep")],
  [getSection(sections, "company", "company"), getSection(sections, "services", "services")],
  [getSection(sections, "partner", "partnerwithus"), getSection(sections, "others", "others")],
  [getSection(sections, "centres", "studyabroadcentres"), getSection(sections, "calculators", "calculators")],
];

/* ---------------- MAIN ---------------- */

export default function Footer({ footer }: { footer: FooterData | null }) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  // ✅ SAFETY (no crashes)
  const sections = footer?.sections || [];
  const destinations = footer?.destinations;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const groupedSections = createGroupedSections(sections);

  // ✅ Debug (safe)
  if (!footer) {
    console.warn("Footer data missing");
  }

  return (
    <Box component="footer" sx={{ color: "#fff", background: "#040437", overflow: 'hidden' }}>
      <Container maxWidth="xl" sx={{ position: "relative", px: {xs: 0, md: '16px'} }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>

          {/* ================= LEFT (STATIC — UNCHANGED) ================= */}
          <Box
            sx={{
              width: { xs: "100%", md: "38%", lg: '30%' },
              position: "relative",
              zIndex: 0,
              pr: { xs: 2, sm: 3, md: 5, lg: 5.25 },
              py: { xs: 6, sm: 7, md: 11.2 },
              pl: {xs: 2, md: 0},
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: { xs: '-100vw', md: "-100vw" },
                right: { xs: '-100vw', md: "0" },
                background: palette.navyBlue[800],
                zIndex: -1,
              },
            }}
          >
            {/* <Container> */}
                <Link href="/" style={{maxWidth: 'max-content', display: 'block'}}>
                  <Box sx={{ width: { xs: 170, sm: 193 }, height: { xs: 50, sm: 62 }, position: 'relative' }}>
                    <Image
                      src="/metaapply_white_logo.svg"
                      alt="MetaApply Logo"
                      fill
                      style={{ objectFit: 'contain'}}
                    />
                  </Box>
                </Link>

              <Box sx={{ display: "flex", gap: 2.5, mt: 2.2, mb: 3 }}>
                <Link href="#"><Instagram sx={{ fontSize: 20 }} /></Link>
                <Link href="#"><LinkedIn sx={{ fontSize: 20 }} /></Link>
                <Link href="#"><Facebook sx={{ fontSize: 20 }} /></Link>
                <Link href="#"><X sx={{ fontSize: 20 }} /></Link>
                <Link href="#"><YouTube sx={{ fontSize: 20 }} /></Link>
              </Box>

              <Divider sx={{ borderStyle: "dashed", borderColor: "background.default", borderBottomWidth: "2px", opacity: 0.7, my: 2.5 }} />

              <Typography component="p" variant="body05" fontWeight={600} sx={[footerDownLg({ fontSize: "14px" }), footerDownSm({ fontSize: '12px' })]}>
                © {new Date().getFullYear()} All Rights Reserved
              </Typography>

              <Box sx={{ display: "flex",flexDirection: { xs: "column", sm: "row" }, gap: { xs: 3, sm: 5 }, mt: { xs: 4, sm: 5.75 }}}>
                <Box>
                  <Typography fontWeight={600} variant="body06" mb={1} component="p">For Students</Typography>
                  <Typography fontWeight={700} variant="body06" sx={footerDownLg({ fontSize: "12px" })}>
                    <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                    <Link href="tel:+919560708184" style={linkStyle}>+91-9560708184</Link>
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600} variant="body06" mb={1} component="p">For Partner Queries</Typography>
                  <Typography fontWeight={700} variant="body06" sx={footerDownLg({ fontSize: "12px" })}>
                    <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                    <Link href="tel:+918448876123" style={linkStyle}>+91-8448876123</Link>
                  </Typography>
                </Box>
              </Box>

              <Box mt={4.25} mb={3.5}>
                <Typography fontWeight={700} variant="body03" mb={{xs: 1, sm: 1.75}} component="p" sx={[footerDownLg({ fontSize: "16px" }), footerDownSm({ fontSize: '14px' })]}>Head Office</Typography>
                <Typography fontWeight={600} variant="body05" sx={[footerDownLg({ fontSize: "14px" }), footerDownSm({ fontSize: '12px' })]}>
                  MetaApply L.L.C-FZ, Business Center 1, <br />
                  M Floor, The Meydan Hotel Nad Al <br />
                  Sheba, Dubai, U.A.E.
                </Typography>
                <Box sx={{ display: "flex", gap: 5, mt: 1.5 }}>
                  <Typography fontWeight={700} variant="body06" sx={footerDownLg({ fontSize: "12px" })}>
                    <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                    <Link href="tel:+919560708184" style={linkStyle}>+91-9560708184</Link>
                  </Typography>
                  <Typography fontWeight={700} variant="body06" sx={footerDownLg({ fontSize: "12px" })}>
                    <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                    <Link href="tel:+918448876123" style={linkStyle}>+91-8448876123</Link>
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ borderStyle: "dashed", borderColor: "#707070", borderBottomWidth: "2px", opacity: 0.5 }} />

              <Box mt={3.5} mb={3.5}>
                <Typography fontWeight={700} variant="body03" mb={{xs: 1, sm: 1.75}} component="p" sx={[footerDownLg({ fontSize: "16px" }), footerDownSm({ fontSize: '14px' })]}>Global Excellence Centre</Typography>
                <Typography fontWeight={600} variant="body05" sx={[footerDownLg({ fontSize: "14px" }), footerDownSm({ fontSize: '12px' })]}>
                  MAPPLY EDUCATION PRIVATE LIMITED <br />
                  3rd Floor, Plot No.- A-67, Sector-64 <br />
                  Noida, Uttar Pradesh- 201301, India
                </Typography>
              </Box>

              <Divider sx={{ borderStyle: "dashed", borderColor: "#707070", borderBottomWidth: "2px", opacity: 0.5 }} />

              <Box mt={3.5}>
                <Typography fontWeight={700} variant="body03" mb={{xs: 1, sm: 1.75}} component="p" sx={[footerDownLg({ fontSize: "16px" }), footerDownSm({ fontSize: '14px' })]}>IE LATAM Experience Centre</Typography>
                <Typography fontWeight={600} variant="body05" sx={[footerDownLg({ fontSize: "14px" }), footerDownSm({ fontSize: '12px' })]}>
                  Rua Helena, 170 - Vila Olimpia <br />
                  Sao Paulo - SP - Brazil
                </Typography>
                <Box sx={{ display: "flex", gap: 5, mt: 1.5 }}>
                  <Typography fontWeight={700} variant="body06" sx={footerDownLg({ fontSize: "12px" })}>
                    <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                    <Link href="tel:+919560708184" style={linkStyle}>+91-9560708184</Link>
                  </Typography>
                  <Typography fontWeight={700} variant="body06" sx={footerDownLg({ fontSize: "12px" })}>
                    <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                    <Link href="tel:+918448876123" style={linkStyle}>+91-8448876123</Link>
                  </Typography>
                </Box>
              </Box>
            {/* </Container> */}
          </Box>

          {/* ================= RIGHT (DYNAMIC SAFE) ================= */}
          <Box sx={{ width: { xs: "100%", md: "62%", lg: '70%' }, px: { xs: 2, sm: 3, md: 0 }, py: { xs: 4, sm: 7, md: 10 }, pl: { md: 6, lg: 8 },}}>

            {/* DESTINATIONS */}
            {(destinations?.items?.length ?? 0) > 0 && (
              <Box mb={{xs: 5, md: 7.75}}>
                <Typography fontWeight={600} mb={{xs: 1.8, sm: 2.2}} variant="body03" component="p">
                  {destinations?.title}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2.5px 0px" }}>
                  {destinations?.items?.map((item, index) => (
                    <Box key={item.id} sx={{ display: "flex", alignItems: "center" }}>
                      <Link href={item.url || "#"}>
                        <Typography
                          variant="body06"
                          sx={{ color: palette.gray[200], fontWeight: 600 }}
                        >
                          {item.name}
                        </Typography>
                      </Link>

                      {index !== (destinations?.items?.length ?? 0) - 1 && (
                        <Box
                          sx={{
                            mx: {xs: '11px', sm: '11px'},
                            height: "16px",
                            borderRight: `1px solid ${palette.gray[500]}`,
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* SECTIONS */}
            {isMobile ? (
              <AccordionFooter groupedSections={groupedSections} />
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                  },
                  gap: { md: 4, lg: 6 },
                  pb: 6,
                }}
              >
                {groupedSections.map((column, colIndex) => (
                  <Box key={colIndex} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {colIndex === 0 && <StaticTopLinks />}
                    {column.map((section) => (
                      <FooterSectionColumn key={section?.id} section={section} />
                    ))}
                  </Box>
                ))}
              </Box>
            )}

            <Divider sx={{ borderStyle: "dashed", borderColor: "#707070", borderBottomWidth: "2px", opacity: 0.5,  }} />

            <Box sx={{
                pt: 4,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center" },
                gap: { xs: 2, md: 3 },
                textAlign: { xs: "center" },
              }}>
              <Link href="#"><Typography variant="body05" sx={{fontSize: {xs: 14, sm: 16}}}>Privacy Policy</Typography></Link>
              <Link href="#"><Typography variant="body05" sx={{fontSize: {xs: 14, sm: 16}}}>Terms & Conditions</Typography></Link>
              <Link href="#"><Typography variant="body05" sx={{fontSize: {xs: 14, sm: 16}}}>Payment & Refund Policy</Typography></Link>
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}