import Link from "next/link";
import React from "react";

const ContestHeader = ({ data }) => {
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
        {data.team_Q1} vs {data.team_Q2}
      </h2>
      {data.status === "Upcoming" ? (
        <p className="text-white leading-[1] text-center text-[14px]">
          Starts in{" "}
          <span className="font-semibold">
            {data?.time?.time}
            &nbsp;
            {data?.time?.date}
          </span>
        </p>
      ) : (
        <p className="text-white  text-center text-[14px]"> {data.status}</p>
      )}
    </div>
  );
};

export default ContestHeader;
