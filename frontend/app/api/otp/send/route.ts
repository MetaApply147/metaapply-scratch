import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    const authKey = process.env.MSG91_AUTH_KEY!;
    const templateId = process.env.MSG91_TEMPLATE_ID!;
    const otpExpiry = process.env.MSG91_OTP_EXPIRY || "5";

    const url = `https://control.msg91.com/api/v5/otp?authkey=${authKey}&mobile=91${phone}&template_id=${templateId}&otp_expiry=${otpExpiry}&realTimeResponse=1`;

    const res = await fetch(url, {
      method: "GET",
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data.message || "Failed to send OTP" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}