"use client";

import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  return (
    <AppBar position="sticky" elevation={0} sx={{backgroundColor: "white"}}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 4 }} disableGutters>
          <Box>
            <Link href="/">
              <Image src="/Header/mie-logo.svg" alt="MetaApply Logo" width={193} height={62}></Image>
            </Link>
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3 }}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3 }}>
              <Button variant="outlined" color="primary">Book 1:1 Counselling</Button>
              {menus?.map((menu)=>(
                <Box key={menu.id}>
                  <Typography variant="heading14" color="text.primary" sx={{fontWeight: 500}}>
                    
                      {menu.Title}
                    
                  </Typography>
                  {menu.Type === "mega" && (
                    <ExpandMoreIcon sx={{ fontSize: 25, color: "text.primary", pb: "1px" }} />
                  )}
                </Box>
              ))}
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", gap: 2}}>
              <Button variant="outlined" color="secondary" size="small">EN</Button>
              <Button variant="outlined" color="primary" size="small">Sign In</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}