import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        console.log("BODY:", JSON.stringify(body));
        const { attributes, recaptchaToken } = body;

        if (!attributes || !Array.isArray(attributes)) {
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }
        //  Verify reCAPTCHA token with Google before doing anything
        if (!recaptchaToken) {
            return NextResponse.json(
                { error: "reCAPTCHA token missing." },
                { status: 400 }
            );
        }

        const recaptchaRes = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            }
        );
        const recaptchaData = await recaptchaRes.json();

        if (!recaptchaData.success) {
            console.error("reCAPTCHA failed:", recaptchaData["error-codes"]);
            return NextResponse.json(
                { error: "reCAPTCHA verification failed. Please try again." },
                { status: 400 }
            );
        }
        
        const accessKey = process.env.LEADSQUARED_ACCESS_KEY;
        const secretKey = process.env.LEADSQUARED_SECRET_KEY;

        if (!accessKey || !secretKey) {
            console.error("Missing LeadSquared env variables");
            return NextResponse.json(
                { error: "Server config error" },
                { status: 500 }
            );
        }

        const url = new URL(
            "https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture"
        );
        url.searchParams.set("accessKey", accessKey);
        url.searchParams.set("secretKey", secretKey);

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