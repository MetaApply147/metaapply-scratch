// app/visa-success-calculator/page.tsx

"use client";

import { useState } from "react";

export default function VisaSuccessCalculatorPage() {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState("");
    const [responseText, setResponseText] = useState("");
    const [modalClass, setModalClass] = useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.target);

        const payload = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/visa-calculator", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const response = await res.json();

            if (response.success) {
                const percentage = response.percentage;

                setResult(`${percentage - 5}-${percentage}%`);

                if (percentage >= 75) {
                    setModalClass("good");
                    setResponseText("Congratulations!");
                } else if (percentage > 50 && percentage < 75) {
                    setModalClass("average");
                    setResponseText("You’re Almost There!");
                } else {
                    setModalClass("bad");
                    setResponseText("Don’t Lose Hope!");
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
            <h2 className="pageheading">
                <span>Check how strong is your</span> Visa Score
            </h2>

            <div className="VisaSuccess">
                <div className="visaForm">
                    <form id="visa-calculator-form" onSubmit={handleSubmit}>
                        <div className="form-section personalInfo">
                            <div className="formField">
                                <label>
                                    First Name<sup>*</sup>
                                </label>

                                <input
                                    type="text"
                                    name="student_fname"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>

                            <div className="formField">
                                <label>Last Name</label>

                                <input
                                    type="text"
                                    name="student_lname"
                                    placeholder="Enter your last name"
                                />
                            </div>

                            <div className="formField">
                                <label>
                                    Email ID<sup>*</sup>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="formField">
                                <label>
                                    Phone Number<sup>*</sup>
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className="formField">
                                <label>
                                    City<sup>*</sup>
                                </label>

                                <input
                                    type="text"
                                    name="student_city"
                                    placeholder="Enter your city"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-section nationality">
                            <label className="select_label">
                                <span>Student’s Nationality</span>
                                <sup>*</sup>
                            </label>

                            <div className="selectwrap">
                                <select name="student_country" required>
                                    <option value="">Select your nationality</option>
                                    <option value="India">India</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="SriLanka">Sri Lanka</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-section destinationCountry">
                            <label className="select_label">
                                <span>Destination Country</span>
                                <sup>*</sup>
                            </label>

                            <div className="selectwrap">
                                <select name="country" required>
                                    <option value="">Select your destination</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Canada">Canada</option>
                                    <option value="NewZealand">New Zealand</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="USA">United States of America</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="UAE">UAE</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Singapore">Singapore</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-section ageGroup">
                            <label className="select_label">
                                <span>Age Group</span>
                                <sup>*</sup>
                            </label>

                            <div className="age-card-group radioButton">
                                <label>
                                    <input type="radio" name="age" value="18-22" required />
                                    18-22yrs
                                </label>

                                <label>
                                    <input type="radio" name="age" value="23-28" required />
                                    23-28yrs
                                </label>

                                <label>
                                    <input type="radio" name="age" value="29-34" required />
                                    29-34yrs
                                </label>

                                <label>
                                    <input type="radio" name="age" value="35+" required />
                                    35+yrs
                                </label>
                            </div>
                        </div>

                        <div className="form-section english">
                            <label className="select_label">
                                <span>English Proficiency</span>
                                <sup>*</sup>
                            </label>

                            <div className="selectwrap">
                                <select name="english_level" required>
                                    <option value="">Select your English Level</option>

                                    <option value="Proficient">
                                        Proficient (C2)
                                    </option>

                                    <option value="Advanced">
                                        Advanced (C1)
                                    </option>

                                    <option value="UpperIntermediate">
                                        Upper Intermediate (B2)
                                    </option>

                                    <option value="Intermediate">
                                        Intermediate (B1)
                                    </option>

                                    <option value="Preintermediate">
                                        Pre-intermediate (A2)
                                    </option>

                                    <option value="Elementary">
                                        Elementary (A1)
                                    </option>

                                    <option value="Foundation">
                                        Foundation (Pre-A1)
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="form-section financial">
                            <label className="select_label">
                                <span>Financial Status</span>
                                <sup>*</sup>
                            </label>

                            <div className="selectwrap">
                                <select name="financial_status" required>
                                    <option value="">Select your Family Income</option>

                                    <option value="15000">
                                        Up to 15000 USD
                                    </option>

                                    <option value="12000">
                                        Up to 12000 USD
                                    </option>

                                    <option value="9000">
                                        Below 9000 USD
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="form-section courseD">
                            <label className="select_label">
                                <span>Course</span>
                                <sup>*</sup>
                            </label>

                            <div className="course-card-group radioButton">
                                <label>
                                    <input
                                        type="radio"
                                        name="course"
                                        value="Undergraduate"
                                        required
                                    />
                                    Undergraduate
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="course"
                                        value="Postgraduate"
                                        required
                                    />
                                    Postgraduate
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="course"
                                        value="Diploma"
                                        required
                                    />
                                    Diploma
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-large"
                        >
                            {loading
                                ? "Calculating..."
                                : "Calculate Your Visa Score"}
                        </button>
                    </form>
                </div>
            </div>

            {showModal && (
                <div
                    id="visa-success-modal"
                    className={modalClass}
                >
                    <div className="modal-content">
                        <div className="modal-body">
                            <h2>{responseText}</h2>

                            <div id="visa-success-result">
                                <p>
                                    <strong>{result}</strong>
                                </p>
                            </div>

                            <p className="visascoretext">
                                Your Visa Score*
                            </p>

                            <button
                                className="btn btn-small"
                                onClick={() => setShowModal(false)}
                            >
                                Start Over
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}