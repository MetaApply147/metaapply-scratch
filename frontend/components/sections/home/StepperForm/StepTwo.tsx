import { Box, Typography, Chip, Stack, Button } from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type Props = {
  selectedCourses: string[];
  setSelectedCourses: React.Dispatch<React.SetStateAction<string[]>>;
  openDropdown: boolean;
  setOpenDropdown: (val: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  handleSelect: any;
  setStep: (step: number) => void;
  courses: string[];
};

export default function StepTwo({
  selectedCourses,
  setSelectedCourses,
  openDropdown,
  setOpenDropdown,
  dropdownRef,
  handleSelect,
  setStep,
  courses,
}: Props) {
  return (
    <>
      {selectedCourses.length > 0 && (
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
                top: {xs: '-33px', sm: '-36px'},
                fontSize: {xs: 12, sm: 14}
              }}
            >
              Great pick(s) 👏You’re one step closer to your goal.
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
              sx={{ color: "#161F9B", fontSize: {xs: 18, md: 20} }}
            >
                <KeyboardBackspaceIcon sx={{fontSize: '18px', color: 'neutralBlue.700', cursor: 'pointer', mr: '5px'}}  onClick={() => setStep(1)}/> 
                Which course are you interested in?{" "}
                <span style={{ color: "#EE0004" }}>(Max 3)*</span>
            </Typography>

            <Image src="/Home/Course.svg" alt="degree" height={52} width={52} />
          </Box>

          <Box ref={dropdownRef} sx={{ position: "relative", mb: 0 }}>
            <Box
              onClick={() => setOpenDropdown(!openDropdown)}
              sx={{
                border: "1px solid #A8A7BC",
                borderRadius: "16px",
                pl: 2.5,
                pr: 1.25,
                py: 1,
                minHeight: {xs: 50, sm: 60},
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
                cursor: "pointer",
                background: "#fff",
              }}
            >
              {selectedCourses.length === 0 ? (
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <Typography variant="heading13" component='span' fontWeight={400} sx={{fontSize: {xs: 16, sm: 18}}}>Choose Courses</Typography>
                    <Box sx={{
                        backgroundColor: '#E6EFFF', borderRadius: '12px', p: {xs: '7.5px 6.5px', sm: '9.5px 8.5px'}, 
                    }}>
                        <ExpandMoreIcon sx={{color: '#000000', fontSize: '30px'}}/></Box>
                </Box>
              ) : (
                selectedCourses.map((course) => (
                  <Chip
                    key={course}
                    label={course}
                    onDelete={(e) => {
                      e.stopPropagation();
                      handleSelect(course, selectedCourses, setSelectedCourses);
                    }}
                    sx={{ borderRadius: "20px", backgroundColor: "common.white", border: '1px solid #052F5F29', color: 'gray.800', fontSize: '10.72px', height: '28px' }}
                  />
                ))
              )}
            </Box>

            {openDropdown && (
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
                  {courses.map((course) => {
                    const isSelected = selectedCourses.includes(course);
                    const isDisabled =
                      selectedCourses.length >= 3 && !isSelected;

                    return (
                      <Box
                        key={course}
                        onClick={() =>
                          !isDisabled &&
                          handleSelect(
                            course,
                            selectedCourses,
                            setSelectedCourses,
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
                        <Typography variant="heading15" component='span' fontWeight={400} sx={{color: '#1C1D1F'}}>{course}</Typography>
                      </Box>
                    );
                  })}
                </Stack>
              </Box>
            )}
          </Box>

          {selectedCourses.length > 0 && (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={3}>
              <Button
                onClick={() => setStep(3)}
                variant="contained"
                size="medium"
                sx={{
                  fontWeight: 500,
                }}

              >
                Next <ChevronRightIcon sx={{fontSize: '20px'}}/>
              </Button>
            </Box>
          )}
    </>
  );
}