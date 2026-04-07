"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import MegaMenu from "@/components/MegaMenu/MegaMenu";
import { Tab } from "@/types/megamenu";

/* ---------------- TYPES ---------------- */

type Menu = {
  id: number;
  Title: string;
  Slug: "study-abroad" | "testprep" | "explore";
  Type: "mega" | "link";
  Link?: string;
};

type HeaderProps = {
  menus: Menu[];
  tabs: Tab[];
};

/* ---------------- COMPONENT ---------------- */

export default function Header({ menus, tabs }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<Menu["Slug"] | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /* ---------------- OUTSIDE CLICK ---------------- */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- DERIVED ---------------- */

  const isMegaOpen = useMemo(() => {
    return menus?.some(
      (menu) => menu.Slug === activeMenu && menu.Type === "mega"
    );
  }, [menus, activeMenu]);

  /* ---------------- HANDLER ---------------- */

  const handleToggleMenu = (menu: Menu) => {
    if (menu.Type !== "mega") return;

    setActiveMenu((prev) =>
      prev === menu.Slug ? null : menu.Slug
    );
  };

  /* ---------------- RENDER ---------------- */

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: "white" }}
      ref={headerRef}
    >
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Toolbar
          sx={{ justifyContent: "space-between", py: 4 }}
          disableGutters
        >
          {/* LOGO */}
          <Box>
            <Link href="/">
              <Image
                src="/Header/mie-logo.svg"
                alt="MetaApply Logo"
                width={193}
                height={62}
              />
            </Link>
          </Box>

          {/* NAV */}
          <Box display="flex" alignItems="center" gap={3}>
            <Button variant="outlined" color="primary">
              Book 1:1 Counselling
            </Button>

            <Box display="flex" alignItems="center" gap={3}>
              {menus?.map((menu) => {
                const isOpen = activeMenu === menu.Slug;
                const isActive =
                  pathname === `/${menu.Slug}` || isOpen;
                const isLink = menu.Type === "link";

                return (
                  <Box
                    key={menu.id}
                    display="flex"
                    alignItems="center"
                    sx={{ cursor: "pointer" }}
                  >
                    {/* TEXT */}
                    {isLink ? (
                      <Link
                        href={`/${menu.Slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 400,
                            color: isActive
                              ? "primary.main"
                              : "text.primary",
                          }}
                        >
                          {menu.Title}
                        </Typography>
                      </Link>
                    ) : (
                      <Typography
                        onClick={() => handleToggleMenu(menu)}
                        sx={{
                          fontWeight: 400,
                          color: isActive
                            ? "primary.main"
                            : "text.primary",
                        }}
                        variant="heading14"
                      >
                        {menu.Title}
                      </Typography>
                    )}

                    {/* ICON */}
                    {menu.Type === "mega" && (
                      <ExpandMoreIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleMenu(menu);
                        }}
                        sx={{
                          fontSize: 22,
                          ml: 0.5,
                          color: isOpen
                            ? "primary.main"
                            : "text.primary",
                          transform: isOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "0.3s",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>

            {/* RIGHT SIDE */}
            <Box display="flex" gap={2}>
              <Button variant="outlined" color="secondary" size="small">
                EN
              </Button>
              <Button variant="outlined" color="primary" size="small">
                Sign In
              </Button>
            </Box>
          </Box>
        </Toolbar>

        {/* MEGA MENU */}
        <MegaMenu open={isMegaOpen} type={activeMenu} tabs={tabs} />
      </Container>
    </AppBar>
  );
}