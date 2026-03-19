"use client";

import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import MegaMenu from "@/components/MegaMenu/MegaMenu";

type Menu = {
  id: number;
  Title: string;
  Slug: string;
  Type: "mega" | "link";
  Link?: string;
};

export default function Header({ menus, tabs }: any) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  const isMegaOpen = useMemo(() => {
    return menus?.some(
      (menu: Menu) => menu.Slug === activeMenu && menu.Type === "mega"
    );
  }, [menus, activeMenu]);

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "white" }} ref={headerRef}>
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Toolbar sx={{ justifyContent: "space-between", py: 4 }} disableGutters>
          <Box>
            <Link href="/">
              <Image src="/Header/mie-logo.svg" alt="MetaApply Logo" width={193} height={62}></Image>
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3 }}>
              <Button variant="outlined" color="primary">Book 1:1 Counselling</Button>
              {menus?.map((menu: Menu) => {
                const isDropdownOpen = activeMenu === menu.Slug;
                const isActive = pathname === `/${menu.Slug}` || isDropdownOpen;
                const isExplore = !menu.Link || menu.Link === "#";

                return (
                  <Box key={menu.id} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    {isExplore ? (
                      // Explore (NO LINK)
                      <Typography sx={{fontWeight: 500, color: isActive? "primary.main" : "text.primary", cursor: "default",}}>
                        {menu.Title}
                      </Typography>
                    ) : (
                      // Study Abroad / Test Prep (WITH LINK)
                      <Link href={`/${menu.Slug}`} style={{ textDecoration: "none" }}>
                        <Typography
                          sx={{ fontWeight: 500, color: isActive ? "primary.main" : "text.primary", }}>
                          {menu.Title}
                        </Typography>
                      </Link>
                    )}
                    {menu.Type === "mega" && (
                      <ExpandMoreIcon onClick={(e) => { e.stopPropagation(); setActiveMenu(isDropdownOpen ? null : menu.Slug); }} sx={{ fontSize: 25, pb: "1px", color: isDropdownOpen ? "primary.main" : "text.primary", transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", cursor: "pointer", transition: "0.3s" }} />
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
        <MegaMenu open={isMegaOpen} type={activeMenu} tabs={tabs} />
      </Container>
    </AppBar>
  );
}