"use client";
import SentMessageBox from "@/components/common/SentMessageBox";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LoginWithEmail = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [validOtp, setValidOtp] = useState();
  const [error, setError] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [usePassword, setUsePassword] = useState(true);
  const [otpSentMessage, setOtpSentMessage] = useState(false);
  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
    if (validateEmail(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email]);
  useEffect(() => {
    if (validateOTP(otp)) {
      setValidOtp(true);
    } else {
      setValidOtp(false);
    }
  }, [otp]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      setShowOtpInput(true);
      setOtpSentMessage(true);
      setTimeout(() => {
        setOtpSentMessage(false);
      }, 3000);
      console.log("Form submitted:", email);
    } else {
      setShowOtpInput(false);
      setError("Please enter a valid email address.");
    }
  };

  return (
    <>
      <div className="flex mt-4 flex-col gap-5">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div class="form-input relative">
            <input
              value={email}
              className="relative z-[1]"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Email address"
              id="login-email"
            />
            <label
              className="text-thamarblack pointer-events-none relative z-[1] font-medium"
              for="login-email"
            >
              Email Address
            </label>
            {!usePassword && (
              <button
                disabled={!emailValid}
                type="submit"
                className={`${
                  emailValid ? "bg-primary" : "bg-[#FFBEA9]"
                } absolute z-[2] top-0 right-0 text-[12px] px-4 py-2 text-white rounded-lg flex items-center justify-center`}
              >
                Send OTP
              </button>
            )}
          </div>
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
            disabled={!passwordValid || !emailValid}
            className={`${
              passwordValid && emailValid ? "bg-primary " : "bg-[#FFBEA9]"
            } w-full py-3 text-white rounded-lg`}
          >
            Continue
          </button>
        )}

        {!usePassword && (
          <button
            disabled={!validOtp || !emailValid}
            className={`${
              validOtp && emailValid ? "bg-primary " : "bg-[#FFBEA9]"
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
            href="/login/number"
            className="text-[#acacac] underline font-bold text-[12px]"
          >
            Use number to login
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

export default LoginWithEmail;
