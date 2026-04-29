import { Box } from "@mui/material";
import InfoCards from "./InfoCards";
import StudyDescription from "./StudyDescription";

type Props = {
  data: any;
  countryName: string;
};

export default function DestinationSections({ data, countryName }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 7.5 }}>
      <Box id="life-in">
        <InfoCards data={data} />
      </Box>

      <Box
        sx={{
          //   background: "linear-gradient(274.23deg, #FFFDF8 3.81%, #FFFFFF 91.32%)",
          background: "red",
          padding: "32px 10px",
        }}
      >
        <Box id="why-study" mb={5}>
          <StudyDescription data={data} countryName={countryName} />
        </Box>

        <Box id="benefits"></Box>
      </Box>

      <Box id="eligibility" sx={{ height: "500px" }}>
        Eligibility Criteria
      </Box>

      <Box id="documents" sx={{ height: "500px" }}>
        Documents
      </Box>
    </Box>
  );
}
