import { useState } from "react";

export const useOtp = () => {
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendOtp = async (phone: string) => {
    if (!phone || phone.length !== 10) {
      setError("Enter valid 10-digit number");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/otp/send", {
        method: "POST",
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setOtpSent(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (phone: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/otp/verify", {
        method: "POST",
        body: JSON.stringify({ phone, otp }),
      });

      const data = await res.json();

      if (!data.success) throw new Error("Invalid OTP");

      setOtpVerified(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async (phone: string) => {
    return sendOtp(phone); //  reuse
  };

  const resetOtp = () => {
    setOtp("");
    setOtpSent(false);
    setOtpVerified(false);
    setError(null);
  };

  return {
    otp,
    setOtp,
    otpSent,
    otpVerified,
    loading,
    error,
    sendOtp,
    verifyOtp,
    resendOtp,
    resetOtp,
  };
};