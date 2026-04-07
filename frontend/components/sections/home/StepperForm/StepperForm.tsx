"use client";

import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

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
    "UK","USA","Germany","Europe","UAE",
    "Australia","Ireland","France","Canada","Russia",
  ];

  const handleSelect = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setSelected((prev) => prev.filter((v) => v !== value));
    } else {
      if (selected.length >= 3) return;
      setSelected((prev) => [...prev, value]);
    }
  };

  const handleSelectDegree = (degree: DegreeType) => {
    setSelectedDegree(degree);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      setStep(2);
    }, 1000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setOpenCountryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      {/* Stepper */}
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
      
      {/* 🔥 KEEP YOUR STEPPER UI HERE EXACTLY (COPY SAME FROM ORIGINAL) */}

      {step === 1 && (
        <StepOne
          showMessage={showMessage}
          selectedDegree={selectedDegree}
          handleSelectDegree={handleSelectDegree}
          degrees={degrees}
        />
      )}

      {step === 2 && (
        <StepTwo
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          dropdownRef={dropdownRef}
          handleSelect={handleSelect}
          setStep={setStep}
          courses={courses}
        />
      )}

      {step === 3 && (
        <StepThree
          selectedCountries={selectedCountries}
          setSelectedCountries={setSelectedCountries}
          openCountryDropdown={openCountryDropdown}
          setOpenCountryDropdown={setOpenCountryDropdown}
          countryDropdownRef={countryDropdownRef}
          handleSelect={handleSelect}
          setStep={setStep}
          countries={countries}
          selectedDegree={selectedDegree}
          selectedCourses={selectedCourses}
        />
      )}
    </Box>
  );
}