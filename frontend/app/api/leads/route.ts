import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log("🔥 LEADS ROUTE HIT");
    try {
        const body = await req.json();
        console.log("🔥 BODY:", JSON.stringify(body));
        console.log("🔥 Keys:", process.env.LEADSQUARED_ACCESS_KEY, process.env.LEADSQUARED_SECRET_KEY);
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
            body: JSON.stringify(attributes),
        });

        if (!res.ok) {
            const error = await res.text();
            throw new Error(`LeadSquared error: ${error}`);
        }

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("[LeadSquared]", err.message);
        return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    }
}