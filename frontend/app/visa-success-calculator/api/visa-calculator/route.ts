// app/api/visa-calculator/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const data = await req.json();

    const destinationCountryAgeWeights: any = {
        Australia: {
            "18-22": 0.9,
            "23-28": 0.8,
            "29-34": 0.7,
            "35+": 0.6,
        },

        Canada: {
            "18-22": 0.9,
            "23-28": 0.8,
            "29-34": 0.7,
            "35+": 0.6,
        },

        UK: {
            "18-22": 0.9,
            "23-28": 0.8,
            "29-34": 0.7,
            "35+": 0.6,
        },

        USA: {
            "18-22": 0.9,
            "23-28": 0.8,
            "29-34": 0.7,
            "35+": 0.6,
        },
    };

    const financialWeights: any = {
        "15000": 0.9,
        "12000": 0.75,
        "9000": 0.6,
    };

    const englishWeights: any = {
        Proficient: 0.9,
        Advanced: 0.8,
        UpperIntermediate: 0.65,
        Intermediate: 0.6,
        Preintermediate: 0.55,
        Elementary: 0.5,
        Foundation: 0.5,
    };

    const studentCountryWeights: any = {
        India: {
            Australia: 0.85,
            Canada: 0.8,
            UK: 0.9,
            USA: 0.65,
        },

        Pakistan: {
            Australia: 0.7,
            Canada: 0.7,
            UK: 0.7,
            USA: 0.5,
        },

        Other: {
            Australia: 0.8,
            Canada: 0.8,
            UK: 0.8,
            USA: 0.8,
        },
    };

    const destinationCountryAgeWeight =
        destinationCountryAgeWeights[data.country]?.[
        data.age
        ] ?? 0;

    const financialWeight =
        financialWeights[data.financial_status] ?? 0;

    const englishWeight =
        englishWeights[data.english_level] ?? 0;

    const studentCountryWeight =
        studentCountryWeights[data.student_country]?.[
        data.country
        ] ??
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

    const finalPercentage = Math.round(
        visaSuccessPercentage + 5
    );

    return NextResponse.json({
        success: true,
        percentage: finalPercentage,
    });
}