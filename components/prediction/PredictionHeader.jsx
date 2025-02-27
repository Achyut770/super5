import Link from "next/link";
import React from "react";

const PredictionHeader = () => {
  return (
    <div className="max-w-[430px] relative h-[70px] flex flex-col justify-center gap-[4px] mx-auto w-full">
      <div className="absolute top-[22px] left-[10px]">
        <Link href="/contest/1">
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
        RCB vs CSK
      </h2>
      <p className="text-white leading-[1] text-center text-[14px]">
        Starts in 24 hours 19 minutes
      </p>
    </div>
  );
};

export default PredictionHeader;
