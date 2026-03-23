import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FooterData } from "@/types/footer";
import palette from "@/theme/palette";

type FooterProps = {
  footer: FooterData | null;
};

/* ---------------- SMALL REUSABLE COMPONENTS ---------------- */

const FooterLinkItem = ({ name, url }: { name: string; url: string }) => (
  <Link href={url || "#"} aria-label={name}>
    <Typography
      sx={{
        fontSize: 13,
        opacity: 0.7,
        mb: 0.6,
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
    <Typography fontWeight={600} mb={1.2}>
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
    <Box component="footer" sx={{ color: "#fff" }}>
      
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
            bgcolor: palette.navyBlue[800],
            pr: { md: 5 },
            borderRight: { md: "1px solid rgba(255,255,255,0.08)" },
            mb: { xs: 5, md: 0 },
          }}
        >
            <Box
                sx={{
                    maxWidth: "420px",
                    ml: "auto",
                    px: { xs: 2, md: 6 },
                    py: { xs: 5, md: 7 },
                    }}
                >
                <Typography variant="h6" fontWeight={700}>
                MetaApply
            </Typography>

            <Typography>
                © {new Date().getFullYear()} All Rights Reserved
            </Typography>

            <Box mt={4}>
                <Typography fontWeight={600}>Head Office</Typography>
                <Typography fontWeight={600}>Dubai, UAE</Typography>
            
            </Box>

            <Box mt={4}>
                <Typography fontWeight={600}>Global Excellence Centre</Typography>
                <Typography>
                Noida, India
                </Typography>
            </Box>
            </Box>
          
        </Box>

        {/* RIGHT */}
        <Box sx={{ width: { xs: "100%", md: "70%" }, bgcolor: "#040437", pl: { md: 5 } }}>
          
          {/* DESTINATIONS */}
          {footer.destinations && (
            <Box mb={4}>
              <Typography fontWeight={600} mb={1.5}>
                {footer.destinations.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px 14px",
                }}
              >
                {footer.destinations.items?.map((item) => (
                  <Link key={item.id} href={item.url || "#"}>
                    <Typography
                      sx={{
                        fontSize: 12,
                        opacity: 0.65,
                        transition: "0.2s",
                        "&:hover": { opacity: 1 },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
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

          {/* BOTTOM */}
          <Box
            mt={6}
            pt={3}
            borderTop="1px dashed rgba(255,255,255,0.15)"
            display="flex"
            flexWrap="wrap"
            gap={3}
          >
            <FooterLinkItem name="Privacy Policy" url="#" />
            <FooterLinkItem name="Terms & Conditions" url="#" />
            <FooterLinkItem name="Payment & Refund Policy" url="#" />
          </Box>

        </Box>
      </Box>
    </Box>
  );
}