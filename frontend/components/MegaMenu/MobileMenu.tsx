"use client";

import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Tab } from "@/types/megamenu";
import PublicIcon from '@mui/icons-material/Public';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PendingIcon from '@mui/icons-material/Pending';
import PersonIcon from '@mui/icons-material/Person';

type MenuType = "study-abroad" | "testprep" | "explore";

type Props = {
  open: boolean;
  onClose: () => void;
  tabs: Tab[];
};

export default function MobileMenu({ open, onClose, tabs }: Props) {
  const [activeMenu, setActiveMenu] = useState<MenuType>("study-abroad");
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
  (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  /* FILTER DATA */
  const filteredTabs = useMemo(() => {
    return tabs
      ?.filter((tab) => tab.menu === activeMenu)
      ?.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }, [tabs, activeMenu]);

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
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box display="flex" height="100vh" width="100vw" sx={{maxWidth: {md: '500px'}}}>

        {/* LEFT RAIL */}
        <Box
            sx={{
                width: {xs: 81, sm: 100},
                background: "#FFF3F8",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 4,
                px: 1,
                gap: 5,
            }}
            >
            {[
                { key: "study-abroad", label: "Study Abroad", icon: <PublicIcon sx={{fontSize: 26}}/> },
                { key: "testprep", label: "Exams", icon: <FactCheckIcon sx={{fontSize: 26}}/> },
                { key: "university", label: "University Partner", icon: <AccountBalanceIcon sx={{fontSize: 26}}/>, link: "/university-partner" },
                { key: "explore", label: "Explore", icon: <PendingIcon sx={{fontSize: 26}} /> },
                { key: "signin", label: "Sign in", icon: <PersonIcon sx={{fontSize: 30}} />, link: "/sign-in" },
            ].map((item) => {
                const content = (
                <Box
                    onClick={() => item.key && setActiveMenu(item.key as MenuType)}
                    sx={{
                    textAlign: "center",
                    cursor: "pointer",
                    color:
                        activeMenu === item.key ? "primary.main" : "gray.600",
                    }}
                >
                    <Box
                    sx={{
                        color:
                        activeMenu === item.key
                            ? "primary.main"
                            : "neutralBlue.300",
                    }}
                    mb={0.5}
                    >
                    {item.icon}
                    </Box>

                    <Typography variant="heading15" component="p" sx={{ lineHeight: "normal", fontWeight: 500, fontSize: {xs: 12, sm: 14} }}>
                        {item.label}
                    </Typography>
                </Box>
                );

                // ✅ if link exists wrap with Link
                return item.link ? (
                <Link key={item.key} href={item.link}>
                    <Box
                        onClick={onClose}
                        sx={{ textAlign: "center", cursor: "pointer" }}
                    >
                        {content}
                    </Box>
                </Link>
                ) : (
                <Box key={item.key}>{content}</Box>
                );
            })}
        </Box>

        {/* RIGHT CONTENT */}
        <Box flex={1} bgcolor="common.white" overflow="auto">

          {/* HEADER */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={2}
            py={1.5}
          >
            <Typography variant="heading14" sx={{color: '#15186C', fontSize: {xs: 16, sm: 18}}} component='p'>
              {activeMenu === "study-abroad" && "Study Abroad"}
              {activeMenu === "testprep" && "Exams"}
              {activeMenu === "explore" && "Explore"}
            </Typography>

            <IconButton onClick={onClose} >
              <CloseIcon sx={{fontSize: 28, color: '#15186C'}}/>
            </IconButton>
          </Box>

          {/* CONTENT */}
          <Box>
            {filteredTabs.map((tab) => {
                const isExplore = activeMenu === "explore";

                if (isExplore) {
                    const isCalculator = tab.title === "Calculators";

                    if (isCalculator) {
                        return (
                        <Accordion
                            key={tab.id}
                            expanded={expanded === String(tab.id)}
                            onChange={handleChange(String(tab.id))}
                            disableGutters
                            elevation={0}
                            sx={{
                            "&.Mui-expanded": {
                                backgroundColor: "#FFEDF4",
                            },
                            "&::before": {
                                backgroundColor: "#E2E2E9",
                                height: "0.5px",
                            },
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    "& .MuiAccordionSummary-expandIconWrapper": {
                                    color: "neutralBlue.300", 
                                    },
                                    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                    color: "primary.main",
                                    },
                                    "&.Mui-expanded": {
                                        color: "primary.main", 
                                    },
                                }}
                            >
                                <Typography fontWeight={500} variant="heading15">
                                    {tab.title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{pt: '2px', height: '180px', overflow: 'scroll', mr: 1, mb: 1 ,
                                "&::-webkit-scrollbar": {
                                    width: "4px",
                                },
                                "&::-webkit-scrollbar-track": {
                                background: "transparent",
                                marginTop: "8px",   
                                marginBottom: "8px", 
                                },
                                "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "#928E8E",
                                borderRadius: "10px",
                                },

                                /* Firefox support */
                                scrollbarWidth: "thin",
                                scrollbarColor: "#928E8E transparent",
                                borderRadius: "10px",
                            }}>
                                {cards.map((card, index) => (
                                    <Link key={index} href={card.link} onClick={onClose}>
                                        <Box sx={{ cursor: "pointer" }} mb={2}>
                                            {/* Title */}
                                            <Typography
                                            variant="heading15"
                                            component="p"
                                            sx={{
                                                fontWeight: 600,
                                                color: "navyBlue.400",
                                                fontSize: 12,
                                                mb: 0.5,
                                            }}
                                            >
                                            {card.title}
                                            </Typography>

                                            {/* Description */}
                                            <Typography variant="heading15" component='p'
                                                sx={{fontSize: '12px',maxWidth: 'max-content', fontWeight: 400, cursor: "pointer"}}>
                                                {card.desc}
                                            </Typography>
                                        </Box>
                                    </Link>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                        );
                    }
                    

                    // ✅ Explore → simple links
                    return (
                        <Link key={tab.id} href={tab.url || "#"} onClick={onClose}>
                            <Box sx={{ px: 2, py: 1.5 }}>
                                <Typography fontWeight={500} variant="heading15" component='p'>{tab.title}</Typography>
                            </Box>
                        </Link>
                    );
                }
                    
                return(
                        <Accordion key={tab.id} expanded={expanded === String(tab.id)} onChange={handleChange(String(tab.id))}  disableGutters elevation={0}
                        sx={{
                            "&.Mui-expanded": {
                                backgroundColor: "#FFEDF4", 
                            },
                            "&::before": {
                                backgroundColor: "#E2E2E9",
                                height: '0.5px'
                            },
                        }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            sx={{
                                "& .MuiAccordionSummary-expandIconWrapper": {
                                color: "neutralBlue.300", 
                                },
                                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                color: "primary.main", // active (pink)
                                },
                                "&.Mui-expanded": {
                                    color: "primary.main", 
                                },
                            }}
                        >
                        <Typography fontWeight={500} variant="heading15" component='p'>
                            {tab.title}
                        </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{pt: '2px', height: '155px', overflow: 'scroll', mr: 1, mb: 1 ,
                            "&::-webkit-scrollbar": {
                                width: "4px",
                            },
                            "&::-webkit-scrollbar-track": {
                            background: "transparent",
                            marginTop: "8px",   
                            marginBottom: "8px", 
                            },
                            "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#928E8E",
                            borderRadius: "10px",
                            },

                            /* Firefox support */
                            scrollbarWidth: "thin",
                            scrollbarColor: "#928E8E transparent",
                            borderRadius: "10px",
                        }}>
                        {tab.sections?.map((section) => (
                            <Box key={section.id} mb={2}>
                            <Typography
                                variant="heading15"
                                component='p'
                                mb={1}
                                sx={{color: 'navyBlue.400', fontSize: '12px', borderBottom: '1px solid #2E3185', maxWidth: 'max-content'}}
                            >
                                {section.title}
                            </Typography>

                            {section.items?.map((item) => (
                                <Link key={item.id} href={item.url || "#"}>
                                <Typography
                                    variant="heading15"
                                    component='p'
                                    mb={1}
                                    sx={{fontSize: '12px',maxWidth: 'max-content', fontWeight: 400, cursor: "pointer"}}
                                >
                                    {item.label}
                                </Typography>
                                </Link>
                            ))}
                            </Box>
                        ))}
                        </AccordionDetails>
                    </Accordion>
                )
            })}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}