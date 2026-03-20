"use client";

import { Box, Typography } from "@mui/material";
import { Tab } from "@/types/megamenu";
import Link from "next/link";
import { useRouter } from "next/navigation";

/* ---------------- COMPONENT ---------------- */

export default function ExploreMegaMenu({ tab }: { tab: Tab }) {
  const router = useRouter();

  // Immediate redirect (no flicker)
  if (tab?.type === "link" && tab?.url) {
    router.push(tab.url);
    return null;
  }

  // Only render UI for static
  if (tab?.type !== "static") return null;

  return <CalculatorCards />;
}

/* ---------------- STATIC CARDS ---------------- */

function CalculatorCards() {
  const cards = [
    {
      title: "Budget Calculator",
      desc: "Know the Real Cost Before You Go. A smart calculator to help you budget your entire study abroad journey.",
      link: "/budget",
    },
    {
      title: "Loan Calculator",
      desc: "Don’t Let Finances Hold You Back. See if you’re eligible for a loan and keep your study plans alive.",
      link: "/loan",
    },
    {
      title: "Visa Success Calculator",
      desc: "Know Your Visa Success Potential. An easy way to evaluate your approval likelihood and next steps.",
      link: "/visa",
    },
  ];

  return (
    <Box
      sx={{ padding: "25px 32px", width: "100%" }}
      display="grid"
      gridTemplateColumns={{
        xs: "1fr",
        md: "1fr 1fr 1fr",
      }}
      gap={4}
    >
      {cards.map((card) => (
        <Link key={card.title} href={card.link} passHref style={{display: "inline-block", width: "fit-content",}}>
          <Box
            // component="a"
            sx={{
              cursor: "pointer",
              display: "block",
              width: "auto"
            }}
          >
            <Typography variant="heading14" fontWeight={600} color="text.primary">
              {card.title}
            </Typography>

            <Typography variant="body06" component="p" color="text.primary" mt={2} sx={{maxWidth: "260px"}}>
              {card.desc}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
}