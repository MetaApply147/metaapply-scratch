"use client";

import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MegaMenu from "./MegaMenu";
import { useState, useRef, useEffect } from "react";

type Menu = {
  id: number;
  Title: string;
  Slug: string;
  Type: string;
  Link?: string;
}

type HeaderProps = {
  menus: Menu[];
};

export default function Header({ menus }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "white" }} ref={headerRef}>
      <Container maxWidth="xl" sx={{position: "relative"}}>
        <Toolbar sx={{ justifyContent: "space-between", py: 4 }} disableGutters>
          <Box>
            <Link href="/">
              <Image src="/Header/mie-logo.svg" alt="MetaApply Logo" width={193} height={62}></Image>
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3 }}>
              <Button variant="outlined" color="primary">Book 1:1 Counselling</Button>
              {menus?.map((menu) => {
                const isActive = activeMenu === menu.Slug;
                return(
                  <Box key={menu.id} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                    onClick={() => setActiveMenu(isActive ? null : menu.Slug)}
                  >
                    <Link href={`/${menu.Slug}`} style={{ textDecoration: "none" }}>
                      <Typography variant="heading14" sx={{ fontWeight: 500, color: isActive ? "primary.main" : "text.primary", cursor: "pointer" }}>
                        {menu.Title}
                      </Typography>
                    </Link>
                    {menu.Type === "mega" && (
                      <ExpandMoreIcon onClick={(e) => { e.stopPropagation(); setActiveMenu(isActive ? null : menu.Slug);}} sx={{ fontSize: 25, pb: "1px", color: isActive ? "primary.main" : "text.primary", transform: isActive ? "rotate(180deg)" : "rotate(0deg)", cursor: "pointer", transition: "0.3s"}} />
                    )}
                  </Box>
                )
              })}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
              <Button variant="outlined" color="secondary" size="small">EN</Button>
              <Button variant="outlined" color="primary" size="small">Sign In</Button>
            </Box>
          </Box>
        </Toolbar>
        <MegaMenu open={menus?.some(m => m.Slug === activeMenu && m.Type === "mega")} type={activeMenu}/>
      </Container>
    </AppBar>
  );
}