import { Box, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  items: string[];
};

export default function CheckListContent({ items }: Props) {
  return (
    <>
      {items.map((item: string, index: number) => (
        <Box key={index} display="flex" alignItems="flex-start" mb={2}>
          <Box
            sx={{
              width: 20,
              height: 20,
              position: "relative",
              mr: 1.5,
              mt: "4px",
              flexShrink: 0,
            }}
          >
            <Image
              src="/green-circle-check.svg"
              alt="check"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Typography
            variant="body05"
            component="p"
            sx={{
              color: "text.secondary",
              "& strong": {
                color: "text.primary",
                fontWeight: 600,
              },
            }}
            dangerouslySetInnerHTML={{
              __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        </Box>
      ))}
    </>
  );
}