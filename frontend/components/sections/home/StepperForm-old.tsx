"use client";

import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

type DegreeType = "Diploma" | "Bachelor's" | "Master's" | "PHD";

export default function StepperFormol() {
  const [step, setStep] = useState(1);
  const [selectedDegree, setSelectedDegree] = useState<DegreeType | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const [openCountryDropdown, setOpenCountryDropdown] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const degrees: DegreeType[] = ["Diploma", "Bachelor's", "Master's", "PHD"];

  const courses = [
    "Bachelors in Data Science",
    "Bachelors in Computer Science",
    "Bachelors in Architecture",
    "Bachelors in Design",
    "Bachelors in Agriculture",
    "Bachelors in Science",
    "Bachelors in Engineering",
    "Bachelors in AI/ML",
  ];

  const countries = [
    "UK",
    "USA",
    "Germany",
    "Europe",
    "UAE",
    "Australia",
    "Ireland",
    "France",
    "Canada",
    "Russia",
  ];

  // ================= COMMON SELECT HANDLER =================
  const handleSelect = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (selected.includes(value)) {
      setSelected((prev) => prev.filter((v) => v !== value));
    } else {
      if (selected.length >= 3) return;
      setSelected((prev) => [...prev, value]);
    }
  };

  // ================= STEP 1 =================
  const handleSelectDegree = (degree: DegreeType) => {
    setSelectedDegree(degree);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      setStep(2);
    }, 1000);
  };

  // ================= OUTSIDE CLICK =================
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenCountryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isStep3Done = selectedCountries.length > 0;
  const isMessageVisible =
  showMessage ||
  (step === 2 && selectedCourses.length > 0) ||
  (step === 3 && selectedCountries.length > 0);

  return (
    <Box
      sx={{
        maxWidth: "613px",
        position: "relative",
        backgroundColor: "common.white",
        border: "3px solid transparent",
        background: `linear-gradient(#fff, #fff) padding-box,
          radial-gradient(59.01% 257.44% at 54.19% 36.53%, 
          #FF94C0 0%, #FFCCB4 51.92%, #A0A0FD 88.94%) border-box`,
        borderRadius: isMessageVisible ? '0 0 16px 16px' : '16px',
        boxShadow: `
          0px 2px 20px 0px #D2E3FF,
          0px 6px 60px 0px #FFC4DC4D,
          0px 6px 40px 0px #C6C6C64D
        `,
        p: 3.5,
      }}
    >
      {/* ================= STEPPER ================= */}
      <Box sx={{ position: "relative", mb: 2}}>
        {/* FULL GREY LINE */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            height: 2,
            backgroundColor: "#E5E7EB",
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        />

        {/* GREEN PROGRESS LINE */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            height: 2,
            width: `${((step - 1) / (3 - 1)) * 100}%`,
            backgroundColor: "#15803d",
            transform: "translateY(-50%)",
            zIndex: 1,
            transition: "width 0.3s ease",
          }}
        />

        {/* STEPS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 2,
          }}
        >
          {[1, 2, 3].map((s) => {
            const isCompleted = s < step;
            const isCurrent = s === step;

            return (
              <Box
                key={s}
                sx={{
                  width: 24.8,
                  height: 24.8,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  ...(isCompleted && {
                    backgroundColor: "#15803d",
                    color: "#fff",
                  }),

                  ...(isCurrent && {
                    border: "2px solid #15803d",
                    backgroundColor: "#fff",
                  }),

                  ...(!isCompleted &&
                    !isCurrent && {
                      border: "2px solid #D1D5DB",
                      backgroundColor: "#fff",
                    }),
                }}
              >
                {isCompleted ? (
                  "✓"
                ) : (
                  <Box
                    sx={{
                      width: 7.75,
                      height: 7.75,
                      borderRadius: "50%",
                      backgroundColor: isCurrent ? "#15803d" : "#D1D5DB",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <>
          {showMessage && (
            <Typography variant="heading15" component='div' sx={{ 
                background: "#FFF0CD", 
                color: '#BA7A00',
                borderRadius: '16px 16px 0 0',
                width: 'calc(100% + 6px)',
                position: 'absolute',
                left: '-3px',
                textAlign: 'center',
                p: 0.75,
                top: '-36px',
            }}>
              Perfect👌 Let’s build your path forward.
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
              What degree are you planning to pursue?{" "}
              <span style={{ color: "#EE0004" }}>*</span>
            </Typography>

            <Image src="/home/Degree.svg" alt="degree" height={52} width={52} />
          </Box>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            {degrees.map((degree) => (
              <Button
                key={degree}
                onClick={() => handleSelectDegree(degree)}
                variant="outlined"
                sx={{
                  fontWeight: "500",
                  borderRadius: "12px",
                  px: 3,
                  py: 1.5,
                  textTransform: "none",
                  borderColor:
                    selectedDegree === degree ? "primary.main" : "gray.800",
                  color: selectedDegree === degree ? "common.white" : "gray.800",
                  backgroundColor:
                    selectedDegree === degree ? "primary.main" : "common.white",
                  letterSpacing: "0.48px",
                  transition: "0.3s all",
                  "&:hover": {
                    ...(selectedDegree !== degree && {
                        borderColor: "primary.main",
                        color: "primary.main",
                        backgroundColor: "common.white",
                    }),
                  },
                }}
              >
                {degree}
              </Button>
            ))}
          </Stack>
        </>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
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
                top: '-36px',
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
              sx={{ color: "#161F9B" }}
            >
                <KeyboardBackspaceIcon sx={{fontSize: '18px', color: 'neutralBlue.700', cursor: 'pointer', mr: '5px'}}  onClick={() => setStep(1)}/> 
                Which course are you interested in?{" "}
                <span style={{ color: "#EE0004" }}>(Max 3)*</span>
            </Typography>

            <Image src="/home/Course.svg" alt="degree" height={52} width={52} />
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
                minHeight: 60,
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
                    <Typography variant="heading13" component='span' fontWeight={400}>Choose Courses</Typography>
                    <Box sx={{
                        backgroundColor: '#E6EFFF', borderRadius: '12px', p: '9.5px 8.5px', 
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
      )}

      {/* ================= STEP 3 ================= */}
      {step === 3 && (
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
      )}
    </Box>
  );
}
