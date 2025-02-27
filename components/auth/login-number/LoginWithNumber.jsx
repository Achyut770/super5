"use client";
import PhoneNumberInput from "@/components/common/PhoneNumberInput";
import SentMessageBox from "@/components/common/SentMessageBox";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LoginWithNumber = () => {
  const [phone, setPhone] = useState();
  const [validPhone, setValidPhone] = useState();

  const [otp, setOtp] = useState("");
  const [otpSentMessage, setOtpSentMessage] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [validOtp, setValidOtp] = useState();
  const [error, setError] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [usePassword, setUsePassword] = useState(true);
  const validatePhone = (phone) => {
    return phone && phone.length && phone.length === 10;
  };
  const validateOTP = (otp) => {
    return otp.length === 6;
  };

  const validatePassword = (password) => {
    return password.length > 5;
  };

  useEffect(() => {
    if (validatePassword(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [password]);
  useEffect(() => {
    if (validatePhone(phone)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  }, [phone]);

  useEffect(() => {
    if (validateOTP(otp)) {
      setValidOtp(true);
    } else {
      setValidOtp(false);
    }
  }, [otp]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePhone(phone)) {
      setError("");
      setShowOtpInput(true);
      setOtpSentMessage(true);
      setTimeout(() => {
        setOtpSentMessage(false);
      }, 3000);
      // Handle form submission (e.g., send email to the server)
      console.log("Form submitted:", phone);
    } else {
      setShowOtpInput(false);
      alert("Please enter a valid phone number");
      setError("Please enter a valid email address.");
    }
  };
  return (
    <>
      <div className="flex mt-4 flex-col gap-5">
        <form onSubmit={handleSubmit}>
          <PhoneNumberInput signup={false} phone={phone} setPhone={setPhone}>
            {!usePassword && (
              <button
                disabled={!validPhone}
                type="submit"
                className={`${
                  validPhone ? "bg-primary" : "bg-[#FFBEA9]"
                } absolute z-[2] top-0 right-0 text-[12px] px-4 py-2 text-white rounded-lg flex items-center justify-center`}
              >
                Send OTP
              </button>
            )}
          </PhoneNumberInput>
        </form>

        {usePassword && (
          <div class="form-input relative">
            <input
              className="relative z-[1]"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              id="login-email-password"
            />
            <label
              className="text-thamarblack pointer-events-none relative z-[1] font-medium"
              for="login-email-password"
            >
              Password
            </label>
          </div>
        )}
        {showOtpInput && !usePassword && (
          <div class="form-input relative">
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="number"
              placeholder=""
              id="otp"
            />
            <label className="text-thamarblack font-medium" for="otp">
              Enter OTP
            </label>
          </div>
        )}
        {usePassword && (
          <button
            disabled={!passwordValid || !validPhone}
            className={`${
              passwordValid && validPhone ? "bg-primary " : "bg-[#FFBEA9]"
            } w-full py-3 text-white rounded-lg`}
          >
            Continue
          </button>
        )}

        {!usePassword && (
          <button
            disabled={!validOtp || !validPhone}
            className={`${
              validOtp && validPhone ? "bg-primary " : "bg-[#FFBEA9]"
            } w-full py-3 text-white rounded-lg`}
          >
            Continue
          </button>
        )}

        <div className="flex justify-between">
          <button
            onClick={() => setUsePassword(!usePassword)}
            className="text-[#acacac] underline font-bold text-[12px]"
          >
            {usePassword ? "Use OTP" : "Use Password"}
          </button>
          <Link
            href="/login/email"
            className="text-[#acacac] underline font-bold text-[12px]"
          >
            Use email to login
          </Link>
        </div>
        <p className="text-center text-[#787878] text-[13px]">
          By clicking continue, You are agreed to our terms and condition and
          privacy policy
        </p>
      </div>
      {otpSentMessage && <SentMessageBox />}
    </>
  );
};

export default LoginWithNumber;
