import Link from "next/link";
import React from "react";

const ContestHeader = () => {
  return (
    <div className="max-w-[430px] relative h-[70px] flex flex-col justify-center gap-[4px] mx-auto w-full">
      <div className="absolute top-[22px] left-[10px]">
        <Link href="/">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2L3 14.4138M3 14.4138L15 26M3 14.4138H27"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </Link>
      </div>
      <h2 className="text-[20px] leading-[1] text-center text-white font-bold">
        RR vs KKR
      </h2>
      <p className="text-white leading-[1] text-center text-[14px]">
        Starts in <span className="font-semibold">1D : 18H:28M:15S</span>
      </p>
    </div>
  );
};

export default ContestHeader;
