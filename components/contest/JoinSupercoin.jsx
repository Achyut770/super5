import Link from "next/link";
import React from "react";

const JoinSupercoin = () => {
  return (
    <div className="max-w-[430px] mt-3 px-[10px] mx-auto w-full">
      <div className="w-full bg-white p-[10px] shadow-md rounded-[16px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col pl-[38px] gap-1">
            <h2 className="text-[#181818] leading-[1] font-bold text-[24px]">
              Win iPhone 15
            </h2>
            <p className="text-[#787878] text-[12px]">Create up to 20 Teams*</p>
          </div>
          <div className=" grow flex justify-center">
            <img src="/img/contest/mobile.png" className="w-[70px]" />
          </div>
        </div>

        <div className="mt-[10px]">
          <Link
            href="/prediction"
            className="w-full flex justify-center items-center rounded-full text-center h-[50px] bg-[#28A33C] text-white text-[15px] font-bold"
          >
            Join 10 Super coins
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinSupercoin;
