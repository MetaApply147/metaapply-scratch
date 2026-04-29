"use client";

import { useState } from "react";
import StudyAbroadContent from "./StudyAbroadContent";
import DestinationSections from "./DestinationSections";

type Props = {
  data: any;
  countryName: string;
};

export default function DestinationPageClient({
  data,
  countryName,
}: Props) {
  const [admissionTab, setAdmissionTab] = useState("documents");

  return (
    <StudyAbroadContent
      setAdmissionTab={setAdmissionTab}
      sections={[
        { id: "life-in", label: `Life in ${countryName}` },
        { id: "why-study", label: `Why Study in ${countryName}` },
        { id: "benefits", label: "Benefits" },
        { id: "eligibility", label: "Eligibility Criteria" },
        { id: "documents", label: "Required Documents" },
        { id: "visa", label: "Visa Requirements" },
        { id: "cost-of-study", label: `Cost of Study in ${countryName}` },
        { id: "universities", label: "Top Universities" },
        { id: "scholarships", label: "Scholarships" },
      ]}
    >
      <DestinationSections
        data={data}
        countryName={countryName}
        admissionTab={admissionTab}
        setAdmissionTab={setAdmissionTab}
      />
    </StudyAbroadContent>
  );
}