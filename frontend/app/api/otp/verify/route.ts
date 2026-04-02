import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { phone, otp } = await req.json();

    if (!phone || !otp) {
      return NextResponse.json(
        { error: "Phone and OTP required" },
        { status: 400 }
      );
    }

    const authKey = process.env.MSG91_AUTH_KEY!;

    const url = `https://control.msg91.com/api/v5/otp/verify?authkey=${authKey}&mobile=91${phone}&otp=${otp}`;

    const res = await fetch(url, {
      method: "GET",
    });

    const data = await res.json();

    if (!res.ok || data.type !== "success") {
      return NextResponse.json(
        { success: false, error: "Invalid OTP" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}   