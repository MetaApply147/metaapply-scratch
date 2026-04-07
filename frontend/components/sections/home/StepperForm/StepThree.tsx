import { Box, Typography, Chip, Stack, Button } from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

type Props = {
  selectedCountries: string[];
  setSelectedCountries: React.Dispatch<React.SetStateAction<string[]>>;
  openCountryDropdown: boolean;
  setOpenCountryDropdown: (val: boolean) => void;
  countryDropdownRef: React.RefObject<HTMLDivElement | null>;
  handleSelect: any;
  setStep: (step: number) => void;
  countries: string[];
  selectedDegree: any;
  selectedCourses: string[];
};

export default function StepThree({
  selectedCountries,
  setSelectedCountries,
  openCountryDropdown,
  setOpenCountryDropdown,
  countryDropdownRef,
  handleSelect,
  setStep,
  countries,
  selectedDegree,
  selectedCourses

}: Props) {
  return (
    <>
      {selectedCountries.length > 0 && (
            <Typography variant="heading15" component='div'
              sx={{
                background: "#FFF0CD", 
                color: '#BA7A00',
                borderRadius: '16px 16px 0 0',
                width: 'calc(100% + 6px)',
                position: 'absolute',
                left: '-3px',
                textAlign: 'center',
                p: 0.75,
                top: '-36px',
              }}
            >
              We’ve handpicked 15 universities for you.
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
            }}
            mb={2}
          >
            <Typography
              variant="heading12"
              component="h5"
              sx={{ color: "#161F9B" }}
            >
                <KeyboardBackspaceIcon sx={{fontSize: '18px', color: 'neutralBlue.700', cursor: 'pointer', mr: '5px'}} onClick={() => setStep(2)}/> 
                Where do you want to study?{" "}
                <span style={{ color: "#EE0004" }}>(Max 3)*</span>
            </Typography>

            <Image src="/home/Destination.svg" alt="degree" height={52} width={52} />
          </Box>

          <Box ref={countryDropdownRef} sx={{ position: "relative" }}>
            <Box
              onClick={() => setOpenCountryDropdown(!openCountryDropdown)}
              sx={{
                border: "1px solid #A8A7BC",
                borderRadius: "16px",
                pl: 2.5,
                pr: 1.25,
                py: 1,
                minHeight: 60,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
                cursor: "pointer",
                background: "#fff",
              }}
            >
              {selectedCountries.length === 0 ? (
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <Typography variant="heading13" component='span' fontWeight={400}>Choose Destination</Typography>
                    <Box sx={{
                        backgroundColor: '#E6EFFF', borderRadius: '12px', p: '9.5px 8.5px', 
                    }}>
                        <ExpandMoreIcon sx={{color: '#000000', fontSize: '30px'}}/></Box>
                </Box>
              ) : (
                selectedCountries.map((country) => (
                  <Chip
                    key={country}
                    label={country}
                    onDelete={(e) => {
                      e.stopPropagation();
                      handleSelect(
                        country,
                        selectedCountries,
                        setSelectedCountries,
                      );
                    }}
                    sx={{ borderRadius: "20px", backgroundColor: "common.white", border: '1px solid #052F5F29', color: 'gray.800', fontSize: '10.72px', height: '28px' }}
                  />
                ))
              )}
            </Box>

            {openCountryDropdown && (
              <Box
                sx={{
                  position: "absolute",
                  top: "110%",
                  width: "100%",
                  maxHeight: 300,
                  overflowY: "auto",
                  borderRadius: "12px",
                  backgroundColor: "common.white",
                  zIndex: 10,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                  p: 3,
                }}
              >
                <Stack spacing={1.5}>
                  {countries.map((country) => {
                    const isSelected = selectedCountries.includes(country);
                    const isDisabled =
                      selectedCountries.length >= 3 && !isSelected;

                    return (
                      <Box
                        key={country}
                        onClick={() =>
                          !isDisabled &&
                          handleSelect(
                            country,
                            selectedCountries,
                            setSelectedCountries,
                          )
                        }
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          borderRadius: 2,
                          cursor: isDisabled ? "not-allowed" : "pointer",
                          opacity: isDisabled ? 0.5 : 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            border: "1px solid",
                            borderRadius: "6px",
                            backgroundColor: isSelected ? "blueSelected" : "common.white",
                            borderColor: isSelected ? "blueSelected" : "#A1A1AA",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                            {isSelected && (
                                <CheckIcon
                                sx={{
                                    fontSize: 16,
                                    color: 'common.white', // white icon inside blue box
                                }}
                                />
                            )}
                        </Box>
                        <Typography variant="heading15" component='span' fontWeight={400} sx={{color: '#1C1D1F'}}>{country}</Typography>
                      </Box>
                    );
                  })}
                </Stack>
              </Box>
            )}
          </Box>

          {selectedCountries.length > 0 && (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={3}>
              <Button
                onClick={() => {
                  console.log({
                    degree: selectedDegree,
                    courses: selectedCourses,
                    countries: selectedCountries,
                  });
                }}
                variant="contained"
                fullWidth
                size="large"
                sx={{
                    px: 2,
                    py: 1.5
                }}
              >
                <AutoAwesomeIcon sx={{mr: 1}}/>Find my Universities
              </Button>
            </Box>
          )}
    </>
  );
}