"use client";

import { useState, useRef } from "react";

import styles from "./visaCalculator.module.css";

import {
    InputField,
    SelectField,
    RadioGroup,
} from "./FormFields";

import {
    nationalityOptions,
    destinationOptions,
    englishOptions,
    financialOptions,
} from "./data";

import VisaResultModal from "./VisaResultModal";
import { Box } from "@mui/material";

export default function VisaCalculatorForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const [modalClass, setModalClass] = useState("");

    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] =
        useState(false);

    const [result, setResult] = useState("");

    const [responseText, setResponseText] =
        useState("");

    const [errors, setErrors] = useState<any>({});

    const handleReset = () => {
        formRef.current?.reset();
        setErrors({});
        setResult("");
        setResponseText("");
        setModalClass("");
        setShowModal(false);
    };

    function validateForm(payload: any) {
        let newErrors: any = {};

        if (!payload.student_fname) {
            newErrors.student_fname =
                "Please fill out this field.";
        }

        if (!payload.email) {
            newErrors.email =
                "Please enter email address.";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                payload.email
            )
        ) {
            newErrors.email =
                "Please enter a valid email address.";
        }

        if (!payload.phone) {
            newErrors.phone =
                "Please enter phone number.";
        } else if (
            !/^[0-9]{7,14}$/.test(payload.phone)
        ) {
            newErrors.phone =
                "Please enter a valid phone number.";
        }

        if (!payload.student_city) {
            newErrors.student_city =
                "Please fill out this field.";
        }

        if (!payload.student_country) {
            newErrors.student_country =
                "Please select student's nationality.";
        }

        if (!payload.country) {
            newErrors.country =
                "Please select destination country.";
        }

        if (!payload.age) {
            newErrors.age =
                "Please select age group.";
        }

        if (!payload.english_level) {
            newErrors.english_level =
                "Please select english proficiency.";
        }

        if (!payload.financial_status) {
            newErrors.financial_status =
                "Please select financial status.";
        }

        if (!payload.course) {
            newErrors.course =
                "Please select course.";
        }

        return newErrors;
    }

    async function handleSubmit(e: any) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const payload = Object.fromEntries(formData);

        const validationErrors =
            validateForm(payload);

        setErrors(validationErrors);

        if (
            Object.keys(validationErrors).length > 0
        ) {
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(
                "/api/visa-calculator",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const response = await res.json();

            if (response.success) {
                const minPercentage =
                    response.minPercentage;

                const maxPercentage =
                    response.maxPercentage;

                setResult(
                    `${minPercentage}-${maxPercentage}%`
                );

                if (maxPercentage >= 75) {
                    setModalClass("good");
                    setResponseText("Congratulations!");
                } else if (
                    maxPercentage > 50 &&
                    maxPercentage < 75
                ) {
                    setModalClass("average");
                    setResponseText("You're Almost There!");
                } else {
                    setModalClass("bad");
                    setResponseText("Don't Lose Hope!");
                }

                setShowModal(true);
            }
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    }

    return (
        <>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={styles.form}
            >
                <Box className={styles.personalGrid}>
                    <InputField
                        label="First Name"
                        name="student_fname"
                        placeholder="Enter your first name"
                        error={
                            errors.student_fname
                        }
                    />

                    <InputField
                        label="Last Name"
                        name="student_lname"
                        placeholder="Enter your last name"
                        isRequired="no"
                    />

                    <InputField
                        label="Email ID"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        error={errors.email}
                        fullWidth
                    />

                    <InputField
                        label="Phone Number"
                        name="phone"
                        placeholder="Enter your phone number"
                        error={errors.phone}
                    />

                    <InputField
                        label="City"
                        name="student_city"
                        placeholder="Enter your city"
                        error={
                            errors.student_city
                        }
                    />
                </Box>

                <SelectField
                    label="Student’s Nationality"
                    placeholder = "Select your nationality"
                    name="student_country"
                    options={nationalityOptions}
                    error={
                        errors.student_country
                    }
                />

                <SelectField
                    label="Destination Country"
                    placeholder="Select your destination"
                    name="country"
                    options={destinationOptions}
                    error={errors.country}
                />

                <RadioGroup
                    label="Age Group"
                    name="age"
                    options={[
                        {
                            label: "18-22yrs",
                            value: "18-22",
                        },
                        {
                            label: "23-28yrs",
                            value: "23-28",
                        },
                        {
                            label: "29-34yrs",
                            value: "29-34",
                        },
                        {
                            label: "35+yrs",
                            value: "35+",
                        },
                    ]}
                    error={errors.age}
                />

                <SelectField
                    label="English Proficiency"
                    placeholder="Select your English Level"
                    name="english_level"
                    options={englishOptions}
                    error={
                        errors.english_level
                    }
                />

                <SelectField
                    label="Financial Status"
                    placeholder="Select your Family Income"
                    name="financial_status"
                    options={financialOptions}
                    error={
                        errors.financial_status
                    }
                />

                <RadioGroup
                    label="Course"
                    name="course"
                    options={[
                        {
                            label: "Undergraduate",
                            value: "Undergraduate",
                        },
                        {
                            label: "Postgraduate",
                            value: "Postgraduate",
                        },
                        {
                            label: "Diploma",
                            value: "Diploma",
                        },
                    ]}
                    error={errors.course}
                />

                <button
                    type="submit"
                    className={styles.submitBtn}
                >
                    {loading
                        ? "Calculating..."
                        : "Calculate Your Visa Score"}
                </button>
            </form>

            <VisaResultModal
                open={showModal}
                modalClass={modalClass}
                result={result}
                responseText={responseText}
                onClose={handleReset}
            />
        </>
    );
}