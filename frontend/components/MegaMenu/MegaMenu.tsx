"use client";

// import { Box, Container, Typography, Tabs, Tab } from "@mui/material";
// import { useState, useEffect, useMemo } from "react";
// import ChevronRight from "@mui/icons-material/ChevronRight";
// import Link from "next/link";
// import palette from "@/theme/palette";

// type Item = {
//   id: number;
//   label: string;
//   url?: string | null;
//   order: number;
// };

// type Section = {
//   id: number;
//   Title: string;
//   type: "courses" | "universities" | "services";
//   items: Item[];
// };

// type MegaMenuTab = {
//   id: number;
//   Title: string;
//   Slug: string;
//   Order: number;
//   layout: "study" | "testprep" | "explore";
//   menu: {
//     Slug: string;
//   };
//   sections: Section[];
// };

// type MegaMenuProps = {
//   open: boolean;
//   type: string | null;
//   tabs: MegaMenuTab[];
// };

// export default function MegaMenu({ open, type, tabs }: MegaMenuProps) {
//   const [value, setValue] = useState(0);

//   const filteredTabs = useMemo(() => {
//     return (
//       tabs
//         ?.filter((tab) => tab.menu?.Slug === type)
//         ?.slice()
//         ?.sort((a, b) => a.Order - b.Order) || []
//     );
//   }, [tabs, type]);

//   const selectedTab = filteredTabs[value] || filteredTabs[0];

//   useEffect(() => {
//     setValue(0);
//   }, [type]);

//   const getHref = (url?: string | null) =>
//     url ? `/${url.replace(/^\/+/, "")}` : "#";

//   const sortItems = (items?: Item[]) =>
//     [...(items || [])].sort((a, b) => a.order - b.order);

//   const getSection = (type: Section["type"]) =>
//     selectedTab?.sections?.find((s) => s.type === type);

//   //  Reusable item renderer
//   const renderItems = (items?: Item[]) =>
//     sortItems(items)
//       .filter((item) => item.url)
//       .map((item) => (
//         <Link
//           key={item.id}
//           href={getHref(item.url)}
//           style={{ textDecoration: "none" }}
//         >
//           <Typography
//             variant="heading15"
//             sx={{
//               display: "block",
//               py: 1,
//               color: "text.primary",
//               transition: "0.2s",
//               fontWeight: 400,
//               "&:hover": { color: "primary.main" },
//             }}
//           >
//             {item.label}
//           </Typography>
//         </Link>
//       ));

//   const renderSection = (section?: Section) => {
//     if (!section) return null;

//     return (
//       <Box key={section.id} mb={3}>
//         <Typography variant="heading14" fontWeight={600} mb={2} sx={{ color: "text.primary" }}>
//           {section.Title}
//         </Typography>
//         {renderItems(section.items)}
//       </Box>
//     );
//   };

//   if (!open || !selectedTab) return null;

//   const sections = [
//     getSection("courses"),
//     getSection("universities"),
//     getSection("services"),
//   ];

//   return (
//     <Box
//       sx={{
//         position: "absolute",
//         left: 0,
//         top: "100%",
//         width: "100%",
//         bgcolor: "white",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//         borderRadius: "0 0 20px 20px",
//         zIndex: 10,
//       }}
//     >
//       <Container maxWidth="xl" sx={{ p: 0 }}>
//         <Box sx={{ display: "flex", gap: 4 }}>
//           {/* LEFT SIDE */}
//           <Tabs
//             orientation="vertical"
//             value={value}
//             onChange={(e, newValue) => setValue(newValue)}
//             aria-label="Mega menu tabs"
//             sx={{
//               width: 240,
//               borderRight: "1px solid",
//               borderColor: palette.neutralBlue[100],

//               "& .MuiTab-root": {
//                 minHeight: "unset",
//                 textTransform: "none",
//                 fontSize: "14px",
//                 fontFamily: "var(--font-heading)",
//                 px: 3,
//                 py: 2.41,
//                 justifyContent: "space-between",
//                 flexDirection: "row",
//                 transition: "all 0.2s ease",
//               },

//               "& .MuiTab-root:hover": {
//                 backgroundColor: "primary.main",
//                 color: "background.default",
//               },

//               "& .MuiTab-root.Mui-selected": {
//                 color: "background.default",
//                 backgroundColor: "primary.main",
//               },

//               "& .MuiTabs-indicator": {
//                 display: "none",
//               },
//             }}
//           >
//             {filteredTabs.map((tab) => (
//               <Tab
//                 key={tab.id}
//                 label={tab.Title}
//                 icon={<ChevronRight />}
//                 iconPosition="end"
//               />
//             ))}
//           </Tabs>

//           {/* RIGHT SIDE */}
//           <Box sx={{ flex: 1 }}>
//             {sections.map((section) => renderSection(section))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
