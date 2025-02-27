import React from "react";

const MatchTime = ({ children }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[131px] flex items-center justify-center bg-[#ECF3FE] rounded-[7px] h-[32px] ">
        {children}
      </div>
      <div className="text-black text-center text-[12px]">08:00 PM</div>
    </div>
  );
};

export default MatchTime;
