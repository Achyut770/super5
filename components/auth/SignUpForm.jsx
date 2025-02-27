"use client";

import React, { useEffect, useState } from "react";
import { DeleteIcon } from "../common/Icons";
import PhoneNumberInput from "../common/PhoneNumberInput";
import SentMessageBox from "../common/SentMessageBox";

const SignUpForm = () => {
  const [phone, setPhone] = useState();
  const [otp, setOtp] = useState("");
  const [validOtp, setValidOtp] = useState();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [validPhone, setValidPhone] = useState();
  const [showReferCodeInput, setShowReferCodeInput] = useState(false);
  const [otpSentMessage, setOtpSentMessage] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleGetOtpClick = () => {
    setShowOtpInput(true);
    setOtpSentMessage(true);
    setTimeout(() => {
      setOtpSentMessage(false);
    }, 3000);
  };

  const handleReferCodeClick = () => {
    setShowReferCodeInput(true);
  };
  const validatePhone = (phone) => {
    return phone && phone.length && phone.length === 10;
  };
  const validateOTP = (otp) => {
    return otp.length === 6;
  };

  useEffect(() => {
    if (validateOTP(otp)) {
      setValidOtp(true);
    } else {
      setValidOtp(false);
    }
  }, [otp]);

  useEffect(() => {
    if (validatePhone(phone)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  }, [phone]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      // Add your form submission logic here
      // alert("Passwords match!");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-[390px] mt-8 overflow-hidden min-w-full rounded-[20px] relative bg-white shadow-c2 w-full"
      >
        <h3 className="text-[18px] bg-[#ffbea9]  py-[15px] font-bold text-thamarblack text-center">
          Signup for Super5
        </h3>
        <div className="px-4 pb-8">
          <div className="flex mt-4 flex-col gap-4">
            <div class="form-input relative">
              <input
                className="relative z-[1]"
                type="text"
                required
                placeholder="Name"
                id="name"
              />
              <label
                className="text-thamarblack pointer-events-none relative z-[1] font-medium"
                for="name"
              >
                Name
              </label>
            </div>

            <div class="form-input relative">
              <input
                className="relative z-[1]"
                type="email"
                required
                placeholder="Email address"
                id="signin-email"
              />
              <label
                className="text-thamarblack pointer-events-none relative z-[1] font-medium"
                for="signin-email"
              >
                Email Address
              </label>
            </div>
            <div class="form-input relative">
              <input
                className="relative z-[1]"
                type="password"
                required
                placeholder="Password"
                value={password}
                id="signin-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="text-thamarblack pointer-events-none relative z-[1] font-medium"
                for="signin-password"
              >
                Password
              </label>
            </div>
            <div class="form-input relative">
              <input
                className="relative z-[1]"
                type="password"
                required
                placeholder="Password"
                id="signin-confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label
                className="text-thamarblack pointer-events-none relative z-[1] font-medium"
                for="signin-confirm-password"
              >
                Confirm Password
              </label>
            </div>
            <PhoneNumberInput signup={true} phone={phone} setPhone={setPhone}>
              <button
                disabled={!validPhone}
                type="button"
                onClick={handleGetOtpClick}
                className={`${
                  validPhone ? "bg-primary" : "bg-[#FFBEA9]"
                } absolute z-[2] top-0 right-0 text-[12px] px-4 py-2 text-white rounded-lg flex items-center justify-center`}
              >
                Send OTP
              </button>
            </PhoneNumberInput>

            {showOtpInput && (
              <div class="form-input relative">
                <input
                  className="relative z-[1]"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="OTP"
                  id="signin-otp"
                />
                <label
                  className="text-thamarblack pointer-events-none relative z-[1] font-medium"
                  for="signin-otp"
                >
                  Enter OTP
                </label>
              </div>
            )}

            {showReferCodeInput ? (
              <div class="form-input relative">
                <div
                  onClick={() => setShowReferCodeInput(false)}
                  className="absolute z-[3] cursor-pointer top-3 right-0"
                >
                  <DeleteIcon />
                </div>
                <input
                  className="relative z-[1]"
                  type="text"
                  required
                  placeholder="Refer Code"
                  id="signin-code"
                />
                <label
                  className="text-thamarblack pointer-events-none relative z-[1] font-medium"
                  for="signin-code"
                >
                  Refer Code
                </label>
              </div>
            ) : (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-[#acacac] underline font-bold text-[12px]"
                  onClick={handleReferCodeClick}
                >
                  Refer Code
                </button>
              </div>
            )}

            <button
              disabled={!validOtp}
              type="submit"
              className={`${
                validOtp ? "bg-primary " : "bg-[#FFBEA9]"
              } w-full py-3 text-white rounded-lg`}
            >
              Continue
            </button>

            <p className="text-center text-[#787878] text-[13px]">
              By clicking continue, You are agreed to our terms and condition
              and privacy policy
            </p>
          </div>
        </div>
      </form>
      {otpSentMessage && <SentMessageBox />}
    </>
  );
};

export default SignUpForm;
