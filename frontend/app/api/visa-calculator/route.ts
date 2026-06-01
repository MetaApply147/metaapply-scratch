import { NextResponse } from "next/server";

import {
    destinationCountryAgeWeights,
    financialWeights,
    englishWeights,
    studentCountryWeights,
} from "@/components/sections/Pages/visa-calculator/scoreConfig";

export async function POST(req: Request) {
    const data = await req.json();

    const destinationCountryAgeWeight =
        destinationCountryAgeWeights[
            data.country
        ]?.[data.age] ?? 0;

    const financialWeight =
        financialWeights[
            data.financial_status
        ] ?? 0;

    const englishWeight =
        englishWeights[
            data.english_level
        ] ?? 0;

    const studentCountryWeight =
        studentCountryWeights[
            data.student_country
        ]?.[data.country] ??
        studentCountryWeights["Other"]?.[
            data.country
        ] ??
        0;

    const visaSuccessPercentage =
        destinationCountryAgeWeight *
        financialWeight *
        englishWeight *
        studentCountryWeight *
        100;

    const minPercentage = Math.round(
        visaSuccessPercentage
    );

    const maxPercentage = Math.round(
        visaSuccessPercentage + 5
    );

    return NextResponse.json({
        success: true,
        minPercentage,
        maxPercentage,
    });
}