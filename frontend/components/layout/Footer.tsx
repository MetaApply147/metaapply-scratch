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

/* ---------------- TYPES ---------------- */

type FooterLink = {
  id: number;
  name: string;
  url: string;
};

type FooterSection = {
  id: number;
  title: string;
  key?: string;
  links: FooterLink[];
};

type FooterData = {
  sections?: FooterSection[];
  destinations?: {
    title: string;
    items: { id: number; name: string; url: string }[];
  };
};

type FooterProps = {
  footer: FooterData | null;
};

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

const FooterLinkItem = ({ name, url }: { name: string; url: string }) => (
  <Link href={url || "#"} aria-label={name} style={{ width: "max-content", display: "block" }}>
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

const FooterSectionColumn = ({ section }: { section: FooterSection }) => (
  <Box>
    <Typography fontWeight={600} mb={2} component="h6" variant="heading12">
      {section.title}
    </Typography>

    {section.links?.map((link) => (
      <FooterLinkItem key={link.id} name={link.name} url={link.url} />
    ))}
  </Box>
);

const StaticTopLinks = () => (
  <Box>
    {STATIC_TOP_LINKS.map((item) => (
      <FooterLinkItem key={item.name} name={item.name} url={item.url} />
    ))}
  </Box>
);

/* ---------------- HELPERS ---------------- */

const getSection = (sections: FooterSection[] = [], title: string) =>
  sections.find((s) => s.title === title);

const createGroupedSections = (sections: FooterSection[] = []) => [
  [getSection(sections, "TestPrep")],
  [getSection(sections, "Company"), getSection(sections, "Services")],
  [getSection(sections, "Partner With Us"), getSection(sections, "Others")],
  [getSection(sections, "Study Abroad Centres"), getSection(sections, "Calculators")],
];

/* ---------------- MAIN ---------------- */

export default function Footer({ footer }: FooterProps) {
  if (!footer) {
    return (
      <Box p={4} textAlign="center">
        <Typography>Footer not available</Typography>
      </Box>
    );
  }

  const groupedSections = createGroupedSections(footer.sections);
  const destinations = footer.destinations;

  return (
    <Box component="footer" sx={{ color: "#fff", background: "#040437" }}>
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>

          {/* LEFT */}
          <Box
            sx={{
              width: { xs: "100%", md: "29%" },
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
              <Image src="/metaapply_white_logo.svg" alt="MetaApply Logo" width={193} height={62} />
            </Link>

            <Box sx={{ display: "flex", gap: 2.5, mt: 2.2, mb: 3 }}>
              <Link href="#" aria-label="Instagram"><Instagram sx={{ fontSize: 20 }} /></Link>
              <Link href="#" aria-label="LinkedIn"><LinkedIn sx={{ fontSize: 20 }} /></Link>
              <Link href="#" aria-label="Facebook"><Facebook sx={{ fontSize: 20 }} /></Link>
              <Link href="#" aria-label="Twitter"><X sx={{ fontSize: 20 }} /></Link>
              <Link href="#" aria-label="Youtube"><YouTube sx={{ fontSize: 20 }} /></Link>
            </Box>

            <Divider sx={{ borderStyle: "dashed", borderColor: "background.default", borderBottomWidth: "2px", opacity: 0.7, my: 2.5 }} />

            <Typography component="p" variant="body05" fontWeight={600}>
              © {new Date().getFullYear()} All Rights Reserved
            </Typography>

            <Box sx={{ display: "flex", gap: 5, mt: 5.75 }}>
              <Box>
                <Typography fontWeight={600} variant="body06" mb={1.18} component="p">For Students</Typography>
                <Typography fontWeight={700} variant="body06">
                  <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                  <Link href="tel:+919560708184" style={linkStyle}>+91-9560708184</Link>
                </Typography>
              </Box>
              <Box>
                <Typography fontWeight={600} variant="body06" mb={1.18} component="p">For Partner Queries</Typography>
                <Typography fontWeight={700} variant="body06">
                  <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                  <Link href="tel:+918448876123" style={linkStyle}>+91-8448876123</Link>
                </Typography>
              </Box>
            </Box>

            <Box mt={4.25} mb={1.75}>
              <Typography fontWeight={700} variant="body03" mb={1.75} component="p">Head Office</Typography>
              <Typography fontWeight={600} variant="body05">
                MetaApply L.L.C-FZ, Business Center 1, <br />
                M Floor, The Meydan Hotel Nad Al <br />
                Sheba, Dubai, U.A.E.
              </Typography>
              <Box sx={{ display: "flex", gap: 3, mt: 1.5 }}>
                <Typography fontWeight={700} variant="body06">
                  <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                  <Link href="tel:+971562022750" style={linkStyle}>+971-56-202-2750</Link>
                </Typography>
                <Typography fontWeight={700} variant="body06">
                  <EmailIcon sx={{ fontSize: 15, mr: 1 }} />
                  <Link href="mailto:info@metaapply.io" style={linkStyle}>info@metaapply.io</Link>
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ borderStyle: "dashed", borderColor: "#707070", borderBottomWidth: "2px", opacity: 0.5 }} />

            <Box mt={3.5} mb={3.5}>
              <Typography fontWeight={700} variant="body03" mb={1.75} component="p">Global Excellence Centre</Typography>
              <Typography fontWeight={600} variant="body05">
                MAPPLY EDUCATION PRIVATE LIMITED <br />
                3rd Floor, Plot No.- A-67, Sector-64 <br />
                Noida, Gautam Buddh Nagar,<br/>
                Uttar Pradesh- 201301, India
              </Typography>
            </Box>

            <Divider sx={{ borderStyle: "dashed", borderColor: "#707070", borderBottomWidth: "2px", opacity: 0.5 }} />

            <Box mt={3.5}>
              <Typography fontWeight={700} variant="body03" mb={1.75} component="p">IE LATAM Experience Centre</Typography>
              <Typography fontWeight={600} variant="body05">
                Rua Helena, 170 - Vila Olimpia <br />
                Sao Paulo - SP - Brazil
              </Typography>
              <Box sx={{ display: "flex", gap: 3, mt: 1.5 }}>
                <Typography fontWeight={700} variant="body06">
                  <PhoneIcon sx={{ fontSize: 15, mr: 1 }} />
                  <Link href="tel:+971562022750" style={linkStyle}>+971-56-202-2750</Link>
                </Typography>
                <Typography fontWeight={700} variant="body06">
                  <EmailIcon sx={{ fontSize: 15, mr: 1 }} />
                  <Link href="mailto:info@metaapply.io" style={linkStyle}>info@metaapply.io</Link>
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* RIGHT */}
          <Box sx={{ width: { xs: "100%", md: "71%" }, py: 11.2, pl: 10.5 }}>

            {/* DESTINATIONS */}
            {destinations && (
            <Box mb={7.75}>
                <Typography fontWeight={600} mb={2.5} component="p" variant="body03">
                {destinations.title}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2.5px 0px" }}>
                {destinations.items.map((item, index) => (
                    <Box key={item.id} sx={{ display: "flex", alignItems: "center" }}>
                    <Link href={item.url || "#"}>
                        <Typography
                        variant="body06"
                        sx={{ color: palette.gray[200], fontWeight: 600 }}
                        >
                        {item.name}
                        </Typography>
                    </Link>

                    {index !== destinations.items.length - 1 && (
                        <Box
                        sx={{
                            mx: "11px",
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
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: { xs: 4, md: 6 },
                pb: 6,
              }}
            >
              {groupedSections.map((column, colIndex) => (
                <Box key={colIndex} sx={{ display: "flex", flexDirection: "column", gap: 2.25 }}>
                  {colIndex === 0 && <StaticTopLinks />}
                  {column.filter(Boolean).map((section) => (
                    <FooterSectionColumn key={section!.id} section={section!} />
                  ))}
                </Box>
              ))}
            </Box>

            <Divider sx={{ borderStyle: "dashed", borderColor: "#707070", borderBottomWidth: "2px", opacity: 0.5 }} />

            {/* BOTTOM */}
            <Box pt={4} display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
              <Link href="#"><Typography variant="body05">Privacy Policy</Typography></Link>
              <Link href="#"><Typography variant="body05">Terms & Conditions</Typography></Link>
              <Link href="#"><Typography variant="body05">Payment & Refund Policy</Typography></Link>
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}