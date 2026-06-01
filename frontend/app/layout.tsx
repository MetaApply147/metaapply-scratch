import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Open_Sans, Charmonman  } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import { getServices } from "@/services/httpServices";
import { transformMegaMenu } from "@/components/MegaMenu/utils/helpers";
import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Footer from "@/components/layout/Footer";
import { FooterData } from "@/types/footer";
import ScrollManager from "@/components/common/ScrollManager";


const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const centreHeadingFont = Charmonman({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-centerHeading",
});

export const metadata: Metadata = {
  title: "MetaApply",
  description: "Study Abroad Platform",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const revalidate = 300;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuResponse = await getServices("/menus?sort=Order:asc");
  const menus = menuResponse?.data?.data;

  const tabsResponse = await getServices("/mega-menu-tabs?pagination[pageSize]=100&populate[sections][populate][items]=*&populate=menu&sort=Order:asc");
  const tabs = transformMegaMenu(tabsResponse?.data?.data || []);

  const footerResponse = await getServices("/footers?populate[sections][populate]=links&populate[destinations][populate]=items");
  const footer: FooterData | null = footerResponse?.data?.data?.[0] || null;

  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${headingFont.variable} ${bodyFont.variable} ${centreHeadingFont.variable} antialiased`}
      >
        <ThemeRegistry>
          <ThemeProviderWrapper>
            <ScrollManager />
            <Header menus={menus} tabs={tabs}/>
              <main>{children}</main>
            <Footer footer={footer} />
          </ThemeProviderWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
