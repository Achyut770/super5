import React from "react";

const SentMessageBox = () => {
  return (
    <div className="w-full z-[100] bottom-0 left-0 fixed mx-auto flex justify-center items-center">
      <div className=" bg-primary max-w-[430px] p-2 w-full">
        <h2 className="text-[12px] text-white font-medium">
          OTP has been sent to your mobile number
        </h2>
      </div>
    </div>
  );
};

export default SentMessageBox;
