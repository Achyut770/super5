import Link from "next/link";
import React from "react";

const HowToPlayHeader = () => {
  return (
    <div className="h-[70px] px-[10px] sticky z-[101] top-0 flex justify-center items-center w-full">
      <div class="absolute top-[22px] left-[10px]">
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
        How to Play
      </h2>
    </div>
  );
};

export default HowToPlayHeader;
