import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        console.log("BODY:", JSON.stringify(body));
        const { attributes } = body;

        if (!attributes || !Array.isArray(attributes)) {
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        const url = new URL(
            "https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture"
        );
        url.searchParams.set("accessKey", process.env.LEADSQUARED_ACCESS_KEY!);
        url.searchParams.set("secretKey", process.env.LEADSQUARED_SECRET_KEY!);

        const res = await fetch(url.toString(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([
                ...attributes,
                { Attribute: "SearchBy", Value: "Phone" } 
            ]),
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error("LeadSquared raw error:", errorText);
            
            // Parse LSQ error message if JSON
            let errorMessage = "Submission failed";
            try {
                const errorJson = JSON.parse(errorText);
                errorMessage = errorJson.ExceptionMessage || errorJson.Message || errorMessage;
            } catch {
                errorMessage = errorText;
            }
            
            return NextResponse.json({ error: errorMessage }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("[LeadSquared]", err.message);
        return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    }
}