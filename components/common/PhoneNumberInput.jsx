import React from "react";

const PhoneNumberInput = ({ signup, children, phone, setPhone }) => {
  return (
    <div class="form-input number-input relative">
      <input
        name="number"
        value={phone}
        type="numnber"
        className="relative leading-[16px] pl-[26px]"
        onChange={(e) => setPhone(e.target.value)}
        required
        placeholder="Phone Number"
        id="login-number"
      />

      <label
        className="text-thamarblack pointer-events-none relative z-[1] font-medium"
        for="login-number"
      >
        Phone Number
      </label>
      <span
        className={`absolute leading-[16px] text-[16px] pointer-events-none left-0 ${
          signup ? "bottom-[16px]" : "bottom-[16px]"
        }`}
      >
        +91
      </span>
      {children}
    </div>
  );
};

export default PhoneNumberInput;
